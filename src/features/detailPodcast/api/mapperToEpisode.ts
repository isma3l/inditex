import Parser from 'rss-parser';
import { EpisodeInterface } from '@/models';
import { formatDate } from '@/util';

export const mapperRssToEpisode = (
  item: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  } & Parser.Item
): EpisodeInterface => {
  return {
    id: item.guid ?? '',
    title: item.title ?? '',
    date: formatDate(item.pubDate ?? ''),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    duration: item.itunes.duration as string,
    description: item.content ?? '',
    audioUrl: item.enclosure?.url ?? '',
  };
};
