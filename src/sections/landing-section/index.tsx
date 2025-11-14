"use client"

// Components
import Hero from "./hero";
import SubHero from "./sub-hero";

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Hero className="h-screen w-full p-5"/>
            <SubHero className="h-[50dvh] w-full p-10"/>
        </div>
    );
};

export default Landing;