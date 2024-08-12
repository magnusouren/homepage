import { Code, Group, School, Work } from '@material-ui/icons';
import { type FC, useState } from 'react';

import { type YearMonth } from '../../types';
import { monthToString } from '../../utils/time';

export type TimeObjectType =
  | 'education'
  | 'work'
  | 'volunteer'
  | 'project'
  | 'other';

interface TimeObjectProps {
  startTime: YearMonth;
  endTime?: YearMonth;
  content?: string;
  title: string;
  index: number;
  type: TimeObjectType;
}

const objectType = {
  education: { icon: <School />, bgColor: 'bg-white' },
  work: { icon: <Work />, bgColor: 'bg-white' },
  volunteer: { icon: <Group />, bgColor: 'bg-white' },
  project: { icon: <Code />, bgColor: 'bg-gray-200 text-black' },
  other: { icon: `🎉`, bgColor: 'bg-white' },
};

export const TimeObject: FC<TimeObjectProps> = ({
  startTime,
  endTime,
  title,
  content,
  index,
  type,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-end ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
    >
      <div
        className={`w-11/12 p-4 md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'ml-8 md:text-left'}`}
      >
        <div
          className={`${objectType[type].bgColor} relative mx-4 rounded-lg border border-gray-200 p-4 shadow-md ${content ? 'cursor-pointer  hover:shadow-lg' : ''}`}
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <p className="mb-2 text-xs md:hidden">
            {monthToString(startTime.month)} {startTime.year}
          </p>
          <p className="text-sm font-medium">{title}</p>
          {showMore && content && (
            <div className="mt-4 text-sm font-light">{content}</div>
          )}
          {showMore && type !== 'other' && type !== 'project' && (
            <div className="mt-4 text-xs font-light">
              {monthToString(startTime.month)} {startTime.year} -{' '}
              {endTime ? `${monthToString(endTime.month)} ` : 'To date'}
              {endTime?.year ?? ''}
            </div>
          )}
        </div>
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'}  flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-center shadow-md md:-ml-5`}
        >
          {objectType[type].icon}
        </div>
        <div
          className={`absolute top-1/2 hidden -translate-y-1/2 md:block ${index % 2 === 0 ? 'pl-8 text-left md:left-1/2' : 'pr-8 text-right md:right-1/2'}  text-gray-600 `}
        >
          {monthToString(startTime.month)} {startTime.year}
        </div>
      </div>
    </div>
  );
};
