import { CVJobProps } from '../components/cv/cvJob';
import ForsvaretLogo from '../img/cv/forsvaret.jpg';
import Havsport from '../img/cv/havsport.svg';
import NLS from '../img/cv/nls.jpeg';

export const CVJobs: CVJobProps[] = [
  {
    jobTitle: 'Webshop maintainer and developer',
    company: 'Havsport Diving center AS',
    duration: 'January 2022 - Present',
    jobDescription:
      "As part of my job at Havsport Diving Center AS, I was responsible for maintaining and developing the company's webshop. This involved updating and adding new products, as well as making price adjustments based on market conditions. I worked to ensure that the webshop was user-friendly and provided a smooth online shopping experience for our customers. Overall, my role was critical in maintaining the online presence and success of Havsport Diving Center AS.",
    logo: Havsport,
    location: 'Trondheim',
    href: 'https://havsport.no/',
  },
  {
    jobTitle: 'Lifeguard',
    company: 'Norwegian Lifeguard Association',
    duration: 'June 2022 - August 2022',
    jobDescription:
      'Summer job as lifeguard at the public beaches during the summer season in Oslo. Lifeguarding and first aid for the visitors at the beach. Preventing accidents and helping people in need, both in and out of the water. Internationally certified lifeguard.',
    logo: NLS,
    location: 'Oslo',
    href: 'https://www.livredning.no/',
  },
  {
    jobTitle: 'Diving instructor',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    duration: 'July 2021 - July 2022',
    jobDescription:
      'As a diving instructor for the Royal Norwegian Navy, I was responsible for teaching and training a wide range of diving skills to members of the Norwegian Armed Forces. This included providing instruction in various diving techniques, as well as teaching safety protocols and emergency procedures. I worked with divers of all levels, from beginners to experienced professionals. In addition to conducting in-water training, I participated in the development of the instructional materials and lesson plans, and assisted in the maintenance and upkeep of diving equipment. Overall, my role was to ensure that the Norwegian Armed Forces had highly skilled and proficient divers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/',
  },
  {
    jobTitle: 'Shipdiver',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    duration: 'July 2019 - July 2021',
    jobDescription:
      'Served as private as shipdiver for the Royal Norwegian Navy. Helping with maintanance and as instructor at the diving school. Teaching and training divers with fundamental skills for becoming shipdivers.',
    logo: ForsvaretLogo,
    location: 'Bergen',
    href: 'https://www.forsvaret.no/forstegangstjeneste/tjenesteguiden/logistikk-transport-og-samband/batoperator-og-skipsdykker',
  },
];
