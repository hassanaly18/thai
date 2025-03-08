// src/app/tours/[destination]/page.js
import TourInfo from "@/components/TourInfo";
import TourDetail from "@/components/TourDetail";
import Highlights from "@/components/Highlights";
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }) {
  const { destination } = await Promise.resolve(params); // Await params properly
  const capitalizedDestination = destination.charAt(0).toUpperCase() + destination.slice(1);

  return {
    title: `${capitalizedDestination} Tour Packages – Best ${capitalizedDestination} Travel Deals`,
    description: `Discover the best ${capitalizedDestination} tour packages with Destination To Paradise! Explore beaches, nightlife, and adventure. Book your trip now!`,
  };
}

// This data array stores all your tour information
const toursData = [
  {
    id: "thailand-paradise-escape",
    title: "Explore Thailand with the Paradise Escape Package",
    rating: 4.8,
    reviews: 86,
    mainImage: "/images/tour11.jpg",
    country: "Thailand",
    duration: 3,
    season: "Year Round",
    categories: ["Beach", "Culture", "Relaxation"],
    description: "Experience the best of Thailand with our Paradise Escape Package. Enjoy comfortable stays at Phuphaya Resort in Pattaya and All Season Hotel in Bangkok, daily breakfasts, exciting tours including Coral Island and Temple City tours, and private transfers. Perfect for romantic getaways, family vacations, or corporate events.",
    price: 85,
    departureLocation: "International Airport",
    destinationLocation: "Pattaya & Bangkok, Thailand",
    images: ["/images/tour11.jpg", "/images/tour12.jpg", "/images/tour13.jpg", "/images/tour14.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "2 nights at Phuphaya Resort, Pattaya",
        "1 night at All Season Hotel, Bangkok",
        "Daily breakfast at the hotel",
        "Coral Island tour with speedboat and lunch",
        "Temple City tour in Bangkok",
        "Private transfers"
      ],
      notIncluded: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      highlights: [
        "Special offer: $105 per person (2 pax), $85 per person (4 pax)",
        "Explore pristine Coral Island with speedboat",
        "Visit Bangkok's famous temples",
        "Enjoy comfortable accommodations in prime locations"
      ]
    }
  },
  {
    id: "thailand-cultural-adventure",
    title: "Discover Thailand with the Cultural Adventure Package",
    rating: 4.6,
    reviews: 52,
    mainImage: "/images/tour21.jpg",
    country: "Thailand",
    duration: 3,
    season: "October - April",
    categories: ["Culture", "History", "Adventure"],
    description: "Experience the wonders of Thailand with our Cultural Adventure Package. Enjoy a comfortable stay at All Season Hotel in Bangkok, daily breakfasts, and exciting full-day tours, including visits to Kanchanaburi and the floating market. Private airport transfers ensure a hassle-free journey.",
    price: 130,
    departureLocation: "International Airport",
    destinationLocation: "Bangkok, Thailand",
    images: ["/images/tour22.jpg", "/images/tour23.jpg", "/images/tour24.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "2 Nights at All Season Hotel in Bangkok",
        "Daily Breakfast at Hotel",
        "Full-day trip to Kanchanaburi with Lunch",
        "Full-day floating market tour",
        "All airport transfers (private basis)"
      ],
      notIncluded: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      highlights: [
        "Special discount rates: $140 per person (2 pax), $130 per person (4 pax)",
        "Explore the famous floating markets of Thailand",
        "Visit historic Kanchanaburi region",
        "Enjoy private transfers for a comfortable experience"
      ]
    }
  },
  {
    id: "thailand-ultimate-getaway",
    title: "Thailand Ultimate Getaway Package",
    rating: 4.7,
    reviews: 63,
    mainImage: "/images/tour23.jpg",
    country: "Thailand",
    duration: 5,
    season: "Year Round",
    categories: ["Beach", "City", "Exploration"],
    description: "Discover the beauty of Thailand with our Ultimate Getaway Package. Enjoy 5 days and 4 nights with comfortable stays in Pattaya and Bangkok, daily breakfasts, and exciting tours, including Coral Island and Bangkok city explorations. All transfers are conveniently arranged.",
    price: 95,
    departureLocation: "International Airport",
    destinationLocation: "Pattaya & Bangkok, Thailand",
    images: ["/images/tour21.jpg", "/images/tour24.jpg", "/images/tour13.jpg", "/images/tour23.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "2 Nights Accommodation in Pattaya",
        "2 Nights Accommodation in Bangkok",
        "Daily Breakfast",
        "Coral Island tour including Lunch",
        "Half-day Bangkok city tour",
        "Return Airport Transfers",
        "All tours and transfers on SIC basis"
      ],
      notIncluded: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      highlights: [
        "Minimum 4 persons: $95 per person",
        "Explore the beautiful Coral Island",
        "Discover Bangkok's cultural landmarks",
        "Perfect 5-day itinerary covering beach and city experiences"
      ]
    }
  },
  {
    id: "thailand-enchanting-explorer",
    title: "Thailand Enchanting Explorer Package",
    rating: 4.5,
    reviews: 48,
    mainImage: "/images/tour41.jpg",
    country: "Thailand",
    duration: 4,
    season: "Year Round",
    categories: ["Culture", "Market", "Nature"],
    description: "Experience Thailand's culture, cuisine, and landscape and create lasting memories with our exclusive travel package. Enjoy comfortable accommodations in Pratunam with daily breakfast and explore top attractions like Nong-Nooch Garden, Big Buddha Viewpoint, and the Floating Market.",
    price: 165,
    departureLocation: "International Airport",
    destinationLocation: "Pratunam, Thailand",
    images: ["/images/tour42.jpg", "/images/tour43.jpg", "/images/tour44.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "3 Nights Hotel In Pratunam With Breakfast",
        "Nong-Nooch Garden Tour in Pattaya",
        "Big-Buddha View Point In Pattaya",
        "Floating Market With Meaklong Railway Market",
        "All transportation and sightseeing"
      ],
      notIncluded: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      highlights: [
        "Only $165 per person for 4 days & 3 nights",
        "Visit the spectacular Nong-Nooch Tropical Garden",
        "Explore the iconic Big Buddha viewpoint",
        "Experience the authentic floating market and unique railway market"
      ]
    }
  },
  {
    id: "asia-tri-city-adventure",
    title: "Asia Tri-City Adventure Package",
    rating: 4.9,
    reviews: 72,
    mainImage: "/images/tour51.jpg",
    country: "Multiple",
    duration: 7,
    season: "Year Round",
    categories: ["City", "Multi-Country", "Culture"],
    description: "Discover the best of Singapore, Malaysia, and Thailand with our Tri-City Adventure Package. Enjoy 6 nights and 7 days of comfortable stays, daily breakfasts, and exciting city tours in Singapore, Kuala Lumpur, and Bangkok. Private airport transfers and intercity travel are included.",
    price: 429,
    departureLocation: "Singapore",
    destinationLocation: "Singapore, Malaysia & Thailand",
    images: ["/images/tour52.jpg", "/images/tour53.jpg", "/images/tour54.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "2 Nights at Value Hotel Thomson in Singapore",
        "2 Nights at Grand Continental in Malaysia",
        "2 Nights at Season Saim in Thailand",
        "Daily Breakfast at hotels",
        "City tours in Singapore, Kuala Lumpur, and Bangkok",
        "Private airport transfers",
        "Singapore to Kuala Lumpur coach ticket"
      ],
      notIncluded: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities",
        "Meals other than breakfast"
      ],
      highlights: [
        "Singapore package: $245 per person",
        "Malaysia package: $95 per person",
        "Thailand package: $89 per person",
        "Explore three amazing Southeast Asian cities",
        "Private transfers for a comfortable experience"
      ]
    }
  },
  {
    id: "ayutthaya-day-explorer",
    title: "Ayutthaya Day Explorer Package",
    rating: 4.7,
    reviews: 95,
    mainImage: "/images/tour61.jpg",
    country: "Thailand",
    duration: 1,
    season: "Year Round",
    categories: ["History", "Culture", "Day Trip"],
    description: "Uncover the rich history of Thailand with our Ayutthaya Day Explorer Package. Visit iconic landmarks like Bang Pa-In Palace, Wat Mahathat, and Wat Chaiwatthanaram, with guided tours and authentic Thai lunch included. Enjoy a seamless experience with hotel pick-up and drop-off.",
    price: 95,
    departureLocation: "Bangkok",
    destinationLocation: "Ayutthaya, Thailand",
    images: ["/images/tour62.jpg", "/images/tour63.jpg", "/images/tour64.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "Hotel Pick-Up and Drop-Off",
        "Professional English-speaking guide",
        "Entrance fees to all attractions",
        "Authentic Thai lunch at a local restaurant",
        "Air-conditioned transportation"
      ],
      notIncluded: [
        "Personal Expenses",
        "Optional Activities",
        "Gratuities for guide and driver"
      ],
      highlights: [
        "Visit the majestic Bang Pa-In Palace",
        "Explore Wat Mahathat with its famous Buddha head in tree roots",
        "Experience the architectural marvel of Wat Chaiwatthanaram",
        "Enjoy a delicious authentic Thai lunch"
      ]
    }
  },
  {
    id: "island-sunset-adventure",
    title: "7 Island Sunset Adventure",
    rating: 4.8,
    reviews: 126,
    mainImage: "/images/tour71.jpg",
    country: "Thailand",
    duration: 1,
    season: "October - April",
    categories: ["Beach", "Island", "Snorkeling"],
    description: "Experience the beauty of Krabi with our 7 Island Sunset Adventure. Visit stunning islands like Tup, Chicken, and Poda, snorkel in crystal-clear waters, and witness magical bioluminescent plankton. End the day with a breathtaking sunset.",
    price: 95,
    departureLocation: "Krabi",
    destinationLocation: "Krabi Islands, Thailand",
    images: ["/images/tour72.jpg", "/images/tour73.jpg", "/images/tour74.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "Hotel pick-up and drop-off",
        "Experienced local guide",
        "Snorkeling equipment",
        "Light refreshments",
        "Insurance"
      ],
      notIncluded: [
        "Personal Expenses",
        "Alcoholic beverages",
        "Optional Activities",
        "National Park fees"
      ],
      highlights: [
        "Visit Tup Island with its famous connecting sandbanks",
        "Explore Chicken Island known for its unique rock formation",
        "Relax on the beautiful Poda Island",
        "Experience the magical bioluminescent plankton",
        "Visit Railay Bay and Phra Nang Cave with stunning cliffs"
      ]
    }
  },
  {
    id: "phi-phi-island-escape",
    title: "Phi Phi Island Escape Tour",
    rating: 4.9,
    reviews: 158,
    mainImage: "/images/tour81.jpg",
    country: "Thailand",
    duration: 1,
    season: "November - April",
    categories: ["Beach", "Island", "Snorkeling"],
    description: "Experience the beauty of Phi Phi Islands with our Phi Phi Island Escape. Relax on Bamboo Island's white sands, explore Viking Cave, and snorkel in crystal-clear waters at Nui Bay. Enjoy a beachfront buffet lunch and visit iconic spots like Maya Bay and Monkey Bay.",
    price: 95,
    departureLocation: "Krabi",
    destinationLocation: "Phi Phi Islands, Thailand",
    images: ["/images/tour82.jpg", "/images/tour83.jpg", "/images/tour84.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "Hotel pick-up and drop-off",
        "Speedboat transfer to Phi Phi Islands",
        "Buffet lunch at a beachfront hotel",
        "Snorkeling equipment",
        "English-speaking guide",
        "Insurance"
      ],
      notIncluded: [
        "Personal Expenses",
        "Optional Activities",
        "National Park fees"
      ],
      highlights: [
        "Visit pristine Bamboo Island with its white-sand beaches",
        "Explore the famous Maya Bay, filming location of 'The Beach'",
        "Discover Viking Cave and its scenic views",
        "Enjoy snorkeling at Nui Bay with vibrant marine life",
        "Visit Monkey Bay to spot local wildlife"
      ]
    }
  },
  {
    id: "four-island-adventure",
    title: "Four Island Adventure Tour",
    rating: 4.6,
    reviews: 103,
    mainImage: "/images/tour91.jpg",
    country: "Thailand",
    duration: 1,
    season: "November - April",
    categories: ["Beach", "Island", "Swimming"],
    description: "Discover Krabi's stunning beaches with our Four Island Adventure. Visit iconic spots like Chicken Island, Poda Island, Talay Waek, and Pranang Cave Bay. Swim, snorkel, and relax on beautiful sandy beaches.",
    price: 95,
    departureLocation: "Krabi",
    destinationLocation: "Krabi Islands, Thailand",
    images: ["/images/tour92.jpg", "/images/tour93.jpg", "/images/tour94.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "Hotel pick-up and drop-off",
        "Boat transportation",
        "Mini buffet lunch",
        "Snorkeling equipment",
        "English-speaking guide",
        "Insurance"
      ],
      notIncluded: [
        "Personal Expenses",
        "Optional Activities",
        "National Park fees"
      ],
      highlights: [
        "Visit Talay-Waek (Sand Bank) between Tub and Chicken Island",
        "Take pictures with Chicken Island, a symbol of Krabi",
        "Relax on beautiful Poda Island",
        "Explore Pranang Cave Bay and the famous Sea Goddess Shrine",
        "Enjoy swimming and snorkeling in crystal-clear waters"
      ]
    }
  },
  {
    id: "james-bond-island-tour",
    title: "James Bond Island Tour",
    rating: 4.7,
    reviews: 142,
    mainImage: "/images/tour101.jpg",
    country: "Thailand",
    duration: 1,
    season: "Year Round",
    categories: ["Island", "Canoeing", "Sightseeing"],
    description: "Explore the famous James Bond Island with our James Bond Island Tour. Visit Monkey Cave, enjoy sea cave canoeing at Talu Island, and explore Phang-Nga Bay's stunning landscapes. Enjoy a scenic boat ride and lunch at a floating Muslim village.",
    price: 95,
    departureLocation: "Phuket",
    destinationLocation: "Phang Nga Bay, Thailand",
    images: ["/images/tour102.jpg", "/images/tour103.jpg", "/images/tour104.jpg"],
    highlightsData: {
      mapImage: "/images/thailand-map.jpg",
      included: [
        "Hotel pick-up and drop-off by minibus",
        "Long tail boat ride",
        "Lunch at Muslim Village (Koh Panyee)",
        "Sea cave canoeing at Talu Island",
        "English-speaking guide",
        "Insurance"
      ],
      notIncluded: [
        "Personal Expenses",
        "Optional Activities",
        "National Park fees"
      ],
      highlights: [
        "Visit Monkey Cave (Suwankuha Temple)",
        "Explore the famous James Bond Island (Khao Ping Kan)",
        "Experience sea cave canoeing at Talu Island",
        "Enjoy a traditional lunch at the floating Muslim Village",
        "Take in the breathtaking scenery of Phang-Nga Bay National Park"
      ]
    }
  }
];

// This function generates the static paths for all tours
export async function generateStaticParams() {
  return toursData.map((tour) => ({
    destination: tour.id,
  }));
}

export default async function DestinationPage({ params }) {
  const { destination } = await params;
  
  // Find the tour data based on the destination slug
  const tour = toursData.find((t) => t.id === destination);

  // If no tour is found, show the not found page
  if (!tour) {
    notFound();
  }

  return (
    <main>
      <TourInfo 
        title={tour.title}
        rating={tour.rating}
        reviews={tour.reviews}
        mainImage={tour.mainImage}
        country={tour.country}
        duration={tour.duration}
        season={tour.season}
        categories={tour.categories}
        price={tour.price}
      />
      <TourDetail
        description={tour.description}
        departureLocation={tour.departureLocation}
        destinationLocation={tour.destinationLocation}
        destinationImages={tour.images}
      />
      <Highlights {...tour.highlightsData} />
    </main>
  );
}