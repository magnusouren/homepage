import React, { type FC } from 'react';

import Arrow from '../img/downArrow.png';

interface ReadMoreButtonProps {
  displayDescription: boolean;
  setDisplayDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReadMoreButton: FC<ReadMoreButtonProps> = ({
  displayDescription,
  setDisplayDescription,
}: ReadMoreButtonProps) => {
  const toggleContent = (): void => {
    setDisplayDescription(!displayDescription);
  };

  return (
    <button
      className="border-black bg-transparent flex border-b-transparent border-b-2 font-medium hover:border-b-black"
      onClick={toggleContent}
    >
      <img
        src={Arrow}
        alt="Arrow down"
        className={`w-4 mr-2 mt-1 ${
          displayDescription ? 'rotate-180' : 'rotate-0'
        } transition duration-300 ease-in-out`}
      />
      {displayDescription ? 'hide' : 'read more'}
    </button>
  );
};
