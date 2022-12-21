import { useState } from 'react';
import { CvDescription } from './cvDescription';

export interface CVJobProps {
  company: string;
  duration: string;
  jobTitle: string;
  href?: string;
  jobDescription: string;
  logo: string;
  location: string;
}

export const CVJob: React.FC<CVJobProps> = ({
  company,
  duration,
  href = '',
  jobTitle,
  jobDescription,
  logo,
  location,
}) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  const handleOnClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-xl">
            {jobTitle} at {company}
          </h4>
          <span className="text-gray-600 my-2">
            {location} | {duration}
          </span>
          <CvDescription displayDescription={displayDescription} setDisplayDescription={setDisplayDescription} />
        </div>
        <img src={logo} alt="logo" className="w-24 h-24 mx-2 cursor-pointer" onClick={handleOnClick} />
      </div>
      {displayDescription && <p className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">{jobDescription}</p>}
    </div>
  );
};
