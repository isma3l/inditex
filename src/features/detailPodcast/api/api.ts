/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi } from '@reduxjs/toolkit/query/react';
import type { AxiosError } from 'axios';
import Parser from 'rss-parser';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { get } from '@/lib/api';
import { RootState } from '@/redux';
import { PodcastDetailDataResponse } from './types';
import { PodcastInterface, PodcastDetailsInterface, EpisodeInterface } from '@/models';
import { mapperRssToEpisode } from './mapperToEpisode';
import { LocalDataInterface } from '@/shared';

const DETAILS_PODCAST_API_REDUCER_KEY = 'detailsPostcastApi';

const podcastDetailsUrl = (podcastId: string) =>
  `?url=${process.env.REACT_APP_ITUNES_URL}/lookup?id=${podcastId}`;

const podcastEpisodesUrl = (feedUrl: string) => `${process.env.REACT_APP_BASE_URL}?url=${feedUrl}`;

const parser = new Parser();

const customBaseQuery = (): BaseQueryFn<string, unknown, unknown> => async (url) => {
  try {
    const data = await get<PodcastDetailDataResponse>(url);
    const podcastDetailsResponse = data.results[0];

    const dataRSS = await parser.parseURL(podcastEpisodesUrl(podcastDetailsResponse.feedUrl));
    const episodes: EpisodeInterface[] = dataRSS.items.map(mapperRssToEpisode);

    const podcast: PodcastInterface = {
      id: podcastDetailsResponse.trackId,
      title: podcastDetailsResponse.trackName,
      author: podcastDetailsResponse.artistName,
      urlImage: podcastDetailsResponse.artworkUrl600,
      description: dataRSS.description,
    };

    const podcastDetails: PodcastDetailsInterface = { podcast, episodes };
    return { data: podcastDetails };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const podcastDetailApi = createApi({
  reducerPath: DETAILS_PODCAST_API_REDUCER_KEY,
  baseQuery: customBaseQuery(),
  endpoints: (builder) => ({
    getDetailsPodcast: builder.query<LocalDataInterface<PodcastDetailsInterface>, string>({
      query: (podcastId) => podcastDetailsUrl(podcastId),
      transformResponse: (
        response: PodcastDetailsInterface
      ): LocalDataInterface<PodcastDetailsInterface> => {
        return {
          data: response,
          previousTimeStamp: Date.now(),
        };
      },
    }),
  }),
});

export const selectIsLoadingDetails = (state: RootState) =>
  Object.values(state.detailsPostcastApi.queries).some((query) => query?.status === 'pending');

export const { useGetDetailsPodcastQuery } = podcastDetailApi;
