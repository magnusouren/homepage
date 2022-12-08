import React from 'react';

interface LogoProps {
  url: string;
  width: number;
}

export const Logo: React.FC<LogoProps> = ({ url, width }) => (
  <img src={url} alt={url} className={` w-${width} grayscale hover:grayscale-0`}></img>
);
