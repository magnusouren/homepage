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
  <div className="mt-4 bg-gray-100 p-4 text-justify text-gray-800">
    <p>{longDescription}</p>

    {secondaryImages.length > 0 && (
      <>
        <h3 className=" mt-4 border-t-2 pt-4 text-center text-2xl font-semibold">
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
