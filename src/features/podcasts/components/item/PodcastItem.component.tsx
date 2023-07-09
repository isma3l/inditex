import { Link } from 'react-router-dom';
import { PodcastInterface } from '@/models';
import { RouteKeys } from '@/constants';

type PodcastItemComponentProps = {
  podcast: PodcastInterface;
};

const PodcastItemComponent = ({ podcast }: PodcastItemComponentProps) => {
  return (
    <Link to={RouteKeys.podcast(podcast.id)}>
      <div className="flex flex-col w-64 h-60">
        <div className="rounded-xl shadow-lg border border-gray-100 mt-16">
          <div className="relative h-20 w-full">
            <img
              className="absolute mx-auto h-36 rounded-full sm:mx-0 sm:shrink-0 -top-16 left-14"
              src={podcast.urlImage}
              alt="podcast image"
            />
          </div>
          <div className="relative mb-6">
            <div className="text-sm leading-5 font-medium text-black px-3 py-2 text-center uppercase">
              {podcast.title}
            </div>
            <p className="text-slate-500 text-center text-sm px-3">Author: {podcast.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PodcastItemComponent;
