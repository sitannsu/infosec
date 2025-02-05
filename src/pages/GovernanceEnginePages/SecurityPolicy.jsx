
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

function SecurityPolicy() {
    const descriptionItems = [
        "Ampcus Cyber’s Security Policy & Strategy Development services help you craft comprehensive policies and a future-proof strategy to safeguard your data and assets. We ensure alignment with evolving threats and empower you to build a proactive security posture."
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
            label: "Comprehensive Maturity Assessment",
            content:
                "Our seasoned professionals conduct thorough assessments, evaluating your security program’s maturity across key dimensions.",
        },
        {
            label: "Strategic Roadmap Development",
            content:
                "We don’t just provide a report; we offer a strategic roadmap for improvement, prioritizing actions that maximize your security program’s effectiveness.",
        },
        {
            label: "Cultural Integration",
            content:
                "Security is not just about technology; it’s a culture. We guide you in integrating a security mindset into your organizational culture for lasting impact.",
        },
        {
            label: "Continuous Monitoring and Adaptation",
            content:
                "The threat landscape evolves, and so should your security program. We provide continuous monitoring and adaptation strategies, ensuring resilience against emerging risks.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Policy Development', content: 'Crafting policies that go beyond compliance, addressing the specific security challenges and requirements of your organization.' },
        { label: 'Strategic Frameworks', content: 'Develop overarching strategies that guide your organization in achieving a resilient and adaptive security posture.' },
        { label: 'Continuous Upgrades', content: 'Security is not a one-time endeavor. We provide continuous improvement plans that adapt to emerging threats and technological advancements.' },
        { label: 'Employee Training and Awareness', content: 'The threat landscape evolves, and so should your security program. We provide continuous monitoring and adaptation strategies, ensuring resilience against emerging risks.' },
      ];
    return (
        <>
            <SubPageHero
                title="Security Policy & Strategy Development"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Navigating the Digital Minefield: Craft Your Compass with Ampcus Cyber’s Security Policy & Strategy Development Services"
                subtitle=""
                description1="In today’s digital landscape, security isn’t an afterthought – it’s the map guiding your every step. But without a clear, customized policy and strategy, you’re navigating a cybersecurity minefield blindfolded. That’s where Ampcus Cyber comes in, your expert cartographers crafting the roadmap to secure success."
                description2="We’re not cookie-cutter policy templates. We’re security architects, collaborating with you to understand your unique environment, risks, and aspirations. We delve deep, untangling complex technical nuances and aligning them with your business goals"
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />

           {/* Governance EngineTabs */}
           <div>
      <GovernanceEngineTabs
        title="Here’s how we guide you through the security labyrinth"
        tabs={securityTabsData}
      />
    </div>

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in well-defined Security Policies & Strategies isn’t a checkbox exercise – it’s a shield against disruption. It’s about building a culture of awareness, accountability, and resilience that protects your assets, your people, and your reputation.

Ready to ditch the digital blindfold and embark on a secure journey?

Contact Ampcus Cyber today for a free consultation and discover how we can craft the perfect security compass for your unique path."
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


            {/* <div className="bg-gray-50 py-16">
                <FAQAccordion faqItems={faqData} />
            </div> */}





        </>
    );
}

export default SecurityPolicy;



