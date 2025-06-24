import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">Xpertism</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/applications" className="hover:text-blue-600">Applications</Link>
          <Link to="/clients" className="hover:text-blue-600">Clients</Link>
          <Link to="/support" className="hover:text-blue-600">Support</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
