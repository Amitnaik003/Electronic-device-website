const Application = () => {
  return (
    <div
      style={{
        minWidth: "100vw",
        padding: "64px 24px",
        maxWidth: "800px",
        margin: "0 auto",
        background: "linear-gradient(to bottom right, #eff6ff, white)",
        borderRadius: "1rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "2rem",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Apply for a Product
      </h2>

      <form
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Application Submitted!");
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#1e3a8a" }}
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #cbd5e1",
            }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#1e3a8a" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #cbd5e1",
            }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="product"
            style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#1e3a8a" }}
          >
            Select Product
          </label>
          <select
            id="product"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #cbd5e1",
            }}
          >
            <option value="">-- Choose a product --</option>
            <option value="Temperature Sensor">Temperature Sensor</option>
            <option value="Bluetooth Module">Bluetooth Module</option>
            <option value="Motor Controller">Motor Controller</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#1e3a8a",
            color: "white",
            fontWeight: "500",
            fontSize: "1rem",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Application;
