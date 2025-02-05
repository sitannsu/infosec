


import SubPageHero from '@/component/SubPageHero';
// import WhyChooseSection from '@/component/ChooseSection'; // Adjust the path if needed
import React from 'react';

import DynamicCardComponent from '@/component/ChooseSection';
import DynamicCardWithImage from '@/component/ImageText';
import ContactCard from '@/component/CardDynamic';
import FAQAccordion from '@/component/FAQdynamic';
import HeroSection from '@/component/TextImage';
import gengine1 from '@/image/Gengine1.png'
import GovernanceEngineTabs from '@/component/GovernanceEngineTab';
function SecurityArchitecture() {
    const descriptionItems = [
        "Uncover vulnerabilities in your security posture with an Ampcus Security Architecture Review. Our experts thoroughly assess your infrastructure, applications, and processes to identify vulnerabilities and ensure compliance with industry standards. Gain a roadmap to fortify your defenses and reduce cyber risks."
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
            label: "Holistic Approach",
            content:
                "Our Security Architecture Review goes beyond a mere examination of your systems. We adopt a holistic approach, scrutinizing every layer of your architecture to identify potential vulnerabilities and fortify your defenses.",
        },
        {
            label: "Customized Resolutions",
            content:
                "We don’t believe in one-size-fits-all. Our experts craft tailored solutions that align with your unique business needs, industry standards, and regulatory requirements.",
        },
        {
            label: "Proactive Risk Mitigation",
            content:
                "Beyond identifying weaknesses, we provide actionable insights for proactive risk mitigation. Our goal is not just compliance; it’s creating a robust security posture that evolves with emerging threats.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Comprehensive Scope', content: 'We go beyond traditional vulnerability assessments, examining the interconnectedness of your security controls to uncover hidden risks and systemic flaws.' },
        { label: 'Threat-Centric Approach', content: 'Our focus is on identifying and mitigating potential threats that target your organization.' },
        { label: 'Actionable Insights', content: 'We provide insights that help improve your security posture and minimize risks.' },
        { label: 'Governance & Risk Alignment', content: 'Our assessments align with governance frameworks to ensure compliance and reduce risks.' },
    ];
    return (
        <>
            <SubPageHero
                title="Security Architecture Review"
                subtitle="Identify Gaps. Strengthen Your Security Posture."
                descriptionItems={descriptionItems}

                formFields={formFields}
            />


            <HeroSection
                title="Is Your Security Architecture a Fortress or a Cardboard Box? Let Our Experts Give It a Stress Test."
                subtitle=""
                description1="In today’s volatile threat landscape, relying on assumptions about your security architecture is like driving blindfolded – disaster awaits. That’s where our Security Architecture Review steps in, a deep dive into the blueprints of your defenses to identify vulnerabilities before they become breaches."
                description2="We’re not cookie-cutter security consultants. Our team of seasoned veterans and architectural ninjas meticulously unpack your security controls, from firewalls to access protocols, with surgical precision. We don’t just point out cracks in the foundation; we diagnose the root cause of weaknesses and propose innovative, tailored solutions that fit your unique environment."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            {/* Governance EngineTabs */}
            <div>
                <GovernanceEngineTabs
                    title="Here's Why Our Security Architecture Review Is A Game-Changer"
                    tabs={securityTabsData}
                />
            </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in a Security Architecture Review is an investment in your future. It’s about prevention, not remediation, stopping breaches before they happen, and minimizing the cost of potential disasters.

Don’t wait for a wake-up call in the form of a cyberattack. Take control of your security destiny today.

Contact us for a free consultation and discover how our Security Architecture Review can transform your defenses from fragile to formidable."
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

export default SecurityArchitecture;



