import { type FC } from 'react';

import { navItems } from '../../data/nav/navItems';
import { DesktopNav } from './desktopNav';
import { MobileNav } from './mobileNav';

export const Navbar: FC = () => (
  <nav className="w-full lg:w-48 lg:min-h-screen bg-black fixed left-0 top-0 text-white z-50">
    <div className="hidden lg:block">
      <DesktopNav navItems={navItems} />
    </div>
    <div className="block lg:hidden">
      <MobileNav navItems={navItems} />
    </div>
  </nav>
);
