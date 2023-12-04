import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/nav/navbar';

export const PageLayout: FC = () => (
  <main>
    <Navbar />
    <div className="ml-0 mt-24 lg:pl-48 lg:mt-0 mb-20 w-full min-h-screen">
      <Outlet />
    </div>
    <div className="md:hidden">
      <Footer />
    </div>
  </main>
);
