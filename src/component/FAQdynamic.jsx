import React, { useState } from 'react';
import { FaGlobe, FaPlus } from 'react-icons/fa';

const FAQAccordion = ({ faqItems }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <div className=" ">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
                <div className="flex  p-4 ">

                    {/* Left Image Section */}
                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            src="/img/faq.png"// Replace with your image path
                            alt="FAQ Illustration"
                            className="w-[600px]"
                        />
                    </div>

                    {/* Right Accordion Section */}
                    <div className="w-2/5 mt-16 ">

                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-8 border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex justify-between items-center px-8 py-4 text-left font-semibold text-gray-800 focus:outline-none"
                                >
                                    {item.question}
                                    <span className="text-xl">
                                        {activeIndex === index ? <FaGlobe /> : <FaPlus />}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="p-4 text-gray-700 border-t border-gray-300">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div></>

    );
};

export default FAQAccordion;
