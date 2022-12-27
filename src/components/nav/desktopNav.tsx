import { NavItem, navItemType } from './navItem';

type DesktopNavProps = {
  navItems: navItemType[];
};

export const DesktopNav = ({ navItems }: DesktopNavProps) => (
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
    <p className="hidden md:block absolute bottom-8 w-full text-center font-extralight align-middle">- 2022 -</p>
  </>
);
