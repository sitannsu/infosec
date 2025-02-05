


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

function ThreatIntelligence() {
    const descriptionItems = [
        "Ampcus Cyber’s Threat Intelligence Management empowers you to stay ahead of cyber threats by helping you make informed security decisions. We deliver real-time threat updates and prioritize risks, enabling you to respond to attacks faster and minimize damage."
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
            label: "Seasoned Cybersecurity Experts",
            content:
                "Our team comprises seasoned threat intelligence analysts with extensive experience tracking attacker trends, analyzing vulnerabilities, and providing actionable insights. Their expertise translates into robust TIM solutions tailored",
        },
        {
            label: "Global Network of Security Researchers",
            content:
                "We leverage a vast global network of security researchers and analysts who stay abreast of the latest threats and vulnerabilities. This ensures your TIM platform is constantly updated with the most up-to-date threat intelligence, keeping you ahead of the curve.",
        },
        {
            label: "Proactive and Collaborative Approach",
            content:
                "We believe in a collaborative approach to cybersecurity. We work closely with your team to understand your security posture, threat landscape, and regulatory requirements, tailoring our TIM solution to seamlessly integrate with your existing strategies and optimize your security operations.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Customized Threat Intelligence Feeds', content: 'Tailor your threat intelligence intake to your specific needs and industry. We provide curated feeds focused on relevant threat actors, vulnerabilities, and attack vectors, ensuring you receive actionable insights directly applicable to your environment.' },
        { label: 'Real-Time Threat Reporting and Alerts', content: 'Stay informed and proactive with real-time threat alerts and comprehensive security reports. Our system provides granular details on identified threats, potential impacts, and recommended mitigation strategies, empowering you to make informed security decisions with speed and confidence.' },
        { label: 'Seamless Integration and Security Orchestration', content: 'Our TIM platform seamlessly integrates with your existing security tools and infrastructure, enabling automated threat response playbooks and coordinated incident handling. This unified approach streamlines your security operations and optimizes your response to potential threats.' },
        
      ];
      const Datacards = [
        {
          title: 'Global Threat Landscape Visibility',
          content: 'Gain access to a comprehensive real-time picture of the global threat landscape. We aggregate and analyze vast amounts of data from diverse sources – attack feeds, vulnerability reports, honey traps, and industry research – providing you with a holistic view of evolving threats and attacker tactics.'
        },
        {
          title: 'Advanced Threat Detection and Prioritization',
          content: 'Go beyond simple anomaly detection. Our TIM platform leverages machine learning and AI to identify subtle indicators of compromise and prioritize threats based on their potential impact and exploitability, enabling you to focus resources on the most critical risks.'
        },
        {
          title: 'Proactive Risk Mitigation and Threat Hunting',
          content: 'Don’t wait for attacks to happen. Our TIM platform empowers you to proactively identify vulnerabilities and hunt for potential threats within your own infrastructure, minimizing attack windows and mitigating risks before they escalate.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="Advanced Threat Intelligence Management Solutions"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Ampcus Cyber’s Threat Intelligence Management : Navigating the Cyber Landscape with Precision and Foresight"
                subtitle=""
                description1="In the rapidly changing landscape of cybersecurity, mere defense is no longer sufficient. Organizations must adopt a proactive, intelligence-driven strategy to anticipate and thwart emerging threats before they can wreak havoc. Ampcus Cyber’s Threat Intelligence Management (TIM) provides you with the tools to navigate this dynamic landscape with unparalleled precision and foresight."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
                <FourCardSection
        title="Transforming Data into Actionable Insights"
        cards={Datacards}
      />

              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="From Information to Actionable Intelligence"
        tabs={securityTabsData}
      />
    </div>


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Threat Intelligence Needs? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Navigate the Cyber Landscape with Confidence?"
                description="Don’t let the evolving threat landscape leave you vulnerable. Contact Ampcus Cyber today and let us be your trusted guide through the complex world of cyber threats. We’ll equip you with the actionable insights and proactive defense capabilities you need to stay ahead of the curve, safeguard your critical assets, and navigate the digital landscape with unwavering confidence."
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


      





        </>
    );
}

export default ThreatIntelligence;



