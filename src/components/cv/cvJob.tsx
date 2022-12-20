import { useState } from 'react';
import { CvDescription } from './cvDescription';
import Arrow from '../../img/downArrow.png';

export interface CVJobProps {
  jobTitle: string;
  company: string;
  duration: string;
  jobDescription: string;
  logo: string;
  location: string;
}

export const CVJob: React.FC<CVJobProps> = ({ jobTitle, company, duration, jobDescription, logo, location }) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  const toggleContent = () => {
    setDisplayDescription(!displayDescription);
  };

  return (
    <div className="py-4 border-b-2">
      <div className="flex justify-between">
        <div className="pr-4">
          <h4 className="font-semibold text-xl my-2">
            {jobTitle} at {company}
          </h4>
          <span className="text-gray-600 my-2">
            {location} | {duration}
          </span>
        </div>
        <img src={logo} alt="logo" className="w-24 h-24 mt-2 m-2" />
      </div>
      {displayDescription && (
        <>
          <button className="border-black bg-transparent flex hover:underline" onClick={toggleContent}>
            <img src={Arrow} alt="Arrow down" className="w-4 mr-2 mt-1 rotate-180" />
            <span>Hide</span>
          </button>
          <CvDescription description={jobDescription} />
        </>
      )}
      {!displayDescription && (
        <button className="border-black bg-transparent flex hover:underline" onClick={toggleContent}>
          <img src={Arrow} alt="Arrow down" className="w-4 mr-2 mt-1" />
          <span>Read more</span>
        </button>
      )}
    </div>
  );
};
