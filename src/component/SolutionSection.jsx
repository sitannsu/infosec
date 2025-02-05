// import React from "react";

// const solutions = [
//     {
//         title: "Third-party Risk Management",
//         icon: "/img/ThirdParty.png", // Replace with your actual icon path
//     },
//     {
//         title: "Regulatory Change Management",
//         icon: "/img/Regulatory.png",
//     },
//     {
//         title: "Documenting Breach & Notification Policy",
//         icon: "/img/Documenting.png",
//     },
//     {
//         title: "Data Privacy Compliance",
//         icon: "/img/Employee.png",
//     },
//     {
//         title: "Cyber Security Awareness Training",
//         icon: "/img/Compliance.png",
//     },
//     {
//         title: "Incident Response Planning",
//         icon: "/img/Adaptive.png",
//     },
//     {
//         title: "Vulnerability Management",
//         icon: "/img/Demostrating.png",
//     },
//     {
//         title: "Risk Assessment Services",
//         icon: "/img/Effective.png",
//     },
//     {
//         title: "Compliance Audits & Reviews",
//         icon: "/img/Managed.png",
//     },
// ];

// const SolutionSection = () => {
//     return (
//         <div className="bg-gray-50 py-10 px-6 md:px-20">
//             <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
//                 Prevention Is Better Than Cure
//             </h2>
//             <p className="text-gray-600 text-center text-lg mb-10">
//                 Here’s our solution for your industry requirements
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {solutions.map((solution, index) => (
//                     <div
//                         key={index}
//                         className=" shadow-md rounded-lg p-6 text-center bg-[#e1bee7]"
//                     >
//                         <img
//                             src={solution.icon}
//                             alt={solution.title}
//                             className="mx-auto mb-4 w-16 h-16"
//                         />
//                         <h3 className="text-blue-700 font-semibold text-lg">
//                             {solution.title}
//                         </h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SolutionSection;


import React from "react";

const solutions = [
    {
        title: "Third-party Risk Management",
        icon: "/img/ThirdParty.png",
    },
    {
        title: "Regulatory Change Management",
        icon: "/img/Regulatory.png",
    },
    {
        title: "Documenting Breach & Notification Policy",
        icon: "/img/Documenting.png",
    },
    {
        title: "Data Privacy Compliance",
        icon: "/img/Employee.png",
    },
    {
        title: "Cyber Security Awareness Training",
        icon: "/img/Compliance.png",
    },
    {
        title: "Incident Response Planning",
        icon: "/img/Adaptive.png",
    },
    {
        title: "Vulnerability Management",
        icon: "/img/Demostrating.png",
    },
    {
        title: "Risk Assessment Services",
        icon: "/img/Effective.png",
    },
    {
        title: "Compliance Audits & Reviews",
        icon: "/img/Managed.png",
    },
];

const SolutionSection = () => {
    return (
        <div className="bg-gray-50 py-8 px-4 sm:py-10 sm:px-6 lg:px-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
                Prevention Is Better Than Cure
            </h2>
            <p className="text-gray-600 text-center text-base sm:text-lg mb-8">
                Here’s our solution for your industry requirements
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="shadow-md  rounded-lg px-1 py-3 md:px-6 md:py-6 text-center bg-[#edf6fd] transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={solution.icon}
                            alt={solution.title}
                            className="mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16"
                        />
                        <h3 className="text-blue-700 font-semibold text-base sm:text-lg">
                            {solution.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolutionSection;
