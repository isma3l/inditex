import { EpisodeInterface } from './Episode.interface';
import { PodcastInterface } from './Podcast.interface';

export interface PodcastDetailsInterface {
  podcast: PodcastInterface;
  episodes: EpisodeInterface[];
}
