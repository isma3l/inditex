import { useCustomOutletContext } from '@/shared/hooks';
import { ContextPodcastDetails } from '../../types/contextPodcastDetails';
import EpisodeTableComponent from '../episodesTable/EpisodesTable.component';
import TotalEpisodesComponent from '../totalEpisodes/TotalEpisodes.component';

const PodcastDetailsComponent = () => {
  const { podcastDetails } = useCustomOutletContext<ContextPodcastDetails>();
  const episodes = podcastDetails?.episodes ?? [];

  return (
    <div className="w-8/12 justify-end">
      <TotalEpisodesComponent total={episodes.length} />
      <EpisodeTableComponent episodes={episodes} />
    </div>
  );
};

export default PodcastDetailsComponent;
