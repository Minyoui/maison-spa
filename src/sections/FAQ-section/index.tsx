"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface faqProps {
    className?: string,
};

const FAQ: React.FC<faqProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <h1>Frequently Asked <span>Questions</span></h1>
        </div>
    );
};

export default FAQ;