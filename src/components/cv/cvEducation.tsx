import React from 'react';

import { type CvEducationProps } from '../../types';
import { CvContent } from './cvContent';

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
  <div className="my-8">
    <CvContent
      header={`${degree} in ${fieldOfStudy}`}
      location={`${institution}, ${location}`}
      logo={logo}
      startYear={startYear}
      startMonth={startMonth}
      endMonth={endmonth}
      endYear={endYear}
      description={description}
    />
  </div>
);
