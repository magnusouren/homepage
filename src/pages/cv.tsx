import { CVJob } from '../components/cv/cvJob';
import { CVJobs } from '../data/cv';

export const CV = () => (
  <div className="ml-auto mr-auto max-w-xl p-4">
    <h2 className="text-4xl font-bold my-4">curriculum vitae</h2>
    <div className="py-4">
      <h3 className="text-2xl font-bold my-4 border-b-2">working experience:</h3>
      {CVJobs.map((job) => (
        <CVJob
          jobTitle={job.jobTitle}
          company={job.company}
          duration={job.duration}
          jobDescription={job.jobDescription}
          logo={job.logo}
          location={job.location}
          href={job.href}
        />
      ))}
    </div>
    <div className="py-4 border-gray-700">
      <h3 className="text-2xl font-bold border-b-2">education:</h3>
    </div>
  </div>
);
