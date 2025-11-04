"use client"

import React from "react";
import { motion } from "motion/react";

// External Style
import "./Button.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer border border-solid-white py-4 px-10 rounded-lg ${className}`}>
            {children}
        </motion.button>
    );
};

export default Button;