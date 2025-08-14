import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="hero" className="flex justify-evenly items-center bg-gradient-to-b from-blue-200 to-blue-50 p-36 ">
        <div id="hero-left" className="w-[700px] flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-blue-950">
            Precision Equipment for <br /> Tomorrow’s Discoveries</h1>
          <p className="text-xl text-gray-500">We supply quality scientific instruments and apparatus for schools, colleges, labs, and industries. Trusted service, reliable products, and fast delivery.</p>
          <Link href={"#"} className="text-gray-800 hover:text-shadow-2xs hover:text-shadow-blue-500"> Browse featured</Link>
          <p className="text-gray-700"> 500+ Products &nbsp; 150+ Institutions served &nbsp; 24/7 Helpdesk</p>
        </div>
        <div id="hero-right" className="w-[600px] ">
          <Image src="/hero-photo.jpg" alt="Hero Image" width={700} height={600} className="rounded-lg shadow-lg" />
        </div>
      </main>
      <section className="p-20 text-blue-950">
        <h2 className="text-3xl font-bold ml-10">Featured Products</h2>
        <p className="pl-10 text-gray-500">Handpicked bestsellers ready to shop</p>
        <div className="flex justify-around items-center flex-wrap gap-5 p-5">
          <div className="f-row">
            <Image src={"/hero-photo.jpg"} alt="product" width={300} height={150}
              className="rounded"></Image>
            <h3>Beakers</h3>
            <p>Monocular, 40x-1000x magnification, LED ilumination <br />
              <span className="text-blue-600">₹ 1,500</span></p>
            <Link href={"/"} className=" font-semibold hover:text-blue-900">Order Now </Link>
          </div>
          <div className="f-row">
            <Image src={"/hero-photo.jpg"} alt="product" width={300} height={150}
              className="rounded"></Image>
            <h3>Beakers</h3>
            <p>Monocular, 40x-1000x magnification, LED ilumination <br />
              <span className="text-blue-600">₹ 1,500</span></p>
            <Link href={"/"} className=" font-semibold hover:text-blue-900">Order Now </Link>
          </div>
          <div className="f-row">
            <Image src={"/hero-photo.jpg"} alt="product" width={300} height={150}
              className="rounded"></Image>
            <h3>Beakers</h3>
            <p>Monocular, 40x-1000x magnification, LED ilumination <br />
              <span className="text-blue-600">₹ 1,500</span></p>
            <Link href={"/"} className=" font-semibold hover:text-blue-900">Order Now </Link>
          </div>
          <div className="f-row">
            <Image src={"/hero-photo.jpg"} alt="product" width={300} height={150}
              className="rounded"></Image>
            <h3>Beakers</h3>
            <p>Monocular, 40x-1000x magnification, LED ilumination <br />
              <span className="text-blue-600">₹ 1,500</span></p>
            <Link href={"/"} className=" font-semibold hover:text-blue-900">Order Now </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
