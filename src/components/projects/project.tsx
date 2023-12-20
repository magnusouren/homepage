import { type FC, useState } from 'react';

import ExternalLink from '../../img/external-link.png';
import { type ProjectProps } from '../../types';
import { ClickableImg } from '../clickableImg/ClickableImg';
import { ReadMoreButton } from '../readMoreButton';
import { ReadMore } from './readMore';

export const Project: FC<ProjectProps> = ({
  title,
  image: img,
  shortDescription,
  longDescription,
  repository: url,
  tags,
  hosted,
  secondaryImages = [],
}: ProjectProps) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="justify-center mt-4 mb-8 w-full">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-semibold text-gray-500 my-2 w-full">
        | {tags.map((tag) => tag + ' | ')}
      </p>
      <ClickableImg img={img} alt={title} />
      <p className="my-4">{shortDescription}</p>
      {hosted && (
        <p className="font-semibold text-gray-500 mb-4">
          {`Hosted at `}
          <a
            href={hosted}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-500"
          >
            {hosted}
          </a>
        </p>
      )}
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
