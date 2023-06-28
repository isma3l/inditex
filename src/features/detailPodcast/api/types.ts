type PodcastDetailsResponse = {
  trackId: string;
  trackName: string;
  artistName: string;
  artworkUrl600: string;
  feedUrl: string;
};

export interface PodcastDetailDataResponse {
  results: PodcastDetailsResponse[];
}
