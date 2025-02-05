
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


function VirtualCISO() {
    const descriptionItems = [
        "Ampcus Cyber’s Virtual/Shared CISO as a Service provides you with access to seasoned cybersecurity leadership, tailored to your needs. We deliver strategic guidance, manage risk proactively, and empower you to build a robust security posture."
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
            label: "Strategic Cybersecurity Leadership",
            content:
                "Our Virtual/Shared CISOs are seasoned cybersecurity leaders with a wealth of experience in developing and executing robust cybersecurity strategies tailored to your business goals.",
        },
        {
            label: "Flexible Engagement Models",
            content:
                "We understand that every organization is unique. Our flexible engagement models allow you to access CISO expertise on a virtual or shared basis, aligning with your specific requirements.",
        },
        {
            label: "Cost-Effective Leadership",
            content:
                "Obtain top-tier cybersecurity leadership without the overhead costs. Our Virtual/Shared CISO service provides a cost-effective solution for organizations of all sizes.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Strategic Vision & Roadmap Development', content: 'We collaborate with your leadership to define your security goals, assess your current posture, and craft a bespoke roadmap for achieving optimal cyber resilience.' },
        { label: 'Risk Management & Prioritization', content: 'We don’t waste your resources on chasing shadows. We analyze your unique vulnerabilities and prioritize risks based on likelihood and potential impact, ensuring your defenses are focused where they matter most.' },
        { label: 'Security Policy & Program Development', content: 'We don’t believe in one-size-fits-all policies. We tailor your security controls, incident response plans, and access management protocols to fit your specific needs and industry regulations.' },
        { label: 'Vendor Management & Technology Selection', content: 'We navigate the complex world of cybersecurity solutions, helping you identify the right tools and vendors to build a robust and cost-effective defense ecosystem.' },
        { label: 'Board & Stakeholder Communication', content: 'We bridge the gap between technical jargon and business language, keeping your board and stakeholders informed with clear, concise reports and actionable insights on your cyber health.' },
      ];
    return (
        <>
            <SubPageHero
                title="Virtual/Shared CISO as a Service"
                subtitle="Expert Security Leadership. On-Demand."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Empower Your Cybersecurity Leadership: Virtual/Shared CISO As A Service by Ampcus Cyber"
                subtitle=""
                description1="In today’s digital landscape, a Chief Information Security Officer (CISO) is no longer a luxury – it’s a necessity. But for many organizations, the cost and complexity of hiring a full-time CISO can be a daunting hurdle. That’s where Ampcus Cyber’s Virtual/Shared CISO as a Service comes in, your bridge to expert cyber leadership without the hefty price tag."
                description2="We’re not budget-friendly imposters. We’re cybersecurity veterans, seasoned security leaders with extensive experience across industries and threat landscapes. We become your virtual partners, seamlessly integrating into your team and providing the strategic guidance, technical expertise, and leadership you need to navigate the ever-evolving cyber battlefield.."
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
       {/* Governance EngineTabs */}
       <div>
      <GovernanceEngineTabs
        title="Here’s how we build your team into cyber crisis champions"
        tabs={securityTabsData}
      />
    </div>

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Virtual/Shared CISO As A Service?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Virtual/Shared CISO as a Service isn’t just about filling a vacancy – it’s about unlocking transformative value. It’s about gaining immediate access to top-tier cyber leadership, optimizing your security investments, and achieving peace of mind knowing your organization is shielded by the best.

Don’t settle for a cybersecurity gap. Partner with Ampcus Cyber to bridge the path to exceptional security with our Virtual/Shared CISO as a Service.

Contact Ampcus Cyber today for a free consultation and discover how we can empower your cyber resilience."
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

export default VirtualCISO;



