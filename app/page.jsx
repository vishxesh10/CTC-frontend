import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <div id="hero" className="flex justify-evenly items-center bg-gradient-to-b from-blue-200 to-blue-50 p-20 ">
        <div id="hero-left" className="w-[600px] flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-blue-950">
          Precision Equipment for <br /> Tomorrow’s Discoveries</h1>
        <p>We supply quality scientific instruments and apparatus for schools, colleges, labs, and industries. Trusted service, reliable products, and fast delivery.</p>
        <Link href={"#"}> Browse featured</Link>
        <p>500+ Products &nbsp; 150+ Institutions served &nbsp; 24/7 Helpdesk</p>
      </div>
      <div id="hero-right" className="w-[600px] ">
        <Image src="/hero-photo.jpg" alt="Hero Image" width={600} height={500} className="rounded-lg shadow-lg" />
      </div>
      </div>
    </main>
    </>
  );
}
