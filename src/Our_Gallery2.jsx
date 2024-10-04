import React from 'react';
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
import Footer from './Footer.jsx';

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
    return (
        <>
            <div className="flex flex-col overflow-hidden  bg-zinc-100">

                {/* Grid for images */}
                <div className="grid grid-cols-1 gap-6 p-6 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {imageData.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                loading="lazy"
                                src={image.src}
                                alt={image.alt}
                                className=" bg-cover w-full h-60"
                            />
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </>
    );
};

export default OurGallery2;
