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
      className="flex border-b-2 border-black border-b-transparent bg-transparent font-medium hover:border-b-black"
      onClick={toggleContent}
    >
      <img
        src={Arrow}
        alt="Arrow down"
        className={`mr-2 mt-1 w-4 ${
          displayDescription ? 'rotate-180' : 'rotate-0'
        } transition duration-300 ease-in-out`}
      />
      {displayDescription ? 'hide' : 'read more'}
    </button>
  );
};
