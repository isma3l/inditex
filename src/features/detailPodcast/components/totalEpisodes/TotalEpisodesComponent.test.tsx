import { render, screen } from '@testing-library/react';
import TotalEpisodesComponent from './TotalEpisodes.component';

describe('<TotalEpisodesComponent />', () => {
  test('render the total number of episodes', () => {
    const episodes = 5;

    render(<TotalEpisodesComponent total={episodes} />);
    expect(screen.getByText(/Episodes/i)).toHaveTextContent(`Episodes: ${episodes}`);
  });
});
