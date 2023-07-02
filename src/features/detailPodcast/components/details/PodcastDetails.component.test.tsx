import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from '@/shared/hooks';
import { EpisodeInterface } from '@/models';
import PodcastDetailsComponent from './PodcastDetails.component';

describe('<PodcastDetailsComponent />', () => {
  const episodes: EpisodeInterface[] = [
    {
      id: 'episode01',
      title: 'Episode 640 | Blacked',
      date: '28/6/2023',
      duration: '03:04:26',
      description: 'one description',
      audioUrl: 'one.mp3',
    },
  ];

  test('the parent component correctly renders its child components TotalEpisodesComponent and EpisodeTableComponent', () => {
    jest.spyOn(hooks, 'useCustomOutletContext').mockReturnValue({ episodes });

    render(<PodcastDetailsComponent />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(/Episodes/i)).toHaveTextContent(`Episodes: ${episodes.length}`);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].title);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].date);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent(episodes[0].duration);
  });
});
