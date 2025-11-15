

import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/Button";

interface LowerContentProps {
    className?: string;
};

const LowerContent: React.FC<LowerContentProps> = ({ className }) => {
    const hookData = [
        {
            id:"first",
            title: "Stress Relief",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },

        {
            id:"second",
            title: "Pain Reduction",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },

        {
            id:"third",
            title:"Deep Relaxation",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ];

    return (
        <div className={`flex items-center space-x-5 ${className}`}>
            {/* LEFT CONTENT */}
            <div className="relative h-full w-full">
                <Image 
                    src="/images/md-hook-img.jpg"
                    alt="Maison`D Hook Image"
                    className="object-cover rounded-3xl"
                    fill
                />
            </div>

            {/* MIDDLE CONTENT */}
            <div className="h-full w-full flex flex-col items-start justify-evenly">
                <h1 
                    className="text-[2.5rem]"
                    style={{ fontFamily:"var(--font-manrope)"}}
                >
                    Your Trusted Partner in 
                    <span style={{ fontFamily:"var(--font-averia-serif-libre)", fontStyle:"italic"}}> Holistic Wellness Care</span>
                </h1>
                {hookData.map((hook) => (
                    <ul key={hook.id}>
                        <li className="mt-5">
                            <span className="font-bold text-xl" style={{ fontFamily:"var(--font-manrope)"}}>{hook.title}</span>
                            <p>{hook.description}</p>
                        </li>
                    </ul>
                ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="h-full w-full flex flex-col items-center gap-[20px]">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
                <Button className="bg-[#4A3461] text-white w-full py-3 rounded-[100px]">Book Appointment</Button>
                <div className="relative h-full w-full">
                    <Image 
                        src="/images/md-hook-img-two.JPG"
                        alt="Maison`D Hook Image"
                        className="object-cover rounded-3xl"
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default LowerContent;