// Sections
import Landing from "@/sections/landing-section";
import Services from "@/sections/services-section";
import Hook from "@/sections/hook-section";
import Testimonial from "@/sections/testimonial-section";
import FAQ from "@/sections/FAQ-section";
import End from "@/sections/end-section";

export default function Home() {
  return (
    <main>
        <Landing />
        <Services />
        <Hook />
        <Testimonial className="h-screen w-full"/>
        <FAQ className="h-screen w-full"/>
        <End className="h-auto w-full p-10 bg-[#4A3461] flex flex-col items-center"/>
    </main>
  );
}
