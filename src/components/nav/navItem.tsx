import { type FC } from 'react';
import { Link } from 'react-router-dom';

export interface NavItemType {
  text: string;
  url: string;
  target: string;
  emoji: string;
}

export const NavItem: FC<NavItemType> = ({
  text,
  url,
  target,
  emoji,
}: NavItemType) => {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <li key={text} className="my-4 flex text-center md:my-8 md:block md:w-full">
      {url.includes('.com' || 'www' || 'https' || '.org') ? (
        <a
          key={text}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 hover:font-bold"
        >
          <span className="hidden text-2xl md:inline">{emoji} </span>
          {text}
        </a>
      ) : (
        <Link
          to={url}
          key={text}
          className="flex items-center justify-center gap-2 hover:font-bold"
          onClick={scrollToTop}
        >
          <span className="hidden text-2xl md:inline">{emoji} </span>
          {text}
        </Link>
      )}
    </li>
  );
};
