import { CVJob, CVJobProps } from '../components/cv/cvJob';
import ForsvaretLogo from '../img/cv/forsvaret.jpg';
import Havsport from '../img/cv/havsport.svg';
import NLS from '../img/cv/nls.jpeg';

const CVJobs: CVJobProps[] = [
  {
    jobTitle: 'Webshop maintainer and developer',
    company: 'Havsport Diving center AS',
    duration: 'January 2022 - Present',
    jobDescription: 'Maintaining and developing the webshop for Havsport Diving center AS.',
    logo: Havsport,
  },
  {
    jobTitle: 'Lifeguard',
    company: 'Norwegian Lifeguard Association',
    duration: 'June 2022 - August 2022',
    jobDescription: 'Summer jobb as lifeguard at the public beaches in Oslo.',
    logo: NLS,
  },
  {
    jobTitle: 'Diving instructor',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    duration: 'July 2021 - July 2022',
    jobDescription:
      'Dive instructor for the Royal Norwegian Navy. Teaching and training skills for all types of divers for the Norwegian Armed Forces.',
    logo: ForsvaretLogo,
  },
  {
    jobTitle: 'Shipdiver',
    company: 'The Norwegain Naval Diving School - Royal Norwegian Navy',
    duration: 'July 2019 - July 2021',
    jobDescription:
      'Served as private as shipdiver for the Royal Norwegian Navy. Helping with maintanance and as instructor at the diving school. Teaching and training divers with fundamental skills for becoming shipdivers.',
    logo: ForsvaretLogo,
  },
];

export const CV = () => (
  <div className="ml-auto mr-auto max-w-xl">
    <h2 className="text-4xl font-bold my-4">curriculum vitae</h2>
    <div className="py-4 border-b border-gray-700">
      <h3 className="text-2xl font-semibold">working experience</h3>
      {CVJobs.map((job) => (
        <CVJob
          jobTitle={job.jobTitle}
          company={job.company}
          duration={job.duration}
          jobDescription={job.jobDescription}
          logo={job.logo}
        />
      ))}
    </div>
    <div className="py-4 border-b border-gray-700">
      <h3 className="text-2xl font-semibold">education</h3>
    </div>
  </div>
);
