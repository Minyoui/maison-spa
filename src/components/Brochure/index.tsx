"use client"

import { motion } from "motion/react";
import { useState } from "react";

const Brochure = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <motion.button className="fixed top-0 right-0 p-6 bg-[#352742] cursor-pointer z-50">

            </motion.button>
        </>
    );
};

export default Brochure;