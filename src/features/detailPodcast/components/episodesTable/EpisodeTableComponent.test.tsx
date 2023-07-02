/* eslint-disable @typescript-eslint/unbound-method */
import { render, screen, within } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as ReactRouterDom from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import EpisodeTableComponent from './EpisodesTable.component';
import { EpisodeInterface } from '@/models';

describe('<EpisodeTableComponent />', () => {
  const episodes: EpisodeInterface[] = [
    {
      id: 'episode01',
      title: 'Episode 640 | Blacked',
      date: '28/6/2023',
      duration: '03:04:26',
      description: 'one description',
      audioUrl: 'one.mp3',
    },
    {
      id: 'episode02',
      title: 'Episode 639 | Fun But Ghetto',
      date: '11/5/2023',
      duration: '01:00:00',
      description: 'two description',
      audioUrl: 'two.mp3',
    },
  ];

  test('table shows 2 rows with data of the episodes and the header', () => {
    render(<EpisodeTableComponent episodes={episodes} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });
    // the header of the table is considered as a row, add 1
    expect(screen.getAllByRole('row')).toHaveLength(episodes.length + 1);
  });

  test('episodes are displayed correctly', () => {
    render(<EpisodeTableComponent episodes={episodes} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].title);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].date);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].duration);

    expect(screen.getAllByRole('row')[2]).toHaveTextContent(episodes[1].title);
    expect(screen.getAllByRole('row')[2]).toHaveTextContent(episodes[1].date);
    expect(screen.getAllByRole('row')[2]).toHaveTextContent(episodes[1].duration);
  });

  test('clicking on a title redirects to the episode details', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const podcastId = '123456';
    jest.spyOn(ReactRouterDom, 'useParams').mockReturnValue({ podcastId });

    render(
      <ReactRouterDom.Router location={history.location} navigator={history}>
        <EpisodeTableComponent episodes={episodes} />
      </ReactRouterDom.Router>
    );

    const row = screen.getAllByRole('row')[1];
    await userEvent.click(within(row).getByText(episodes[0].title));

    expect(history.push).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: `/podcast/${podcastId}/episode/${episodes[0].id}`,
      }),
      undefined,
      expect.objectContaining({})
    );
  });
});
