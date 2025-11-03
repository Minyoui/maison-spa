"use client";

import Link from "next/link";

// External Style
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    Home
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;