"use client"

interface footerProps {
    className?: string;
};

const Footer: React.FC<footerProps> = ({ className }) => {
    return (
        <div className={`${className}`}>

        </div>
    );
};

export default Footer;