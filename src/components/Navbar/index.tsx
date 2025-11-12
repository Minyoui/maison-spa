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
                    className="flex space-x-2 text-xs h-full w-[500px] justify-center items-center p-1"
                    initial={{ opacity: 0, display: "none" }}
                    animate={{ opacity: 1, display: "flex" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <li className="h-full w-full"><Link href="/" className="hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 h-full w-full rounded-lg px-4 items-center flex justify-center">HOME</Link></li>
                    <li className="h-full w-full"><Link href="/" className="hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 h-full w-full rounded-lg px-4 items-center flex justify-center">ABOUT</Link></li>
                    <li className="h-full w-full"><Link href="/" className="hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 h-full w-full rounded-lg px-4 items-center flex justify-center">FAQs</Link></li>
                    <li className="h-full w-full"><Link href="/" className="hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 h-full w-full rounded-lg px-4 items-center flex justify-center">CONTACT</Link></li>
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