import { useParams } from 'react-router-dom';
import { useCustomOutletContext } from '@/shared/hooks';
import type { ContextPodcastEpisodes } from '../../types/contextPodcastDetails';
import AudioControlComponent from '../audioControl/AudioControl.component';

const PodcastEpisodeComponent = () => {
  const urlParams = useParams();
  const { episodes } = useCustomOutletContext<ContextPodcastEpisodes>();

  const episode = episodes.find((ep) => ep.id === urlParams.episodeId);

  if (episode === undefined) return null;

  return (
    <div className="w-8/12 justify-end">
      <div className="px-6 py-5 border border-gray-100 rounded-sm shadow-lg">
        <div className="border-b-2 border-gray-200 pb-4">
          <h2 className="text-xl font-bold" aria-label="title">
            {episode.title}
          </h2>
          <h3
            className="mt-2 italic font-normal text-gray-600"
            aria-label="description"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </div>
        <AudioControlComponent url={episode.audioUrl} />
      </div>
    </div>
  );
};

export default PodcastEpisodeComponent;
