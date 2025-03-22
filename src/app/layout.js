import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Destination To Paradise | Best Thailand Tour Agency",
  description:
    "Explore Thailand with Destination To Paradise – the best travel agency in Bangkok. Custom tour packages for Phuket, Krabi, Pattaya & more. Book now!",
  keywords: [
    "Thailand tour packages",
    "best Thailand travel agency",
    "Bangkok holiday packages",
    "Thailand honeymoon tours",
    "Phuket island tours",
    "custom Thailand trips",
    "Singapore Malaysia Vietnam tours",
    "Destination To Paradise",
    "Paradise to Destination",
    "Thailand travel agency",
    "Thailand tour agency",
    "Bangkok tour agency",
    "Thailand vacation packages",
  ],
  icons: {
    icon: "/og-image1.png",
  },
  openGraph: {
    title: "Destination To Paradise – Thailand's Best Travel Agency",
    description:
      "Discover Thailand's top travel agency for luxury, adventure, and custom tour packages. Book your dream vacation now!",
    url: "https://www.destinationtoparadise.com",
    type: "website",
    images: [
      {
        url: "https://www.destinationtoparadise.com/og-image-new.png",
        width: 1200,
        height: 630,
        alt: "Destination To Paradise",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="87HQSwIo79syC7gKXV_TCtg5qSsnvLNy3tIZ0IQmlMg"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Destination To Paradise" />
        <link rel="canonical" href="https://www.destinationtoparadise.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Destination To Paradise" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Destination To Paradise",
  "url": "https://www.destinationtoparadise.com",
  "logo": "https://www.destinationtoparadise.com/og-image1.png",
  "description": "Best travel agency in Bangkok, offering Thailand tours to Phuket, Krabi, Pattaya & more.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bangkok Thailand",
    "addressLocality": "Bangkok",
    "addressCountry": "TH",
    "postalCode": "10100"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+66992262260",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/share/1ECGicHA6H/?mibextid=wwXIfr",
    "https://www.instagram.com/paradise_destination_",
    "https://www.tiktok.com/@paradisedestination.63"
  ],  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "321"
  },
  "offers": {
    "@type": "Offer",
    "name": "Thailand Tour Packages",
    "priceCurrency": "USD",
    "price": "85",
    "availability": "https://schema.org/InStock",
    "url": "https://www.destinationtoparadise.com/tours"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tour Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Thailand Paradise Escape",
        "url": "https://www.destinationtoparadise.com/tour/thailand-paradise-escape",
        "priceCurrency": "USD",
        "price": "85"
      },
      {
        "@type": "Offer",
        "name": "Cultural Adventure Package",
        "url": "https://www.destinationtoparadise.com/tour/thailand-cultural-adventure",
        "priceCurrency": "USD",
        "price": "130"
      },
      {
        "@type": "Offer",
        "name": "Ultimate Getaway Package",
        "url": "https://www.destinationtoparadise.com/tour/thailand-ultimate-getaway",
        "priceCurrency": "USD",
        "price": "95"
      },
      {
        "@type": "Offer",
        "name": "James Bond Island Tour",
        "url": "https://www.destinationtoparadise.com/tour/james-bond-island-tour",
        "priceCurrency": "USD",
        "price": "95"
      }
    ]
  }
}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
