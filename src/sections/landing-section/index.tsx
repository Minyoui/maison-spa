"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    return (
        <div className="h-screen w-full p-5">
            <div className="relative h-full w-full flex items-center justify-center">
                <Image 
                    src="/images/maison-bg.jpg"
                    alt="Maison`D Background"
                    className="object-cover rounded-[25px]"
                    fill
                />
            </div>
        </div>
    );
};

export default Landing;