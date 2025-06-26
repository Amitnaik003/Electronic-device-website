const Support = () => {
  const faqs = [
    {
      question: "How can I request a custom solution?",
      answer:
        "You can fill out our contact form or email us with your specific requirements. Our engineering team will get back to you within 24 hours.",
    },
    {
      question: "Do your products come with warranty?",
      answer:
        "Yes, all our products come with a 1-year standard warranty covering manufacturing defects.",
    },
    {
      question: "Can I download product datasheets online?",
      answer:
        "Yes. Go to the respective product page and you'll find a datasheet download button.",
    },
  ];

  const docs = [
    { title: "Company Profile PDF", link: "/assets/company-profile.pdf" },
    { title: "Product Catalog", link: "/assets/product-catalog.pdf" },
    { title: "User Guide - Sensor Modules", link: "/assets/sensor-guide.pdf" },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        minWidth: "100vw",
        margin: "0 auto",
        padding: "64px 24px",
        backgroundColor: "#f8fafc", // light gray background
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      {/* FAQ Section */}
      <section>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1e40af",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1e3a8a" }}>
                {faq.question}
              </h3>
              <p style={{ marginTop: "0.5rem", color: "#374151" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Docs */}
      <section>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1e40af",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Documentation Downloads
        </h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            fontSize: "1.125rem",
            color: "#1d4ed8",
          }}
        >
          {docs.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.link}
                download
                style={{
                  textDecoration: "none",
                  color: "#1d4ed8",
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                📄 {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Customer Support */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e40af", marginBottom: "1rem" }}>
          Need More Help?
        </h2>
        <p style={{ fontSize: "1.125rem", color: "#374151" }}>
          Reach out to our technical support team at{" "}
          <a
            href="mailto:support@xpertism.com"
            style={{ color: "#1d4ed8", fontWeight: "500", textDecoration: "underline" }}
          >
            support@xpertism.com
          </a>{" "}
          or call us at <strong>+91 98765 43210</strong>
        </p>
      </section>
    </div>
  );
};

export default Support;
