"use client"

import { motion } from "motion/react"
import Image from "next/image";

interface AboutProps {
    className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <div className={`w-full h-screen bg-[#352742] flex items-center justify-evenly ${className}`}>
            <div className="min-w-[500px] flex flex-col items-start gap-[50px] px-10">
                <h1 className="text-[3.5rem] ml-5" style={{ fontFamily:`var(--font-carattere)`}}>About Us</h1>
                <p>At Maison`D, we believe relaxation is more than a luxury — it’s a way to reconnect with yourself. Our philosophy blends Balinese culture with modern comfort to nurture your inner calm.</p>
            </div>
            <div className="relative w-full h-[50%] mx-10">
                <Image
                    src="/images/maison-about.jpg"
                    alt="Maison-D About Image"
                    className="object-cover"
                    fill
                />
            </div>
        </div>
    );
};

export default About;