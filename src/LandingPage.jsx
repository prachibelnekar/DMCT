import React, { useState, useEffect } from 'react';

import img1 from "../src/images/g_7.jpg";
import img2 from "../src/images/g_4.jpg";
import img3 from "../src/images/g_16.jpg";
import img4 from "../src/images/g_17.jpg";




const slides = [
    {
        id: 1,
        image: img1,
        points: ["High-quality care", "Trusted by families", "Experienced staff","24/7 Support", "Personalized nursing", "Specialized treatments","Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    {
        id: 2,
        image: img2,
        points: ["High-quality care", "Trusted by families", "Experienced staff","24/7 Support", "Personalized nursing", "Specialized treatments","Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    {
        id: 3,
        image: img3,
        points: ["High-quality care", "Trusted by families", "Experienced staff","24/7 Support", "Personalized nursing", "Specialized treatments","Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    {
        id: 4,
        image: img4,
        points: ["High-quality care", "Trusted by families", "Experienced staff","24/7 Support", "Personalized nursing", "Specialized treatments","Modern facilities", "Comfortable environment", "Expert doctors"]
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
                {/* Image with light overlay */}
                <div className="relative">
                    <img
                        src={slides[currentIndex].image}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-[650px] bg-cover brightness-75" // Brightness added to make image lighter
                    />
                    <div className="absolute inset-0 bg-white opacity-20"></div> {/* Light overlay */}
                </div>

                {/* Bullet Points and Button Overlay at Bottom Left */}
                <div className="absolute bottom-5 left-40  bg-opacity-50 text-zinc-50  p-6 m-6 rounded-lg">
                    <ul className="text-2xl font-bold mb-4">
                        {slides[currentIndex].points.map((point, index) => (
                            <li key={index} className="mb-2">
                                &#8226; {point}
                            </li>
                        ))}
                    </ul>
                    {/* Button */}
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    <NavLink to="/about" onClick={() => handleLinkClick('/')}>Learn More
         
        </NavLink>
                        
                    </button> */}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transperant text-transperant  rounded-full p-2"
            >
                &#10094;&#10094;{/* Left Arrow */}
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transperant text-transperant rounded-full p-2"
            >
                &#10095;&#10095; {/* Right Arrow */}
            </button>
        </div>
    );
};

export default LandingPage;
