import { Link } from 'react-router-dom';

export type navItemType = {
  text: string;
  url: string;
  target: string;
  emoji: string;
};

export const NavItem = ({ text, url, target, emoji }: navItemType) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <li key={text} className="my-4 md:my-8 md:w-full text-center md:block flex">
      <span className="text-2xl hidden md:inline">{emoji} </span>
      {url.includes('.com' || 'www' || 'https' || '.org') ? (
        <a key={text} href={url} target="_blank" rel="noreferrer" className="hover:font-bold">
          {text}
        </a>
      ) : (
        <Link to={url} key={text} className="font-medium hover:font-bold" onClick={scrollToTop}>
          {text}
        </Link>
      )}
    </li>
  );
};
