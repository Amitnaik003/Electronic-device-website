const Home = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="min-w-screen  bg-gradient-to-r from-blue-800 to-blue-500 text-white h-[85vh] flex items-center"
        style={{
          backgroundImage: "url('https://t4.ftcdn.net/jpg/05/12/00/49/360_F_512004957_1Zjmq4zv674TPZpsLKNQ9BIt3kpCcsSV.jpg')",
          backgroundSize: "cover",}}>
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering the Future of Electronics
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl">
            At Xpertism, we deliver cutting-edge electronic devices and solutions for every industry—automotive, medical, aerospace, and more.
          </p>
          <a
            href="/products"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Explore Products
          </a>
        </div>
      </section>

      {/* About Company Section */}
      <section
        style={{
          padding: "64px 0",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem", // ~30px
              fontWeight: "bold",
              color: "#1e40af", // blue-800
              marginBottom: "16px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            About Xpertism
          </h2>
          <p
            style={{
              color: "#374151", // gray-700
              fontSize: "1.125rem", // ~18px
              lineHeight: "1.75rem", // ~28px
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Xpertism is a forward-thinking company committed to delivering innovative electronic devices across industries.
            Our solutions power smart systems in Automotive, Medical, Aerospace, Industrial Automation, and more.
            We focus on quality, performance, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Product Categories Section */}
      <section
        style={{
          padding: "64px 0",
          backgroundColor: "#f3f4f6",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem", // ~30px
              fontWeight: "bold",
              color: "#1e40af", // blue-800
              marginBottom: "40px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Product Categories
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Sensors",
                img: "https://5.imimg.com/data5/JB/SG/ER/SELLER-38701987/temperature-sensor.jpg",
                desc: "Precision sensors for temperature, pressure, and motion control.",
              },
              {
                title: "Modules",
                img: "https://5.imimg.com/data5/SELLER/Default/2024/8/441342071/WO/GS/TC/7275263/6es7132-4bd01-0aa0-simatic-dp-5-electron-modules-for-et-200s-500x500.jpg",
                desc: "Plug-and-play modules for rapid development and prototyping.",
              },
              {
                title: "Controllers",
                img: "https://www.electronics-lab.com/wp-content/uploads/2017/09/IMG_0400-scaled.jpg",
                desc: "Smart controllers for automation and industrial systems.",
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "16px",
                  width: "300px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{
                    height: "80px",
                    marginBottom: "16px",
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.25rem", // ~20px
                    fontWeight: "600",
                    color: "#1d4ed8", // blue-700
                    marginBottom: "8px",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    color: "#4b5563", // gray-600
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Applications Overview Section */}
      <section
  style={{
    padding: "64px 0",
    backgroundColor: "#ffffff",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        fontSize: "1.875rem", // ~30px
        fontWeight: "bold",
        color: "#1e40af", // blue-800
        marginBottom: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      Applications Overview
    </h2>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      {[
        {
          title: "Automotive",
          icon: "https://i0.wp.com/plopdo.com/wp-content/uploads/2022/03/1-automotive-industry.webp?fit=650%2C250&ssl=1",
          desc: "Sensors, modules, and control systems for vehicle automation.",
        },
        {
          title: "Medical",
          icon: "https://thumbs.dreamstime.com/b/medical-logo-caduceus-72380945.jpg",
          desc: "Precision devices used in diagnostics, monitoring, and therapy.",
        },
        {
          title: "Aerospace",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PbDx4687_4dfTUag8HlH-JkvQ_V1kPFwlA&s",
          desc: "High-performance systems for avionics and space-grade electronics.",
        },
      ].map((app, idx) => (
        <div
          key={idx}
          style={{
            padding: "24px",
            backgroundColor: "#eff6ff", // blue-50
            borderRadius: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            transition: "box-shadow 0.3s ease-in-out",
            width: "300px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.1)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.05)")
          }
        >
          <img
            src={app.icon}
            alt={app.title}
            style={{
              height: "64px",
              margin: "0 auto 16px",
            }}
          />
          <h3
            style={{
              fontSize: "1.25rem", // ~20px
              fontWeight: 600,
              color: "#1d4ed8", // blue-700
              marginBottom: "8px",
            }}
          >
            {app.title}
          </h3>
          <p
            style={{
              color: "#374151", // gray-700
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            {app.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Clients Section */}
      <section
  style={{
    padding: "64px 0",
    backgroundColor: "#f3f4f6", // gray-100
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        fontSize: "1.875rem",
        fontWeight: "bold",
        color: "#1e40af", // blue-800
        marginBottom: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      Our Trusted Clients
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "32px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {["client1.png", "client2.png", "client3.png", "client4.png"].map((logo, idx) => (
        <img
          key={idx}
          src={`https://images.yourstory.com/cs/2/11718bd02d6d11e9aa979329348d4c3e/funding-YS-1649001014853.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75`}
          alt={`Client ${idx + 1}`}
          style={{
            height: "48px",
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease-in-out",
            margin: "0 auto",
          }}
          onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
        />
      ))}
    </div>

    <div
      style={{
        marginTop: "40px",
        color: "#374151", // gray-700
        fontSize: "1.125rem", // text-lg
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p>
        Serving industries like{" "}
        <span style={{ fontWeight: 600, color: "#1d4ed8" }}>Automotive</span>,{" "}
        <span style={{ fontWeight: 600, color: "#1d4ed8" }}>Medical</span>,{" "}
        <span style={{ fontWeight: 600, color: "#1d4ed8" }}>Aerospace</span>,{" "}
        <span style={{ fontWeight: 600, color: "#1d4ed8" }}>Industrial Automation</span>, and more.
      </p>
    </div>
  </div>
</section>

      {/* Contact / Enquiry CTA Section */}
      <section
  style={{
    padding: "80px 0",
    backgroundColor: "#ffffff", // blue-800
    color: "#1e40af",
    textAlign: "center",
  }}
>
  <div
    style={{
      maxWidth: "1024px", // max-w-4xl
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        fontSize: "1.875rem", // text-3xl
        fontWeight: "bold",
        marginBottom: "16px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      Have a Project or Need a Custom Solution?
    </h2>
    <p
      style={{
        fontSize: "1.125rem", // text-lg
        color: "#1e40af", // blue-100
        marginBottom: "24px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      Let's discuss your electronic requirements. We’re ready to design, build, and deliver for your industry.
    </p>
    <a
      href="/contact"
      style={{
        display: "inline-block",
        padding: "12px 32px",
        backgroundColor: "#ffffff",
        color: "#1e40af",
        fontWeight: 600,
        borderRadius: "9999px", // fully rounded
        textDecoration: "none",
        transition: "background-color 0.3s ease-in-out",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e5e7eb")} // gray-200
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
    >
      Contact Us
    </a>
  </div>
</section>

    </>
  );
};

export default Home;
