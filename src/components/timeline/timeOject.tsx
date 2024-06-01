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
  project: { tag: <Code />, color: 'bg-white' },
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
      className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`relative w-1/2 p-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
      >
        <div
          className={`${iconType[type].color} p-4 rounded-lg shadow-md border border-gray-200 mx-4 cursor-pointer relative hover:shadow-lg`}
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
          className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-5' : '-left-5'}  h-10 w-10 bg-white rounded-full border text-center border-gray-200 shadow-md flex items-center justify-center`}
        >
          {iconType[type].tag}
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-48 justify-start pl-4' : '-left-48 justify-end pr-4'}  h-8 w-40 flex items-center  text-gray-600 left`}
        >
          {monthToString(startTime.month)} {startTime.year}
        </div>
      </div>
    </div>
  );
};
