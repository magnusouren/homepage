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

const iconType = {
  education: { tag: <School />, color: 'bg-white' },
  work: { tag: <Work />, color: 'bg-white' },
  volunteer: { tag: <Group />, color: 'bg-white' },
  project: { tag: <Code />, color: 'bg-gray-200 text-black' },
  other: { tag: `🎉`, color: 'bg-white' },
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
      className={`flex items-center justify-end ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
    >
      <div
        className={`relative w-3/4 md:w-1/2 p-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
      >
        <div
          className={`${iconType[type].color} p-4 rounded-lg shadow-md border border-gray-200 mx-4 relative ${content ? 'cursor-pointer  hover:shadow-lg' : ''}`}
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <p className="font-medium text-sm">{title}</p>
          {showMore && content && (
            <div className="text-sm font-light mt-4">{content}</div>
          )}
          {showMore && type !== 'other' && (
            <div className="text-xs font-light mt-4">
              {monthToString(startTime.month)} {startTime.year} -{' '}
              {endTime ? `${monthToString(endTime.month)} ` : 'To date'}
              {endTime?.year ?? ''}
            </div>
          )}
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 -left-24  ${index % 2 === 0 ? 'md:left-auto md:-right-6' : 'md:-left-4'}  h-10 w-10 bg-white rounded-full border text-center border-gray-200 shadow-md flex items-center justify-center`}
        >
          {iconType[type].tag}
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 -left-12 w-16 md:w-32 text-center ${index % 2 === 0 ? 'md:-right-40 md:justify-start md:pl-4 md:left-auto' : 'md:-left-40 md:justify-end md:pr-4'}  h-8 w-40 flex items-center  text-gray-600 left`}
        >
          {monthToString(startTime.month)} {startTime.year}
        </div>
      </div>
    </div>
  );
};
