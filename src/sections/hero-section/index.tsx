"use client"

import "./hero.scss";
import Image from "next/image";
import { motion } from "motion/react";


const Hero = () => {
    return (
        <div className="hero-section h-screen w-full flex items-center justify-center flex flex-col">
            <motion.div 
                className="relative w-full max-w-[500px] min-w-[250px] h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <Image 
                    src="/images/maison-hero-logo.svg"
                    alt="Maison`D Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </motion.div>
            <motion.button 
                type="button"
                className="cursor-pointer bg-[rgba(255,255,255,0.2)] backdrop-blur py-4 px-10 rounded-[100px] text-sm border border-solid-white hover:bg-[#4A2574] transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.3, type: "spring", stiffness: 50, damping: 8 }}
            >
                Make an Appointment
            </motion.button>
        </div>
    );
};

export default Hero;