import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Temperature Sensor",
      image: "https://5.imimg.com/data5/JB/SG/ER/SELLER-38701987/temperature-sensor.jpg",
      category: "Sensors",
    },
    {
      id: 2,
      name: "Bluetooth Module",
      image: "https://electrobes.com/wp-content/uploads/2019/05/Bluetooth_Module_HC05-3.jpg",
      category: "Modules",
    },
    {
      id: 3,
      name: "Motor Controller",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcY3DKQ4-lA6nQGdGLU6qbn8AceSl-bUmPg&s",
      category: "Controllers",
    },
  ];

  return (
    <div
      style={{
        minWidth: "100vw",
        padding: "64px 24px",
        maxWidth: "1280px",
        margin: "0 auto",
        background: "linear-gradient(to bottom right, #eff6ff, white)",
      }}
    >
      <h2
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "3rem",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Our Products
      </h2>

      <div
        style={{
          display: "grid",
          gap: "2.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              borderTop: "4px solid #1e3a8a",
              textAlign: "center",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 20px 25px rgba(0, 0, 0, 0.15)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)")
            }
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                height: "128px",
                margin: "0 auto 1.25rem",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#1e3a8a",
              }}
            >
              {product.name}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.25rem", marginBottom: "1rem" }}>
              {product.category}
            </p>
            <Link
              to={`/products/${product.id}`}
              style={{
                display: "inline-block",
                marginTop: "0.75rem",
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                backgroundColor: "#1e3a8a",
                color: "white",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
