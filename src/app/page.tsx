// Sections
import Landing from "@/sections/landing-section";
import Services from "@/sections/services-section";
import Hook from "@/sections/hook-section";
import Testimonial from "@/sections/testimonial-section";

export default function Home() {
  return (
    <main>
        <Landing />
        <Services />
        <Hook />
        <Testimonial />
    </main>
  );
}
