"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface lowerContentProps {
    className?: string;
};

const LowerContent: React.FC<lowerContentProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            
        </div>
    );
};

export default LowerContent;