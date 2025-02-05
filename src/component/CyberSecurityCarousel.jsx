// src/components/CyberSecurityCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CyberSecurityCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-7xl mx-auto pt-12 ">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="p-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="/path-to-image.png" alt="Partnership Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Partnership
              </h3>
              <p className="text-gray-600">
                We are not just a security provider; we are your trusted partner, standing 
                shoulder-to-shoulder with you in the face of every digital challenge.
              </p>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="p-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="/path-to-image.png" alt="Transparency Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Transparency and Trust
              </h3>
              <p className="text-gray-600">
                We know the importance of confidentiality and trust. We value clear communication 
                and keep you informed every step of the way, building lasting relationships 
                based on transparency and trust.
              </p>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="p-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img src="/path-to-image.png" alt="Swift Response Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Swift Response
              </h3>
              <p className="text-gray-600">
                Our rapid response team mobilizes instantaneously and commits to responding to 
                all questions, queries, and requests within 6 working hours ensuring business 
                continuity.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CyberSecurityCarousel;
