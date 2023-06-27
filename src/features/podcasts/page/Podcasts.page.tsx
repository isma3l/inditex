import { useEffect, useState } from 'react';
import { FilterComponent, HomeSqueletonComponent, PodcastListComponent } from '../components';
import { PodcastInterface } from '@/models';
import { MessageComponent } from '@/shared/components';
import { useGetPodcastsQuery } from '../api/api';
import { isLocalDataUpdated } from '@/util';

const PodcastsPage = () => {
  const [query, setQuery] = useState<string>('');
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastInterface[]>([]);
  const { data: result, isLoading, isError, refetch } = useGetPodcastsQuery();

  useEffect(() => {
    const validateData = async () => {
      if (result && isLocalDataUpdated(result.previousTimeStamp)) {
        setFilteredPodcasts(result.data);
      } else {
        await refetch();
      }
    };

    void (result && validateData());
  }, [result]);

  const handleChange = (value: string) => {
    const podcasts = result?.data ?? [];
    const filteredList: PodcastInterface[] = podcasts.filter((podcast: PodcastInterface) => {
      return (
        podcast.title.toLowerCase().search(value.toLowerCase()) !== -1 ||
        podcast.author.toLowerCase().search(value.toLowerCase()) !== -1
      );
    });
    setQuery(value);
    setFilteredPodcasts(filteredList || []);
  };

  return (
    <div className="flex flex-col py-6">
      {isError ? (
        <MessageComponent message={'There was an error in obtaining the podcast listing.'} />
      ) : isLoading ? (
        <HomeSqueletonComponent />
      ) : (
        <>
          <FilterComponent label={filteredPodcasts.length} value={query} onChange={handleChange} />
          <PodcastListComponent podcasts={filteredPodcasts} />
        </>
      )}
    </div>
  );
};

export default PodcastsPage;
