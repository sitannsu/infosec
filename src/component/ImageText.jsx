import React from "react";

const DynamicCardWithImage = ({ imageSrc, title, description, description1, description2 }) => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center  py-4  rounded-lg shadow-md bg-[#0192a7] ">
                    <div className="flex items-center space-x-6   justify-center ">
                        {/* Image Section */}
                        <div className="w-1/3  ">
                            <img
                                src="/img/ser-bg1.png"
                                alt="Illustration"
                                className="   "
                            />
                        </div>

                        {/* Text Section */}
                        <div className="text-black w-2/5 ">
                            <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
                            <p className="text-lg text-white">{description}</p>
                            <p className="text-lg text-white">{description1}</p>
                            <p className="text-lg text-white">{description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicCardWithImage;
