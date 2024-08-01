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
    <div className="mb-8 mt-4 w-full justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="my-2 w-full font-semibold text-gray-500">
        | {tags.map((tag) => tag + ' | ')}
      </p>
      <ClickableImg img={img} alt={title} />
      <p className="my-4">{shortDescription}</p>
      {hosted && (
        <p className="mb-4 font-semibold text-gray-500">
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
            <button className="flex justify-between border border-black bg-white px-4 py-1 hover:underline">
              <span>Visit repo</span>
              <img
                src={ExternalLink}
                alt="External link"
                className="ml-2 mt-1 w-4"
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
