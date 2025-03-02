import Link from "next/link";
import Image from "next/image";
import TourList from "@/components/TourList";
import DestCards from "@/components/DestCards";

export const metadata = {
  title: "Top Travel Destinations | Explore Thailand, Singapore & More",
  description:
    "Discover the best travel destinations with Destination To Paradise! Explore Thailand, Singapore, Malaysia, Pakistan, Bali, and Vietnam with our custom tours.",
};

export default function Destinations() {

  const destinationData = [
    {
      name: "Thailand",
      slug: "thailand",
      image: "/images/thailand.png", // Update with your actual image path
      description: "Famous for its opulent temples, rich cuisine and bustling markets, Thailand offers a truly cultural experience."
    },
    {
      name: "Singapore",
      slug: "singapore",
      image: "/images/singapore.png", // Update with your actual image path
      description: "Singapore combines a futuristic skyline with multicultural urban districts and lush green spaces."
    },
    {
      name: "Malaysia",
      slug: "malaysia",
      image: "/images/malaysia.png", // Update with your actual image path
      description: "A melting pot of cultures, Malaysia offers everything from the urban elegance of Kuala Lumpur to the pristine beaches of Langkawi."
    },
    {
      name: "Pakistan",
      slug: "pakistan",
      image: "/images/pakistan.png", // Update with your actual image path
      description: "From the towering peaks of the Karakoram to the rich cultural heritage of its cities, Pakistan is a land of daring adventure."
    },
    {
      name: "Vietnam",
      slug: "vietnam",
      image: "/images/vietnam.jpg", // Update with your actual image path
      description: "Vietnam is a tapestry of vibrant city life, colonial landmarks, and stunning natural landscapes."
    },
    {
      name: "Bali",
      slug: "bali",
      image: "/images/bali.jpg", // Update with your actual image path
      description: "Known for its forested volcanic mountains and iconic rice paddies, Bali is a spiritual and natural haven."
    },
  ];

  return (
    <main className="pt-12 min-h-screen bg-gray-100 pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] ">
        <Image
          src="/images/destbg.png"
          alt="Beautiful beach landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/5" /> */}

      </div>

      {/* Our Expertise Section */}
      <section
        style={{ marginBottom: "0", paddingBottom: "0" }}
        className="max-w-7xl mx-auto px-4 py-10 text-center"
      >
        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-px w-16 bg-[#312F93]"></div>
            <span className="text-l font-bold uppercase heading">
              our worldly collection
            </span>
            <div className="h-px w-16 bg-[#312F93]"></div>
          </div>
          <h3 style={{ color: "black" }} className="text-4xl font-bold mb-4">
          Explore Our Destinations
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Journey to the Heart of Paradise – Discover Your Perfect Getaway
          </p>
        </div>

        <DestCards destinations={destinationData}/>

      </section>
    </main>
  );
}