import React, { useState, useEffect } from "react";

const IphoneCatalogSection = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/productos.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Catálogo de iPhones</h2>
      <div className="container mx-auto px-4 relative z-10">
        {products === null ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative">
                  <img
                    src={`/assets/images/${product.imagen}`}
                    alt={product.nombre}
                    className="w-full rounded-t-2xl"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.descripcion}
                    </p>
                    <span className="text-lg font-bold text-blue-500 mt-2 block">
                      ${product.precio}
                    </span>
                    <p className="text-sm text-gray-500 mt-2">Retiro únicamente en el local - Buenos Aires</p>
                  </div>
                  <button className="mt-4 bg-[#2980B9] text-white rounded-lg px-4 py-2">
                    Consultar disponibilidad
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default IphoneCatalogSection;