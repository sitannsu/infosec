// import React from 'react';

// const StatisticsSection = () => {
//   const stats = [
//     { value: "60%", description: "Rise of ransomware attack in 2019" },
//     { value: "71%", description: "71% of the Data breach is financial motivated" },
//     { value: "$6T", description: "Cybercrime damages expected to hit by 2021" },
//     { value: "65%", description: "World-wide cyber attacks have increased" },
//   ];

//   return (
//     // <div className="bg-gradient-to-r from-white via-blue-100 to-white py-10">
//     <div className=" py-10">
//       <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
//         Statistics of Data Breach Globally
//       </h2>
//       <div className="flex justify-center flex-wrap gap-8 px-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center  border-4 border-blue-500 rounded-full w-40 h-40 shadow-md"
//           >
//             <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
//             <p className="text-sm text-center mt-2 text-gray-600">
//               {stat.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatisticsSection;


// import React from "react";

// const StatisticsSection = () => {
//   const stats = [
//     { value: "48%", description: "of Organizations lack confidence in the effectiveness of their email security protections." },
//     { value: "$4.88", description: "The average cost of a data breached  in 2024." },
//     { value: "68% ", description: "of breaches involved a human element in 2024" },
//     { value: "$10.5", description: "Worldwide cybercrime costs are estimated to hit annually by 2025" },
//   ];

//   return (
//     <div className="bg-blue-50 py-12">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8">
//         Statistics of Data Breach Globally
//       </h2>
//       <div className="flex justify-center flex-wrap gap-8 px-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center bg-white border-4 border-blue-500 rounded-full w-56 h-56 shadow-lg transform hover:scale-110 transition-transform duration-300"
//           >
//             <p className="text-4xl font-extrabold text-blue-700">{stat.value}</p>
//             <p className="text-sm text-center mt-2 text-gray-600">{stat.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatisticsSection;


import React from "react";

const StatisticsSection = () => {
  const stats = [
    { value: "48%", description: "of Organizations lack confidence in the effectiveness of their email security protections." },
    { value: "$4.88 Million", description: "The average cost of a data breach in 2024." },
    { value: "68%", description: "of breaches involved a human element in 2024." },
    { value: "$10.5 Trillion", description: "Worldwide cybercrime costs are estimated to hit annually by 2025." },
  ];

  return (
    <div className="bg-blue-50 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8 px-4">
        Statistics of Data Breach Globally
      </h2>
      <div className="flex justify-center flex-wrap gap-8 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white border-4 border-blue-500 rounded-full w-48 h-48 md:w-56 md:h-56 shadow-lg transform hover:scale-110 transition-transform duration-300"
          >
            <p className="text-2xl md:text-3xl font-extrabold text-blue-700">{stat.value}</p>
            <p className="text-xs md:text-sm text-center mt-2 text-gray-600 px-4">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;

