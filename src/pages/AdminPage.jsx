import React, { useState, useMemo, useEffect } from 'react';
import { MagnifyingGlassIcon, PlusIcon, HomeIcon } from '@heroicons/react/24/solid';
import ProductAdminCard from '../components/iphone/ProductAdminCard';
import logo from '../assets/images/sinfondoaa.png';
import {
  fetchProducts,
  updateProductPrice,
  toggleProductStatus,
  toggleProductOffer,
  updateProductName,
  deleteProduct,
  addNewProduct
} from '../data/api';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: null,
    category: 'iPhone'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos al iniciar
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const productsData = await fetchProducts();
      setProducts(productsData);
      setError(null);
    } catch (err) {
      setError('Error al cargar los productos');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price) => {
    return typeof price === 'number'
      ? `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
      : price;
  };

  const handleToggleStatus = async (id) => {
    try {
      await toggleProductStatus(id);
      await loadProducts();
    } catch (err) {
      setError('Error al cambiar el estado del producto');
      console.error(err);
    }
  };

  const handleToggleOffer = async (id) => {
    try {
      await toggleProductOffer(id);
      await loadProducts();
    } catch (err) {
      setError('Error al cambiar el estado de oferta');
      console.error(err);
    }
  };

  const handleUpdatePrice = async (id, newPrice) => {
    try {
      await updateProductPrice(id, newPrice);
      await loadProducts();
    } catch (err) {
      setError('Error al actualizar el precio');
      console.error(err);
    }
  };

  const handleUpdateName = async (id, newName) => {
    try {
      await updateProductName(id, newName);
      await loadProducts();
    } catch (err) {
      setError('Error al actualizar el nombre');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        await deleteProduct(id);
        await loadProducts();
      } catch (err) {
        setError('Error al eliminar el producto');
        console.error(err);
      }
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addNewProduct(newProduct);
      setIsAddingProduct(false);
      setNewProduct({ name: '', price: '', image: null, category: 'iPhone' });
      await loadProducts();
    } catch (err) {
      setError('Error al agregar el producto');
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct(prev => ({ ...prev, image: file }));
    }
  };

  // Filtrado de productos a partir de búsqueda
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-purple-600 text-white py-8 rounded-lg animate-pulse">
          Cargando productos...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header con logo y título */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md">
        <div className="container mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="M-STORE" className="h-8" />
            <h1 className="text-2xl font-bold">Panel de Administración</h1>
          </div>
          <Link 
            to="/" 
            className="bg-white text-purple-700 px-4 py-2 rounded-full flex items-center shadow hover:bg-gray-100 transition"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Volver a Inicio
          </Link>
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Gestión de Productos</h2>
          <button
            onClick={() => setIsAddingProduct(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center shadow transition"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Nuevo Producto
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-4 shadow">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <div className="mb-6 flex items-center space-x-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredProducts.map((product) => (
              <ProductAdminCard
                key={product.id}
                product={product}
                onToggleStatus={handleToggleStatus}
                onToggleOffer={handleToggleOffer}
                onUpdatePrice={handleUpdatePrice}
                onUpdateName={handleUpdateName}
                onDelete={handleDelete}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <img 
              src="/empty-products.svg" 
              alt="No hay productos" 
              className="w-32 h-32 mx-auto mb-4 opacity-50"
            />
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          </div>
        )}
      </div>

      {isAddingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-purple-800 flex items-center">
              <PlusIcon className="h-5 w-5 mr-2" />
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={handleAddProduct}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    required
                    value={newProduct.name}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Precio</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                    className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Imagen</label>
                  <div className="mt-1 flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="space-y-1 text-center">
                      {newProduct.image ? (
                        <p className="text-sm text-green-600">Imagen seleccionada: {newProduct.image.name}</p>
                      ) : (
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <div className="flex justify-center">
                        <label className="relative cursor-pointer bg-purple-600 py-2 px-4 rounded-full text-sm text-white hover:bg-purple-700 focus:outline-none">
                          <span>Seleccionar archivo</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            required
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddingProduct(false)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
                  >
                    Guardar Producto
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;