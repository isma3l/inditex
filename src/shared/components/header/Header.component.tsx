import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComponent from '../loader/Loader.component';
import { selectIsLoadingPodcast } from '@/features/podcasts';
import { selectIsLoadingDetails } from '@/features/detailPodcast';

const HeaderComponent = () => {
  const isLoadingPodcast = useSelector(selectIsLoadingPodcast);
  const isLoadingPodcastDetail = useSelector(selectIsLoadingDetails);

  const isLoading = isLoadingPodcast || isLoadingPodcastDetail;

  return (
    <div className="border-b-2 border-gray-300 py-3 flex justify-between">
      <Link className="text-3xl font-semibold text-sky-600" to="/">
        Podcaster
      </Link>
      {isLoading && <LoaderComponent />}
    </div>
  );
};

export default HeaderComponent;
//      // {state.loading && <LoaderComponent />}
