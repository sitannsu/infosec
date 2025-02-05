// import React from 'react';

// const SubPageHero = ({
//     title,
//     subtitle,
//     descriptionItems = [],
//     ctaText,
//     formFields = []
// }) => {
//     return (
//         <div className="flex flex-col md:flex-row bg-teal-500 text-white py-12 px-6 md:px-16">
//             {/* Left Content Section */}
//             <div className="md:w-1/2 pr-6">
//                 <h2 className="text-3xl font-bold mb-4">{title}</h2>
//                 <p className="text-lg mb-4">{subtitle}</p>
//                 <ul className="space-y-2 mb-6">
//                     {descriptionItems.map((item, index) => (
//                         <li key={index} className="flex items-start">
//                             <span className="text-xl mr-2">•</span>
//                             <p>{item}</p>
//                         </li>
//                     ))}
//                 </ul>
//                 <a href="#cta" className="text-red-600 font-bold text-lg">{ctaText}</a>
//             </div>

//             {/* Right Form Section */}
//             <div className="md:w-1/3 bg-white rounded-[50px] shadow-lg p-6 md:p-8 text-gray-800 mt-8 md:mt-0">
//                 <h3 className="text-xl font-semibold mb-4">Fill the form to get in touch with us!</h3>
//                 <form>
//                     {formFields.map((field, index) => (
//                         <div key={index} className="mb-4">
//                             <label className="block text-sm font-medium mb-2" htmlFor={field.name}>
//                                 {field.label} {field.required && <span className="text-red-500">*</span>}
//                             </label>
//                             <input
//                                 type={field.type}
//                                 name={field.name}
//                                 placeholder={field.placeholder}
//                                 required={field.required}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
//                             />
//                         </div>
//                     ))}
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium mb-2">Captcha</label>
//                         <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
//                     </div>
//                     <button type="submit" className=" bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 font-semibold">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SubPageHero;

import React from 'react';
import image1 from '@/image/bgimage.jpg'
import image from "../../public/img/security1.jpg"
const SubPageHero = ({
    title,
    subtitle,
    descriptionItems = [],
    ctaText,
    formFields = []
}) => {
    return (
        <div
            className="flex flex-col md:flex-row text-white py-12 px-6 md:px-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >

            {/* Left Content Section */}
            <div className="md:w-1/2 pr-6 ml-20 ">
                <h2 className="text-[#FFEAAB] font-bold text-[52px] leading-tight font-sans shadow-sm">
                    {title}
                </h2>
                <p className="text-2xl font-bold text-white mt-4 mb-4">
                    {subtitle}
                </p>
                <ul className="space-y-2 mb-6">
                    {descriptionItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
                <a href="#cta" className="text-red-500 font-bold text-3xl">
                    {ctaText}
                </a>
            </div>


            {/* Right Form Section */}
            <div className="md:w-1/3 bg-white rounded-3xl shadow-lg p-8 text-gray-800 mt-8 md:mt-0 ml-10">
                <h3 className="text-xl font-bold mb-4 text-center">
                    Fill the form to get in touch with us!
                </h3>
                <form>
                    {formFields.map((field, index) => (
                        <div key={index} className="mb-4">
                            <label
                                className="block text-sm font-medium mb-2 text-gray-700"
                                htmlFor={field.name}
                            >
                                {field.label}{' '}
                                {field.required && <span className="text-red-500">*</span>}
                            </label>
                            {field.type === 'dropdown' ? (
                                <select
                                    name={field.name}
                                    required={field.required}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
                                >
                                    {field.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
                                />
                            )}
                        </div>
                    ))}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            Captcha
                        </label>
                        <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                    </div>
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 px-6 rounded-full w-full font-semibold hover:bg-red-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default SubPageHero;