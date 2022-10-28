import React from 'react';

export interface LogoProps {
  url: string;
  width: number;
}

export const Logo: React.FC<LogoProps> = ({ url, width }) => (
  <img src={url} className={'w-16 grayscale hover:grayscale-0'}></img>
);
