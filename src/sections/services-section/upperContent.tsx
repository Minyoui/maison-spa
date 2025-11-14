"use client"

import Image from "next/image";
import { motion } from "motion/react";

interface upperContentProps {
    className?: string;
};

const UpperContent: React.FC<upperContentProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            
        </div>
    );
};

export default UpperContent;