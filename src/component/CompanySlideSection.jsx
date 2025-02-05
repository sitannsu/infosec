import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import absolutdata from "../../public/img/Absolutdata1.png";
import credable from "../../public/img/credable1.png";
import dct from "../../public/img/DCT1.png";
import drlal from "../../public/img/drlal.png";
import emirates from "../../public/img/emirates.jpg";
import ey from "../../public/img/EY.png";
import google from "../../public/img/google1.png";
import hcl from "../../public/img/HCL.png";
import km from "../../public/img/KM1.png";
import kpmg from "../../public/img/KPMG.png";
import meesho from "../../public/img/Meesho1.png";
import paytm from "../../public/img/paytm1.png";
import provar from "../../public/img/provar.png";

const CompanySlideSection = () => {
  const images = [
    absolutdata,
    credable,
    dct,
    drlal,
    emirates,
    ey,
    hcl,
    google,
    km,
    kpmg,
    meesho,
    paytm,
    provar,
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For smaller screens like mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For extra small mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="company-slide-section  py-24">
      <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 leading-tight flex items-center justify-center  font-heisman font-bold">
        Our Team Has Served
        {/* to the organizations across the globe */}
      </h2>
      <div className="slider-container mx-auto max-w-full px-4 py-5">

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="image-card px-2">
              <div className="p-4 rounded shadow flex items-center justify-center h-40 backdrop-blur-md">
                <img
                  src={img}
                  alt={`Company ${index + 1}`}
                  className="w-full h-full object-contain drop-shadow-lg "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
};

export default CompanySlideSection;
