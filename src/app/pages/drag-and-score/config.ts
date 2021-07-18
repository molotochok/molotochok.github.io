import { ChipGroup } from '@/app/models/chip-group.model';
import { Media } from '@models/media.model';
import { Video } from '@models/video.model';
import { Image } from '@models/image.model';

export const title = 'Drag And Score';

export const playStoreLink = 'https://play.google.com/store/apps/details?id=com.MKCompany.DragAndScore';

export const i18nKeys = {
  download: 'download',
  playOnline: 'play-online',
  technologies: {
    title: 'title'
  },
  description: {
    title: 'title',
    content: 'content'
  }
};

export const technologies: ChipGroup[] = [
  {
    group: '',
    texts: ['Unity', 'C#']
  }
];

const imageAddressTemplate = (index: number) => `assets/images/drag-and-score/screenshots/${index}.webp`;
export const mediaList: Media[] = [
  new Video('https://www.youtube.com/embed/2AUuK1IAJPg'),
  ...[...Array(8).keys()].map(n => new Image(imageAddressTemplate(n + 1)))
];
