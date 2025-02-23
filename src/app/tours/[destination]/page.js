// src/app/tours/[destination]/page.js
import TourInfo from "@/components/TourInfo";
import TourDetail from "@/components/TourDetail";
import Highlights from "@/components/Highlights";

const tourData = [
  {
    id: "pattaya-paradise", // Using slug as ID for better URL structure
    title: "Pattaya Paradise Experience",
    rating: 4.0,
    reviews: 43,
    mainImage: "/images/bg1.jpg",
    country: "Thailand",
    duration: 14,
    season: "March - April",
    categories: ["Culture", "Nature", "Sightseeing"],
    description:
      "Experience the beauty and culture of Pattaya with our comprehensive tour package...",
    price: 1299,
    images: ["/images/bg1.jpg", "/images/bg2.jpg"],
  },
];

const highlightsData = {
  mapImage: "/images/thailand-map.jpg",
  included: [
    "Accommodation",
    "Transportation",
    "Meals",
    "Guided Tours"
  ],
  notIncluded: [
    "International Airfare",
    "Travel Insurance",
    "Personal Expenses",
    "Optional Excursions"
  ],
  highlights: [
    "Marvel at the architectural wonder of the entirely wooden Sanctuary of Truth.",
    "Experience the vibrant nightlife on Pattaya's famous Walking Street.",
    "Stay in premium hotels with top-notch amenities and exceptional service.",
    "Savor diverse and delicious Thai culinary delights from street food to fine dining."
  ]
};

export async function generateStaticParams() {
  return tourData.map((tour) => ({
    destination: tour.id,
  }));
}

export default async function DestinationPage({ params }) {
  const { destination } = await params;
  const tour = tourData.find((t) => t.id === destination);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Tour not found</h1>
      </div>
    );
  }

  return (
    <main>
      <TourInfo {...tour} />
      <TourDetail
        description="Dive into the vibrant life of Pattaya with our Pattaya Paradise Experience. This tour offers an exhilarating blend of sun-soaked beaches, bustling night markets, and cultural landmarks like the Sanctuary of Truth."
        departureLocation="Pakistan"
        destinationLocation="Thailand"
      />
      <Highlights {...highlightsData} />
    </main>
  );
}

// const tourData = [
//   {
//     id: "pattaya-paradise",
//     title: "Pattaya Paradise Experience",
//     // ... rest of the data
//   },
//   // ... more tours
// ];

// const tourData = [
//   {
//     id: "pattaya-paradise",  // Using slug as ID for better URL structure
//     title: "Pattaya Paradise Experience",
//     rating: 4.0,
//     reviews: 43,
//     mainImage: "/images/bg1.jpg",
//     country: "Thailand",
//     duration: 14,
//     season: "March - April",
//     categories: ["Culture", "Nature", "Sightseeing"],
//     description: "Experience the beauty and culture of Pattaya with our comprehensive tour package...",
//     price: 1299,
//     images: [
//       "/images/bg2.jpg",
//       "/images/beach1.jpg",
//       // Add more images as needed
//     ]
//   },
//   // Add more tour data as needed
// ];

// export default function DestinationPage({ params }) {
//   const tour = tourData.find(t => t.id === params.destination);

//   if (!tour) {
//     return <div>Tour not found</div>;
//   }

//   return (
//     <main>
//       <TourInfo {...tour} />
//       {/* Add more sections/components here */}
//     </main>
//   );
// }

// You might also want to create a tourData.js file to store the data separately
// src/app/tours/data/tourData.js

// src/app/tours/[destination]/page.js
// import TourInfo from './TourInfo';
