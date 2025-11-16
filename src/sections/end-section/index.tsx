"use client"

import FindUs from "./findUs";
import Button from "@/components/Button";
import Footer from "./footer";

interface endProps {
    className?: string,
};

const End: React.FC<endProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <FindUs className="h-auto w-full"/>
            <div className="h-[50dvh] w-[700px] flex flex-col items-center justify-center mt-10">
                <h1 className="text-5xl text-center text-white font-bold" style={{ fontFamily:"var(--font-manrope)"}}>Book Your Luxury Balinese Massage Now</h1>
                <Button className="mt-10 bg-white px-15 py-3 rounded-[100px]">Book Appointment</Button>
            </div>
            <Footer className="h-screen w-full"/>
        </div>
    );
};

export default End;