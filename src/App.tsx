import { Route, Routes } from 'react-router-dom';
import { RouteKeys } from '@/constants';
import { LayoutPage, UnknownPage } from '@/shared';
import { PodcastsPage } from '@/features/podcasts';
import { PodcastDetailsPage } from '@/features/detailPodcast';
import {
  PodcastDetailsComponent,
  PodcastEpisodeComponent,
} from '@/features/detailPodcast/components';

function App() {
  return (
    <Routes>
      <Route path={RouteKeys.base} element={<LayoutPage />}>
        <Route index element={<PodcastsPage />} />
        <Route path={RouteKeys.podcastDetails} element={<PodcastDetailsPage />}>
          <Route index element={<PodcastDetailsComponent />} />
          <Route path={RouteKeys.episodeDetails} element={<PodcastEpisodeComponent />} />
        </Route>
        <Route path="*" element={<UnknownPage />} />
      </Route>
    </Routes>
  );
}

export default App;
