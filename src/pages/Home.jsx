const Home = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Empowering the Future of Electronics
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            At Xpertism, we deliver cutting-edge electronic devices and solutions for every industry—automotive, medical, aerospace, and more.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Xpertism</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Xpertism is a forward-thinking company committed to delivering innovative electronic devices across industries.
            Our solutions power smart systems in Automotive, Medical, Aerospace, Industrial Automation, and more.
            We focus on quality, performance, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Category Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="/assets/sensor.png"
                alt="Sensors"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Sensors</h3>
              <p className="text-gray-600 mt-2">Precision sensors for temperature, pressure, and motion control.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="/assets/module.png"
                alt="Modules"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Modules</h3>
              <p className="text-gray-600 mt-2">Plug-and-play modules for rapid development and prototyping.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="/assets/controller.png"
                alt="Controllers"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Controllers</h3>
              <p className="text-gray-600 mt-2">Smart controllers for automation and industrial systems.</p>
            </div>
          </div>
        </div>
      </section>

    {/* Applications Overview Section */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-10">Applications Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Application Card */}
      <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
        <img src="/assets/automotive.png" alt="Automotive" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-700">Automotive</h3>
        <p className="text-gray-700 mt-2">Sensors, modules, and control systems for vehicle automation.</p>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
        <img src="/assets/medical.png" alt="Medical" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-700">Medical</h3>
        <p className="text-gray-700 mt-2">Precision devices used in diagnostics, monitoring, and therapy.</p>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
        <img src="/assets/aerospace.png" alt="Aerospace" className="h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-700">Aerospace</h3>
        <p className="text-gray-700 mt-2">High-performance systems for avionics and space-grade electronics.</p>
      </div>
    </div>
  </div>
</section>

{/* Clients Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Trusted Clients</h2>

    {/* Client Logos */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
      <img src="/assets/client1.png" alt="Client 1" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
      <img src="/assets/client2.png" alt="Client 2" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
      <img src="/assets/client3.png" alt="Client 3" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
      <img src="/assets/client4.png" alt="Client 4" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
    </div>

    {/* Industries Served */}
    <div className="mt-10 text-gray-700 text-lg">
      <p>
        Serving industries like <span className="font-semibold text-blue-700">Automotive</span>, <span className="font-semibold text-blue-700">Medical</span>,
        <span className="font-semibold text-blue-700"> Aerospace</span>, <span className="font-semibold text-blue-700">Industrial Automation</span>, and more.
      </p>
    </div>
  </div>
</section>

{/* Contact / Enquiry CTA Section */}
<section className="py-20 bg-blue-800 text-white text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have a Project or Need a Custom Solution?</h2>
    <p className="text-lg text-blue-100 mb-6">
      Let's discuss your electronic requirements. We’re ready to design, build, and deliver for your industry.
    </p>
    <a
      href="/contact"
      className="inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-200 transition"
    >
      Contact Us
    </a>
  </div>
</section>


    </>
  );
};

export default Home;
