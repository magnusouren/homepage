import '../App.css';

import { Code, FolderOpen } from '@material-ui/icons';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { Wallpaper } from '../components/home/wallpaper';

export const HomeView: FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="-mt-8 lg:mt-0">
      <Wallpaper />
      <div className="mx-auto mt-8 max-w-xl px-4">
        <h2 className="text-4xl font-bold">magnus.ouren.no</h2>{' '}
        <p className="font-semibold text-gray-500">
          react/typescript/tailwind css
        </p>
        <p className="my-4 text-justify">
          Hello, I am Magnus and this is my personal homepage. I have just
          finished my bachelor degree in informatics at NTNU i Trondheim, and
          will continue with a Master of Science - Informatics at NTNU in August
          2024. This webpage is made with React, Typescript, and Tailwind CSS as
          a hobby project to learn more about these technologies. It started as
          a workshop with a friend for learning React, but has developed into a
          bigger webpage about me, what I do, and who I am.
        </p>
        <div className="flex gap-4">
          <Link
            to="/cv"
            onClick={scrollToTop}
            className="flex w-1/2 justify-between border border-l-8 border-black bg-white px-4 py-2 font-medium text-black shadow-md transition-all duration-300 hover:bg-black hover:text-white"
          >
            <p>CV</p>
            <FolderOpen />
          </Link>
          <Link
            to="/projects"
            onClick={scrollToTop}
            className="flex w-1/2 justify-between border border-l-8 border-black bg-white px-4 py-2 font-medium text-black shadow-md transition-all duration-300 hover:bg-black hover:text-white"
          >
            <p>My Projects</p>
            <Code />
          </Link>
        </div>
        <p className="my-4 text-justify">
          It is my first ever built React webpage. You can check out the
          repository for this webpage{' '}
          <a
            target="blank"
            href="https://github.com/magnusouren/homepage"
            className="underline hover:text-gray-500"
          >
            here!
          </a>
        </p>
        <p className="my-4 text-justify">
          The amazing photo you can see above was was taken in Monaco, where I
          was on a trip with my friends. It was an expensive stay, but a very
          cool place! I can strongly recommend it!
        </p>
      </div>
    </div>
  );
};
