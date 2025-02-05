// import React from 'react';

// const InfoSection = ({ title, subtitle, content, image, imagePosition = 'right' }) => {
//     return (
//         <div className="flex max-w-7xl mx-auto py-8 px-4 lg:px-8 bg-white shadow-md rounded-md overflow-hidden">
//             {/* Dynamic Positioning for Image */}
//             {imagePosition === 'left' && (
//                 <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
//                     <img src={image} alt="Info Section" className="w-full h-auto rounded-md" />
//                 </div>
//             )}

//             {/* Content Section */}
//             <div className={`w-full ${imagePosition === 'left' ? 'lg:pl-8' : 'lg:pr-8'} lg:w-2/3`}>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
//                 <h3 className="text-xl font-semibold text-black mb-4">{subtitle}</h3>
//                 <p className="text-gray-700 text-lg mb-4">{content}</p>
//             </div>

//             {/* Dynamic Positioning for Image */}
//             {imagePosition === 'right' && (
//                 <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
//                     <img src="/img/pci-dss.png" alt="Info Section" className="w-full h-auto rounded-md" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default InfoSection;


import React from 'react';

const HeroSection = ({
    title = "",
    subtitle = "",
    title1 = "",
    description = "",
    description1 = "",
    description2 = "",
    imageSrc = "https://dummyimage.com/720x600",

}) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {title}

                    </h1>

                    <p className="mb-8 leading-relaxed">{description}</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {subtitle}
                    </h1>
                    <p className="mb-8 leading-relaxed">{description1}</p>

                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {title1}
                    </h1>

                    <p className="mb-8 leading-relaxed">{description2}</p>


                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/image/pci-dss.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

