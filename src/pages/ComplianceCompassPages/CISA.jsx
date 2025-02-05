// import React from 'react'

// const CISA = () => {
//     return (
//         <div>CISA</div>
//     )
// }

// export default CISA

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


function CISA() {
    const descriptionItems = [
        "Ampcus Cyber streamlines your path to CMMC compliance. Our experts guide you through the assessment process, ensuring your organization meets the Department of Defense’s cybersecurity standards."
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
                title="CISA Cybersecurity Maturity Model Certification (CMMC)"
                subtitle="Secure Your Defense Contract, Achieve CMMC Compliance!"
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Secure Your Future with CMMC Certification by Ampcus Cyber"
                description1="Welcome to Ampcus Cyber, where security meets maturity. Our CISA Cybersecurity Maturity Model Certification (CMMC) services are designed to bolster your organization’s cybersecurity posture. Gain a competitive edge, assure your stakeholders, and fortify your cybersecurity defenses with a certification that signifies resilience and maturity."
                subtitle="Understanding CISA CMMC Certification"
                description2="CMMC, established by the Cybersecurity and Infrastructure Security Agency (CISA), is a comprehensive framework that ensures contractors in the defense industrial base (DIB) sector implement necessary cybersecurity practices. At Ampcus Cyber, our CMMC certification service guides your organization through the levels of cybersecurity maturity, ensuring compliance with the Department of Defense’s (DoD) requirements."
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

export default CISA;