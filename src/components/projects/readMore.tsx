import { type FC } from 'react';

import { ClickableImg } from '../clickableImg/ClickableImg';

interface ReadMoreProps {
  longDescription: string;
  secondaryImages?: string[];
}

export const ReadMore: FC<ReadMoreProps> = ({
  longDescription,
  secondaryImages = [],
}: ReadMoreProps) => (
  <div className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">
    <p>{longDescription}</p>

    {secondaryImages.length > 0 && (
      <>
        <h3 className=" text-2xl font-semibold mt-4 pt-4 text-center border-t-2">
          screenshots 📸
        </h3>
        <div className="flex flex-wrap justify-center">
          {secondaryImages.map((image, index) => (
            <ClickableImg img={image} key={index} alt={'screenshot'} />
          ))}
        </div>
      </>
    )}
  </div>
);
