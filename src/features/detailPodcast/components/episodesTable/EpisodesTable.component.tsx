import { Link, useParams } from 'react-router-dom';
import { RouteKeys } from '@/constants';
import { EpisodeInterface } from '@/models';

type EpisodeTableComponentProps = {
  episodes: EpisodeInterface[];
};

const EpisodeTableComponent = ({ episodes }: EpisodeTableComponentProps) => {
  const urlParams = useParams();

  return (
    <div className="px-6 py-2 border border-gray-100 rounded-xl shadow-lg">
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-slate-300">
            <th className="w-8/12 text-start pt-4 pb-2">Title</th>
            <th className="text-start pt-4 pb-2">Date</th>
            <th className="text-center pt-4 pb-2">Duration</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {episodes.map((episode) => {
            const episodeLink = RouteKeys.episode(urlParams.podcastId ?? '', episode.id);
            return (
              <tr
                className="odd:bg-white even:bg-slate-50 border-b border-slate-300"
                key={episode.id}
              >
                <td className="py-3  pr-px">
                  <Link className="text-sky-600 font-medium" to={episodeLink}>
                    {episode.title}
                  </Link>
                </td>
                <td className="py-3">{episode.date}</td>
                <td className="text-center py-3">{episode.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodeTableComponent;
