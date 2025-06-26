const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1f2937", // gray-800
        color: "#ffffff",
        padding: "24px 16px",
        // marginTop: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p style={{ margin: "8px 0" }}>
          &copy; 2025{" "}
          <span
            style={{
              fontWeight: 600,
              color: "#3b82f6", // blue-500
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Xpertism
          </span>
          . All rights reserved.
        </p>
        <p
          style={{
            margin: "8px 0",
            fontSize: "0.875rem",
            color: "#9ca3af", // gray-400
          }}
        >
          Designed with{" "}
          <span style={{ color: "#f87171" /* red-400 */ }}>❤️</span> for
          Electronic Innovation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
