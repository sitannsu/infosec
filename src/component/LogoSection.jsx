// import React from 'react';
// import Slider from 'react-slick';

// const logos = [
//   { src: "https://via.placeholder.com/100", alt: "Company 1" },
//   { src: "https://via.placeholder.com/100", alt: "Company 2" },
//   { src: "https://via.placeholder.com/100", alt: "Company 3" },
//   { src: "https://via.placeholder.com/100", alt: "Company 4" },
//   { src: "https://via.placeholder.com/100", alt: "Company 5" },
//   { src: "https://via.placeholder.com/100", alt: "Company 6" },
//   { src: "https://via.placeholder.com/100", alt: "Company 7" },
// ];

// const LogoSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="text-center py-16 bg-white overflow-hidden">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//           Trusted By 2,880+ World-Class Brands And Organizations Of All Sizes.
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Trusted by Industry Leaders, Securing Cybersecurity Excellence! Our clients include a spectrum of industries, from startups to enterprises. Join the ranks of satisfied clients who have experienced the resilience of our cybersecurity solutions.
//         </p>
//       </div>

//       <div className="mt-8">
//         <Slider {...settings} className="company-carousel">
//           {logos.map((logo, index) => (
//             <div key={index} className="p-4">
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="mx-auto h-12 md:h-16"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default LogoSection;


import React from 'react';
import Slider from 'react-slick';

const logos = [
  { src: "https://via.placeholder.com/100", alt: "Company 1" },
  { src: "https://via.placeholder.com/100", alt: "Company 2" },
  { src: "https://via.placeholder.com/100", alt: "Company 3" },
  { src: "https://via.placeholder.com/100", alt: "Company 4" },
  { src: "https://via.placeholder.com/100", alt: "Company 5" },
  { src: "https://via.placeholder.com/100", alt: "Company 6" },
  { src: "https://via.placeholder.com/100", alt: "Company 7" },
];

const LogoSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="text-center py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
          Trusted By 2,880+ World-Class Brands And Organizations Of All Sizes.
        </h2>
        <p className="text-gray-600 mb-8 md:text-lg text-base">
          Trusted by Industry Leaders, Securing Cybersecurity Excellence! Our clients include a spectrum of industries, from startups to enterprises. Join the ranks of satisfied clients who have experienced the resilience of our cybersecurity solutions.
        </p>
      </div>

      <div className="mt-8">
        <Slider {...settings} className="company-carousel">
          {logos.map((logo, index) => (
            <div key={index} className="p-2 md:p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="mx-auto h-10 md:h-16"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSection;

