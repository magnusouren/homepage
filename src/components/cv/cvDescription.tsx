import React from 'react';

type cvDescriptionProps = {
  description: string;
};

export const CvDescription: React.FC<cvDescriptionProps> = ({ description }) => (
  <p className="text-gray-800 my-2">{description}</p>
);
