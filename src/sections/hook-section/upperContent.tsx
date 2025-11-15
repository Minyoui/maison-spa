"use client"

import { motion } from "motion/react";

import CountUp from "@/components/CountUp";

interface UpperContentProps {
    className?: string;
};

const UpperContent: React.FC<UpperContentProps> = ({ className }) => {
    const hookData = [
        {
            id: "first",
            title: "Client Satisfaction",
            value: 100,
            unit: "%"
        },

        {
            id: "second",
            title: "Years Experience",
            value: 4,
            unit: "+"
        },

        {
            id: "third",
            title: "Treatments Offered",
            value: 30,
            unit: "+"
        },

        {
            id: "fourth",
            title: "Appointment Booking",
            value: 24,
            unit: "/7"
        }
    ];

    return (
        <div 
            className={`flex items-center justify-evenly ${className}`}
            style={{ fontFamily: "var(--font-manrope)"}}
        >
            {hookData.map((hook) => (
                <h1 className="text-center" key={hook.id}>
                    <CountUp
                        from={0}
                        to={hook.value}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text text-[3rem] font-bold"
                    />{hook.unit}
                    <br/>
                    <span className="text-[rgba(255,255,255,0.5)]">{hook.title}</span>
                </h1>
            ))}
        </div>
    );
};

export default UpperContent;