import ReactImg from "../../img/react.png";
import TSImg from "../../img/ts.png";
import Tailwind from "../../img/tailwind.jpg";
import { Logo, LogoProps } from "./logo";

export const Logos = () => (
    <div className="flex gap-8 p-16 pb-0">
        <Logo url={ReactImg} width={50}></Logo>
        <Logo url={TSImg} width={50}></Logo>
        <Logo url={Tailwind} width={50}></Logo>
    </div>
);
