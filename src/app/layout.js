
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"

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
    icon: "/og-image1.png" ,
  },
  openGraph: {
    title: "Destination To Paradise – Thailand's Best Travel Agency",
    description:
      "Discover Thailand's top travel agency for luxury, adventure, and custom tour packages. Book your dream vacation now!",
    url: "https://www.destinationtoparadise.com",
    type: "website",
    images: [
      {
        url: "https://www.destinationtoparadise.com/og-image1.png",
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
      <meta name="google-site-verification" content="87HQSwIo79syC7gKXV_TCtg5qSsnvLNy3tIZ0IQmlMg" />
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton/>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}