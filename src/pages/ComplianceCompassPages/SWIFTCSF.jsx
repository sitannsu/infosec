// import React from 'react'

// const SWIFTCSF = () => {
//     return (
//         <div>SWIFTCSF</div>
//     )
// }

// export default SWIFTCSF

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
import GovernanceEngineTabs from '@/component/GovernanceEngineTab';


function SWIFTCSF() {
    const descriptionItems = [
        "Enhance Compliance & Reduce Risk. Ampcus Cyber streamlines SWIFT CSCF implementation, safeguarding your financial messaging and ensuring adherence to industry best practices. Minimize cybersecurity risk and build trust with partners."
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
            label: "SWIFT CSP Expertise",
            content:
                "Ampcus Cyber brings specialized expertise in SWIFT CSP, guiding your financial institution through the intricacies of the implementation process tailored for the financial sector.",
        },
        {
            label: "Tailoring Cybersecurity for Finance",
            content:
                "Our approach is centered on crafting solutions customized to the financial sector, precisely addressing the cybersecurity challenges financial institutions face.",
        },
        {
            label: "SWIFT CSP Excellence",
            content:
                "Achieve excellence in SWIFT CSP with proactive assistance from our dedicated support team, ensuring a seamless implementation process and ongoing compliance with financial security standards.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };

    const securityTabsData = [
        { label: 'Secure Financial Transactions', content: 'SWIFT CSP services ensure the secure transmission of financial messages, protecting your organization and clients from unauthorized access and fraudulent activities..' },
        { label: 'Regulatory Compliance', content: 'Implementing SWIFT CSP aligns your financial institution with regulatory requirements, reducing the risk of non-compliance issues and ensuring adherence to global financial security standards.' },
        { label: 'Fraud Prevention', content: 'SWIFT CSP includes controls to prevent and detect fraudulent activities, safeguarding your financial institution against cyber threats that could compromise the integrity of financial transactions.' },
        { label: 'Trust and Reputation', content: 'Adhering to SWIFT CSP standards builds trust among clients, partners, and stakeholders, enhancing the reputation of your financial institution in the global financial services landscape.' },

        { label: 'Global Recognition', content: 'SWIFT CSP is globally recognized, providing a standardized approach to financial cybersecurity that is acknowledged and respected across the international financial community.' },

    ];
    return (
        <>
            <SubPageHero
                title="SWIFT CSF"
                subtitle="Secure Financial Messaging. Be SWIFT CSF Compliant"
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Enhance Financial Cybersecurity with SWIFT CSF Services"
                description="Welcome to Ampcus Cyber, where financial cybersecurity meets excellence. Our SWIFT Customer Security Programme (CSP) services are meticulously crafted to fortify your financial transactions against cyber threats. Gain a robust cybersecurity framework, assure your stakeholders, and elevate your security standards with SWIFT CSP services offered by Ampcus Cyber."
                subtitle="Understanding SWIFT CSP Services"

                description1="SWIFT CSP (Society for Worldwide Interbank Financial Telecommunications Customer Security Programme) is a global framework designed to enhance the security of the SWIFT messaging platform, used by financial institutions for secure and standardized communication. At Ampcus Cyber, our SWIFT CSP services assist your financial organization in implementing and maintaining the necessary security controls to protect against cyber threats and fraud."
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />

            <GovernanceEngineTabs
                title="Here’s how we shine a light on the darkest corners of your cybercrime scene"
                tabs={securityTabsData}
            />

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why choose Ampcus Cyber?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc={image1}
                title="Connect with Ampcus Cyber for Financial Cybersecurity Excellence"
                description="Elevate your financial institution’s cybersecurity posture, gain industry recognition, and assure your stakeholders with SWIFT CSP services from Ampcus Cyber. Connect with us today to embark on a journey of financial cybersecurity excellence, trust, and resilience."
            />

            <ContactCard
                title="Ready to secure your future?!"
                subtitle="Contact us today!"
                description="Contact our team at letsconnect@ampcuscyber.com to discuss your specific needs and let us guide you toward a more secure tomorrow."
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

export default SWIFTCSF;