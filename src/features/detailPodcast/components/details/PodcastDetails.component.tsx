import { useCustomOutletContext } from '@/shared/hooks';
import type { ContextPodcastEpisodes } from '../../types/contextPodcastDetails';
import EpisodeTableComponent from '../episodesTable/EpisodesTable.component';
import TotalEpisodesComponent from '../totalEpisodes/TotalEpisodes.component';

const PodcastDetailsComponent = () => {
  const { episodes } = useCustomOutletContext<ContextPodcastEpisodes>();

  return (
    <div className="w-8/12 justify-end">
      <TotalEpisodesComponent total={episodes.length} />
      <EpisodeTableComponent episodes={episodes} />
    </div>
  );
};

export default PodcastDetailsComponent;
