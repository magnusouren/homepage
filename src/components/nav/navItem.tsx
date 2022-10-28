import React from 'react';

export interface navItemType {
  text: string;
  url: string;
  target: string;
  emoji: string;
}

export const NavItem: React.FC<navItemType> = ({ text, url, target, emoji }) => (
  <li className="mt-8 w-full text-center">
    <span className="text-2xl ">{emoji} </span>
    <a target={target} href={url} className="font-medium hover:font-bold">
      {text}
    </a>
  </li>
);
