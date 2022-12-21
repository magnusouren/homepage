import { Link } from 'react-router-dom';

export type navItemType = {
  text: string;
  url: string;
  target: string;
  emoji: string;
};

export const NavItem = ({ text, url, target, emoji }: navItemType) => (
  <li className="mt-8 w-full text-center">
    <span className="text-2xl ">{emoji} </span>
    {url.includes('.com' || 'www' || 'https' || '.org') ? (
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    ) : (
      <Link to={url} className="font-medium hover:font-bold">
        {text}
      </Link>
    )}
  </li>
);
