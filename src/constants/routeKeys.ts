export const RouteKeys = {
  base: '/',
  podcastDetails: 'podcast/:podcastId',
  episodeDetails: 'episode/:episodeId',
  podcast: (podcastId: string) => `/podcast/${podcastId}`,
  episode: (podcastId: string, episodeId: string) => `/podcast/${podcastId}/episode/${episodeId}`,
};
