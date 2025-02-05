


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

function EndpointDetection() {
    const descriptionItems = [
        "Detect Threats. Respond Fast. Ampcus Cyber’s advanced EDR solutions continuously monitor your endpoints for suspicious activity. We enable you to detect threats in real-time, investigate incidents swiftly, and eradicate them before they compromise your network."
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
                "Our team comprises veteran security professionals with a deep understanding of advanced attack methodologies and the intricate dynamics of the cyber threat landscape. They possess the expertise to interpret the intricate tapestry of your endpoint data and uncover even the most sophisticated hidden threats.",
        },
        {
            label: "Continuous Innovation and Threat Intelligence",
            content:
                "We remain at the forefront of the cyber defense game. Our EDR platform is constantly evolving, incorporating the latest security advancements and threat intelligence to guarantee your defenses stay ahead of the curve.",
        },
        {
            label: "Seamless Integration and Holistic Security",
            content:
                "Our EDR seamlessly integrates with your existing security infrastructure and tools, offering a unified security posture. We believe in a layered approach, ensuring your endpoints are protected at every stage of the attack lifecycle.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'In-Depth Forensic Analysis', content: 'Delve deeper than basic alerts. Our EDR platform provides detailed forensic analysis of suspicious events, pinpointing the root cause of potential incidents and aiding in swift containment and remediation efforts' },
        { label: 'Automated Response Playbooks', content: 'Pre-configure automated response playbooks to neutralize threats instantly. Our EDR empowers you to initiate targeted actions, such as isolating infected devices or terminating malicious processes, minimizing the impact of potential attacks.' },
        { label: 'Actionable Threat Intelligence', content: 'Gain access to real-time threat intelligence feeds and vulnerability reports. Our EDR keeps you informed about the latest threats and vulnerabilities, enabling proactive patching and risk mitigation strategies.' },
      
      ];
      const Datacards = [
        {
          title: 'Real-Time Endpoint Activity Monitoring',
          content: 'Gain complete, centralized visibility into every aspect of your endpoint environment. From file and process execution to network connections and system calls, our EDR empowers you to monitor and analyze activity across all endpoints in real-time.'
        },
        {
          title: 'Advanced Threat Detection with Machine Learning',
          content: 'Move beyond signature-based detection and embrace proactive threat hunting. Our EDR leverages machine learning algorithms and behavioral analysis to identify malicious activity, even zero-day threats, before they compromise your data or disrupt your operations.'
        },
        {
          title: 'Automated Data Collection and Correlation',
          content: 'Eliminate manual data gathering and analysis. Our EDR seamlessly collects and correlates data from across your endpoints, revealing hidden connections and providing a holistic view of potential threats, enabling faster and more informed responses.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="Endpoint Detection & Response"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Ampcus Cyber’s Endpoint Detection & Response : Unifying Visibility, Intelligence, and Response for Unwavering Endpoint Security"
                subtitle=""
                description1="In today’s borderless digital landscape, endpoints – laptops, servers, mobile devices – represent the frontline of cyber defense. Yet, traditional tools often struggle to provide comprehensive visibility, leaving organizations vulnerable to sophisticated threats that evade detection and wreak havoc. Ampcus Cyber’s Endpoint Detection & Response (EDR) empowers you to bridge this gap, offering a unified platform that delivers proactive threat detection, in-depth forensic analysis, and rapid response capabilities, safeguarding your endpoints from the ever-evolving threat landscape"
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
             <FourCardSection
        title="Beyond Fragmented Visibility"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="From Alerts to Actionable Insights"
        tabs={securityTabsData}
      />
    </div>
   


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Endpoint Security? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Unify Your Endpoint Security with Unwavering Confidence?"
                description="Don’t settle for endpoint defenses riddled with gaps and blind spots. Contact Ampcus Cyber today and let us be your trusted partner in endpoint security. We’ll empower you to gain complete visibility, extract actionable insights, and respond effectively to evolving threats, safeguarding your endpoints and guaranteeing the resilience of your digital operations."
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

export default EndpointDetection;



