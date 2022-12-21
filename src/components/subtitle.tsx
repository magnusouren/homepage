import React from 'react';

type SubtitleProps = {
  subtitle: string;
};

export const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => (
  <h2 className="text-4xl font-bold my-4">{subtitle}</h2>
);
