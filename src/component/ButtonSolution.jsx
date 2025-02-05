// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ButtonSolutions = ({ title, solutions }) => {
//     const navigate = useNavigate(); // React Router hook for navigation

//     const handleNavigation = (path) => {
//         navigate(path);
//         // Navigate to the specified path
//     };

//     return (
//         <div className="bg-White text-white  rounded-lg py-4">
//             <h2 className="text-center text-4xl font-bold mb-6">{title}</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
//                 {solutions.map((solution, index) => (
//                     <button
//                         key={index}
//                         onClick={() => navigate(solution.path)}
//                         className="border-2 border-red-500 text-center bg-black py-5 px-10 rounded-tr-3xl rounded-bl-3xl hover:bg-[#00a0ad] hover:text-black transition duration-300 text-xl text-white"
//                     >
//                         {solution.label}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ButtonSolutions;


// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // function ButtonSolutions({ title, solutions }) {
// //     const navigate = useNavigate();

// //     return (
// //         <div className="text-center">
// //             <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>
// //             <div className="grid grid-cols-2 gap-4">
// //                 {solutions.map((solution, index) => (
// //                     <button
// //                         key={index}
// //                         className="border border-red-500 text-white py-2 px-4 rounded hover:bg-red-500 transition"
// //                         onClick={() => navigate(solution.path)}
// //                     >
// //                         {solution.label}
// //                     </button>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default ButtonSolutions;


import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonSolutions = ({ title, solutions }) => {
    const navigate = useNavigate(); // React Router hook for navigation

    return (
        <div className="  rounded-lg py-4">
            <h2 className="text-center text-4xl font-bold mb-6 text-black">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
                {solutions.map((solution, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(solution.path)}
                        className="border-2 border-red-500 text-center bg-gray-200 py-8 px-12 shadow-md hover:shadow-lg hover:bg-[#00a0ad] hover:text-white transition duration-300 text-xl font-semibold"
                    >
                        {solution.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonSolutions;


