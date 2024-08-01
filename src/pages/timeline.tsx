import { Subtitle } from '../components/subtitle';
import {
  TimeObject,
  type TimeObjectType,
} from '../components/timeline/timeOject';
import { CVEducationData } from '../data/cv/cvEducationData';
import { CVJobsData } from '../data/cv/cvJobsData';
import { CvVoluntaryWorkData } from '../data/cv/cvVoluntaryWorkData';
import { projects } from '../data/projects/projects';
import { type YearMonth } from '../types';

export const Timeline: React.FC = () => {
  const educationData = CVEducationData.map((education) => ({
    ...education,
    id: education.degree + education.institution,
    title: `${education.degree} in ${education.fieldOfStudy} at ${education.institution}`,
    content: education.longDescription ?? education.shortDescription,
    type: 'education' as TimeObjectType,
  }));

  const jobData = CVJobsData.map((work) => ({
    ...work,
    id: work.company + work.jobTitle,
    title: `${work.jobTitle} at ${work.company}`,
    content: work.longDescription ?? work.shortDescription,
    type: 'work' as TimeObjectType,
  }));

  const volunteerData = CvVoluntaryWorkData.map((work) => ({
    ...work,
    id: work.institution + work.position,
    title: `${work.position} at ${work.institution}`,
    content: work.longDescription ?? work.shortDescription,
    type: 'volunteer' as TimeObjectType,
  }));

  const projectData = projects.map((project) => ({
    ...project,
    id: project.title,
    content: project.shortDescription,
    type: 'project' as TimeObjectType,
  }));

  const otherData = [
    {
      id: 1,
      title: 'Finished my Bachelor degree in Informatics',
      startTime: { year: 2024, month: 6, day: 1 } satisfies YearMonth,
      type: 'other' as TimeObjectType,
    },
    {
      id: 2,
      title: 'Moved from Bergen to Trondheim to begin my studies at NTNU',
      startTime: { year: 2021, month: 7 } satisfies YearMonth,
      type: 'other' as TimeObjectType,
    },
    {
      id: 3,
      title: 'Finished my general academic competence at Lambertseter VGS',
      startTime: { year: 2019, month: 6 } satisfies YearMonth,
      type: 'other' as TimeObjectType,
    },
    {
      id: 4,
      title: 'Exchange year in Rome, Italy',
      startTime: { year: 2024, month: 9 } satisfies YearMonth,
      type: 'other' as TimeObjectType,
    },
  ];

  const mergedData = [
    ...educationData,
    ...jobData,
    ...volunteerData,
    ...projectData,
    ...otherData,
  ].sort((x, y) => {
    const yearDiff = y.startTime.year - x.startTime.year;
    if (yearDiff !== 0) {
      return yearDiff;
    }
    const monthDiff = y.startTime.month - x.startTime.month;
    if (monthDiff !== 0) {
      return monthDiff;
    }
    return y.startTime.day ? y.startTime.day - (x.startTime.day ?? 32) : 0;
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-0">
      <Subtitle subtitle="timeline" />
      <p className="mt-8">
        This is an effort to create a visual timeline of things I have done in
        my life. It is a mix of education, work, voluntary work, projects, and
        other things that I have done. The elements are sorted by start date.
      </p>
      <p className="my-4 border-l-4 border-gray-500 pl-2 text-sm text-gray-500">
        Select an element to read more details
      </p>
      <div className="relative mt-8">
        <div className="absolute inset-0 ml-4 flex md:ml-0 md:justify-center">
          <div className="w-1 bg-gray-200"></div>
        </div>
        <div className="space-y-8">
          {mergedData.map((item, index) => (
            <TimeObject {...item} index={index} key={item.id} />
          ))}
        </div>
      </div>
      <p className="mt-16 text-center text-sm text-gray-500">
        Still more to come ...
      </p>
    </div>
  );
};
