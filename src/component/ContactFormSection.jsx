// import React from 'react';

// const ContactForm = ({
//     title = "Contact Us",
//     contactEmail = "LetsConnect@ampcuscyber.com",
//     contactPhone = "(703) 666-3720 (Direct)",
//     socialLinks = [],
// }) => {
//     return (
//         <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
//             <h2 className="text-4xl font-bold mb-8">{title}</h2>
//             <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">

//                 {/* Contact Info */}
//                 <div className="bg-gray-100 p-8 w-full md:w-1/3">
//                     <h3 className="text-xl font-semibold mb-4">Let's Talk</h3>
//                     <p className="mb-2">
//                         <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">
//                             📧 {contactEmail}
//                         </a>
//                     </p>
//                     <p className="mb-6">
//                         <a href={`tel:${contactPhone}`} className="text-red-500 hover:underline">
//                             📞 {contactPhone}
//                         </a>
//                     </p>
//                     <div className="mb-4">
//                         <h4 className="font-semibold">Follow us:</h4>
//                         <div className="flex space-x-3 mt-2">
//                             {socialLinks.map((link, index) => (
//                                 <a
//                                     key={index}
//                                     href={link.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-white bg-blue-500 p-2 rounded-full"
//                                 >
//                                     {link.icon}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="p-8 w-full md:w-2/3">
//                     <form className="space-y-6">
//                         <div>
//                             <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name *</label>
//                             <input
//                                 type="text"
//                                 id="fullName"
//                                 name="fullName"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1" htmlFor="companyName">Company Name *</label>
//                             <input
//                                 type="text"
//                                 id="companyName"
//                                 name="companyName"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1" htmlFor="captcha">Captcha</label>
//                             <div className="w-full p-2 border border-gray-300 rounded">
//                                 {/* Placeholder for CAPTCHA */}
//                                 <div className="text-center text-gray-500">CAPTCHA Component</div>
//                             </div>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
//                         >
//                             SUBMIT
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;


import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const ContactForm = ({
    title = "Contact Us",
    contactEmail = "LetsConnect@AZ Infosec.com",
    contactPhone = "(703) 666-3720 (Direct)",
    contactWhatsapp = "1234567890", // Add WhatsApp phone number
    socialLinks = [],
}) => {
    return (
        <div className="flex flex-col items-center p-10 bg-[#101828] min-h-screen">
            <h2 className="text-4xl text-white font-bold mb-8 animate-fade-in-down">{title}</h2>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl transform transition duration-500 hover:scale-105">
                {/* Contact Info */}
                <div className="bg-gray-100 p-8 w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4 animate-fade-in">Let's Talk</h3>
                    <p className="mb-2">
                        <a
                            href={`mailto:${contactEmail}`}
                            className="text-purple-500 hover:underline transition duration-300 hover:text-purple-800"
                        >
                            📧 {contactEmail}
                        </a>
                    </p>
                    <p className="mb-6">
                        <a
                            href={`tel:${contactPhone}`}
                            className="text-red-500 hover:underline transition duration-300 hover:text-red-700"
                        >
                            📞 {contactPhone}
                        </a>
                    </p>
                    <div className="flex items-center space-x-3 mb-4">
                        <FaWhatsapp className="text-green-500 text-2xl" />
                        <a
                            href={`https://wa.me/${contactWhatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 font-medium hover:underline transition duration-300 hover:text-green-700"
                        >
                            Chat with us on WhatsApp
                        </a>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold">Follow us:</h4>
                        <div className="flex space-x-3 mt-2">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-700 transition duration-300"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 w-full md:w-2/3">
                    <form className="space-y-6 animate-fade-in-up">
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="fullName"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full p-3 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="companyName"
                            >
                                Company Name *
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="w-full p-3 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="email"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-3 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        {/* <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="captcha"
                            >
                                Captcha
                            </label>
                            <div className="w-full p-3 border border-gray-300 rounded shadow bg-gray-50">
                                <div className="text-center text-gray-500">
                                    CAPTCHA Component
                                </div>
                            </div>
                        </div> */}
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white font-semibold py-3 rounded hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;


