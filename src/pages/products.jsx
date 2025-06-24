 
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Temperature Sensor",
      image: "/assets/temp-sensor.png",
      category: "Sensors",
    },
    {
      id: 2,
      name: "Bluetooth Module",
      image: "/assets/bluetooth-module.png",
      category: "Modules",
    },
    {
      id: 3,
      name: "Motor Controller",
      image: "/assets/motor-controller.png",
      category: "Controllers",
    },
  ];

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
            <img src={product.image} alt={product.name} className="h-28 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <Link
              to={`/products/${product.id}`}
              className="mt-4 inline-block px-4 py-2 text-sm bg-blue-800 text-white rounded-full hover:bg-blue-700 transition"
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
