"use client"

import "./hero.scss";
import Image from "next/image";

// Components
import Button from "@/components/Button";

const Hero = () => {
    return (
        <div className="hero-section h-screen w-full flex items-center justify-center flex flex-col">
            <div className="relative w-full max-w-[500px] min-w-[250px] h-[500px]">
                <Image 
                    src="/images/maison-hero-logo.svg"
                    alt="Maison`D Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
            <Button className="font-semibold">Book Now</Button>
        </div>
    );
};

export default Hero;