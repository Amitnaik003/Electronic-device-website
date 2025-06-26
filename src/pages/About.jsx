const About = () => {
  const sectionHeading = {
    fontSize: "1.875rem", // ~30px
    fontWeight: "bold",
    color: "#1e40af", // blue-800
    marginBottom: "16px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const paragraphStyle = {
    fontSize: "1.125rem", // ~18px
    color: "#374151", // gray-700
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.75rem",
  };

  const listItemStyle = {
    fontSize: "1.125rem",
    color: "#374151",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.75rem",
    marginBottom: "8px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc", // gray-100
        padding: "64px 24px",
        // maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}
    >
      {/* Company Introduction */}
      <section>
        <h2 style={sectionHeading}>Who We Are</h2>
        <p style={paragraphStyle}>
          Xpertism is a pioneering company focused on designing, developing, and delivering high-quality electronic components and systems.
          Our team of engineers and domain experts work across industries including automotive, aerospace, healthcare, and industrial automation.
        </p>
      </section>

      {/* Vision & Mission */}
      <section>
        <h2 style={sectionHeading}>Vision & Mission</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={listItemStyle}>
            <strong>Vision:</strong> To be a global leader in next-gen electronic innovations that power progress and sustainability.
          </li>
          <li style={listItemStyle}>
            <strong>Mission:</strong> To provide reliable, efficient, and advanced electronic solutions tailored to industry needs.
          </li>
        </ul>
      </section>

      {/* Company History */}
      <section>
        <h2 style={sectionHeading}>Our Journey</h2>
        <p style={paragraphStyle}>
          Founded in 2015, Xpertism began as a small R&D unit. Over the years, we’ve scaled to serve global clients, launched 50+ successful product lines,
          and built long-term partnerships across 10+ industries.
        </p>
      </section>

      {/* Certifications / Quality Standards */}
      <section>
        <h2 style={sectionHeading}>Certifications & Quality</h2>
        <p style={paragraphStyle}>
          We adhere to ISO 9001:2015 standards and comply with RoHS and CE directives. Our commitment to quality ensures
          every product meets international benchmarks for safety and performance.
        </p>
      </section>
    </div>
  );
};

export default About;
