import TourInfo from "@/components/TourInfo";
import TourDetail from "@/components/TourDetail";
import Highlights from "@/components/Highlights";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function generateMetadata({ params }) {
  const { destination } = await params;

  const capitalizedDestination =
    destination.charAt(0).toUpperCase() + destination.slice(1);

  return {
    title: `${capitalizedDestination} Tour Packages – Best ${capitalizedDestination} Travel Deals`,
    description: `Discover the best ${capitalizedDestination} tour packages with Destination To Paradise! Explore beaches, nightlife, and adventure. Book your trip now!`,
  };
}

export async function generateStaticParams() {
  const { data: tours, error } = await supabase
    .from("tours")
    .select("id");

  if (error) {
    console.error("Error fetching tour IDs:", error);
    return [];
  }

  return (tours ?? []).map((tour) => ({
    destination: tour.id,
  }));
}

// Safely parse JSON fields
const safeJsonParse = (value, fallback = []) => {
  if (!value) return fallback;

  try {
    return typeof value === "string" ? JSON.parse(value) : value;
  } catch (err) {
    console.error("JSON parse error:", err);
    return fallback;
  }
};

export default async function DestinationPage({ params }) {
  const { destination } = await params;

  const { data: tour, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", destination)
    .single();

  if (error || !tour) {
    console.error(error);
    notFound();
  }

  const highlights = safeJsonParse(tour.highlights_data, {});

  const processedTour = {
    id: tour.id,
    title: tour.title,
    rating: Number(tour.rating) || 0,
    reviews: Number(tour.reviews) || 0,

    // Temporary fix for double slashes in image URLs
    mainImage: tour.main_image
      ? tour.main_image.replace("/tour-images//", "/tour-images/")
      : "",

    country: tour.country,
    duration: Number(tour.duration) || 0,
    season: tour.season,

    categories: safeJsonParse(tour.categories, []),

    description: tour.description,

    price: Number(tour.price) || 0,

    departureLocation: tour.departure_location,
    destinationLocation: tour.destination_location,

    images: safeJsonParse(tour.images, []).map((img) =>
      typeof img === "string"
        ? img.replace("/tour-images//", "/tour-images/")
        : img
    ),

    highlightsData: {
      included: highlights.included || [],
      notIncluded: highlights.notIncluded || [],
      highlights: highlights.highlights || [],
      mapImage: highlights.mapImage || "/images/thailand-map.jpg",
    },
  };

  return (
    <main>
      <TourInfo
        title={processedTour.title}
        rating={processedTour.rating}
        reviews={processedTour.reviews}
        mainImage={processedTour.mainImage}
        country={processedTour.country}
        duration={processedTour.duration}
        season={processedTour.season}
        categories={processedTour.categories}
        price={processedTour.price}
      />

      <TourDetail
        description={processedTour.description}
        departureLocation={processedTour.departureLocation}
        destinationLocation={processedTour.destinationLocation}
        destinationImages={processedTour.images}
      />

      <Highlights {...processedTour.highlightsData} />
    </main>
  );
}



// // src/app/tours/[destination]/page.js
// import TourInfo from "@/components/TourInfo";
// import TourDetail from "@/components/TourDetail";
// import Highlights from "@/components/Highlights";
// import { notFound } from "next/navigation";
// import { createClient } from "@supabase/supabase-js";

// export async function generateMetadata({ params }) {
//   const { destination } = params;
//   const capitalizedDestination =
//     destination.charAt(0).toUpperCase() + destination.slice(1);

//   return {
//     title: `${capitalizedDestination} Tour Packages – Best ${capitalizedDestination} Travel Deals`,
//     description: `Discover the best ${capitalizedDestination} tour packages with Destination To Paradise! Explore beaches, nightlife, and adventure. Book your trip now!`,
//   };
// }

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
// );

// export async function generateStaticParams() {
//   const { data: tours, error } = await supabase.from("tours").select("id");

//   if (error) {
//     console.error("Error fetching slugs:", error);
//     return [];
//   }

//   return tours.map((tour) => ({
//     destination: tour.id,
//   }));
// }

// // Helper function to safely parse JSON
// const safeJsonParse = (str, fallback = []) => {
//   try {
//     return typeof str === "string" ? JSON.parse(str) : str;
//   } catch (e) {
//     console.error("JSON parse error:", e);
//     return fallback;
//   }
// };

// export default async function DestinationPage({ params }) {
//   const { destination } = params;

//   // Fetch tour data from Supabase
//   const { data: tour, error } = await supabase
//     .from("tours")
//     .select("*")
//     .eq("id", destination)
//     .single();

//   if (error || !tour) {
//     notFound();
//   }

//   // Process highlights_data with additional validation
//   const processHighlights = () => {
//     try {
//       const highlights = safeJsonParse(tour.highlights_data, {});
//       return {
//         included: highlights?.included || [],
//         notIncluded: highlights?.notIncluded || [],
//         highlights: highlights?.highlights || [],
//         mapImage: highlights?.mapImage || "/images/thailand-map.jpg",
//       };
//     } catch (e) {
//       console.error("Error processing highlights:", e);
//       return {
//         included: [],
//         notIncluded: [],
//         highlights: [],
//         mapImage: "/images/thailand-map.jpg",
//       };
//     }
//   };

//   // Map the tour data with proper type conversions
//   const processedTour = {
//     id: tour.id,
//     title: tour.title,
//     rating: Number(tour.rating) || 0,
//     reviews: Number(tour.reviews) || 0,
//     mainImage: tour.main_image.replace("/tour-images//", "/tour-images/"),
//     country: tour.country,
//     duration: Number(tour.duration) || 0,
//     season: tour.season,
//     categories: safeJsonParse(tour.categories),
//     description: tour.description,
//     price: Number(tour.price) || 0,
//     departureLocation: tour.departure_location,
//     destinationLocation: tour.destination_location,
//     images: safeJsonParse(tour.images),
//     highlightsData: processHighlights(),
//   };

//   return (
//     <main>
//       <TourInfo
//         title={processedTour.title}
//         rating={processedTour.rating}
//         reviews={processedTour.reviews}
//         mainImage={processedTour.mainImage}
//         country={processedTour.country}
//         duration={processedTour.duration}
//         season={processedTour.season}
//         categories={processedTour.categories}
//         price={processedTour.price}
//       />
//       <TourDetail
//         description={processedTour.description}
//         departureLocation={processedTour.departureLocation}
//         destinationLocation={processedTour.destinationLocation}
//         destinationImages={processedTour.images}
//       />
//       <Highlights {...processedTour.highlightsData} />
//     </main>
//   );
// }
