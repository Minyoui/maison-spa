"use client"

import { motion } from "motion/react";
import Image from "next/image";

//Components
import Button from "@/components/Button";

const About = () => {
    return (
        <div className="h-screen w-full flex items-center">
            <motion.div 
                className="relative min-w-[400px] h-[500px] flex items-center"
                initial={{ opacity: 0, width: "0%" }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <Image 
                    src="/images/md-about-img.jpg"
                    alt="Maison-D Balinese Spa"
                    className="object-cover rounded-br-[1000px] rounded-tr-[1000px] border-[15px] border-l-[0px] border-[rgba(255,255,255,0.7)]"
                    fill
                />
            </motion.div>
            <motion.div 
                className="w-full flex flex-col items-start h-full justify-center px-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <h1 className="text-[3.5rem]" style={{ fontFamily: 'var(--font-antic-didone)' }}>
                    Experience Calm Curated with <span className="text-[4.5rem] text-[#FBBC05]" style={{ fontFamily: 'var(--font-carattere)'}}>Luxurious</span> Care
                </h1>
                <p className="text-sm">Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate</p>
                <div className="pt-10 flex items-center space-x-5 text-sm">
                    <Button className="bg-white text-black px-7 py-3">Make an Appointment</Button>
                    <Button className="border border-white px-7 py-3">Learn More</Button>
                </div>
            </motion.div>
        </div>
    );
};

export default About; 