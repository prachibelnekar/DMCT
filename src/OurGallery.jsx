// OurGallery.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminPanel from './AdminPanel.jsx';
import LoginPage from './LoginPage.jsx'; // Make sure you create this file or import from where it's defined
import Footer from './Footer.jsx'; // Import your Footer component here
import OurGallery2 from './Our_Gallery2.jsx';

// Dummy admin credentials
const adminEmail = "admin@example.com";
const adminPassword = "admin123";

const OurGallery = () => {
  const [images, setImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const addImage = (newImageUrl) => {
    setImages((prevImages) => [...prevImages, { url: newImageUrl }]); // Store images as objects
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <Routes>
        <Route
          path="/our_gallery2/admin/*"
          element={
            isAdmin ? (
              <AdminPanel addImage={addImage} deleteImage={deleteImage} images={images} />
            ) : (
              <LoginPage onLogin={setIsAdmin} />
            )
          }
        />
        <Route path="/our_gallery2" element={<OurGallery2 images={images} deleteImage={deleteImage} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default OurGallery;
