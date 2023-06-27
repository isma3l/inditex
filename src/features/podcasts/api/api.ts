import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PodcastKeys, PodcastsResponse } from './types';
import { LocalDataInterface } from '@/shared';
import { PodcastInterface } from '@/models';

export const PODCAST_API_REDUCER_KEY = 'podcastApi';

export const podcastsApi = createApi({
  reducerPath: PODCAST_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server-proxy.vercel.app/api?url=https://itunes.apple.com/',
  }),
  endpoints: (builder) => ({
    getPodcasts: builder.query<LocalDataInterface<PodcastInterface[]>, void>({
      query: () => `us/rss/toppodcasts/limit=100/genre=1310/json`,
      transformResponse: (response: PodcastsResponse): LocalDataInterface<PodcastInterface[]> => {
        const podcasts: PodcastInterface[] = response.feed.entry.map((podcast) => ({
          id: podcast.id.attributes[PodcastKeys.id],
          title: podcast[PodcastKeys.title].label,
          author: podcast[PodcastKeys.author].label,
          urlImage: podcast[PodcastKeys.urlImage][2].label,
        }));

        const data: LocalDataInterface<PodcastInterface[]> = {
          data: podcasts,
          previousTimeStamp: Date.now(),
        };

        return data;
      },
    }),
  }),
});

export const { useGetPodcastsQuery } = podcastsApi;
