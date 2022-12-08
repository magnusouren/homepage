import ReactImg from '../../img/react.png';
import TSImg from '../../img/ts.png';
import Tailwind from '../../img/tailwind.jpg';
import { Logo } from './logo';

export const Logos = () => (
  <div className="flex justify-center my-8">
    <Logo url={ReactImg} width={16}></Logo>
    <Logo url={TSImg} width={16}></Logo>
    <Logo url={Tailwind} width={16}></Logo>
  </div>
);
