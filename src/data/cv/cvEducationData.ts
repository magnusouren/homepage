import LVGS from '../../img/cv/lvgs.jpg';
import NTNU from '../../img/cv/ntnu.png';
import { type CvEducation } from '../../types';

export const CVEducationData: CvEducation[] = [
  {
    degree: 'Bachelor',
    shortDescription: 'Completed a 3-year bachelor degree in informatics.',
    fieldOfStudy: 'Informatics',
    institution: 'NTNU',
    location: 'Trondheim',
    logo: NTNU,
    startYear: 2021,
    endYear: 2024,
    longDescription: `I hold a Bachelors Degree in Informatics from NTNU, where I acquired knowledge in programming and software development. My studies covered the fundamental workings and architecture of computers, a deeper understanding of algorithms and data structures, along with different courses within technology. Optional courses I have included in the degree: Ethical Hacking and Penetration Testing, Big Data, Web Development, Introduction to AI and Digitalization. Read more about my bachelor project at the projects page.`,
  },
  {
    degree: 'General academic competence',
    shortDescription: '5,00 / 6,00 as final grade (without extra points)',
    endYear: 2019,
    fieldOfStudy: 'Natural sciences',
    institution: 'Lambertseter VGS',
    location: 'Oslo',
    logo: LVGS,
    startYear: 2016,
  },
];
