import { useState } from 'react';
import { CvContent } from './cvContent';
import { CvDescription } from './cvDescription';

export type CVJobProps = {
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
};

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
}: CVJobProps) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="mb-4">
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
          <CvDescription displayDescription={displayDescription} setDisplayDescription={setDisplayDescription} />
        }
      />
      {displayDescription && <p className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">{jobDescription}</p>}
    </div>
  );
};
