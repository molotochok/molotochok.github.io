import { ChipGroup } from '@/app/models/chip-group.model';
import { Video } from '@models/video.model';

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

export const video: Video = {
  width: '750px',
  height: '422px',
  uri: 'https://www.youtube.com/embed/2AUuK1IAJPg'
};
