import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products";
import Contact from "./pages/Contact";
import Support from "./pages/Support";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />

          {/* Add other pages here */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
