import Computas from '../../img/cv/computas.png';
import ForsvaretLogo from '../../img/cv/forsvaret.jpg';
import Havsport from '../../img/cv/havsport.svg';
import NLS from '../../img/cv/nls.jpeg';
import NTNU from '../../img/cv/ntnu.png';
import Skatteetaten from '../../img/cv/skatteetaten.jpg';
import { type CvJob } from '../../types';

export const CVJobsData: CvJob[] = [
  {
    jobTitle: 'Scientific Assistant - IT2805, Web technologies',
    company: 'NTNU',
    startTime: { year: 2023, month: 8 },
    endTime: { year: 2023, month: 12 },
    longDescription:
      'As a scientific assistant, I am responsible for assisting the professor in the course for the semester. This includes preparing and holding exercise lectures, as well as preparing and coordinating grading of poject- and individual assignments. My main task is to facilitate the project assignment, where the students are going to develop a web application in groups. Course: IT2805, Web technologies (WebTek).',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
    readMoreURL: 'https://www.ntnu.edu/studies/courses/IT2805',
  },
  {
    jobTitle: 'Summer Intern - Web developer',
    company: 'Norwegian Tax Administration',
    startTime: { year: 2023, month: 6 },
    endTime: { year: 2023, month: 8 },
    longDescription:
      'The summer project consisted of developing new services for Min Side at Skattetaten.no, which will replace some of the current solutions in Altinn. In the project, I participated as a member of the Min side team as a front-end developer and took part in real development tasks that are planned for production in autumn 2023.',
    logo: Skatteetaten,
    location: 'Oslo',
    href: 'https://www.ntnu.edu/',
  },
  {
    jobTitle: 'Summer Intern',
    company: 'Computas',
    startTime: { year: 2024, month: 6 },
    endTime: { year: 2024, month: 7 },
    longDescription:
      'Summer internship at Computas. Developed a Chatbot for internal use for TV-aksjonen based on RAG with Azure Cloud Services.',
    logo: Computas,
    location: 'Oslo',
    href: 'https://www.computas.com/',
  },
  {
    jobTitle: 'Teaching Assistant - TDT4100, OOP',
    company: 'NTNU',
    startTime: { year: 2023, month: 1 },
    endTime: { year: 2024, month: 6 },
    longDescription:
      'As a teaching assistant, I was responsible for helping students with their studies. This includes answering questions, providing feedback on assignments, and assisting and grading project assignments. Course: TDT4100, Object oriented programming (OOP)',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
    readMoreURL: 'https://www.ntnu.edu/studies/courses/TDT4100',
  },
  {
    jobTitle: 'Teaching Assistant - TDT4180, Human–Computer Interaction',
    company: 'NTNU',
    startTime: { year: 2024, month: 1 },
    endTime: { year: 2024, month: 6 },
    longDescription:
      'As a teaching assistant, I was responsible for helping students with their deliverables in the course. This included answering questions about the tasks. Mainly giving feedback on drafts as part of the final report in the course.',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
    readMoreURL: 'https://www.ntnu.edu/studies/courses/TDT4180',
  },
  {
    jobTitle: 'Coordinator of programming competitions',
    company: 'NTNU',
    startTime: { year: 2023, month: 3 },
    endTime: { year: 2024, month: 6 },
    longDescription:
      'As a coordinator of programming competitions, I am responsible for organizing and running programming competitions for students at NTNU. Hosting Nordic Collegiate Programming Contest (NCPC) and IDI Open. ',
    logo: NTNU,
    location: 'Trondheim',
    href: 'https://www.ntnu.edu/',
  },
  {
    jobTitle: 'Webshop Maintainer and Developer',
    company: 'Havsport Diving center AS',
    startTime: { year: 2022, month: 1 },
    longDescription:
      "As part of my job at Havsport Diving Center AS, I was responsible for maintaining and developing the company's webshop. This involved updating and adding new products, as well as making price adjustments based on market conditions. I worked to ensure that the webshop was user-friendly and provided a smooth online shopping experience for our customers. Overall, my role was critical in maintaining the online presence and success of Havsport Diving Center AS.",
    logo: Havsport,
    location: 'Trondheim',
    href: 'https://havsport.com/',
    readMoreURL: 'https://havsport.com/',
  },
  {
    jobTitle: 'Lifeguard',
    company: 'Norwegian Lifeguard Association',
    startTime: { year: 2022, month: 6 },
    endTime: { year: 2022, month: 8 },
    longDescription:
      'Summer job as lifeguard at the public beaches during the summer season in Oslo. Lifeguarding and first aid for the visitors at the beach. Preventing accidents and helping people in need, both in and out of the water. Internationally certified lifeguard.',
    logo: NLS,
    location: 'Oslo',
    href: 'https://www.livredning.no/',
    readMoreURL: 'https://www.livredning.no/nls-strandlivredder',
  },
  {
    jobTitle: 'Diving Instructor',
    company: 'The Norwegain Naval Diving School',
    startTime: { year: 2020, month: 7 },
    endTime: { year: 2021, month: 7 },
    longDescription:
      'As a diving instructor for the Royal Norwegian Navy, I was responsible for teaching and training a wide range of diving skills to members of the Norwegian Armed Forces. This included providing instruction in various diving techniques, as well as teaching safety protocols and emergency procedures. I worked with divers of all levels, from beginners to experienced professionals. In addition to conducting in-water training, I participated in the development of the instructional materials and lesson plans, and assisted in the maintenance and upkeep of diving equipment. Overall, my role was to ensure that the Norwegian Armed Forces had highly skilled and proficient divers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/',
  },
  {
    jobTitle: 'Shipdiver',
    company: 'The Norwegain Naval Diving School',
    startTime: { year: 2019, month: 7 },
    endTime: { year: 2020, month: 7 },
    longDescription:
      'Served as private as shipdiver for the Royal Norwegian Navy. Helping with maintanance and as instructor at the diving school. Teaching and training divers with fundamental skills for becoming shipdivers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/forstegangstjeneste/tjenesteguiden/logistikk-transport-og-samband/batoperator-og-skipsdykker',
    readMoreURL:
      'https://www.forsvaret.no/forstegangstjeneste/tjenesteguiden/logistikk-transport-og-samband/batoperator-og-skipsdykker',
  },
];
