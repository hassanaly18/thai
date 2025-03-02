import About from "@/components/About";
import Bar1 from "@/components/Bar1";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import TestimonialSlider from "@/components/TestimonialSlider";
import Why from "@/components/Why";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

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
