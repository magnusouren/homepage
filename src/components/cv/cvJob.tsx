import { useState } from 'react';

import { ReadMoreButton } from '../readMoreButton';
import { CvContent } from './cvContent';

export interface CVJobProps {
  company: string;
  endMonth?: string;
  endYear?: number;
  href?: string;
  jobDescription: string;
  jobTitle: string;
  logo: string;
  location: string;
  startMonth?: string;
  startYear: number;
}

export const CVJob = ({
  company,
  endMonth,
  endYear,
  href,
  jobDescription,
  jobTitle,
  logo,
  location,
  startMonth,
  startYear,
}: CVJobProps): JSX.Element => {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="my-8">
      <CvContent
        header={jobTitle + ' at ' + company}
        location={location}
        logo={logo}
        startYear={startYear}
        startMonth={startMonth}
        endMonth={endMonth}
        endYear={endYear}
        href={href}
        description={
          <ReadMoreButton
            displayDescription={displayDescription}
            setDisplayDescription={setDisplayDescription}
          />
        }
      />
      {displayDescription && (
        <p className="text-gray-800 bg-gray-100 p-4 mt-4">{jobDescription}</p>
      )}
    </div>
  );
};
