import { ListTile } from '@models/list-tile.model';

const baseImgPath = 'assets/images/about-me/';

const workExperienceI18nKeys = {
  title: 'position',
  subtitle1: 'company',
  subtitle2: 'location',
  description: 'description',
  useI18n: true
};

export const workExperiences: ListTile[] = [
  {
    key: 'data-art',
    logo: baseImgPath + 'work-experience/data-art.png',
    startDate: new Date('2021-02'),
    endDate: null,
    ...workExperienceI18nKeys
  },
  {
    key: 'redwerk',
    logo: baseImgPath + 'work-experience/redwerk.jpg',
    startDate: new Date('2020-02'),
    endDate: new Date('2021-02'),
    ...workExperienceI18nKeys
  },
  {
    key: 'pnn-soft',
    logo: baseImgPath + 'work-experience/pnn-soft.png',
    startDate: new Date('2019-03'),
    endDate: new Date('2020-01'),
    ...workExperienceI18nKeys
  },
  {
    key: 'freelance',
    logo: baseImgPath + 'work-experience/freelance.png',
    startDate: new Date('2018-10'),
    endDate: new Date('2019-01'),
    ...workExperienceI18nKeys
  },
];

const educationI18nKeys = {
  title: 'university',
  subtitle1: 'specialization',
  subtitle2: 'degree',
  description: 'description',
  useI18n: true
};

export const educations: ListTile[] = [
  {
    key: 'kpi',
    logo: baseImgPath + 'education/kpi.png',
    startDate: new Date('2016-09-01'),
    endDate: new Date('2021-01-01'),
    ...educationI18nKeys
  },
];
