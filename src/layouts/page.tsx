import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/nav/navbar';

export const PageLayout: FC = () => (
  <main>
    <Navbar />
    <div className="ml-0 mt-16 md:ml-48 md:mt-0 mb-20 w-full">
      <Outlet />
    </div>
  </main>
);
