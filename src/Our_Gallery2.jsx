import React, { useState } from 'react';
import Footer from './Footer.jsx';
import g_1 from '../src/images/g_1.jpg';
import g_2 from '../src/images/g_2.jpg';
import g_3 from '../src/images/g_3.jpg';
import g_4 from '../src/images/g_4.jpg';
import g_5 from '../src/images/g_5.jpg';
import g_6 from '../src/images/g_6.jpg';
import g_7 from '../src/images/g_7.jpg';
import g_8 from '../src/images/g_8.jpg';
import g_9 from '../src/images/g_9.jpg';
import g_10 from '../src/images/g_10.jpg';
import g_11 from '../src/images/g_11.jpg';
import g_12 from '../src/images/g_12.jpg';
import g_13 from '../src/images/g_13.jpg';
import g_14 from '../src/images/g_14.jpg';
import g_15 from '../src/images/g_15.jpg';
import g_16 from '../src/images/g_16.jpg';
import g_17 from '../src/images/g_17.jpg';
import g_18 from '../src/images/g_18.jpg';

const imageData = [
    { src: g_1, alt: "Hospital Facility" },
    { src: g_2, alt: "Hospital Services" },
    { src: g_3, alt: "Hospital Facility" },
    { src: g_4, alt: "Hospital Services" },
    { src: g_5, alt: "Hospital Facility" },
    { src: g_6, alt: "Hospital Services" },
    { src: g_7, alt: "Hospital Facility" },
    { src: g_8, alt: "Hospital Services" },
    { src: g_9, alt: "Hospital Facility" },
    { src: g_10, alt: "Hospital Services" },
    { src: g_11, alt: "Hospital Facility" },
    { src: g_12, alt: "Hospital Services" },
    { src: g_13, alt: "Hospital Services" },
    { src: g_14, alt: "Hospital Facility" },
    { src: g_15, alt: "Hospital Services" },
    { src: g_16, alt: "Hospital Services" },
    { src: g_17, alt: "Hospital Facility" },
    { src: g_18, alt: "Hospital Services" },
];

const OurGallery2 = () => {
    const [modalImageIndex, setModalImageIndex] = useState(-1);

    const openModal = (index) => {
        setModalImageIndex(index);
    };

    const closeModal = () => {
        setModalImageIndex(-1);
    };

    const nextImage = () => {
        setModalImageIndex((prev) => (prev + 1) % imageData.length);
    };

    const prevImage = () => {
        setModalImageIndex((prev) => (prev - 1 + imageData.length) % imageData.length);
    };

    return (
        <>
            <div className="flex flex-col overflow-hidden bg-zinc-100 select-none">
                {/* Space for YouTube Video Links */}
                
                
                {/* Grid for images */}
                <h2 className="text-2xl font-bold mb-4 text-center">Images</h2>
                <div className="grid grid-cols-1 gap-6 p-6 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {imageData.map((image, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            onDoubleClick={() => openModal(index)} // Double-click to open modal
                        >
                            <img
                                loading="lazy"
                                src={image.src}
                                alt={image.alt}
                                className="bg-cover w-full h-60 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal for full image view */}
                {modalImageIndex !== -1 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative">
                            <img
                                src={imageData[modalImageIndex].src}
                                alt={imageData[modalImageIndex].alt}
                                className="max-w-full max-h-screen"
                            />
                            <button 
                                className="absolute top-3 right-3 text-white bg-transparent border-0 text-3xl cursor-pointer" 
                                onClick={closeModal}
                            >
                                &times; {/* Close button */}
                            </button>
                            <button 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer" 
                                onClick={prevImage}
                            >
                                &#10094; {/* Previous image */}
                            </button>
                            <button 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer" 
                                onClick={nextImage}
                            >
                                &#10095; {/* Next image */}
                            </button>
                        </div>
                    </div>
                )}
                <hr className="my-8 border-gray-500" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center">Watch Our Videos</h2>
                    <div className="grid grid-cols-1 gap-6 p-6 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {/* Example YouTube Video Links */}
                        <div className=''><iframe  src="https://www.youtube.com/embed/hK0DyOvoinQ?si=URkHbhFZRxGyr3nJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/W0dI_1rEM-U?si=dqkLNidxitYTCBkb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/LcPeaba-D_0?si=ITK4MasYt993JCtq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/wTyKBVQR8-M?si=MseUHoZrY0zq0Gzn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/tpnH3qdBTps?si=RogthFTO39wsaNAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/gKn4vJ9PIuo?si=6OGJWD0yC1W5PjQL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/0J8OK00IMY8?si=F-vufvMf1bl06aQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/_cP8gYckKEM?si=dVuXOaH13TdNHVgp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/ZSsj8fp9ElY?si=x2QwuNWA4eRPK392" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/wl33S2FwJ1E?si=Otf6KQIPpakEC5Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/GD0OOpE_Pjg?si=VitevNNR9E9ygmPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div><iframe src="https://www.youtube.com/embed/jKq3wnVrp6g?si=jcsVpXPyucrXuVIb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>                        
                    </div>
                    <div className="text-center mt-6">
                        <a
                            href="https://www.youtube.com/@DRMITRACHANNEL"
                            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Do Watch More Videos
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default OurGallery2;
