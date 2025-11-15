"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface testimonialProps {
    className?: string,
};

const Testimonial: React.FC<testimonialProps> = ({ className }) => {
    return (
        <div className={`h-screen w-full bg-white flex flex-col p-10 ${className}`}>
            <h1 className="text-[3rem] font-semibold" style={{ fontFamily:"var(--font-manrope)"}}>
                Our Client 
                <span className="text-[4rem] font-normal" style={{ fontFamily:"var(--font-carattere)"}}> Testimonial</span>
            </h1>
        </div>
    );
};

export default Testimonial;
