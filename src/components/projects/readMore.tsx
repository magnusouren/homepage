import { type FC } from 'react';

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
    <h3 className=" text-2xl font-semibold mt-4 pt-4 text-center border-t-2">
      screenshots 📸
    </h3>
    {secondaryImages && (
      <div className="flex flex-wrap justify-center">
        {secondaryImages.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="alt text
                "
            className="my-2 max-h-96 max-w-full"
          />
        ))}
      </div>
    )}
  </div>
);
