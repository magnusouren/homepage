import { type FC } from 'react';

import { navItems } from '../../data/nav/navItems';
import { DesktopNav } from './desktopNav';
import { MobileNav } from './mobileNav';

export const Navbar: FC = () => (
  <nav className="fixed left-0 top-0 z-50 w-full bg-black text-white lg:min-h-screen lg:w-48">
    <div className="hidden lg:block">
      <DesktopNav navItems={navItems} />
    </div>
    <div className="block lg:hidden">
      <MobileNav navItems={navItems} />
    </div>
  </nav>
);
