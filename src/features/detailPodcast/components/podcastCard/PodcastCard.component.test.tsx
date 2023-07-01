import { render, screen } from '@testing-library/react';
import PodcastCardComponent from './PodcastCard.component';

describe('<PodcastCardComponent />', () => {
  test('render the card with all its parameters ', () => {
    const urlImage = '600x600.jpg';
    const title = 'The Joe Budden Podcast';
    const author = 'The Joe Budden Network';
    const description = 'Tune into Joe Budden';

    render(
      <PodcastCardComponent
        title={title}
        author={author}
        urlImage={urlImage}
        description={description}
      />
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', urlImage);
    expect(screen.getByRole('heading', { name: 'title' })).toHaveTextContent(title);
    expect(screen.getByRole('heading', { name: 'author' })).toHaveTextContent(author);
    expect(screen.getByRole('heading', { name: 'content description' })).toHaveTextContent(
      description
    );
  });
});
