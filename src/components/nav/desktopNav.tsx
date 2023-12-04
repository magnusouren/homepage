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
      <p className="hidden lg:block absolute bottom-8 w-full text-center font-extralight align-middle">
        {`- ${year} -`}
      </p>
    </>
  );
};
