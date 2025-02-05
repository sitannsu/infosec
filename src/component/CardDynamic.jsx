// import React from 'react';
// import office from "../image/office.jpg"
// const ContactCard = ({
//     title = "Ready to safeguard your business and maintain peace of mind? Contact us to learn more about our compliance solutions and start securing your operations today.",
//     subtitle = "Contact us today!",
//     description = "Take the first step towards PCI DSS compliance excellence. Contact our team at letsconnect@ampcuscyber.com to discuss your specific needs and let us guide you toward a more secure tomorrow.",
//     // email = "letsconnect@ampcuscyber.com",
//     buttonText = "Contact Us Today!",
//     onButtonClick,
// }) => {
//     return (
//         <div
//             className="relative flex justify-center items-center bg-cover bg-center py-20"
//             style={{ backgroundImage: `url(${office})` }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black opacity-70 text-white text-center text-xl">  </div>

//             {/* Content */}
//             <div className="relative bg-yellow-300 rounded-3xl shadow-lg px-10 py-6 max-w-xl w-full">

//                 <h2 className="text-4xl font-bold text-center text-gray-900 mb-2 py-4">{title}</h2>
//                 <h3 className="text-3xl font-semibold text-center text-gray-900 mb-4 py-2">{subtitle}</h3>
//                 <p className="text-gray-800 text-center mb-6 py-2">{description}</p>

//                 <div className="flex justify-center mt-4">
//                     <button
//                         className="bg-red-600 text-white px-6 py-2 mb-4 font-bold hover:bg-red-700 transition-colors duration-200"
//                         onClick={onButtonClick}
//                     >
//                         {buttonText}
//                     </button>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default ContactCard;


// import React from 'react';
// import office from "../image/office.jpg";

// const ContactCard = ({
//     title = "Want to know more?",
//     subtitle = "Let's talk!",
//     description = "Get started with Network Intelligence by filling out the form below. We're here to help you achieve PCI DSS compliance and secure your business.",
//     buttonText = "Submit",
//     onButtonClick,
// }) => {
//     return (
//         <div
//             className="relative bg-cover bg-center  bg-[#131022] font-lato"
//         // style={{ backgroundImage: `url(${office})` }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black opacity-50" />

//             {/* Content Box */}
//             <div className="relative flex justify-between items-center px-10 py-10 max-w-5xl mx-auto text-gray-600">

//                 {/* Text Section */}
//                 <div className="w-1/2">
//                     <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
//                     {/* <h3 className="text-2xl font-semibold text-white mb-4">{subtitle}</h3> */}
//                     <p className="text-lg mb-8">{description}</p>
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-2/3  p-8 rounded-xl shadow-lg">
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-semibold text-gray-200 mb-4">{subtitle}</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 className="p-2 text-gray-900 text-sm w-full rounded-md border  border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 className="p-2 text-sm w-full rounded-md border border-gray-300  bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
//                             />
//                         </div>
//                         <input
//                             type="email"
//                             placeholder="Company Email Address"
//                             className="p-2 text-sm w-full rounded-md border border-gray-300  bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Contact Number"
//                             className="p-2 text-sm w-full rounded-md border border-gray-300  bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500  placeholder-gray-700"
//                         />

//                         <select
//                             className="p-2 text-sm w-full rounded-md border border-gray-300  bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         >
//                             <option value="">Services</option>
//                             <option value="service1">Service 1</option>
//                             <option value="service2">Service 2</option>
//                         </select>
//                         <select
//                             className="p-2 text-sm w-full rounded-md border border-gray-300  bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 "
//                         >
//                             <option value="">Country</option>
//                             <option value="us">United States</option>
//                             <option value="ca">Canada</option>
//                         </select>
//                         <textarea
//                             placeholder="Message"
//                             className="p-2 text-sm w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-center mt-6">
//                         <button
//                             className="bg-purple-800 text-white px-6 py-2  rounded-full font-bold hover:bg-purple-400 transition-all duration-300"
//                             onClick={onButtonClick}
//                         >
//                             {buttonText}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactCard;


import React from 'react';
import office from "../image/office.jpg";

const ContactCard = ({
    title = "Want to know more?",
    subtitle = "Let's talk!",
    description = "Get started with Network Intelligence by filling out the form below. We're here to help you achieve PCI DSS compliance and secure your business.",
    buttonText = "Submit",
    onButtonClick,
}) => {
    return (
        <div
            className="relative bg-cover bg-center bg-[#131022] font-lato"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Content Box */}
            <div className="relative flex flex-col lg:flex-row justify-between items-center px-6 sm:px-8 md:px-10 py-10 max-w-5xl mx-auto text-gray-600">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-3xl sm:text-2xl font-bold text-gray-300 mb-2">
                        {title}
                    </h2>
                    <p className="text-lg sm:text-sm mb-8 text-gray-300">
                        {description}
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-2/3 p-6 sm:p-4 rounded-xl shadow-lg bg-gray-800 bg-opacity-90">
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-lg font-semibold text-gray-200 mb-4">
                            {subtitle}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-2 sm:p-1 text-gray-900 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Company Email Address"
                            className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
                        />
                        <select
                            className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Services</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                        </select>
                        <select
                            className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                        </select>
                        <textarea
                            placeholder="Message"
                            className="p-2 sm:p-1 text-sm sm:text-xs w-full rounded-md border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            className="bg-purple-800 text-white px-6 sm:px-4 py-2 sm:py-1 rounded-full font-bold hover:bg-purple-400 transition-all duration-300"
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

