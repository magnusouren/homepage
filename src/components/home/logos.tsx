import ReactImg from '../../img/react.png';
import TSImg from '../../img/ts.png';
import Tailwind from '../../img/tailwind.jpg';
import { Logo } from './logo';

export const Logos = () => (
  <div className="flex justify-center my-8">
    <Logo url={ReactImg} />
    <Logo url={TSImg} />
    <Logo url={Tailwind} />
  </div>
);
