





import React, { useState } from "react";

const DynamicCardComponent = ({ title, items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="flex flex-col items-center py-20 bg-gray-200 rounded-lg shadow-md w-full font-lato">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-black">{title}</h2>
                <div className="flex flex-col md:flex-row w-90 mt-10">
                    {/* Left Side - Menu */}
                    <div
                        className={`flex flex-col space-y-4 mt-6 w-full md:w-1/3 ${items.length <= 4 ? "justify-center" : ""}`}
                    >
                        {items.map((item, index) => (
                            <button
                                key={index}
                                className={`py-1 px-4 md:py-2 md:px-16 text-white text-end font-semibold rounded-full md:rounded-l-full ${activeIndex === index
                                    ? "bg-blue-900 text-yellow-300"
                                    : "bg-blue-600 text-gray-900 hover:bg-blue-900 hover:text-yellow-300"
                                    } flex items-center justify-center`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Content */}
                    <div
                        className="ml-0 mt-4 md:ml-4 md:mt-0 p-4 md:p-4 lg:p-6 text-[#fac21f] flex flex-col justify-center items-center w-[350px] sm:w-[500px] md:w-[800px] lg:w-[800px] min-h-[250px] md:min-h-[400px] rounded-2xl md:rounded-[40px] bg-cover bg-[url('/img/choose1.jpeg')]"
                        style={{ minHeight: "300px", height: "350px" }} // Ensures fixed height
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                            {items[activeIndex].label}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-center">
                            {items[activeIndex].content}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DynamicCardComponent;








