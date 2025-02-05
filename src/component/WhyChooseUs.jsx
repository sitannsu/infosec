

// import React from "react";

// const WhyChooseAZInfosec = ({ title, items }) => {
//     // Divide items into chunks of up to 4 items per row
//     const chunkItems = (arr, size) => {
//         const chunks = [];
//         for (let i = 0; i < arr.length; i += size) {
//             chunks.push(arr.slice(i, i + size));
//         }
//         return chunks;
//     };

//     const itemChunks = chunkItems(items, 4); // Break items into chunks of 4

//     return (
//         <section className="text-gray-600 body-font font-lato">
//             <div className="container px-5 py-12 md:py-24 mx-auto ">
//                 <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col items-center text-center">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#01012b]">
//                         {title}
//                     </h1>
//                     <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-medium text-base sm:text-lg"></p>
//                 </div>
//                 {itemChunks.map((chunk, chunkIndex) => (
//                     <div
//                         key={chunkIndex}
//                         className={`grid grid-cols-1 sm:grid-cols-2 ${chunk.length === 3
//                             ? "lg:grid-cols-3"
//                             : "lg:grid-cols-4"
//                             } gap-6 mb-6`}
//                     >
//                         {chunk.map((item, index) => (
//                             <div className="px-2 py-4 " key={index}>
//                                 <div className="border-2 border-blue-600 p-6 rounded-lg bg-[#edf6fd] h-full">
//                                     <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full text-indigo-900 mb-4">
//                                         <img
//                                             className="h-20 w-20 rounded-full object-cover"
//                                             src={item.image}
//                                             alt={item.title}
//                                         />
//                                     </div>
//                                     <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">
//                                         {item.title}
//                                     </h2>
//                                     <p className="leading-relaxed text-base text-black text-center">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default WhyChooseAZInfosec;

import React from "react";

const WhyChooseAZInfosec = ({ title, subtitle, items }) => {
    // Divide items into chunks of up to 4 items per row
    const chunkItems = (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const itemChunks = chunkItems(items, 4); // Break items into chunks of 4

    return (
        <section className="text-gray-600 body-font font-lato">
            <div className="container px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col items-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#01012b]">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-medium text-base sm:text-lg mb-4">
                            {subtitle}
                        </p>
                    )}
                </div>
                {itemChunks.map((chunk, chunkIndex) => (
                    <div
                        key={chunkIndex}
                        className={`grid grid-cols-1 sm:grid-cols-2 ${chunk.length === 3
                            ? "lg:grid-cols-3"
                            : "lg:grid-cols-4"
                            } gap-6 mb-6`}
                    >
                        {chunk.map((item, index) => (
                            <div className="px-2 py-4" key={index}>
                                <div className="border-2 border-blue-600 p-6 rounded-lg bg-[#edf6fd] h-full">
                                    <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full text-indigo-900 mb-4">
                                        <img
                                            className="h-20 w-20 rounded-full object-cover"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 text-center">
                                        {item.title}
                                    </h2>
                                    <p className="leading-relaxed text-base text-black text-center">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseAZInfosec;


