import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">About Chitra Trading Company</h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in laboratory equipment and scientific solutions
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                <p className="mt-2 max-w-4xl text-gray-600">
                  Founded with a vision to provide high-quality laboratory equipment, Chitra Trading Company has been serving
                  the scientific community with dedication and excellence. Our commitment to quality and customer satisfaction
                  has made us a trusted name in the industry.
                </p>
              </div>

              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To provide reliable, high-quality laboratory equipment and exceptional service to support scientific
                  research and education.
                </p>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Our Values</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Commitment to quality and excellence</li>
                  <li>Customer satisfaction as our top priority</li>
                  <li>Integrity in all our business practices</li>
                  <li>Continuous improvement and innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
