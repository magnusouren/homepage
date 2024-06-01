import { type FC } from 'react';

export type TimeObjectType = 'education' | 'work' | 'volunteer' | 'other';

interface TimeObjectProps {
  year: number;
  content?: string;
  title: string;
  index: number;
  type: TimeObjectType;
}

const iconType = {
  education: { tag: 'E', color: 'bg-blue-100' },
  work: { tag: 'W', color: 'bg-green-100' },
  volunteer: { tag: 'V', color: 'bg-yellow-100' },
  other: { tag: 'O', color: 'bg-gray-100' },
};

export const TimeObject: FC<TimeObjectProps> = ({
  year: date,
  title,
  content,
  index,
  type,
}) => {
  return (
    <div
      className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`relative w-1/2 p-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
      >
        <div
          className={`${iconType[type].color} p-4 rounded-lg shadow-md border border-gray-200 mx-4`}
        >
          <p className="font-medium">{title}</p>
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'}  h-8 w-8 bg-white rounded-full border text-center border-gray-200 shadow-md flex items-center justify-center`}
        >
          {iconType[type].tag}
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-32' : '-left-32'}  h-8 w-32 text-center flex items-center justify-center text-gray-600`}
        >
          {date}
        </div>
      </div>
    </div>
  );
};
