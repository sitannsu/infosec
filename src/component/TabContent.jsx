






// import React from 'react';

// const TabContent = ({ imageSrc, complianceItems }) => {
//   // Determine if there are fewer than 3 items
//   const isLessThanThree = complianceItems.length < 3;

//   return (
//     <div className="bg-[#290849] py-16"> {/* Purple background for the section */}
//       <div className="container mx-auto flex justify-center">
//         <div
//           className={`w-full lg:w-2/3 grid gap-6 ${isLessThanThree
//             ? 'grid-cols-1 sm:grid-cols-1 justify-items-center' // Center the cards if there are less than 3
//             : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center' // Standard grid if 3 or more
//             }`}
//         >
//           {complianceItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#fac21f] text-purple-900 p-6 h-48 w-64 rounded-lg flex items-center justify-center relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 max-w-xs mx-auto"
//             >
//               {item.link ? (
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="z-10 text-center underline hover:text-purple-700"
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <span className="z-10 text-center">{item.label}</span>
//               )}
//               <div className="absolute inset-0 bg-purple-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabContent;


import React from 'react';

const TabContent = ({ imageSrc, complianceItems }) => {
  // Determine if there are fewer than 3 items
  const isLessThanThree = complianceItems.length < 3;

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-16"> {/* Purple background for the section */}
      <div className="container mx-auto flex justify-center">
        <div
          className={`w-full lg:w-2/3 grid gap-6 ${isLessThanThree
            ? 'grid-cols-1 sm:grid-cols-1 justify-items-center' // Center the cards if there are less than 3
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center' // Standard grid if 3 or more
            }`}
        >
          {complianceItems.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-blue-900 p-6 h-48 w-64 rounded-lg flex items-center justify-center relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 max-w-xs mx-auto cursor-pointer"
            >
              <span className="z-10 text-center">{item.label}</span>
              <div className="absolute inset-0 bg-blue-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
};

export default TabContent;

