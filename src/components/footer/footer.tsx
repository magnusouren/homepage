import { type FC } from 'react';

import gh from '../../img/github-mark-white.png';
import li from '../../img/linkedin-logo-white-big.png';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-between bg-black p-4 text-white">
      <div className="flex justify-between gap-2">
        <a href="https://www.github.com/magnusouren" target="blank">
          <img src={gh} alt="github" className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/magnus-tomter-ouren-44a80321b/"
          target="blank"
        >
          <img src={li} alt="linkedin" className="size-6" />
        </a>
      </div>
      <p className="py-1 text-sm">- {year} -</p>
    </footer>
  );
};
