import { type FC } from 'react';

import { CvContent } from '../components/cv/cvContent';
import { Subtitle } from '../components/subtitle';
import { CVEducationData } from '../data/cv/cvEducationData';
import { CVJobsData } from '../data/cv/cvJobsData';
import { CvVoluntaryWorkData } from '../data/cv/cvVoluntaryWorkData';

export const CV: FC = () => (
  <div className="ml-auto mr-auto max-w-xl px-4">
    <Subtitle subtitle="curriculum vitae" />
    <div className="py-4">
      <h3 className="text-2xl font-bold border-b-2 mb-4">education:</h3>
      {CVEducationData.map((education) => (
        <CvContent
          {...education}
          header={`${education.degree} in ${education.fieldOfStudy}`}
          location={`${education.institution}, ${education.location}`}
          key={education.degree}
        />
      ))}
    </div>
    <div>
      <h3 className="text-2xl font-bold border-b-2 mb-4">
        working experience:
      </h3>
      {CVJobsData.sort(
        (job1, job2) => (job2.endYear ?? 3000) - (job1.endYear ?? 3000),
      ).map((job) => (
        <CvContent
          {...job}
          header={`${job.jobTitle} at ${job.company}`}
          key={job.jobTitle}
        />
      ))}
    </div>
    <div>
      <h3 className="text-2xl font-bold border-b-2 mb-4">voluntary work:</h3>
      {CvVoluntaryWorkData.map((voluntaryWork) => (
        <CvContent
          {...voluntaryWork}
          header={`${voluntaryWork.position} at ${voluntaryWork.institution}`}
          key={voluntaryWork.header}
        />
      ))}
    </div>
  </div>
);
