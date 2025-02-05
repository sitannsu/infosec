// import React from 'react'

// const SynergizedModel = () => {
//     return (
//         <div>SynergizedModel</div>
//     )
// }

// export default SynergizedModel

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


function SynergizedModel() {
    const descriptionItems = [
        "Ampcus Cyber’s Synergized Compliance Model simplifies managing all your compliance needs. We consolidate requirements, streamline processes, and empower you to achieve compliance with confidence."
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
            label: "Synergized Compliance Expertise",
            content:
                "Ampcus Cyber brings specialized expertise in Synergized Compliance, guiding your organization through the intricacies of consolidating and managing diverse regulatory requirements.",
        },
        {
            label: "Cybersecurity Personalized for Your Business",
            content:
                "Recognizing the unique needs of each organization, we specialize in crafting customized solutions that precisely target the cybersecurity challenges your business encounters.",
        },
        {
            label: "Dynamic Support",
            content:
                "Our dedicated support team offers proactive assistance, ensuring a smooth process and ongoing compliance with industry standards.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };

    const securityTabsData = [
        { label: 'Simplified Compliance Management', content: 'Synergized Compliance Model consolidates various regulatory requirements, simplifying the compliance management process and reducing the complexity associated with adhering to multiple standards.' },
        { label: 'Efficiency and Cost Savings', content: 'By streamlining compliance efforts, your organization can achieve greater efficiency, saving both time and resources that might be otherwise spent navigating diverse and intricate regulatory landscapes.' },
        { label: 'Risk Mitigation', content: 'Synergized Compliance Model helps in identifying and mitigating risks associated with non-compliance, ensuring that your organization is well-prepared to meet regulatory expectations and avoid potential legal and financial implications.' },
        { label: 'Scalability', content: 'As your organization grows or ventures into new markets, Synergized Compliance Model provides a scalable framework that can adapt to evolving regulatory landscapes, allowing for seamless expansion without compromising compliance.' },

        { label: 'Holistic Approach', content: 'Synergized Compliance Model takes a holistic approach, considering various standards and regulations relevant to your industry, ensuring that your organization meets the highest standards of compliance in a comprehensive manner.' },

    ];
    return (
        <>
            <SubPageHero
                title="Synergized Compliance Model"
                subtitle="Streamline Compliance. Manage Cybersecurity Risk with Ease."
                descriptionItems={descriptionItems}
                ctaText=""
                formFields={formFields}
            />


            <HeroSection
                title="Achieve Compliance Harmony with Synergized Compliance Model"

                description="Welcome to Ampcus Cyber, where compliance meets simplicity. Our Synergized Compliance services are designed to streamline your organization’s adherence to complex regulatory frameworks. Gain a comprehensive approach to compliance, assure your stakeholders, and elevate your governance standards with Synergized Compliance services by Ampcus Cyber."
                subtitle="Understanding Synergized Compliance Model"
                description1="Synergized Compliance Model is a comprehensive approach that consolidates multiple regulatory requirements into a Synergized framework. At Ampcus Cyber, our Synergized Compliance Model helps your organization navigate the intricate landscape of compliance, ensuring adherence to various standards and regulations through a consolidated and efficient process."
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
                title="Secure Your Future And Protect Your Business"
                description="Embark on a journey to secure your business and customer trust with PCI DSS compliance. At Ampcus Cyber, we don’t just offer services; we provide a partnership dedicated to the longevity and success of your enterprise."
            />

            <ContactCard
                title="Ready to secure your future?!"
                subtitle=" Contact us today!"
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

export default SynergizedModel;