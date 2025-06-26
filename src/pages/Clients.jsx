const Clients = () => {
  const clients = [
    { name: "Client A", logo: "/assets/client1.png", industry: "Automotive" },
    { name: "Client B", logo: "/assets/client2.png", industry: "Medical" },
    { name: "Client C", logo: "/assets/client3.png", industry: "Aerospace" },
    { name: "Client D", logo: "/assets/client4.png", industry: "Industrial" },
  ];

  const industries = ["Automotive", "Medical", "Aerospace", "Industrial Automation"];

  return (
    <div
      style={{
        backgroundColor: "#f8fafc", // light gray background
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 24px",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      {/* Header */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#1e40af", marginBottom: "1rem" }}>
          Our Clients
        </h2>
        <p style={{ color: "#374151", fontSize: "1.125rem" }}>
          Trusted by leading companies across multiple industries.
        </p>
      </section>

      {/* Client Logos */}
      <section>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            alignItems: "center",
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "0.75rem",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  height: "64px",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s",
                  margin: "0 auto",
                }}
                onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
              />
              <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e40af", marginBottom: "1rem" }}>
          Industries We Serve
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            color: "#1d4ed8",
            fontWeight: "500",
          }}
        >
          {industries.map((industry, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#dbeafe",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
              }}
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Highlighted Collaborations */}
      <section
        style={{
          backgroundColor: "#eff6ff",
          padding: "1.5rem",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1e40af", marginBottom: "0.5rem" }}>
          Strategic Partnerships
        </h3>
        <p
          style={{
            color: "#374151",
            maxWidth: "640px",
            margin: "0 auto",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          We’ve collaborated with top-tier organizations for product co-development, R&D, and custom integrations.
          Our partnerships drive innovation across sectors.
        </p>
      </section>
    </div>
  );
};

export default Clients;
