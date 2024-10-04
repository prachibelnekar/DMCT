// AdminPanel.jsx
import React, { useState } from 'react';
import OurGallery from './OurGallery.jsx'; // Make sure this path is correct

const AdminPanel = ({ addImage, deleteImage, images }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a local URL for the uploaded image
      addImage(imageUrl);
      setFile(null); // Reset the file input
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="mb-4">
        <input type="file" onChange={handleFileChange} className="border p-2" />
        <button onClick={handleUpload} className="bg-green-500 text-white py-2 px-4 rounded ml-2">
          Upload
        </button>
      </div>
      <OurGallery images={images} deleteImage={deleteImage} />
    </div>
  );
};

export default AdminPanel;
