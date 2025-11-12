"use client"

import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
    return (
        <div className="h-screen w-full flex items-center">
            <motion.div 
                className="relative w-full h-full flex items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Image 
                    src="/images/md-about-img.jpg"
                    alt="Maison-D Balinese Spa"
                    className="object-cover rounded-br-[1000px] rounded-tr-[1000px] min-w-[400px]"
                    width={800}
                    height={250}
                />
            </motion.div>
            <div className="w-full">
                <h1 className="font-nunito text-2xl">Hello</h1>
            </div>
        </div>
    );
};

export default About;