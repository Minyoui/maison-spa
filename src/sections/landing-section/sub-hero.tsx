"use client"

import Button from "@/components/Button";

interface subHeroProps {
    className?: string;
};

const subHero: React.FC<subHeroProps> = ({ className }) => {

    return (
        <div className={`flex flex-row items-center justify-between gap-[20px] ${className}`}>
            <div className="flex flex-col items-start w-[450px] gap-[100px] ml-5">
                <h1 className="text-[#201728] text-[2rem] font-semibold" style={{ fontFamily: "var(--font-manrope)"}}>
                    About <span style={{ fontFamily:"var(--font-averia-serif-libre)", fontStyle:"italic"}}>
                        Us 
                    </span>
                </h1>   
                <p className="text-[#201728] flex flex-col gap-[20px] items-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    <br/>
                    <Button>Learn More</Button>
                </p>
            </div>
            <h2 className="text-[#201728] text-[2rem] w-[600px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
            </h2>
        </div>
    );
};

export default subHero;