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
    id: education.degree,
    title: `${education.degree} in ${education.fieldOfStudy} at ${education.institution}`,
    content: education.longDescription ?? education.shortDescription,
    startTime: education.startTime,
    endTime: education.endTime,
    type: 'education' as TimeObjectType,
  }));

  const jobData = CVJobsData.map((work) => ({
    id: work.company,
    title: `${work.jobTitle} at ${work.company}`,
    content: work.longDescription ?? work.shortDescription,
    startTime: work.startTime,
    endTime: work.endTime,
    type: 'work' as TimeObjectType,
  }));

  const volunteerData = CvVoluntaryWorkData.map((work) => ({
    id: work.institution + work.position,
    title: `${work.position} at ${work.institution}`,
    content: work.longDescription ?? work.shortDescription,
    startTime: work.startTime,
    endTime: work.endTime,
    type: 'volunteer' as TimeObjectType,
  }));

  const projectData = projects.map((project) => ({
    id: project.title,
    title: project.title,
    content: project.shortDescription,
    startTime: project.startTime,
    endTime: project.endTime,
    type: 'project' as TimeObjectType,
  }));

  const otherData = [
    {
      id: 1,
      title: 'Finished my Bachelor in Informatics',
      content:
        'Finished with my three years at my Bachelor Degree in informatics at NTNU',
      startTime: { year: 2024, month: 6 } satisfies YearMonth,
      type: 'other' as TimeObjectType,
    },
  ];

  const mergedData = [
    ...educationData,
    ...jobData,
    ...volunteerData,
    ...projectData,
    ...otherData,
  ].sort((a, b) => {
    const yearDiff = a.startTime.year - b.startTime.year;
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return a.startTime.month - b.startTime.month;
  });

  return (
    <div className="ml-auto mr-auto max-w-2xl px-4 py-0">
      <Subtitle subtitle="timeline" />
      <p className="mt-8">
        This is an effort to create a visual timeline of things I have done in
        my life. It is a mix of education, work, voluntary work, projects, and
        other things that I have done.
      </p>
      <p className="my-4 border-l-4 border-gray-500 pl-2 text-gray-500 text-sm">
        Select an element to read more details
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
