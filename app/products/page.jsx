import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";

export default function Products() {
  return (
    <>
      <Navbar/>
      <h2 className="text-4xl font-bold px-10 m-5 mt-10">Our Products</h2>
      <p className=" px-10 m-5 text-xl">explore our products</p>
      <div className="flex justify-around items-center flex-wrap gap-5 p-5">
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div> 
        <div className="product">
          <Image src={"/beaker3.png"} alt="product" width={300} height={150} className="rounded"></Image>
          <h3 >Beakers</h3>
          <p>Monocular, 40x-1000x magnification, LED ilumination <br />
            <span className="text-blue-600"> ₹ 1,500</span></p>
          <Link href={"/"} className="font-semibold hover:text-blue-900">
            Order Now </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
