import Link from "next/link";
import Image from "next/image";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Destination To Paradise – Thailand Travel Experts",
  description:
    "Have questions? Contact Destination To Paradise, the best travel agency in Thailand! Plan your next adventure with our experts today.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 mb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/contactbg.png"
          alt="Beautiful beach landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute pt-16 inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-2">CONTACT</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <section
        style={{ marginBottom: "0", paddingBottom: "0" }}
        className="max-w-7xl mx-auto px-4 py-16 text-center"
      >
        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-px w-16 bg-[#312F93]"></div>
            <span className="text-l font-bold uppercase heading">
              contact us
            </span>
            <div className="h-px w-16 bg-[#312F93]"></div>
          </div>
          <h3 style={{ color: "black" }} className="text-4xl font-bold mb-4">
            Get in Touch{" "}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're Here to Help Plan Your Perfect Journey
          </p>
        </div>

        <ContactInfo/>
        <ContactForm/>
      </section>
    </main>
  );
}
