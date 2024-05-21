import { useState } from 'react';

import { type CVBase } from '../../types';
import { ReadMoreButton } from '../readMoreButton';

export const CvContent = ({
  shortDescription,
  endMonth = '',
  endYear = 0,
  header,
  href = '',
  logo = '',
  location,
  longDescription: longerDescription,
  startMonth = '',
  startYear,
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
          <h4 className="font-semibold my-2">{header}</h4>
          <p className="text-gray-500 my-2">
            {location} | {startMonth || ''} {startYear} - {endMonth ?? ''}{' '}
            {endYear || 'Present'}
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
            className={`w-24 h-24 mx-2 ${href ? 'cursor-pointer' : ''}`}
          />
        )}
      </div>
      {displayDescription && (
        <div className="bg-gray-100 p-4 mt-4">
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
