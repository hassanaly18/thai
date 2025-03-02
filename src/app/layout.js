import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Destination To Paradise",
  description: "Your travel destination website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="87HQSwIo79syC7gKXV_TCtg5qSsnvLNy3tIZ0IQmlMg" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Destination To Paradise",
//   description: "Your travel destination website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
