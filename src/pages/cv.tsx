import { type FC } from 'react';

import { CvEducation } from '../components/cv/cvEducation';
import { CVJob } from '../components/cv/cvJob';
import { Subtitle } from '../components/subtitle';
import { CVEducationData } from '../data/cv/cvEducation';
import { CVJobsData } from '../data/cv/cvJobs';
import { CvVoluntaryWorkData } from '../data/cv/cvVoluntaryWorkData';

export const CV: FC = () => (
  <div className="ml-auto mr-auto max-w-xl px-4">
    <Subtitle subtitle="curriculum vitae" />
    <div className="py-4">
      <h3 className="text-2xl font-bold border-b-2 mb-4">education:</h3>
      {CVEducationData.map((education) => (
        <CvEducation {...education} key={education.degree} />
      ))}
    </div>
    <div>
      <h3 className="text-2xl font-bold border-b-2 mb-4">
        working experience:
      </h3>
      {CVJobsData.sort(
        (job1, job2) => (job2.endYear ?? 3000) - (job1.endYear ?? 3000),
      ).map((job) => (
        <CVJob {...job} key={job.jobTitle} />
      ))}
    </div>
    <div>
      <h3 className="text-2xl font-bold border-b-2 mb-4">voluntary work:</h3>
      {CvVoluntaryWorkData.map((voluntaryWork) => (
        <CVJob
          jobTitle={voluntaryWork.position}
          company={voluntaryWork.institution}
          startYear={voluntaryWork.startYear}
          endYear={voluntaryWork.endYear}
          startMonth={voluntaryWork.startMonth}
          endMonth={voluntaryWork.endMonth}
          jobDescription={voluntaryWork.description}
          logo={voluntaryWork.logo}
          location={voluntaryWork.location}
          key={voluntaryWork.position}
        />
      ))}
    </div>
  </div>
);
