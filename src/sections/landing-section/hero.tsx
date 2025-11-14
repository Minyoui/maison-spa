"use client"

import "./hero.scss";
import Image from "next/image";
import { motion } from "motion/react";

import Button from "@/components/Button";

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <div className="hero-background relative h-full w-full flex flex-row rounded-[25px] items-end justify-between p-10">
                <h1 className="text-white font-semibold text-[3.5rem] max-w-[500px]" style={{ fontFamily: "var(--font-manrope)"}}>
                    Experience Calm, Curated with 
                    <span className="" style={{ fontFamily: "var(--font-averia-serif-libre", fontStyle: "italic"}}> Luxurious </span> 
                    Care
                </h1>
                <div className="max-w-[250px] flex flex-col items-center gap-[30px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button className="bg-white text-black w-full p-3 rounded-[100px]">Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;