import { CloseSharp, MenuSharp } from '@material-ui/icons';
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { NavItem, type NavItemType } from './navItem';

interface MobileNavProps {
  navItems: NavItemType[];
}

export const MobileNav: FC<MobileNavProps> = ({ navItems }: MobileNavProps) => {
  const [viewMenu, setViewMenu] = useState(false);

  const toggleMenu = (): void => {
    setViewMenu(!viewMenu);
  };

  return (
    <>
      <div className="flex lg:hidden bg-black h-16 justify-between items-center p-4">
        <Link
          to=""
          onClick={() => {
            setViewMenu(false);
          }}
          className="font-medium hover:underline"
        >
          magnus.ouren.no
        </Link>
        {viewMenu ? (
          <button onClick={toggleMenu} className="flex gap-2 hover:underline">
            close
            <CloseSharp className="pt-1" />
          </button>
        ) : (
          <button onClick={toggleMenu} className="flex gap-2 hover:underline">
            menu
            <MenuSharp className="pt-1" />
          </button>
        )}
      </div>
      {viewMenu && (
        <div className="bg-black h-screen">
          <ul className="px-4 w-screen text-center" onClick={toggleMenu}>
            {navItems.map((navItem) => (
              <NavItem
                text={navItem.text}
                url={navItem.url}
                target={navItem.target}
                emoji={navItem.emoji}
                key={navItem.text}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
