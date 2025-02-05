



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function GetStarted({ image, header, description, buttonText, linkTo }) {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     if (linkTo) {
//       navigate(linkTo);
//     }
//   };
//   return (
//     <div
//       className="relative flex justify-center items-center py-16 sm:py-16 bg-gradient-to-br from-[#ffffff] via-[#6d6d6d] to-[#11101d] h-80 md:h-96 "
//     >
//       {/* Overlay */}
//       <div className="absolute top-0 left-0 h-full w-full bg-black/90 z-0" />

//       {/* Content */}
//       <div className="relative text-center text-white px-6 md:px-8 py-8 md:py-12 bg-opacity-70">
//         <h1 className="text-2xl md:text-5xl font-bold mb-4 text-[#fac21f]">{header}</h1>
//         <p className="text-sm md:text-lg mb-6">{description}</p>
//         <button
//           className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 w-full text-2xl md:text-4xl font-bold flex justify-between items-center"
//           onClick={handleButtonClick}
//         >
//           <span className="flex-grow text-left ml-8">{buttonText}</span>
//           <i className="fas fa-chevron-right text-4xl md:text-4xl"></i>
//           <i className="fas fa-chevron-right text-4xl md:text-4xl"></i>
//         </button>



//       </div>
//     </div>
//   );
// }

// export default GetStarted;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function GetStarted({ image, header, description, buttonText, linkTo }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <div className="relative flex justify-center items-center py-16 sm:py-16 bg-blue-900 h-auto md:h-96">
      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full w-full  z-0" />

      {/* Content */}
      <div className="relative text-center text-white px-4 md:px-8 py-6 md:py-12 bg-opacity-70 max-w-md md:max-w-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-[#0FFCBE]">{header}</h1>
        <p className="text-xs sm:text-sm md:text-lg mb-6">{description}</p>
        <button
          className="bg-white text-blue-900 hover:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#0FFCBE] transition duration-300 w-full text-base sm:text-lg md:text-2xl font-bold flex justify-between items-center"
          onClick={handleButtonClick}
        >
          <span className="flex-grow text-left ml-4 sm:ml-6">{buttonText}</span>
          <i className="fas fa-chevron-right text-xl sm:text-2xl"></i>
          <i className="fas fa-chevron-right text-xl sm:text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
