import { Subtitle } from '../components/subtitle';
import {
  TimeObject,
  type TimeObjectType,
} from '../components/timeline/timeOject';
import { CVEducationData } from '../data/cv/cvEducationData';
import { CVJobsData } from '../data/cv/cvJobsData';
import { CvVoluntaryWorkData } from '../data/cv/cvVoluntaryWorkData';

export const Timeline: React.FC = () => {
  const educationData = CVEducationData.map((education) => ({
    id: education.degree,
    title: `${education.degree} in ${education.fieldOfStudy} at ${education.institution}`,
    content: education.shortDescription,
    year: education.startYear,
    type: 'education' as TimeObjectType,
  }));

  const jobData = CVJobsData.map((work) => ({
    id: work.company,
    title: `${work.jobTitle} at ${work.company}`,
    content: work.shortDescription,
    year: work.startYear,
    type: 'work' as TimeObjectType,
  }));

  const volunteerData = CvVoluntaryWorkData.map((work) => ({
    id: work.institution + work.position,
    title: `${work.position} at ${work.institution}`,
    content: work.shortDescription,
    year: work.startYear,
    type: 'volunteer' as TimeObjectType,
  }));

  const mergedData = [...educationData, ...jobData, ...volunteerData].sort(
    (a, b) => a.year - b.year,
  );

  return (
    <div className="ml-auto mr-auto max-w-4xl px-4 py-0">
      <Subtitle subtitle="timeline" />
      <p className="my-8">
        This is an effort to create a visual timeline of the content in my CV.
        With some additional content.
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-1 bg-gray-200"></div>
        </div>
        <div className="space-y-8">
          {mergedData.map((item, index) => (
            <TimeObject {...item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
