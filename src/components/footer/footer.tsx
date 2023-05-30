import gh from '../../img/github-mark-white.png';
import li from '../../img/linkedin-logo-white-big.png';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white p-4 flex justify-between">
      <div className="flex justify-between gap-2">
        <a href="https://www.github.com/magnusouren" target="blank">
          <img src={gh} alt="github" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/magnus-tomter-ouren-44a80321b/" target="blank">
          <img src={li} alt="linkedin" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm py-1">- {year} -</p>
    </footer>
  );
};
