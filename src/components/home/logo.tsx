import React from 'react';

interface LogoProps {
  url: string;
}

export const Logo: React.FC<LogoProps> = ({ url }) => (
  <img src={url} alt={url} className={` w-16 grayscale hover:grayscale-0 mx-4`} />
);
