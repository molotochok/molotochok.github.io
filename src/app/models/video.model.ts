import { Media } from './media.model';

export class Video extends Media {
  isVideo() {
    return true;
  }
}
