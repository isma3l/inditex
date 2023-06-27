import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PodcastsResponse } from './types';

export const PODCAST_API_REDUCER_KEY = 'podcastApi';

export const podcastsApi = createApi({
  reducerPath: PODCAST_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-proxy.vercel.app/api?url=https://itunes.apple.com/',
  }),
  endpoints: (builder) => ({
    getPodcasts: builder.query<PodcastsResponse, void>({
      query: () => `us/rss/toppodcasts/limit=100/genre=1310/json`,
    }),
  }),
});

export const { useGetPodcastsQuery } = podcastsApi;
