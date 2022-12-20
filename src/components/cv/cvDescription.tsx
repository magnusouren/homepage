import React from 'react';

type cvDescriptionProps = {
  description: string;
};

export const CvDescription: React.FC<cvDescriptionProps> = ({ description }) => (
  <p className="text-gray-800 text-justify bg-gray-100 p-4 mt-4">{description}</p>
);
