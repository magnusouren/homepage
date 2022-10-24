import React from "react";
import NavItem from "./navItem";

const Navbar = () => {
    const navItems = [
        {
            label: "home",
            emoji: "🤍",
            url: "/",
            target: "self",
        },
        {
            label: "github",
            emoji: "💻",
            url: "https://github.com/magnusouren",
            target: "blank",
        },
        {
            label: "linkedin",
            emoji: "🔗",
            url: "https://www.linkedin.com/in/magnus-tomter-ouren-44a80321b/",
            target: "blank",
        },
        {
            label: "email",
            emoji: "✉️",
            url: "mailto:magnut0203@gmail.com",
            target: "self",
        },
    ];

    return (
        <nav className="h-screen w-48 bg-black fixed left-0 top-0 text-white">
            <ul>
                {navItems.map((navItem) => (
                    <NavItem
                        text={navItem.label}
                        url={navItem.url}
                        target={navItem.target}
                        emoji={navItem.emoji}
                    />
                ))}
            </ul>
            <p className="absolute bottom-8 w-full text-center font-extralight">
                - 2022 -
            </p>
        </nav>
    );
};

export default Navbar;
