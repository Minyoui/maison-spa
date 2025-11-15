

import { motion } from "motion/react";

interface UpperContentProps {
    className?: string;
};

const UpperContent: React.FC<UpperContentProps> = ({ className }) => {
    return (
        <div className={`flex items-center justify-evenly ${className}`}>
            <h1>Hello</h1>
        </div>
    );
};

export default UpperContent;