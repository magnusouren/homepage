import { useState } from 'react';
import { CvDescription } from './cvDescription';

export interface CVJobProps {
  jobTitle: string;
  company: string;
  duration: string;
  jobDescription: string;
  logo: string;
  location: string;
  href?: string;
}

export const CVJob: React.FC<CVJobProps> = ({
  jobTitle,
  company,
  duration,
  jobDescription,
  logo,
  location,
  href = 'test',
}) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  const handleOnClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <div className="pr-4">
          <h4 className="font-semibold text-xl my-2">
            {jobTitle} at {company}
          </h4>
          <span className="text-gray-600 my-2">
            {location} | {duration}
          </span>
          <CvDescription displayDescription={displayDescription} setDisplayDescription={setDisplayDescription} />
        </div>
        <img src={logo} alt="logo" className="block w-24 h-24 mt-2 m-2 cursor-pointer" onClick={handleOnClick} />
      </div>
      {displayDescription && <p className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">{jobDescription}</p>}
    </div>
  );
};
