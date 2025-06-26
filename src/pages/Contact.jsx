const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        backgroundColor: "#f8fafc", // light gray background
        minWidth: "100vw",
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      {/* Contact Form */}
      <section>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Get in Touch
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "1fr",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{ border: "1px solid #d1d5db", padding: "0.75rem", borderRadius: "0.5rem" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{ border: "1px solid #d1d5db", padding: "0.75rem", borderRadius: "0.5rem" }}
          />
          <input
            type="tel"
            placeholder="Your Phone"
            required
            style={{
              gridColumn: "1 / -1",
              border: "1px solid #d1d5db",
              padding: "0.75rem",
              borderRadius: "0.5rem",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{
              gridColumn: "1 / -1",
              border: "1px solid #d1d5db",
              padding: "0.75rem",
              borderRadius: "0.5rem",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              gridColumn: "1 / -1",
              backgroundColor: "#1e40af",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info & Map */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e40af" }}>
            Contact Information
          </h3>
          <p style={{ fontSize: "1.125rem", color: "#374151" }}>
            <strong>Address:</strong> 123 Xpertism Park, Tech City, India
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151" }}>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p style={{ fontSize: "1.125rem", color: "#374151" }}>
            <strong>Email:</strong> contact@xpertism.com
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <a
              href="#"
              style={{ color: "#1d4ed8", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              LinkedIn
            </a>
            <a
              href="#"
              style={{ color: "#1d4ed8", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Twitter
            </a>
            <a
              href="#"
              style={{ color: "#1d4ed8", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Map */}
        <div style={{ flex: "1" }}>
          <iframe
            title="Xpertism Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991083!2d72.74110133217297!3d19.0821978396527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDcnMDguMCJF!5e0!3m2!1sen!2sin!4v1679053798771!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            style={{
              width: "100%",
              height: "256px",
              border: "0",
              borderRadius: "0.5rem",
            }}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
