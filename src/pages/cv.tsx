import { type FC } from 'react';

import { CvContent } from '../components/cv/cvContent';
import { DownloadButton } from '../components/pdfDownload';
import { Subtitle } from '../components/subtitle';
import { CVEducationData } from '../data/cv/cvEducationData';
import { CVJobsData } from '../data/cv/cvJobsData';
import { CvVoluntaryWorkData } from '../data/cv/cvVoluntaryWorkData';

export const CV: FC = () => (
  <div className="mx-auto max-w-xl px-4">
    <Subtitle subtitle="curriculum vitae" />
    <div className="py-4">
      <h3 className="mb-4 border-b-2 text-2xl font-bold">education:</h3>
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
      <h3 className="mb-4 border-b-2 text-2xl font-bold">
        working experience:
      </h3>
      {CVJobsData.sort((x, y) => {
        if (y.endTime?.year === x.endTime?.year) {
          return (y.endTime?.month ?? 13) - (x.endTime?.month ?? 13);
        }
        return (y.endTime?.year ?? 3000) - (x.endTime?.year ?? 3000);
      }).map((job) => (
        <CvContent
          {...job}
          header={`${job.jobTitle} at ${job.company}`}
          key={job.jobTitle}
        />
      ))}
    </div>
    <div>
      <h3 className="mb-4 border-b-2 text-2xl font-bold">voluntary work:</h3>
      {CvVoluntaryWorkData.sort((x, y) => {
        if (y.endTime?.year === x.endTime?.year) {
          return (y.endTime?.month ?? 13) - (x.endTime?.month ?? 13);
        }
        return (y.endTime?.year ?? 3000) - (x.endTime?.year ?? 3000);
      }).map((voluntaryWork) => (
        <CvContent
          {...voluntaryWork}
          header={`${voluntaryWork.position} at ${voluntaryWork.institution}`}
          key={voluntaryWork.header}
        />
      ))}
    </div>

    <div>
      <hr className="mb-4 border-b-2 text-2xl font-bold"></hr>
      <DownloadButton fileUrl="https://raw.githubusercontent.com/magnusouren/homepage/main/public/CV.pdf" />
    </div>
  </div>
);
