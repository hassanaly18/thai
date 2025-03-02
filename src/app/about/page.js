import Link from "next/link";
import Image from "next/image";
import Journey from "@/components/Journey";
import Mission from "@/components/Mission";
import Future from "@/components/Future";

export default function Tours() {

  return (
    <main className="min-h-screen bg-gray-100 mb-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/aboutbg.png"
          alt="Beautiful beach landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute pt-16 inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-2">About</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <section
        style={{ marginBottom: "0", paddingBottom: "0" }}
        className="max-w-7xl mx-auto px-4 py-16 text-center"
      >
        <div className="mb-0">
          <div className="flex justify-center items-center gap-2 mb-0">
            <div className="h-px w-16 bg-[#312F93]"></div>
            <span className="text-l font-bold uppercase heading">
              about us
            </span>
            <div className="h-px w-16 bg-[#312F93]"></div>
          </div>
        </div>

        <Journey/>
        <Mission/>
       

      </section>
      <Future/>
    </main>
  );
}
