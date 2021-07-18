import { Media } from './media.model';

export class Image extends Media {
  isImage() {
    return true;
  }
}
