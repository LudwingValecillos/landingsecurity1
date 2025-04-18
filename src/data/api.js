// Nota: Por ahora se usan las credenciales directamente. Más adelante pásalas a variables de entorno (.env).
const API_URL = 'https://api.jsonbin.io/v3/b/67ff10a38960c979a5860e49'; // Reemplaza con tu URL de JSONBin
const MASTER_KEY = '$2a$10$CWKBiU.yDWk3Urc0sN59/eBhcLdantq/kA9/J5fJr6RVcIUPKUo4G';
const ACCESS_KEY = '$2a$10$awiDDQx/.7dYK5zuPe03FuJ.4GvJHHC0MxIrJjEZxD41C0x70amH.';

// ----------------------------
// Helper: Convertir File a Base64
// ----------------------------
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// ----------------------------
// Funciones de Productos
// ----------------------------

const formatPrice = (priceStr) => {
  // Ensure the input is a string
  const price = String(priceStr);

  // Use a regular expression to add thousand separators
  const formattedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedPrice}`;
};

const processProduct = (product) => {
  return {
    ...product,
    price: formatPrice(product.price),
    active: product.active !== undefined ? product.active : true,
    offer: product.offer !== undefined ? product.offer : false,
    image: product.imageUrl || product.image
  };
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const data = await response.json();

    // Determina la fuente correcta de datos
    const productsData =
      (data.record && data.record.record) ||
      data.record ||
      data ||
      [];

    // Asegura que productsData sea un array
    const productsList = Array.isArray(productsData) ? productsData : [productsData];

    // Transforma los datos
    const transformedProducts = productsList.map(processProduct);

    return transformedProducts;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
};

export const updateProductPrice = async (productId, newPrice) => {
  try {
    // Obtener los productos actuales
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const productsData =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];
    const productsList = Array.isArray(productsData) ? productsData : [productsData];

    const updatedProducts = productsList.map((product) =>
      product.id.toString() === productId.toString() ? { ...product, price: newPrice } : product
    );

    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product price:', error);
    throw error;
  }
};

export const toggleProductStatus = async (productId) => {
  try {
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const productsData =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];
    const productsList = Array.isArray(productsData) ? productsData : [productsData];

    const updatedProducts = productsList.map((product) =>
      product.id.toString() === productId.toString() ? { ...product, active: !product.active } : product
    );

    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product status:', error);
    throw error;
  }
};

export const toggleProductOffer = async (productId) => {
  try {
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const productsData =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];
    const productsList = Array.isArray(productsData) ? productsData : [productsData];

    const updatedProducts = productsList.map((product) =>
      product.id.toString() === productId.toString() ? { ...product, offer: !product.offer } : product
    );

    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product offer status:', error);
    throw error;
  }
};

export const updateProductName = async (productId, newName) => {
  try {
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const productsData =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];
    const productsList = Array.isArray(productsData) ? productsData : [productsData];

    const updatedProducts = productsList.map((product) =>
      product.id.toString() === productId.toString() ? { ...product, name: newName } : product
    );

    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product name:', error);
    throw error;
  }
};

export const updateProduct = async (productId, updates) => {
  try {
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();

    const currentProducts =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];

    const updatedProducts = currentProducts.map(product =>
      product.id.toString() === productId.toString() ? { ...product, ...updates } : product
    );

    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return [];
  }
};

export const deleteProduct = async (productId) => {
  try {
    // Fetch current products
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();

    const currentProducts =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];

    // Remove the product with the specified ID
    const updatedProducts = currentProducts.filter((product) => product.id.toString() !== productId.toString());

    // Update the entire product list
    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export const addNewProduct = async (product) => {
  try {
    // Primero, sube la imagen a ImgBB
    const imageUrl = await uploadImageToImageKit(product.image);

    // Prepara los datos del producto
    const newProduct = processProduct({
      id: crypto.randomUUID(),
      name: product.name,
      price: product.price,  // Mantener el precio tal cual se ingresa
      category: product.category,
      image: imageUrl,
      active: true,
      offer: product.offer !== undefined ? product.offer : false,
    });

    // Obtén los productos actuales
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const currentProducts =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];
    
    // Agrega el nuevo producto a la lista existente
    const updatedProducts = [...currentProducts, newProduct];

    // Actualiza la lista completa de productos
    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts }),
    });

    return newProduct;
  } catch (error) {
    console.error('Error adding new product:', error);
    return null;
  }
};

export const updateProductImage = async (productId, newImageFile) => {
  try {
    // Primero, sube la nueva imagen
    const newImageUrl = await uploadImageToImageKit(newImageFile);

    // Obtén los productos actuales
    const getResponse = await fetch(API_URL, {
      headers: { 
        'X-Master-Key': MASTER_KEY,
        'X-Access-Key': ACCESS_KEY
      },
    });
    const getData = await getResponse.json();
    const currentProducts =
      (getData.record && getData.record.record) ||
      getData.record ||
      getData ||
      [];

    const updatedProducts = currentProducts.map(product =>
      product.id.toString() === productId.toString() ? { ...product, image: newImageUrl } : product
    );

    // Actualiza la lista completa de productos
    await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ record: updatedProducts.map(processProduct) }),
    });

    return updatedProducts.map(processProduct);
  } catch (error) {
    console.error('Error updating product image:', error);
    return [];
  }
};

// ----------------------------
// Función para subir imágenes a ImgBB
// ----------------------------
export const uploadImageToImageKit = async (file) => {
  try {
    // Convertir el archivo a cadena base64
    const base64Image = await convertFileToBase64(file);
    // Remover el prefijo "data:image/*;base64," si existe
    const base64Data = base64Image.split(',')[1];
    const formData = new FormData();
    formData.append("image", base64Data);
    formData.append("key", "9a2d7bbb99f1b945a192fcbbcf11c4af");

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return (data.data && data.data.url) || '';
  } catch (error) {
    console.error('Error uploading image to ImgBB:', JSON.stringify(error, null, 2));
    return '';
  }
};

export default fetchProducts;
