import React from 'react';
import Arrow from '../../img/downArrow.png';

type cvDescriptionProps = {
  displayDescription: boolean;
  setDisplayDescription: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CvDescription: React.FC<cvDescriptionProps> = ({ displayDescription, setDisplayDescription }) => {
  const toggleContent = () => {
    setDisplayDescription(!displayDescription);
  };

  return (
    <button className="border-black bg-transparent flex hover:underline" onClick={toggleContent}>
      <img
        src={Arrow}
        alt="Arrow down"
        className={`w-4 mr-2 mt-1 rotate-${displayDescription ? 180 : 0} transition duration-300 ease-in-out transform`}
      />
      {displayDescription ? 'Hide' : 'Read more'}
    </button>
  );
};
