import About from "@/components/About";
import Bar1 from "@/components/Bar1";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyUs from "@/components/WhyUs";

export const metadata = {
  title: "Thailand Tour Packages | Best Travel Agency in Bangkok",
  description:
    "Plan your dream vacation with Destination To Paradise! We offer the best Thailand tour packages to Phuket, Krabi, Pattaya & more. Book now!",
};

export default function Home() {
  
  return (
    <>
    <HeroSection/>
    <Stats/>
    <Bar1/>
    <Services/>
    <About/>
    <Packages/>
    <Bar1/>
    {/* <Why/> */}
    <WhyUs/>
    <TestimonialSlider/>
    <ContactForm/>
    {/* <Testimonial/> */}
    </>
  );
}
