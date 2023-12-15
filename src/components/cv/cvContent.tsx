import { useState } from 'react';

import { type CVBaseProps } from '../../types';
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
}: CVBaseProps): JSX.Element => {
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
            {location} | {startMonth || ''} {startYear} - {endMonth ?? ''}
            {endYear || 'Present'}
          </p>
          {shortDescription}
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
        <p className="text-gray-800 bg-gray-100 p-4 mt-4">
          {longerDescription}
        </p>
      )}
    </div>
  );
};
