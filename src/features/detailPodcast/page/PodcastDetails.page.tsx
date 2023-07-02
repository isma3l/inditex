import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  PodcastCardComponent,
  DetailsSqueletonComponent,
} from '@/features/detailPodcast/components';
import { PodcastDetailsInterface } from '@/models';
import { MessageComponent } from '@/shared/components';
import { useGetDetailsPodcastQuery } from '../api/api';
import { isLocalDataUpdated } from '@/util';

const podcastDetailEmpty: PodcastDetailsInterface = {
  episodes: [],
  podcast: {
    id: '',
    title: '',
    author: '',
    urlImage: '',
  },
};

const PodcastDetailsPage = () => {
  const urlParams = useParams();
  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useGetDetailsPodcastQuery(urlParams.podcastId ?? '');

  useEffect(() => {
    const validateData = async () => {
      if (result && !isLocalDataUpdated(result.previousTimeStamp)) {
        await refetch();
      }
    };

    void (result && validateData());
  }, [result]);

  const { podcast } = result?.data ?? podcastDetailEmpty;

  return (
    <div className="flex py-6 justify-between">
      {isError ? (
        <MessageComponent message={'There was an error getting the detail of a podcast'} />
      ) : isLoading ? (
        <DetailsSqueletonComponent />
      ) : (
        <>
          <PodcastCardComponent
            title={podcast.title}
            author={podcast.author}
            urlImage={podcast.urlImage}
            description={podcast?.description ?? ''}
          />
          <Outlet context={{ episodes: result?.data?.episodes ?? [] }} />
        </>
      )}
    </div>
  );
};

export default PodcastDetailsPage;
