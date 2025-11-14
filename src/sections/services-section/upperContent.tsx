"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface upperContentProps {
    className?: string;
};

const UpperContent: React.FC<upperContentProps> = ({ className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex flex-row items-center justify-between p-10">
                <h1 className="font-semibold text-[2rem]" style={{ fontFamily:"var(--font-manrope)"}}>Our Top 
                    <span style={{ fontFamily:"var(--font-averia-serif-libre)", fontStyle:"italic"}}> Services</span>
                </h1>
                <h1 className="text-[1.5rem] w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h1>
            </div>
        </div>
    );
};

export default UpperContent;