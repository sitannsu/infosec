// import React from 'react'

// const BCMS = () => {
//     return (
//         <div>BCMS</div>
//     )
// }

// export default BCMS

import SubPageHero from '@/component/SubPageHero';
import CarouselWithText from '@/component/CarouselText';
// import WhyChooseSection from '@/component/ChooseSection'; // Adjust the path if needed
import React from 'react';

import DynamicCardComponent from '@/component/ChooseSection';
import DynamicCardWithImage from '@/component/ImageText';
import ContactCard from '@/component/CardDynamic';
import FAQAccordion from '@/component/FAQdynamic';

import HeroSection from '@/component/TextImage';
import image1 from '../../../src/image/bgimage.jpg'


function BCMS() {
    const descriptionItems = [
        "Ampcus Cyber empowers businesses to navigate BCMS – ISO/IEC 22301 certification with expert guidance and proven methodologies. Ensure operational resilience and minimize disruption with our comprehensive compliance solutions."
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
                title="BCMS: ISO/IEC 22301"
                subtitle="Be BCMS Ready! Achieve ISO/IEC 22301 Certification. Stay Compliant."
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Ensure Business Continuity: BCMS – ISO/IEC 22301 Certification"
                subtitle=""
                description1="In the face of unpredictability, Ampcus Cyber presents its Business Continuity Management System (BCMS) with ISO/IEC 22301 certification. Shield your organization from disruptions, elevate resilience, and convey a steadfast commitment to sustaining vital business operations."
                description2="Navigating the complexities of PCI DSS compliance can be a challenging endeavor. At Ampcus Cyber, we recognize that each business is unique, with distinct processes and requirements. Our seasoned team of PCI QSA professionals is dedicated to understanding your specific needs and tailoring compliance solutions that seamlessly integrate with your operations."
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

export default BCMS;