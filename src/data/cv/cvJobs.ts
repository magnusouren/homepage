import { CVJobProps } from '../../components/cv/cvJob';
import ForsvaretLogo from '../../img/cv/forsvaret.jpg';
import Havsport from '../../img/cv/havsport.svg';
import NLS from '../../img/cv/nls.jpeg';
import NTNU from '../../img/cv/ntnu.png';
import Skatteetaten from '../../img/cv/skatteetaten.jpg';

export const CVJobsData: CVJobProps[] = [
  {
    jobTitle: 'Scientific assistant - IT2805 Web technologies',
    company: 'NTNU',
    startYear: 2023,
    startMonth: 'August',
    jobDescription:
      'As a scientific assistant, I am responsible for assisting the professor in the course for the semester. This includes preparing and holding exercise lectures, as well as preparing and coordinating grading of poject- and individual assignments. My main task is to facilitate the project assignment, where the students are going to develop a web application in groups. Course: IT2805, Web technologies (WebTek).',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.no/studier/emner/IT2805',
  },
  {
    jobTitle: 'Summer intern - Web developer',
    company: 'Norwegian Tax Administration',
    startYear: 2023,
    startMonth: 'June',
    endYear: 2023,
    endMonth: 'August',
    jobDescription:
      'The summer project consisted of developing new services for Min Side at Skattetaten.no, which will replace some of the current solutions in Altinn. In the project, I participated as a member of the Min side team as a front-end developer and took part in real development tasks that are planned for production in autumn 2023.',
    logo: Skatteetaten,
    location: 'Oslo',
    href: 'https://www.ntnu.no/studier/emner/IT2805',
  },
  {
    jobTitle: 'Learning assistant - TDT4100 OOP',
    company: 'NTNU',
    startYear: 2023,
    startMonth: 'January',
    endYear: 2023,
    endMonth: 'June',
    jobDescription:
      'As a learning assistant, I was responsible for helping students with their studies. This includes answering questions, providing feedback on assignments, and assisting and grading project assignments. Course: TDT4100, Object oriented programming (OOP)',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
  },
  {
    jobTitle: 'Coordinator of programming competitions',
    company: 'NTNU',
    startYear: 2023,
    startMonth: 'March',
    jobDescription:
      'As a coordinator of programming competitions, I am responsible for organizing and running programming competitions for students at NTNU. Hosting Nordic Collegiate Programming Contest (NCPC) and IDI Open. ',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
  },
  {
    jobTitle: 'Webshop maintainer and developer',
    company: 'Havsport Diving center AS',
    startYear: 2022,
    startMonth: 'January',
    jobDescription:
      "As part of my job at Havsport Diving Center AS, I was responsible for maintaining and developing the company's webshop. This involved updating and adding new products, as well as making price adjustments based on market conditions. I worked to ensure that the webshop was user-friendly and provided a smooth online shopping experience for our customers. Overall, my role was critical in maintaining the online presence and success of Havsport Diving Center AS.",
    logo: Havsport,
    location: 'Trondheim',
    href: 'https://havsport.no/',
  },
  {
    jobTitle: 'Lifeguard',
    company: 'Norwegian Lifeguard Association',
    startYear: 2022,
    startMonth: 'June',
    endYear: 2022,
    endMonth: 'August',
    jobDescription:
      'Summer job as lifeguard at the public beaches during the summer season in Oslo. Lifeguarding and first aid for the visitors at the beach. Preventing accidents and helping people in need, both in and out of the water. Internationally certified lifeguard.',
    logo: NLS,
    location: 'Oslo',
    href: 'https://www.livredning.no/',
  },
  {
    jobTitle: 'Diving instructor',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    startYear: 2020,
    startMonth: 'July',
    endYear: 2021,
    endMonth: 'July',
    jobDescription:
      'As a diving instructor for the Royal Norwegian Navy, I was responsible for teaching and training a wide range of diving skills to members of the Norwegian Armed Forces. This included providing instruction in various diving techniques, as well as teaching safety protocols and emergency procedures. I worked with divers of all levels, from beginners to experienced professionals. In addition to conducting in-water training, I participated in the development of the instructional materials and lesson plans, and assisted in the maintenance and upkeep of diving equipment. Overall, my role was to ensure that the Norwegian Armed Forces had highly skilled and proficient divers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/',
  },
  {
    jobTitle: 'Shipdiver',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    startYear: 2019,
    startMonth: 'July',
    endYear: 2020,
    endMonth: 'July',
    jobDescription:
      'Served as private as shipdiver for the Royal Norwegian Navy. Helping with maintanance and as instructor at the diving school. Teaching and training divers with fundamental skills for becoming shipdivers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/forstegangstjeneste/tjenesteguiden/logistikk-transport-og-samband/batoperator-og-skipsdykker',
  },
];
