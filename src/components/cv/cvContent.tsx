import { useState } from 'react';

import { type CVBase } from '../../types';
import { monthToString } from '../../utils/time';
import { ReadMoreButton } from '../readMoreButton';

export const CvContent = ({
  shortDescription,
  startTime,
  header,
  href = '',
  logo = '',
  location,
  longDescription: longerDescription,
  endTime,
  readMoreURL,
}: CVBase): JSX.Element => {
  const handleOnClick = (): void => {
    if (href !== '') window.open(href, '_blank');
  };
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <div>
          <h4 className="my-2 font-semibold">{header}</h4>
          <p className="my-2 text-gray-500">
            {location} | {monthToString(startTime.month)} {startTime.year} -{' '}
            {monthToString(endTime?.month ?? 0)} {endTime?.year ?? 'to date'}
          </p>
          <p className="my-2">{shortDescription}</p>
          {longerDescription && (
            <ReadMoreButton
              displayDescription={displayDescription}
              setDisplayDescription={setDisplayDescription}
            />
          )}
        </div>
        {logo && (
          <img
            src={logo}
            alt="education"
            onClick={handleOnClick}
            className={`mx-2 size-24 ${href ? 'cursor-pointer' : ''}`}
          />
        )}
      </div>
      {displayDescription && (
        <div className="mt-4 bg-gray-100 p-4">
          <p className="text-gray-800 ">{longerDescription}</p>
          {readMoreURL && (
            <p className="mt-4">
              Read more:{' '}
              <a
                href={readMoreURL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 visited:text-purple-500 hover:text-blue-700 active:text-blue-800"
              >
                {readMoreURL}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
