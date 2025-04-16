import React, { useState } from 'react';
import { PencilIcon, SparklesIcon, TrashIcon, TagIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const ProductAdminCard = ({
  product,
  onToggleStatus,
  onToggleOffer,
  onUpdatePrice,
  onUpdateName,
  onDelete,
  formatPrice,
}) => {
  const [editingName, setEditingName] = useState(false);
  const [editingPrice, setEditingPrice] = useState(false);
  const [newName, setNewName] = useState(product.name);
  const [newPrice, setNewPrice] = useState(
    product.price ? product.price.replace(' USD', '').replace('.', '') : ''
  );

  const handlePriceSubmit = () => {
    if (newPrice.trim()) {
      const numericPrice = parseFloat(newPrice.replace(',', '.'));
      if (!isNaN(numericPrice)) {
        onUpdatePrice(product.id, `${numericPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`);
        setEditingPrice(false);
      }
    }
  };

  return (
    <div
      className={`border rounded-xl p-3 flex flex-col relative shadow-sm transition-all duration-200 hover:shadow-md ${
        product.active ? 'bg-white' : 'bg-gray-100'
      } ${product.offer ? 'border-purple-400' : 'border-gray-200'}`}
    >
      {/* Etiqueta de oferta */}
      {product.offer && (
        <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded-full shadow-md">
          <SparklesIcon className="h-3 w-3 inline mr-1" />
          Oferta
        </div>
      )}

      {/* Imagen del producto */}
      <div className="mb-3 flex justify-center items-center h-40 w-full bg-gray-50 rounded-lg p-2">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <span className="text-gray-400 text-xs">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Nombre con edición */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center w-full">
          {editingName ? (
            <div className="flex items-center w-full">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-2 border border-purple-300 focus:border-purple-500 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Nuevo nombre"
                autoFocus
              />
              <button
                onClick={() => {
                  if (newName.trim()) {
                    onUpdateName(product.id, newName.trim());
                    setEditingName(false);
                  }
                }}
                className="bg-purple-600 text-white ml-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-sm"
              >
                <CheckCircleIcon className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-sm sm:text-base font-medium text-gray-800 flex-grow line-clamp-2">
                {product.name}
              </h2>
              <button
                onClick={() => setEditingName(true)}
                className="text-purple-600 hover:text-purple-800 ml-2 transition-colors"
                title="Editar nombre"
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Precio con edición */}
      <div className="flex items-center justify-between mb-3">
        {editingPrice ? (
          <div className="flex items-center w-full">
            <div className="relative flex-grow">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full p-2 pl-6 border border-purple-300 focus:border-purple-500 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Precio"
                autoFocus
              />
            </div>
            <button
              onClick={handlePriceSubmit}
              className="bg-purple-600 text-white ml-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-sm"
            >
              <CheckCircleIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <TagIcon className="h-4 w-4 text-purple-600 mr-1" />
              <p className="font-bold text-sm sm:text-base text-purple-600">
                {product.price}
              </p>
            </div>
            <button
              onClick={() => {
                setNewPrice(product.price ? product.price.replace(' USD', '').replace('.', '') : '');
                setEditingPrice(true);
              }}
              className="text-purple-600 hover:text-purple-800 transition-colors"
              title="Editar precio"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Acciones del producto */}
      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
        <div className="flex space-x-2">
          <button
            onClick={() => onToggleStatus(product.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition-colors ${
              product.active 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-green-100 text-green-600 hover:bg-green-200'
            }`}
          >
            {product.active ? 'Desactivar' : 'Activar'}
          </button>
          <button
            onClick={() => onToggleOffer(product.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition-colors ${
              product.offer 
                ? 'bg-purple-100 text-purple-600 hover:bg-purple-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={product.offer ? "Quitar oferta" : "Marcar como oferta"}
          >
            <SparklesIcon className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => onDelete(product.id)}
          className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
          title="Eliminar producto"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>

      <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
        {product.active ? (
          <span className="inline-flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1"></span>
            Activo
          </span>
        ) : (
          <span className="inline-flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mr-1"></span>
            Inactivo
          </span>
        )}
      </p>
    </div>
  );
};

// Modal para crear un nuevo producto
export const CreateProductModal = ({ isOpen, onClose, onSubmit }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    active: true,
    offer: false
  });
  
  const [imagePreview, setImagePreview] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Preview para URL de imagen
    if (name === 'image' && value) {
      setImagePreview(value);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!newProduct.name || !newProduct.price) {
      alert('Nombre y precio son obligatorios');
      return;
    }
    
    // Formatear precio antes de enviar
    const formattedPrice = `${parseFloat(newProduct.price).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })} USD`;
    
    onSubmit({
      ...newProduct,
      price: formattedPrice
    });
    
    // Resetear formulario
    setNewProduct({
      name: '',
      price: '',
      image: '',
      description: '',
      active: true,
      offer: false
    });
    setImagePreview('');
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Agregar nuevo producto</h2>
          <p className="text-sm text-gray-500">Complete los detalles del nuevo iPhone</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del iPhone</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="iPhone 15 Pro Max - 256GB"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio (USD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full p-2 pl-7 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="999.99"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen</label>
            <input
              type="url"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            
            {imagePreview && (
              <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">Vista previa:</p>
                <div className="h-28 flex items-center justify-center">
                  <img
                    src={imagePreview}
                    alt="Vista previa"
                    className="max-h-full max-w-full object-contain"
                    onError={() => setImagePreview('')}
                  />
                </div>
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Descripción del producto"
              rows={3}
            ></textarea>
          </div>
          
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={newProduct.active}
                onChange={handleInputChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Activo</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                name="offer"
                checked={newProduct.offer}
                onChange={handleInputChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">En oferta</span>
            </label>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAdminCard;