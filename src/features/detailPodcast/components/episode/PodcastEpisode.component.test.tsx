import { render, screen } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import * as hooks from '@/shared/hooks';
import PodcastEpisodeComponent from './PodcastEpisode.component';
import { EpisodeInterface } from '@/models';

describe('<PodcastEpisodeComponent />', () => {
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

  test('the details of a episode are rendered correctly', () => {
    jest.spyOn(hooks, 'useCustomOutletContext').mockReturnValue({ episodes });
    jest.spyOn(ReactRouterDom, 'useParams').mockReturnValue({ episodeId: episodes[0].id });

    render(<PodcastEpisodeComponent />);

    expect(screen.getByRole('heading', { name: 'title' })).toHaveTextContent(episodes[0].title);
    expect(screen.getByRole('heading', { name: 'description' })).toHaveTextContent(
      episodes[0].description
    );
    expect(screen.getByRole('application', { name: 'music player' })).toBeInTheDocument();
  });
});
