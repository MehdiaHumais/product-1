import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to E-Commerce Web
        </h1>
        <p className="text-lg">
          Discover the best products at unbeatable prices!
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Shop Now
        </button>
      </div>

    
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
