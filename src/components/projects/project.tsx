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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="justify-center mt-4 mb-8 w-full">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-semibold text-gray-500 my-2 w-full">
        | {tags.map((tag) => tag + ' | ')}
      </p>
      <img
        src={img}
        alt={title + ' snapshot '}
        className="w-full cursor-pointer object-cover"
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
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
      {isModalOpen && (
        <div
          className="inset-0 bg-gray-900 bg-opacity-75 hidden justify-center items-center z-50 lg:fixed lg:flex"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <div className="p-4 rounded-lg shadow-lg md:w-4/5">
            <img
              src={img}
              alt={title + ' in modal '}
              className="max-w-full max-h-full "
            />
            <button
              className="absolute top-0 right-0 bg-gray-100 w-8 h-8 m-2 rounded-full text-black text-xl hover:bg-gray-200"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
