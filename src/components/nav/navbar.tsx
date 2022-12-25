import { Link } from 'react-router-dom';
import { NavItem, navItemType } from './navItem';

const navItems: navItemType[] = [
  {
    text: 'home',
    emoji: '🤍',
    url: '',
    target: '_self',
  },
  {
    text: 'about me',
    emoji: '👀',
    url: 'me',
    target: '_self',
  },
  {
    text: 'CV',
    emoji: '📖',
    url: 'cv',
    target: '_self',
  },
  {
    text: 'projects',
    emoji: '💾',
    url: 'projects',
    target: '_self',
  },
  {
    text: 'github',
    emoji: '💻',
    url: 'https://www.github.com/magnusouren',
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
  <nav className="w-full md:w-48 md:h-screen bg-black fixed left-0 top-0 text-white">
    <div className="hidden md:block">
      <ul>
        {navItems.map((navItem) => (
          <NavItem text={navItem.text} url={navItem.url} target={navItem.target} emoji={navItem.emoji} />
        ))}
      </ul>
      <p className="hidden md:block absolute bottom-8 w-full text-center font-extralight align-middle">- 2022 -</p>
    </div>
    <div className="flex md:hidden bg-black h-16 justify-between items-center p-4">
      <Link to="" className="font-medium hover:font-bold">
        magnus.ouren.no
      </Link>
      <button>Menu</button>
    </div>
  </nav>
);
