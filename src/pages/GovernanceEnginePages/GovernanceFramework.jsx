
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
import GovernanceEngineTabs from '@/component/GovernanceEngineTab';


function GovernanceFramework() {
    const descriptionItems = [
        "Develop a robust governance framework with Ampcus Cyber. Ampcus Cyber’s Governance Framework Development services help you establish robust structures, policies, and procedures for effective data security and regulatory compliance. We empower you to build trust with stakeholders and achieve long-term compliance success."
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
            label: "Custom Framework Development",
            content:
                "Tailored to your organizational needs, we craft governance frameworks that serve as dynamic guides, adapting to evolving business landscapes.",
        },
        {
            label: "Policy Development and Implementation",
            content:
                "Translate your strategic vision into actionable policies. We work closely with your team to develop and implement governance policies that resonate with your organizational culture.",
        },
        {
            label: "Training and Capacity Building",
            content:
                "Empower your teams with the knowledge and skills necessary for effective governance. Our training programs ensure that everyone in your organization is aligned with the governance strategy.",
        },
    ];

    const securityTabsData = [
        { label: 'Collaborative Canvas', content: 'We don’t operate in silos. We co-create with your team, drawing on their expertise and perspectives to paint a complete picture of your needs.' },
        { label: 'Risk-Tailored Roadmap', content: 'We identify your specific vulnerabilities and opportunities, crafting a framework that mitigates risks while optimizing performance.' },
        { label: 'Transparency & Accountability', content: 'We build a clear, easy-to-navigate framework that empowers accountability at all levels, fostering a culture of ownership and shared responsibility.' },
        { label: 'Scalable & Sustainable', content: 'We design a framework that isn’t just robust, but also adaptable, evolving alongside your business and keeping you ahead of the curve.' },
      ];
    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    return (
        <>
            <SubPageHero
                title="Governance Framework Development"
                subtitle="Align. Govern. Secure."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Compliance: Craft Your Compass with Ampcus Cyber’s Governance Framework Development Services"
                subtitle=""
                description1="In today’s turbulent business landscape, simply ticking compliance boxes isn’t enough. You need a north star, a guiding framework that aligns your decisions, empowers your people, and propels you toward sustainable success. That’s where our Governance Framework Development Services come in."
                description2="We’re not template peddlers. We’re governance artisans, meticulously crafting bespoke frameworks that resonate with your unique DNA. We delve deep, understanding your culture, aspirations, and challenges to build a structure that seamlessly integrates with your existing architecture."
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            {/* Governance EngineTabs */}
            <div>
      <GovernanceEngineTabs
        title="Here’s how we navigate the path to good governance"
        tabs={securityTabsData}
      />
    </div>

           

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in a well-crafted governance framework isn’t a luxury – it’s a necessity. It’s about unlocking agility, enhancing decision-making, and fostering a culture of trust and compliance. It’s about transforming your business from a ship tossed by waves into a vessel charting its own course.Ready to set sail on the sea of good governance?
Contact Ampcus Cyber today for a free consultation and discover how we can craft a framework that propels your business to new horizons."
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

export default GovernanceFramework;



