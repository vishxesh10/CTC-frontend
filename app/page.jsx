import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex justify-evenly items-center bg-gradient-to-b from-blue-200 to-white p-36 max-sm:p-5 ">
        <div id="hero-left" className="w-[700px] max-sm:mt-20 m-2 flex flex-col gap-5 max-sm:gap-8">
          <h1 className="text-5xl font-bold text-blue-950 max-sm:text-2xl">
            Precision Equipment for <br /> Tomorrow’s Discoveries</h1>
          <p className="text-xl max-sm:text-[15px] max-sm:w-80 max-sm:mt-44 text-gray-500">We supply quality scientific instruments and apparatus for schools, colleges, labs, and industries. Trusted service, reliable products, and fast delivery.</p>
          <Link href={"#"} className="text-gray-800 hover:text-shadow-2xs hover:text-shadow-blue-500"> Browse featured</Link>
          <p className="text-gray-700 max-sm:text-[15px]"> 500+ Products &nbsp; 150+ Institutions served &nbsp; 24/7 Helpdesk</p>
        </div>
          <Image src="/hero-photo.jpg" alt="Hero Image" width={600} height={600} className="rounded-lg max-sm:w-64 max-sm:-translate-x-[320px] shadow-lg max-sm:-translate-y-10" />
      </main>

      <section className="p-5 max-sm:p-1 text-blue-950">
        <h2 className="text-3xl font-bold ml-10 max-sm:text-2xl">Featured Products</h2>
        <p className="pl-10 text-gray-500">Handpicked bestsellers ready to shop</p>
        <div className="flex justify-around items-center flex-wrap gap-5 max-sm:gap-1 p-5 max-sm:p-1">
          <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded w-40"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded w-40"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded w-40"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded w-40"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
