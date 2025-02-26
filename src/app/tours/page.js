import Link from "next/link";
import Image from "next/image";
import TourList from "@/components/TourList";

export default function Tours() {
  const tourData = [
    {
      id: 1,
      title: "Explore Thailand with the Paradise Escape Package",
      description: `Experience the best of Thailand with our Paradise Escape Package. Enjoy comfortable stays, daily breakfasts, exciting tours, and private transfers. Perfect for romantic getaways, family vacations, or corporate events. Contact us today to plan your dream trip!`,
      price: 85,
      image: "/images/bg1.jpg",
      slug: "thailand-paradise-escape",
    },
    {
      id: 2,
      title: "Discover Thailand with the Cultural Adventure Package",
      description:`Experience the wonders of Thailand with our Cultural Adventure Package. Enjoy a comfortable stay in Bangkok, daily breakfasts, and exciting full-day tours, including visits to Kanchanaburi and the floating market. Private airport transfers ensure a hassle-free journey. Contact us today to start your adventure!`,
      price: 130,
      image: "/images/bg2.jpg",
      slug: "thailand-cultural-adventure",
    },
    {
      id: 3,
      title: "Thailand Ultimate Getaway Package",
      description:`Discover the beauty of Thailand with our Ultimate Getaway Package. Enjoy 5 days and 4 nights with comfortable stays in Pattaya and Bangkok, daily breakfasts, and exciting tours, including Coral Island and Bangkok city explorations. All transfers are conveniently arranged. Contact us today to plan your perfect escape!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "thailand-ultimate-getaway",
    },
    {
      id: 4,
      title: "Thailand Enchanting Explorer Package",
      description:`Experience the charm of Thailand with our Enchanting Explorer Package. Enjoy 4 days and 3 nights in Pratunam with daily breakfasts, and explore top attractions like Nong-Nooch Garden, Big Buddha Viewpoint, and the Floating Market. Book now for an unforgettable adventure!`,
      price: 165,
      image: "/images/beach1.jpg",
      slug: "thailand-enchanting-explorer",
    },
    {
      id: 5,
      title: "Asia Tri-City Adventure Package",
      description:`Discover the best of Singapore, Malaysia, and Thailand with our Tri-City Adventure Package. Enjoy 6 nights and 7 days of comfortable stays, daily breakfasts, and exciting city tours in Singapore, Kuala Lumpur, and Bangkok. Private airport transfers and intercity travel are included. Book now for an unforgettable journey!`,
      price: 89,
      image: "/images/beach1.jpg",
      slug: "asia-tri-city-adventure",
    },
    {
      id: 6,
      title: "Ayutthaya Day Explorer Package",
      description:`Uncover the rich history of Thailand with our Ayutthaya Day Explorer Package. Visit iconic landmarks like Bang Pa-In Palace, Wat Mahathat, and Wat Chaiwatthanaram, with guided tours and authentic Thai lunch included. Enjoy a seamless experience with hotel pick-up and drop-off. Book now for an unforgettable cultural journey!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "ayutthaya-day-explorer",
    },
    {
      id: 7,
      title: "7 Island Sunset Adventure",
      description:`Experience the beauty of Krabi with our 7 Island Sunset Adventure. Visit stunning islands like Tup, Chicken, and Poda, snorkel in crystal-clear waters, and witness magical bioluminescent plankton. End the day with a breathtaking sunset. Book now for an unforgettable island-hopping experience!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "island-sunset-adventure",
    },
    {
      id: 8,
      title: "Phi Phi Island Escape Tour",
      description:`Experience the beauty of Phi Phi Islands with our Phi Phi Island Escape. Relax on Bamboo Island's white sands, explore Viking Cave, and snorkel in crystal-clear waters at Nui Bay. Enjoy a beachfront buffet lunch and visit iconic spots like Maya Bay and Monkey Bay. Book now for an unforgettable island adventure!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "phi-phi-island-escape",
    },
    {
      id: 9,
      title: "Four Island Adventure Tour",
      description:`Discover Krabi's stunning beaches with our Four Island Adventure. Visit iconic spots like Chicken Island, Poda Island, Talay Waek, and Pranang Cave Bay. Swim, snorkel, and relax on beautiful sandy beaches. Book now for an unforgettable day trip!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "four-island-adventure",
    },
    {
      id: 10,
      title: "James Bond Island Tour",
      description:`Explore the famous James Bond Island with our James Bond Island Tour. Visit Monkey Cave, enjoy sea cave canoeing at Talu Island, and explore Phang-Nga Bay's stunning landscapes. Enjoy a scenic boat ride and lunch at a floating Muslim village. Book now for an unforgettable adventure!`,
      price: 95,
      image: "/images/beach1.jpg",
      slug: "james-bond-island-tour",
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

        <TourList tours={tourData} />
      </section>
    </main>
  );
}




// import Link from "next/link";
// import Image from "next/image";
// import TourList from "@/components/TourList";

// export default function Tours() {
//   const tours = [
//     { name: "Thailand", slug: "pattaya-paradise" },
//     { name: "Japan", slug: "japan" },
//     { name: "Egypt", slug: "egypt" },
//   ];

//   const tourData = [
//     {
//       id: 1,
//       title: "Explore Thailand with the Paradise Escape Package",
//       description: `Experience the best of Thailand with our Paradise Escape Package. Enjoy comfortable stays, daily breakfasts, exciting tours, and private transfers. Perfect for romantic getaways, family vacations, or corporate events. Contact us today to plan your dream trip!`,
//       price: 85,
//       image: "/images/bg1.jpg",
//       slug: "thailand-paradise-escape",
//     },
//     {
//       id: 2,
//       title: "Discover Thailand with the Cultural Adventure Package",
//       description:`Experience the wonders of Thailand with our Cultural Adventure Package. Enjoy a comfortable stay in Bangkok, daily breakfasts, and exciting full-day tours, including visits to Kanchanaburi and the floating market. Private airport transfers ensure a hassle-free journey. Contact us today to start your adventure!`,
//       price: 130,
//       image: "/images/bg2.jpg",
//       slug: "thailand-cultural-adventure",
//     },
//     {
//       id: 3,
//       title: "Thailand Ultimate Getaway Package",
//       description:`Discover the beauty of Thailand with our Ultimate Getaway Package. Enjoy 5 days and 4 nights with comfortable stays in Pattaya and Bangkok, daily breakfasts, and exciting tours, including Coral Island and Bangkok city explorations. All transfers are conveniently arranged. Contact us today to plan your perfect escape!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 4,
//       title: "Thailand Enchanting Explorer Package",
//       description:`Experience the charm of Thailand with our Enchanting Explorer Package. Enjoy 4 days and 3 nights in Pratunam with daily breakfasts, and explore top attractions like Nong-Nooch Garden, Big Buddha Viewpoint, and the Floating Market. Book now for an unforgettable adventure!`,
//       price: 165,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 5,
//       title: "Asia Tri-City Adventure Package",
//       description:`Discover the best of Singapore, Malaysia, and Thailand with our Tri-City Adventure Package. Enjoy 6 nights and 7 days of comfortable stays, daily breakfasts, and exciting city tours in Singapore, Kuala Lumpur, and Bangkok. Private airport transfers and intercity travel are included. Book now for an unforgettable journey!`,
//       price: 89,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 6,
//       title: "Ayutthaya Day Explorer Package",
//       description:`Uncover the rich history of Thailand with our Ayutthaya Day Explorer Package. Visit iconic landmarks like Bang Pa-In Palace, Wat Mahathat, and Wat Chaiwatthanaram, with guided tours and authentic Thai lunch included. Enjoy a seamless experience with hotel pick-up and drop-off. Book now for an unforgettable cultural journey!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 7,
//       title: "7 Island Sunset Adventure",
//       description:`Experience the beauty of Krabi with our 7 Island Sunset Adventure. Visit stunning islands like Tup, Chicken, and Poda, snorkel in crystal-clear waters, and witness magical bioluminescent plankton. End the day with a breathtaking sunset. Book now for an unforgettable island-hopping experience!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 8,
//       title: "Phi Phi Island Escape Tour",
//       description:`Experience the beauty of Phi Phi Islands with our Phi Phi Island Escape. Relax on Bamboo Island’s white sands, explore Viking Cave, and snorkel in crystal-clear waters at Nui Bay. Enjoy a beachfront buffet lunch and visit iconic spots like Maya Bay and Monkey Bay. Book now for an unforgettable island adventure!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 9,
//       title: "Four Island Adventure Tour",
//       description:`Discover Krabi’s stunning beaches with our Four Island Adventure. Visit iconic spots like Chicken Island, Poda Island, Talay Waek, and Pranang Cave Bay. Swim, snorkel, and relax on beautiful sandy beaches. Book now for an unforgettable day trip!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//     {
//       id: 10,
//       title: "James Bond Island Tour",
//       description:`Explore the famous James Bond Island with our James Bond Island Tour. Visit Monkey Cave, enjoy sea cave canoeing at Talu Island, and explore Phang-Nga Bay’s stunning landscapes. Enjoy a scenic boat ride and lunch at a floating Muslim village. Book now for an unforgettable adventure!`,
//       price: 95,
//       image: "/images/beach1.jpg",
//       slug: "chiangmai-adventure",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-gray-100 mb-12">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] w-full">
//         <Image
//           src="/images/tourbg.png"
//           alt="Beautiful beach landscape"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/45" />

//         {/* Hero Content */}
//         <div className="absolute pt-16 inset-0 flex flex-col items-center justify-center text-white">
//           <h1 className="text-6xl font-bold mb-2">TOURS</h1>
//           <div className="flex items-center gap-2 text-lg">
//             <Link href="/" className="hover:underline">
//               Home
//             </Link>
//             <span>/</span>
//             <span>Tours</span>
//           </div>
//         </div>
//       </div>

//       {/* Our Expertise Section */}
//       <section
//         style={{ marginBottom: "0", paddingBottom: "0" }}
//         className="max-w-7xl mx-auto px-4 py-16 text-center"
//       >
//         <div className="mb-12">
//           <div className="flex justify-center items-center gap-2 mb-4">
//             <div className="h-px w-16 bg-[#312F93]"></div>
//             <span className="text-l font-bold uppercase heading">
//               tours and packages
//             </span>
//             <div className="h-px w-16 bg-[#312F93]"></div>
//           </div>
//           <h3 style={{ color: "black" }} className="text-4xl font-bold mb-4">
//             Discover Our Travel Packages
//           </h3>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Expertly Curated Journeys Designed to Inspire and Transform Your
//             Next Travel Adventure
//           </p>
//         </div>

//         {/* Tours Grid */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {tours.map((tour) => (
//             <Link 
//               href={`/tours/${tour.slug}`}
//               key={tour.slug}
//               className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
//             >
//               <Image
//                 src={`/${tour.slug}.jpg`} 
//                 alt={`${tour.name} Tour`}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
//                 <p className="opacity-0 group-hover:opacity-100 transition-opacity">
//                   Discover the beauty of {tour.name}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div> */}
//       </section>
//       <TourList tours={tourData} />
//     </main>
//   );
// }

