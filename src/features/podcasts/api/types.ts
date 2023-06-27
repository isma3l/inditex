export enum PodcastKeys {
  id = 'im:id',
  author = 'im:artist',
  title = 'im:name',
  urlImage = 'im:image',
}

export interface PodcastsResponse {
  feed: {
    entry: {
      id: { attributes: { [PodcastKeys.id]: string } };
      [PodcastKeys.author]: { label: string };
      [PodcastKeys.title]: { label: string };
      [PodcastKeys.urlImage]: { label: string }[];
    }[];
  };
}
