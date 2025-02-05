
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

function SecurityProgram() {
    const descriptionItems = [
        "Ampcus Cyber’s Security Program Maturity Assessment & Improvement services analyze your existing security posture, identify gaps, and provide a roadmap for achieving industry-leading security practices. We empower you to excel in cybersecurity and build a more resilient organization."
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
        { label: 'Comprehensive Evaluation', content: 'We go beyond technical assessments, delving into processes, policies, people, and culture, providing a holistic view of your security maturity.' },
        { label: 'Benchmarking & Best Practices', content: 'We compare your program against industry standards and leading practices, highlighting areas for improvement and igniting your competitive edge' },
        { label: 'Prioritized Roadmap', content: 'We don’t overwhelm you with a mountain of recommendations. We create a clear, actionable roadmap focused on the most impactful improvements, ensuring efficient progress.' },
        { label: 'Continuous Coaching & Support', content: 'We’re not fair-weather companions. We stay beside you, guiding your implementation, celebrating your victories, and adjusting your training as needed.' },
      ];
    return (
        <>
            <SubPageHero
                title="Services That Define Excellence in Security Program Maturity"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Is Your Security Posture Stuck in Adolescence? Unleash Its Potential with Ampcus Cyber’s Security Program Maturity Assessment & Improvement Services."
                subtitle=""
                description1="The cybersecurity landscape is a battlefield, and stagnation means vulnerability. While your security program might exist, is it a seasoned warrior or a stumbling teenager? Our Security Program Maturity Assessment & Improvement Services act as your mentor in this digital dojo, evaluating your defenses and guiding you toward unleashing your full security potential."
                description2="We’re not auditors throwing barbs from the sidelines. We’re experienced cybersecurity coaches, partnering with you to diagnose weaknesses, identify untapped strengths, and craft a personalized training regimen. No one-size-fits-all approaches here – we treat each program as unique, understanding its context and aspirations."
                imageSrc="https://your-image-url.com/image.jpg"
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />

           {/* Governance EngineTabs */}
           <div>
      <GovernanceEngineTabs
        title="Here’s how we turn your security program into a champion"
        tabs={securityTabsData}
      />
    </div>

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Security Program Maturity isn’t just about ticking boxes – it’s about transforming your defenses into a proactive weapon. It’s about minimizing risks, maximizing your security ROI, and building a culture of confident resilience. Ready to turn your security program into an unstoppable force?

Contact Ampcus Cyber today for a free consultation and discover how we can help you unleash your full cyber potential."
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

export default SecurityProgram;



