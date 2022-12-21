import React from 'react';
import { CvContent } from './cvContent';

export type CvEducationProps = {
  degree: string;
  description?: string;
  endYear?: number;
  endmonth?: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  logo: string;
  startYear: number;
  startMonth?: string;
};

export const CvEducation: React.FC<CvEducationProps> = ({
  degree,
  description = '',
  endYear,
  endmonth = '',
  fieldOfStudy,
  institution,
  location,
  logo,
  startYear,
  startMonth = '',
}: CvEducationProps) => (
  <div className="mb-4">
    <CvContent
      header={degree + ' in ' + fieldOfStudy}
      location={institution + ', ' + location}
      logo={logo}
      startYear={startYear}
      startMonth={startMonth}
      endMonth={endmonth}
      endYear={endYear}
      description={description}
    />
  </div>
);
