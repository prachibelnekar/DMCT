import React from 'react';
import AboutSection3 from './AboutSection3.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import Footer from './Footer';

const OurTeam = () => {
    return (
        <>
            <div className="flex overflow-hidden flex-col bg-white">


                <AboutSection3 />
                
                <ImageGallery />

                <Footer />
            </div>
        </>
    )
}

export default OurTeam