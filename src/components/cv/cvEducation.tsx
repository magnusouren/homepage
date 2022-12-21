import React from 'react';

export interface CvEducationProps {
  degree: string;
  description?: string;
  endYear?: number;
  fieldOfStudy: string;
  institution: string;
  location: string;
  logo: string;
  startYear: number;
}

export const CvEducation: React.FC<CvEducationProps> = ({
  degree,
  description = '',
  endYear,
  fieldOfStudy,
  institution,
  location,
  logo,
  startYear,
}) => (
  <div className="my-4">
    <div className="flex justify-between">
      <div>
        <h4 className="font-semibold text-xl">
          {degree} in {fieldOfStudy}
        </h4>
        <span className="text-gray-600 my-2">
          {institution}, {location} | {startYear}-{endYear ? endYear : 'Present'}
        </span>
        <p className="mt-2">{description}</p>
      </div>
      <img src={logo} alt="education" className="w-24 h-24 mx-2" />
    </div>
  </div>
);
