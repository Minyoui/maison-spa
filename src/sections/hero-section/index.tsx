"use client"

import "./hero.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-section h-screen w-full flex items-center justify-center">
            <div className="relative w-full max-w-[500px] min-w-[250px] h-full">
                <Image 
                    src="/images/maison-hero-logo.svg"
                    alt="Maison`D Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Hero;