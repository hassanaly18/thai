// import Link from 'next/link';

// export default function Tours() {
//   const tours = [
//     { name: 'Thailand', slug: 'pattaya-paradise' },
//     { name: 'Japan', slug: 'japan' },
//     { name: 'Egypt', slug: 'egypt' }
//   ];

//   return (
//     <main className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Available Tours</h1>
//       <ul className="space-y-2">
//         {tours.map((tour) => (
//           <li key={tour.slug}>
//             <Link href={`/tours/${tour.slug}`} className="text-blue-600 hover:underline">
//               {tour.name} Tour
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import TourList from "@/components/TourList";

export default function Tours() {
  const tours = [
    { name: "Thailand", slug: "pattaya-paradise" },
    { name: "Japan", slug: "japan" },
    { name: "Egypt", slug: "egypt" },
  ];

  const tourData = [
    {
      id: 1,
      title: "3 Days Island Hopping in Krabi",
      description:
        "Explore the stunning islands around Krabi over three magical days. Enjoy snorkeling in crystal-clear waters.",
      price: 9500,
      image: "/images/bg1.jpg",
      slug: "krabi-island-hopping",
    },
    {
      id: 2,
      title: "2 Days Bangkok City Break",
      description:
        "Dive into the heart of Thailand with a compact 2-day tour of Bangkok's iconic temples and bustling street markets.",
      price: 6300,
      image: "/images/bg2.jpg",
      slug: "bangkok-city-break",
    },
    {
      id: 3,
      title: "4 Days Adventure in Chiang Mai",
      description:
        "Embark on an adventurous 4-day journey to Chiang Mai, featuring elephant sanctuaries, trekking in the jungle, and a visit to the tribal villages.",
      price: 9500,
      image: "/images/beach1.jpg",
      slug: "chiangmai-adventure",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 mb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/tourbg.png"
          alt="Beautiful beach landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute pt-16 inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-2">TOURS</h1>
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

        {/* Tours Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link 
              href={`/tours/${tour.slug}`}
              key={tour.slug}
              className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={`/${tour.slug}.jpg`} 
                alt={`${tour.name} Tour`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover the beauty of {tour.name}
                </p>
              </div>
            </Link>
          ))}
        </div> */}
      </section>
      <TourList tours={tourData} />
    </main>
  );
}
