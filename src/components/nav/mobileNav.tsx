import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem, navItemType } from './navItem';

type MobileNavProps = {
  navItems: navItemType[];
};

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const [viewMenu, setViewMenu] = useState(false);

  const toggleMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <>
      <div className="flex md:hidden bg-black h-16 justify-between items-center p-4">
        <Link to="" className="font-medium hover:font-bold text-xl">
          magnus.ouren.no
        </Link>
        {viewMenu ? <button onClick={toggleMenu}>Close</button> : <button onClick={toggleMenu}>Menu</button>}
      </div>
      {viewMenu && (
        <div className="bg-black h-screen">
          <ul className="px-4 w-screen text-center" onClick={toggleMenu}>
            {navItems.map((navItem) => (
              <NavItem text={navItem.text} url={navItem.url} target={navItem.target} emoji={navItem.emoji} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
