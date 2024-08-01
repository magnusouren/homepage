import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/nav/navbar';

export const PageLayout: FC = () => (
  <main>
    <Navbar />
    <div className="mb-20 ml-0 mt-24 min-h-screen w-full lg:mt-0 lg:pl-48">
      <Outlet />
    </div>
    <div className="md:hidden">
      <Footer />
    </div>
  </main>
);
