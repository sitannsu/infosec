


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

function SIEM() {
    const descriptionItems = [
        "See Threats. Respond Faster. Ampcus Cyber’s advanced SIEM solutions provides a central platform for collecting, analyzing, and correlating security data from across your IT infrastructure. We empower you to gain real-time insights, identify vulnerabilities proactively, and build a stronger security posture."
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
            label: "Seasoned Cyber Detectives",
            content:
                "Our team comprises seasoned security analysts and threat hunters with a deep understanding of attack methodologies and the intricate dynamics of the cyber threat landscape. They possess the expertise to interpret the complex tapestry of your security data and uncover even the most sophisticated hidden threats.",
        },
        {
            label: "Real-World Threat Intelligence Network",
            content:
                "We maintain a constant vigil on the ever-evolving cyber threat landscape. Our global network of security researchers and analysts keeps us abreast of the latest attack vectors and vulnerabilities, ensuring your SIEM is always calibrated to detect and neutralize the most novel threats.",
        },
        {
          label: "Beyond Technology, Beyond Tools",
          content:
              "We believe SIEM is just one piece of the puzzle. We work closely with your team, providing ongoing training and support to foster a culture of security awareness and proactive defense.",
      },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Real-Time Threat Hunting', content: 'We actively scour your digital landscape, proactively seeking out emerging threats and vulnerabilities before they can exploit weaknesses. This proactive approach significantly reduces your attack surface and minimizes the potential for data breaches and disruptions' },
        { label: 'Automated Response and Orchestration', content: 'Our SIEM seamlessly integrates with your existing security tools, enabling automated response actions to neutralize identified threats. This swift and coordinated response minimizes damage and helps you regain control of your digital environment.' },
        { label: 'Continuous Security Improvement', content: 'We believe in constant evolution. Our SIEM provides ongoing threat intelligence updates and security recommendations, ensuring your defenses stay ahead of the ever-evolving threat landscape.' },
     
      ];
      const Datacards = [
        {
          title: 'Unifying the Security Landscape',
          content: 'We break down siloed security data, seamlessly integrating logs and events from across your infrastructure, applications, and devices. This unified view provides a holistic perspective, revealing hidden connections and patterns that traditional tools miss.'
        },
        {
          title: 'Intelligent Threat Detection',
          content: 'Our sophisticated algorithms go beyond simple anomaly detection. Employing machine learning and advanced analytics, we identify subtle deviations from normal behavior, pinpointing potential threats before they evolve into full-fledged attacks.'
        },
        {
          title: 'Actionable Intelligence, Not Just Alerts',
          content: 'We don’t bombard you with a cacophony of meaningless alerts. Our SIEM prioritizes threats based on severity and context, providing actionable insights that empower you to take swift and decisive action.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="SIEM"
                subtitle="Security Information and Event Management Service"
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond the Noise, Beyond the Blind Spots: Ampcus Cyber’s SIEM – Illuminating the Hidden Threats in Your Digital Landscape"
                subtitle=""
                description1="In the modern digital landscape, security operations centers (SOCs) grapple with an overwhelming deluge of data. Traditional security information and event management (SIEM) solutions often drown in this sea of information, struggling to discern between genuine threats and harmless noise. This leaves organizations vulnerable, exposed to silent infiltration and devastating attacks. Ampcus Cyber’s SIEM emerges as a beacon in this storm, a powerful tool that empowers SOCs to navigate the labyrinth of security events with unparalleled precision and clarity."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
             <FourCardSection
        title="From Sensory Overload to Strategic Insights"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Fortifying Your Digital Defenses with SIEM"
        tabs={securityTabsData}
      />
    </div>
   


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber? Your Trusted SIEM Partner " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Illuminate the Hidden Threats in Your Digital World?"
                description="Don’t let your organization remain vulnerable in the digital shadows. Choose Ampcus Cyber’s SIEM and let us shine a light on the hidden threats lurking within your infrastructure. We’ll be your trusted partner in proactive defense, guiding you towards a future where security is not an afterthought, but a cornerstone of your digital success.

Step into the light of proactive defense. Contact Ampcus Cyber today and let our SIEM be your digital guardian, illuminating the hidden threats, guiding your response, and safeguarding your valuable data and operations from the ever-present shadows of the cyber landscape."
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

export default SIEM;



