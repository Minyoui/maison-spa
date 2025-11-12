"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

// External Style
import "./Navbar.scss";

// Component
import Button from "../Button";

const Navbar = () => {
    return (
        <header className="fixed flex w-full z-50 items-center justify-center p-4">
            <motion.nav 
                className="navbar flex flex-row items-center gap-5 bg-[rgba(36,25,47,0.7)] backdrop-blur rounded-[100px] w-full justify-between h-[60px]"
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Link className="relative w-[100px] h-[50px] ml-3" href="/">
                    <Image 
                        src="/images/maison-d-text-logo.svg"
                        alt="Maison-D Home Button"
                        className="object-center"
                        fill
                    />
                </Link>
                <motion.ul 
                    className="flex gap-[100px] text-sm"
                    initial={{ opacity: 0, display: "none" }}
                    animate={{ opacity: 1, display: "flex" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/">ABOUT</Link></li>
                    <li><Link href="/">FAQs</Link></li>
                    <li><Link href="/">CONTACT</Link></li>
                </motion.ul>
                <Button
                    className="bg-[#B08CCE] h-[50px] w-[150px] rounded-[100px] text-sm mr-1 hover:bg-[#4A2574] transition-colors duration-300"
                >
                    Book Now
                </Button>
            </motion.nav>
        </header>
    );
};

export default Navbar;