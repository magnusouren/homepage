import { navItems } from '../../data/nav/navItems';
import { DesktopNav } from './desktopNav';
import { MobileNav } from './mobileNav';

export const Navbar = () => (
  <nav className="w-full md:w-48 md:min-h-screen bg-black fixed left-0 top-0 text-white">
    <div className="hidden md:block">
      <DesktopNav navItems={navItems} />
    </div>
    <div className="block md:hidden">
      <MobileNav navItems={navItems} />
    </div>
  </nav>
);
