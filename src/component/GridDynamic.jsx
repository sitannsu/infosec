import React from 'react';

const DynamicGridSection = ({ title, contentItems }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {contentItems.map((item, index) => (
                        <div key={index} className="p-4 lg:w-1/4">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                    {item.heading}
                                </h1>
                                <p className="leading-relaxed mb-3">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicGridSection;
