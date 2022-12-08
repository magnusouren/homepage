import { NavItem, navItemType } from './navItem';

const navItems: navItemType[] = [
  {
    text: 'home',
    emoji: '🤍',
    url: '/',
    target: '_self',
  },
  {
    text: 'about me',
    emoji: '👀',
    url: '/me',
    target: '_self',
  },
  {
    text: 'projects',
    emoji: '💾',
    url: '/projects',
    target: '_self',
  },
  {
    text: 'github',
    emoji: '💻',
    url: 'https://github.com/magnusouren',
    target: '_blank',
  },
  {
    text: 'linkedin',
    emoji: '🔗',
    url: 'https://www.linkedin.com/in/magnus-tomter-ouren-44a80321b/',
    target: '_blank',
  },
  {
    text: 'email',
    emoji: '✉️',
    url: 'mailto:magnut0203@gmail.com',
    target: '_self',
  },
];

export const Navbar = () => (
  <nav className="h-screen w-48 bg-black fixed left-0 top-0 text-white">
    <ul>
      {navItems.map((navItem) => (
        <NavItem text={navItem.text} url={navItem.url} target={navItem.target} emoji={navItem.emoji} />
      ))}
    </ul>
    <p className="absolute bottom-8 w-full text-center font-extralight">- 2022 -</p>
  </nav>
);
