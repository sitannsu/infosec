



// import React, { useState } from "react";

// const CollapsibleSection = ({ sections, title, heading, subheading }) => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const handleToggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="flex flex-col items-center py-20 bg-gray-200 rounded-lg  w-full font-lato  ">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black mt-10">{title}</h2>
//             <div className="flex flex-col space-y-8 w-full md:w-2/3 mt-6">
//                 {/* Dynamic Heading */}
//                 {heading && <h1 className="sm:text-xl text-2xl font-md mb-2 text-[#01012b]">{heading}</h1>}
//                 {/* Dynamic Subheading */}
//                 {subheading && (
//                     <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-medium text-lg sm:text-base">
//                         {subheading}
//                     </p>
//                 )}

//                 {sections.map((section, index) => (
//                     <div key={index} className="bg-purple-200 rounded-lg shadow-md">
//                         {/* Heading Button with "+" and "-" */}
//                         <button
//                             onClick={() => handleToggle(index)}
//                             className={`w-full flex justify-between items-center py-6 px-4 md:py-4 md:px-8 font-semibold text-lg md:text-xl rounded-t-lg ${openIndex === index
//                                 ? "bg-purple-500 text-yellow-300"
//                                 : "bg-purple-200 text-gray-900 hover:bg-purple-300 hover:text-yellow-300"
//                                 }`}
//                         >
//                             <span>{section.heading}</span>
//                             <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
//                         </button>

//                         {/* Content Section */}
//                         {openIndex === index && (
//                             <div className="py-10 md:p-6 bg-gray-200 rounded-b-lg space-y-4">
//                                 {section.subheadings.map((subheading, subIndex) => (
//                                     <div key={subIndex} className="flex flex-col py-2 px-4 mb-2 last:mb-0">
//                                         {/* Title */}
//                                         <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
//                                             {subheading.title}
//                                         </h4>
//                                         {/* Descriptions List */}
//                                         {subheading.descriptions.map((description, descIndex) => (
//                                             <p
//                                                 key={descIndex}
//                                                 className="text-sm sm:text-base text-gray-700 mb-1"
//                                             >
//                                                 {description}
//                                             </p>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CollapsibleSection;


import { ArrowDownRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CollapsibleSection = ({ sections, title, heading, subheading }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center py-10 px-4 sm:px-6 bg-gray-200 rounded-lg w-full font-lato">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-black mt-6">
                {title}
            </h2>
            <div className="flex flex-col space-y-6 w-full sm:w-5/6 lg:w-2/3 mt-4">
                {/* Dynamic Heading */}
                {heading && (
                    <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-[#01012b] text-center sm:text-left">
                        {heading}
                    </h1>
                )}
                {/* Dynamic Subheading */}
                {subheading && (
                    <p className="leading-relaxed text-gray-900 font-medium text-base sm:text-lg text-center sm:text-left">
                        {subheading}
                    </p>
                )}

                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-blue-200 rounded-lg shadow-md overflow-hidden"
                    >
                        {/* Heading Button with "+" and "-" */}
                        <button
                            onClick={() => handleToggle(index)}
                            className={`w-full flex justify-between items-center py-4 px-4 sm:py-6 sm:px-6 font-semibold text-base sm:text-lg md:text-xl rounded-t-lg transition-colors duration-200 ${openIndex === index
                                ? "bg-blue-900 text-yellow-300"
                                : "bg-blue-600 text-white hover:bg-blue-900 hover:text-yellow-300"
                                }`}
                        >
                            <span>{section.heading}</span>
                            <span className="text-xl sm:text-2xl">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>

                        {/* Content Section */}
                        {openIndex === index && (
                            <div className="py-6 px-4 sm:p-6 bg-gray-200 rounded-b-lg space-y-4">
                                {section.subheadings.map((subheading, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className="flex flex-col py-2 mb-2 last:mb-0"
                                    >

                                        {/* Title */}

                                        <h4 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center">
                                            <span className="text-purple-700 font-bold h-6 w-6 flex-shrink-0">
                                                {/* Unicode arrow icon */}
                                                <ChevronDoubleRightIcon className="h-full w-full" />
                                            </span>
                                            <span className="ml-2">{subheading.title}</span>
                                        </h4>

                                        {/* Descriptions List */}
                                        {subheading.descriptions.map(
                                            (description, descIndex) => (
                                                <p
                                                    key={descIndex}
                                                    className="text-sm sm:text-base text-gray-700 mb-1 ml-8"
                                                >
                                                    {description}
                                                </p>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollapsibleSection;

