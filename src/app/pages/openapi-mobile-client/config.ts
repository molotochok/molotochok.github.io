import { ChipGroup } from '@models/chip-group.model';
import { Media } from '@models/media.model';
import { Image } from '@models/image.model';

export const title = 'OpenAPI Mobile Client';

export const playStoreLink = 'https://play.google.com/store/apps/details?id=com.MarkiianKarpaCompany.openapi_mobile_client';

export const i18nKeys = {
  download: 'download',
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
    texts: ['Flutter', 'Dart']
  }
];

const imageAddressTemplate = (index: number) => `assets/images/openapi-mobile-client/screenshots/${index}.jpg`;
const mediaWidth = 280;
const mediaHeight = 600;
export const mediaList: Media[] = [
  ...[...Array(12).keys()].map(n => new Image(imageAddressTemplate(n + 1), mediaWidth, mediaHeight))
];
