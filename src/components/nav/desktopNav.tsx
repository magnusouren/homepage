import { NavItem, navItemType } from './navItem';

type DesktopNavProps = {
  navItems: navItemType[];
};

export const DesktopNav = ({ navItems }: DesktopNavProps) => {
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
      <p className="hidden md:block absolute bottom-8 w-full text-center font-extralight align-middle">
        {'- ' + year + ' -'}
      </p>
    </>
  );
};
