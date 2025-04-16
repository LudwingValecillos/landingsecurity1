import React from 'react';
import CatalogSection from '../components/iphone/CatalogSection';

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <CatalogSection />
      </div>
    </div>
  );
};

export default AdminPage;