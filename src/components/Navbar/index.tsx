"use client";

import Link from "next/link";

// External Style
import "./Navbar.scss";

const Navbar = () => {
    const navigationData = [
        {
            id: "Home",
            text: "Home",
            link: "/",
            target: "",
        },

        {
            id: "About",
            text: "About",
            link: "/",
            target: "",
        }
    ];

    return (
        <header className="fixed flex w-full z-50 items-center justify-center p-6">
            <nav className="navbar flex flex-row items-center gap-5">
                {navigationData.map((navigation) => (
                    <li key={navigation.id} className="list-none">
                        <Link href={navigation.link} target={navigation.target}>
                            {navigation.text}
                        </Link>
                        <div className="underline"/>
                    </li>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;