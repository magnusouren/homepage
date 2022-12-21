import { CvEducation } from '../components/cv/cvEducation';
import { CVJob } from '../components/cv/cvJob';
import { Subtitle } from '../components/subtitle';
import { CVEducationData } from '../data/cv/cvEducation';
import { CVJobsData } from '../data/cv/cvJobs';

export const CV = () => (
  <div className="ml-auto mr-auto max-w-xl px-4">
    <Subtitle subtitle="curriculum vitae" />
    <div className="py-4">
      <h3 className="text-2xl font-bold border-b-2">education:</h3>
      {CVEducationData.map((education) => (
        <CvEducation
          degree={education.degree}
          description={education.description}
          fieldOfStudy={education.fieldOfStudy}
          institution={education.institution}
          location={education.location}
          logo={education.logo}
          startYear={education.startYear}
          endYear={education.endYear}
        />
      ))}
    </div>
    <div>
      <h3 className="text-2xl font-bold border-b-2">working experience:</h3>
      {CVJobsData.map((job) => (
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
  </div>
);
