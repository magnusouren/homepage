import LVGS from '../../img/cv/lvgs.jpg';
import NTNU from '../../img/cv/ntnu.png';
import { type CvEducation } from '../../types';

export const CVEducationData: CvEducation[] = [
  {
    degree: 'Master of Science in Informatics - Software Engineering',
    shortDescription: 'Starting my master degree in informatics at NTNU.',
    fieldOfStudy: 'Informatics',
    institution: 'NTNU',
    location: 'Trondheim',
    logo: NTNU,
    startTime: { year: 2024, month: 8 },
    longDescription: `I am starting my master degree in informatics at NTNU in August 2024. The master program is a 2-year program where I will specialize in software engineering. I am looking forward to learning more about software development and software architecture, and to continue my studies in informatics.`,
  },
  {
    degree: 'Bachelor in Informatics',
    shortDescription: 'Completed a 3-year bachelor degree in informatics.',
    fieldOfStudy: 'Informatics',
    institution: 'NTNU',
    location: 'Trondheim',
    logo: NTNU,
    startTime: { year: 2021, month: 8 },
    endTime: { year: 2024, month: 6 },
    longDescription: `I hold a Bachelors Degree in Informatics from NTNU, where I acquired knowledge in programming and software development. My studies covered the fundamental workings and architecture of computers, a deeper understanding of algorithms and data structures, along with different courses within technology. Optional courses I have included in the degree: Ethical Hacking and Penetration Testing, Big Data, Web Development, Introduction to AI and Digitalization. Read more about my bachelor project at the projects page.`,
  },
  {
    degree: 'General academic competence',
    shortDescription: '5,00 / 6,00 as final grade (without extra points)',
    startTime: { year: 2016, month: 8 },
    endTime: { year: 2019, month: 6 },
    fieldOfStudy: 'Natural sciences',
    institution: 'Lambertseter VGS',
    location: 'Oslo',
    logo: LVGS,
  },
];
