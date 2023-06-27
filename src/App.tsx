import { Route, Routes } from 'react-router-dom';
import { RouteKeys } from '@/constants';
import { LayoutPage, UnknownPage } from '@/shared';
import { PodcastsPage } from '@/features/podcasts';

function App() {
  return (
    <Routes>
      <Route path={RouteKeys.base} element={<LayoutPage />}>
        <Route index element={<PodcastsPage />} />
        <Route path="*" element={<UnknownPage />} />
      </Route>
    </Routes>
  );
}

export default App;
