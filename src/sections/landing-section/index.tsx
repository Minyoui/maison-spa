"use client"

// Components
import Hero from "./hero";
import SubHero from "./sub-hero";

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    return (
        <>
            <Hero />
            <SubHero />
        </>
    );
};

export default Landing;