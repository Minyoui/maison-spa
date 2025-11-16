"use client"

import { motion } from "motion/react";
import Image from "next/image";

interface findUsProps {
    className?: string,
};

const FindUs: React.FC<findUsProps> = ({ className }) => {
    const infoData = [
        {
            id: "info1",
            detail: "Operating Hours",
            icon: "/icons/Clock.png",
            description: "Operating Hours"
        },

        {
            id: "info2",
            detail: "Address",
            icon: "/icons/Location.png",
            description: "2nd floor ASJ building Brgy. Batong Dalig Centennial Road, Kawit, Philippines"
        }
    ];

    return (
        <div className={`${className}`}>
            <h1 className="text-white font-semibold text-5xl mt-10" style={{ fontFamily:"var(--font-manrope)"}}>
                Find 
                <span className="font-normal" style={{ fontFamily:"var(--font-averia-serif-libre)", fontStyle:"italic"}}> Us</span>
            </h1>
            <div className="flex flex-row justify-between items-center my-20">
                <div className="flex flex-col items-start w-full pr-20 gap-[50px]">
                    {infoData.map(( info ) => (
                        <div className="flex items-center gap-[10px] text-[rgba(255,255,255,0.5)]" key={info.id}>
                            <div className="relative min-w-[35px] h-[35px]">
                                <Image 
                                    src={info.icon}
                                    alt={info.detail}
                                    className="object-contain"
                                    fill
                                />
                            </div>
                            <p>{info.description}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-3xl text-white w-[60%]" style={{ fontFamily:"var(--font-manrope)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
            </div>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8779436181617!2d120.89792227496571!3d14.434196881129324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3202c5fda6d%3A0xb5917b21eb4b9fa1!2sBlissful%20Bali%20Spa%20-%20Kawit!5e0!3m2!1sen!2sph!4v1755930184407!5m2!1sen!2sph" 
                width="100%" 
                style={{ border:0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Spa Location"
                className="rounded-3xl h-[500px]"
            ></iframe>
        </div>
    );
};

export default FindUs;