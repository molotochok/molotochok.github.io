import { WorkExperience } from '@models/work-experience.model';

export const workExperiences: WorkExperience[] = [
  {
    key: 'data-art',
    companyLogo: 'assets/images/about-me/work-experience/data-art.png',
    company: 'DataArt',
    startDate: new Date('2021-02'),
    endDate: null,
  },
  {
    key: 'redwerk',
    companyLogo: 'assets/images/about-me/work-experience/redwerk.jpg',
    company: 'Redwerk',
    startDate: new Date('2020-02'),
    endDate: new Date('2021-02'),
  },
  {
    key: 'pnn-soft',
    companyLogo: 'assets/images/about-me/work-experience/pnn-soft.png',
    company: 'PNN Soft',
    startDate: new Date('2019-03'),
    endDate: new Date('2020-01'),
  },
  {
    key: 'freelance',
    companyLogo: 'assets/images/about-me/work-experience/freelance.png',
    company: 'Freelance',
    startDate: new Date('2018-10'),
    endDate: new Date('2019-01'),
  },
];
