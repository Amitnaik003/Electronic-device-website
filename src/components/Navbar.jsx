import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Applications", to: "/applications" },
    { name: "Clients", to: "/clients" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-gray">Electro</span>
            <span className="logo-blue">Xpertism</span>
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`nav-link ${pathname === link.to ? "active-link" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          font-family: 'Segoe UI', sans-serif;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.8rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .navbar-logo {
          font-size: 1.6rem;
          font-weight: 800;
          text-decoration: none;
        }

        .logo-gray {
          color: #111827;
        }

        .logo-blue {
          color: #1d4ed8;
        }

        .navbar-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #374151;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease-in-out;
        }

        .nav-link:hover {
          color: #1d4ed8;
        }

        .active-link {
          color: #1d4ed8;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .navbar-links {
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
