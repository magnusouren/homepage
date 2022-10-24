import React from "react";

export type navItemsProps = {
    text: string;
    url: string;
    target: string;
    emoji: string;
};

const NavItem: React.FC<navItemsProps> = ({ text, url, target, emoji }) => {
    return (
        <li className="mt-8 w-full text-center">
            <span className="text-2xl ">{emoji} </span>
            <a
                target={target}
                href={url}
                className="font-medium hover:font-bold"
            >
                {text}
            </a>
        </li>
    );
};

export default NavItem;
