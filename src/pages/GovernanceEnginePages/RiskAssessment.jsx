
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
import gengine1 from '@/image/Gengine1.png'
import GovernanceEngine from '../GovernanceEngine';
import GovernanceEngineTabs from '@/component/GovernanceEngineTab';
import FourCardSection from '@/component/fourCardSection';

function RiskAssessment() {
    const descriptionItems = [
        "Ampcus Cyber’s Risk Assessment & Management services help businesses identify, analyze, and mitigate cybersecurity threats. We ensure compliance with industry standards and regulations, empowering you to proactively manage risk and build a more secure future."
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
            label: "Experienced Professionals",
            content:
                "Our team comprises seasoned professionals with a proven track record in risk assessment and management across diverse industries.",
        },
        {
            label: "Client-Centric Approach",
            content:
                "We work closely with you, ensuring that our risk management strategies align with your business goals and contribute to sustainable growth.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Tailored Risk Assessments Scope', content: 'Our customized framework delves deep, covering operational, financial, technological, and even reputational threats, leaving no stone unturned.' },
        { label: 'Data-Driven Insights', content: 'We leverage advanced analytics to quantify risks, prioritize your vulnerabilities, and predict potential impacts, ensuring informed decision-making.' },
        { label: 'Actionable Roadmaps', content: 'Forget generic mitigation plans. We collaborate with you to craft practical, implementable strategies that neutralize risks and build robust defenses.' },
        { label: 'Continuous Optimization', content: 'We don’t just drop a roadmap and disappear. We partner with you every step of the way, monitoring progress, refining strategies, and ensuring continuous risk management integration into your business fabric.' },
      ];
      const Datacards = [
        {
          title: 'Risk Identification and Assessment',
          content: 'Our experts conduct thorough risk assessments, identifying potential threats to your business, whether they be operational, financial, or strategic.'
        },
        {
          title: 'Risk Mitigation Strategies',
          content: 'We don’t just stop at identification. We craft practical and effective risk mitigation strategies, ensuring that your organization is resilient in the face of adversity.'
        },
        {
          title: 'Crisis Response and Recovery',
          content: 'Should a crisis arise, we stand by you with rapid response and recovery plans, minimizing the impact on your operations and reputation.'
        },
        {
          title: 'Regulatory Compliance',
          content: 'Stay ahead of the regulatory curve with our comprehensive understanding of industry standards and compliance requirements, reducing legal and reputational risks.'
        }
      ];
    return (
        <>
            <SubPageHero
                title="Risk Assessment & Management"
                subtitle="Assess. Mitigate. Secure."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Risk is Inevitable. Vulnerability is Optional. Embrace Resilience with Ampcus Cyber’s Risk Assessment & Management Services."
                subtitle=""
                description1="In today’s interconnected world, risk isn’t a question – it’s a constant companion. But here’s the good news: you don’t have to dance with danger blindfolded. Our proactive Risk Assessment & Management Services empower you to transform risk from a lurking threat into a catalyst for proactive resilience."
                description2="We’re not your average risk analysis team. We’re strategic risk architects, wielding a potent blend of expertise and empathy to understand your unique business landscape and its inherent vulnerabilities. We don’t just identify risks; we unravel their complex layers, exposing root causes and potential domino effects before they topple your carefully built success."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we illuminate your path to resilient success"
        tabs={securityTabsData}
      />
    </div>
    <FourCardSection
        title="Services That Define Excellence In Risk Management"
        cards={Datacards}
      />


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
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

export default RiskAssessment;



