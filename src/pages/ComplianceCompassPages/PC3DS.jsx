
// import React from 'react';

// import Slider from 'react-slick';

// const PC3DS = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2, // Show two slides at a time
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="bg-teal-500 py-12">
//             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
//                 {/* Text Section */}
//                 <div className="text-center md:text-left md:w-1/2">
//                     <h2 className="text-white text-3xl font-bold">Comprehensive PCI DSS Services</h2>
//                     <p className="text-white mt-4">
//                         Our end-to-end PCI DSS services cover every aspect of compliance, from assessment to certification.
//                     </p>
//                 </div>

//                 {/* Slider Section */}
//                 <div className="md:w-1/2">
//                     <h3 className="text-white text-xl font-semibold mb-6 text-center md:text-left">We Offer</h3>
//                     <Slider {...settings}>
//                         {/* Gap Analysis Card 1 */}
//                         <div className="px-4">
//                             <div className="bg-white rounded-lg shadow-lg p-6 h-64"> {/* Set a fixed height */}
//                                 <div className="flex items-center mb-4">
//                                     <div className="text-red-500 text-3xl">
//                                         <i className="fas fa-chart-line"></i> {/* Replace with an actual icon */}
//                                     </div>
//                                     <h4 className="text-xl font-semibold ml-4">Gap Analysis:</h4>
//                                 </div>
//                                 <p className="text-gray-600">
//                                     Identify vulnerabilities and gaps in your current security measures with our comprehensive gap analysis.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Gap Analysis Card 2 */}
//                         <div className="px-4">
//                             <div className="bg-white rounded-lg shadow-lg p-6 h-64"> {/* Set a fixed height */}
//                                 <div className="flex items-center mb-4">
//                                     <div className="text-red-500 text-3xl">
//                                         <i className="fas fa-chart-line"></i> {/* Replace with an actual icon */}
//                                     </div>
//                                     <h4 className="text-xl font-semibold ml-4">Gap Analysis:</h4>
//                                 </div>
//                                 <p className="text-gray-600">
//                                     Identify vulnerabilities and gaps in your current security measures with our comprehensive gap analysis.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Strategic Roadmap Card */}
//                         <div className="px-4">
//                             <div className="bg-white rounded-lg shadow-lg p-6 h-64"> {/* Set a fixed height */}
//                                 <div className="flex items-center mb-4">
//                                     <div className="text-red-500 text-3xl">
//                                         <i className="fas fa-road"></i> {/* Replace with an actual icon */}
//                                     </div>
//                                     <h4 className="text-xl font-semibold ml-4">Strategic Roadmap:</h4>
//                                 </div>
//                                 <p className="text-gray-600">
//                                     Craft a customized roadmap for achieving and maintaining PCI DSS compliance, ensuring a strategic and cost-effective approach.
//                                 </p>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PC3DS;


import SubPageHero from '@/component/SubPageHero';
import CarouselWithText from '@/component/CarouselText';
// import WhyChooseSection from '@/component/ChooseSection'; // Adjust the path if needed
import React from 'react';

import DynamicCardComponent from '@/component/ChooseSection';
import DynamicCardWithImage from '@/component/ImageText';
import ContactCard from '@/component/CardDynamic';
import FAQAccordion from '@/component/FAQdynamic';
import InfoSection from '@/component/TextImage';
import HeroSection from '@/component/TextImage';
import image1 from '../../../src/image/bgimage.jpg'


function PC3DS() {
    const descriptionItems = [
        "Ampcus Cyber empowers businesses to achieve and maintain PCI 3DS certification and ensure secure online transactions. Our comprehensive approach guides you through the entire process, from assessment and implementation to ongoing compliance maintenance. Gain peace of mind with Ampcus Cyber, your trusted partner in strengthening your e-commerce security.."
    ];

    const formFields = [
        { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your full name", required: true },
        { label: "Company Name", name: "companyName", type: "text", placeholder: "Enter your company name", required: true },
        { label: "Email", name: "email", type: "email", placeholder: "Enter your email", required: true },
        { label: "Phone", name: "phone", type: "tel", placeholder: "Enter your phone number", required: false },
        {
            label: "Country",
            name: "country",
            type: "dropdown",
            placeholder: "Select Country",
            required: true,
            options: [
                { value: "", label: "Select Country" },
                { value: "US", label: "United States" },
                { value: "CA", label: "Canada" },
                { value: "GB", label: "United Kingdom" },
                { value: "AU", label: "Australia" },
                // Add more countries as needed
            ]
        }
    ];

    const cardsData = [
        {
            icon: 'fas fa-chart-line', // FontAwesome icon class
            title: 'Gap Analysis',
            description: 'Identify vulnerabilities and gaps in your current security measures with our comprehensive gap analysis.',
        },
        {
            icon: 'fas fa-chart-line', // FontAwesome icon class
            title: 'Compliance Assessment',
            description: 'Detailed assessment to ensure all aspects of your business meet PCI DSS requirements.',
        },
        {
            icon: 'fas fa-road', // FontAwesome icon class
            title: 'Strategic Roadmap',
            description: 'Craft a customized roadmap for achieving and maintaining PCI DSS compliance.',
        },
    ];


    const faqData = [
        {
            question: "What is PCI DSS?",
            answer: "The Payment Card Industry Data Security Standard (PCI DSS) is a globally recognized standard that provides a consistent framework for organizations to adopt effective data security measures to protect Payment Card Account Data. The standard focuses on conditions that handle payment card data and sets a baseline of technical and operational requirements to ensure its protection",
        },
        {
            question: "What are PCI DSS requirements?",
            answer: "There are 12 principal requirements that organizations must meet to ensure the security of payment card account data   "

            ,
        },
        {
            question: "What are the PCI DSS benefits for businesses?",
            answer: "PCI DSS helps businesses improve security, prevent data breaches, and protect customer information",
        },
        {
            question: "What is new in PCI DSS?",
            answer: "The latest updates in PCI DSS include new requirements for multi-factor authentication and stricter...",
        },
    ];



    const items = [
        {
            label: "Expertise You Can Trust",
            content:
                "Benefit from the extensive experience and expertise of our PCI QSA team, committed to staying abreast of evolving compliance standards.",
        },
        {
            label: "Tailored Solutions",
            content:
                "Our team provides customized compliance solutions that meet your organization's specific needs and objectives.",
        },
        {
            label: "Proactive Security Measures",
            content:
                "Stay ahead of potential threats with proactive measures designed to strengthen your security posture.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    return (
        <>
            <SubPageHero
                title="Simplify PCI 3DS Compliance!"
                subtitle="Secure Your E-commerce Transactions"
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Empower Your Transactions: PCI 3DS Service by Ampcus Cyber"
                subtitle=""
                description1="In the boundless sphere of online transactions, security is non-negotiable. Ampcus Cyber’s PCI 3DS Service is meticulously crafted to bolster your business defenses against potential threats, guaranteeing a frictionless and secure environment for 3D Secure (3DS) transactions."
                description2=""
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />

            <CarouselWithText
                title="Comprehensive PCI DSS Services"
                description="Our end-to-end PCI DSS services cover every aspect of compliance, from assessment to certification."
                cards={cardsData}
            />

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc={image1}
                title="Secure Your Future And Protect Your Business"
                description="Embark on a journey to secure your business and customer trust with PCI DSS compliance. At Ampcus Cyber, we don’t just offer services; we provide a partnership dedicated to the longevity and success of your enterprise."
            />

            <ContactCard
                title="Ready to secure your future?!"
                subtitle="Contact us today!"
                description="Take the first step towards PCI DSS compliance excellence. Contact our team at letsconnect@ampcuscyber.com to discuss your specific needs and let us guide you toward a more secure tomorrow"
                // email="contact@example.com"
                buttonText="Contact 
                Us Today"
                onButtonClick={handleContactClick}
            />


            <div className="bg-gray-50 py-16">
                <FAQAccordion faqItems={faqData} />
            </div>





        </>
    );
}

export default PC3DS;











