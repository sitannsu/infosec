// import React from 'react'

// const ISA = () => {
//     return (
//         <div>ISA</div>
//     )
// }

// export default ISA

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
import GovernanceEngineTabs from '@/component/GovernanceEngineTab';


function ISA() {
    const descriptionItems = [
        "Navigate ISA/IEC 62443 compliance with Ampcus Cyber. Our experts guide you through the process, safeguarding your industrial control systems (ICS) and ensuring compliance with international security standards."
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
                title="ISA 62443"
                subtitle="Secure Industrial Systems. Get ISA 62443 Certified."
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Secure Your Industrial Control Systems with ISA 62443 Implementation"
                description="At Ampcus Cyber, we bring together industrial cybersecurity and excellence. Our ISA 62443 Implementation services are meticulously tailored to strengthen your Industrial Control Systems (ICS) against cyber threats. Elevate your security standards, assure stakeholders, and establish a robust cybersecurity framework with our comprehensive implementation, perfectly aligned with ISA 62443 guidelines."
                subtitle="Understanding ISA 62443 Implementation"
                description1="ISA 62443, also known as the International Society of Automation (ISA) standard, is a globally recognized framework for securing industrial automation and control systems (IACS). At Ampcus Cyber, our ISA 62443 Implementation service assists your organization in adopting, customizing, and implementing the ISA 62443 framework. This ensures a structured approach to managing and reducing cybersecurity risks specific to industrial environments."
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

export default ISA;