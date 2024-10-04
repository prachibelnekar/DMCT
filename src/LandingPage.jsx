import React, { useState, useEffect } from 'react';
import img1 from "../src/images/g_7.jpg";
import img2 from "../src/images/g_4.jpg";
import img3 from "../src/images/g_16.jpg";
import img4 from "../src/images/g_17.jpg";
const slides = [
    {
        id: 1,
        image: img1,
    },
    {
        id: 2,
        image: img2,
    },
    {
        id: 3,
        image: img3, 
    }, {
        id: 4,
        image: img4, 
    },
];

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <img
                    src={slides[currentIndex].image}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-[650px] bg-cover " // Set height to 400px for better visibility
                />
                {/* Optional: Add caption here */}
                {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                    <h2>{slides[currentIndex].caption}</h2>
                </div> */}
            </div>

            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
                &#10094; {/* Left Arrow */}
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
                &#10095; {/* Right Arrow */}
            </button>
        </div>
    );
};

export default LandingPage;
