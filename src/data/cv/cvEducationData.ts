import LVGS from '../../img/cv/lvgs.jpg';
import NTNU from '../../img/cv/ntnu.png';
import { type CvEducation } from '../../types';

export const CVEducationData: CvEducation[] = [
  {
    degree: 'Bachelor',
    shortDescription: 'Currently studying at the third year',
    fieldOfStudy: 'Informatics',
    institution: 'NTNU',
    location: 'Trondheim',
    logo: NTNU,
    startYear: 2021,
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
