import { type FC, useState } from 'react';

import ExternalLink from '../../img/external-link.png';
import { ReadMoreButton } from '../readMoreButton';
import { ReadMore } from './readMore';

export interface ProjectProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  url?: string;
  secondaryImages?: string[];
}

export const Project: FC<ProjectProps> = ({
  title,
  image: img,
  shortDescription,
  longDescription,
  url,
  tags,
  secondaryImages = [],
}: ProjectProps) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="justify-center mt-4 mb-8 w-full">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="font-semibold text-gray-500 my-2 w-full">
        | {tags.map((tag) => tag + ' | ')}
      </p>
      <img src={img} alt={title + ' snapshot '} className="w-full" />
      <p className="my-4">{shortDescription}</p>
      <div className="flex justify-between">
        <ReadMoreButton
          displayDescription={displayDescription}
          setDisplayDescription={setDisplayDescription}
        />
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <button className="bg-white hover:underline py-1 px-4 border border-black flex justify-between">
              <span>Visit repo</span>
              <img
                src={ExternalLink}
                alt="External link"
                className="w-4 ml-2 mt-1"
              />
            </button>
          </a>
        )}
      </div>
      {displayDescription && (
        <ReadMore
          longDescription={longDescription}
          secondaryImages={secondaryImages}
        />
      )}
    </div>
  );
};
