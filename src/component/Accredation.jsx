// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import CDPSE from "../../public/img/CDPSE.png";
// import CISA from "../../public/img/CISA.png";
// import GDPR from "../../public/img/GDPR.png";
// import HIPPA from "../../public/img/HIPPA.png";
// import ISACA from "../../public/img/ISACA.png";
// import ISO from "../../public/img/ISO.png";


// const Accredation = () => {
//   const images = [
//     CDPSE,
//     CISA,
//     GDPR,
//     HIPPA,
//     ISACA,
//     ISO,
//   ];

//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Default for larger screens
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     rtl: true, 
//     responsive: [
//       {
//         breakpoint: 1024, // For tablets
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768, // For smaller screens like mobile devices
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480, // For extra small mobile devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="company-slide-section bg-black py-8">
//       <h2 className="text-center text-4xl font-bold mb-6 text-[#fac21f]">Accrediations</h2>
//       <div className="slider-container mx-auto max-w-full px-4">
//         <Slider {...settings}>
//           {images.map((img, index) => (
//             <div kISO={index} className="image-card px-2">
//               <div className="p-4 rounded shadow flex items-center justify-center h-40">
//                 <img
//                   src={img}
//                   alt={`Company ${index + 1}`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Accredation;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CDPSE from "../../public/img/CDPSE.png";
import CISA from "../../public/img/CISA.png";
import GDPR from "../../public/img/GDPR.png";
import HIPPA from "../../public/img/HIPPA.png";
import ISACA from "../../public/img/ISACA.png";
import ISO from "../../public/img/ISO.png";

const Accredation = () => {
  const images = [
    CDPSE,
    CISA,
    GDPR,
    HIPPA,
    ISACA,
    ISO,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false, // Removes side buttons
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="company-slide-section  py-8">
      <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 leading-tight flex items-center justify-center font-bold font-heisman">Accrediations</h2>
      <div className="slider-container mx-auto max-w-full px-4">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="image-card px-2">
              <div className="p-4 rounded shadow flex items-center justify-center h-40  backdrop-blur-md">
                <img
                  src={img}
                  alt={`Company ${index + 1}`}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Accredation;
