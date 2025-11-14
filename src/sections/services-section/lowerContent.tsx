"use client"

import Image from "next/image";
import { motion } from "motion/react";

import Button from "@/components/Button";

interface lowerContentProps {
    className?: string;
};

const LowerContent: React.FC<lowerContentProps> = ({ className }) => {
    return (
        <div className={`flex flex-row items-center justify-between p-10 gap-[50vh] ${className}`}>
            <div className="">
                <p className="w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button>Explore More</Button>
                <Button>Book Now</Button>
            </div>
            <h1 className="text-[2rem] w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </h1>
        </div>
    );
};

export default LowerContent;