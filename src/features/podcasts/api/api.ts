import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux';
import { PodcastKeys, PodcastsResponse } from './types';
import { LocalDataInterface } from '@/shared';
import { PodcastInterface } from '@/models';
import { SECONDS_IN_A_DAY } from '@/util';

export const PODCAST_API_REDUCER_KEY = 'podcastApi';
const QUERY_URL = 'us/rss/toppodcasts/limit=100/genre=1310/json';

export const podcastsApi = createApi({
  reducerPath: PODCAST_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    baseUrl: `${process.env.REACT_APP_BASE_URL}/?url=${process.env.REACT_APP_ITUNES_URL}`,
  }),
  endpoints: (builder) => ({
    getPodcasts: builder.query<LocalDataInterface<PodcastInterface[]>, void>({
      query: () => QUERY_URL,
      keepUnusedDataFor: SECONDS_IN_A_DAY,
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

export const selectIsLoadingPodcast = (state: RootState) =>
  Object.values(state.podcastApi.queries).some((query) => query?.status === 'pending');

export const { useGetPodcastsQuery } = podcastsApi;
