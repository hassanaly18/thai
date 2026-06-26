import Link from "next/link";
import Image from "next/image";
import TourList from "@/components/TourList";
import { createClient } from "@supabase/supabase-js";

export const metadata = {
  title: "Best Thailand Tours & Vacation Packages | Destination To Paradise",
  description:
    "Explore the best Thailand tours! From Bangkok to Phuket, Pattaya to Krabi, book luxury & budget-friendly travel packages. Customize your dream trip today!",
};

export default async function Tours() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: tours, error } = await supabase
    .from("tours")
    .select("id, title, description, price, main_image");

  if (error) {
    console.error("Error fetching tours:", error);
    return <div>Error loading tours</div>;
  }

  // Map the data to match your existing structure
  const tourData = (tours ?? []).map((tour) => ({
    id: tour.id,
    title: tour.title,
    description: tour.description,
    price: tour.price,
    image: tour.main_image,
    slug: tour.id,
  }));

  return (
    <main className="min-h-screen bg-gray-100 mb-12">
      {/* Hero Section */}
      <div className="heroPic relative h-[60vh] w-full">
        <Image
          src="/images/tourbg.png"
          alt="Destination To Paradise"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute pt-16 inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="headerText text-6xl font-bold mb-2">TOURS</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Tours</span>
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
              tours and packages
            </span>
            <div className="h-px w-16 bg-[#312F93]"></div>
          </div>
          <h3 style={{ color: "black" }} className="text-4xl font-bold mb-4">
            Discover Our Travel Packages
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Expertly Curated Journeys Designed to Inspire and Transform Your
            Next Travel Adventure
          </p>
        </div>

        <TourList tours={tourData} />
      </section>
    </main>
  );
}
