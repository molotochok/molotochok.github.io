import { ChipGroup } from '@models/chip-group.model';
import { Media } from '@models/media.model';
import { Image } from '@models/image.model';

export const title = 'Draw on Time';

export const itchioLink = 'https://molotochok.itch.io/draw-on-time';

export const i18nKeys = {
  play: 'play',
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
    texts: ['Godot', 'GDScript']
  }
];

const imageAddressTemplate = (index: number) => `assets/images/draw-on-time/screenshots/${index}.png`;
const mediaWidth = 750;
const mediaHeight = 422;
export const mediaList: Media[] = [
  ...[...Array(8).keys()].map(n => new Image(imageAddressTemplate(n + 1), mediaWidth, mediaHeight))
];
