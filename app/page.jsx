import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex justify-evenly items-center bg-gradient-to-b from-blue-200 to-white p-36 max-sm:p-5">
        <div id="hero-left" className="w-[700px] max-sm:mt-20 m-2 flex flex-col gap-5 max-sm:gap-8">
          <h1 className="text-5xl font-bold text-blue-950 max-sm:text-2xl">
            Precision Equipment for <br /> Tomorrow's Discoveries</h1>
          <p className="text-xl max-sm:text-[15px] max-sm:w-80 max-sm:mt-44 text-gray-500">
            We supply quality scientific instruments and apparatus for schools, colleges, labs, and industries. 
            Trusted service, reliable products, and fast delivery.
          </p>
          <a href="#featured-products" className="text-gray-800 hover:text-shadow-2xs hover:text-shadow-blue-500">
            Browse featured
          </a>
          <p className="text-gray-700 max-sm:text-[15px]">
            500+ Products &nbsp; 150+ Institutions served &nbsp; 24/7 Helpdesk
          </p>
        </div>
        <Image 
          src="/hero-photo.jpg" 
          alt="Hero Image" 
          width={600} 
          height={600} 
          className="rounded-lg max-sm:w-64 max-sm:-translate-x-[320px] shadow-lg max-sm:-translate-y-10" 
        />
      </main>

      <section id="featured-products" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-2 text-center">Featured Products</h2>
          <p className="text-gray-500 text-center mb-8">Handpicked bestsellers ready to shop</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="h-48 bg-gray-50 rounded-md flex items-center justify-center mb-4">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={200}
                      height={150}
                      className="object-contain h-40 w-auto"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-end">
                    <Link 
                      href={`/products/order/${product.id}`}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                  <span className="inline-block mt-3 px-3 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
