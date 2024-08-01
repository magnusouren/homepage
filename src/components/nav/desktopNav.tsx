import { type FC } from 'react';

import { NavItem, type NavItemType } from './navItem';

interface DesktopNavProps {
  navItems: NavItemType[];
}

export const DesktopNav: FC<DesktopNavProps> = ({
  navItems,
}: DesktopNavProps) => {
  const year = new Date().getFullYear();

  return (
    <>
      <ul>
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
      <p className="absolute bottom-8 hidden w-full text-center align-middle font-extralight lg:block">
        {`- ${year} -`}
      </p>
    </>
  );
};
