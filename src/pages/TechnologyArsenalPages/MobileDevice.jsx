

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

function MobileDevice() {
    const descriptionItems = [
        "Secure Devices. Protect Your Data. Ampcus Cyber’s MDM solutions provide centralized control over your mobile devices. We ensure your corporate data remains secure, enforce compliance with data privacy regulations, and empower you to manage your mobile workforce effectively."
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
                "Our team comprises seasoned MDM specialists with extensive experience in mobile security architectures, threat analysis, and compliance regulations. They possess the expertise to design and implement robust solutions that address your unique mobile device management needs.",
        },
        {
            label: "Technology-Driven Innovation",
            content:
                "We leverage cutting-edge MDM platforms and advanced analytics to deliver comprehensive mobile security solutions. We stay at the forefront of the mobile threat landscape, constantly evolving our offerings to ensure your defenses remain unwavering.",
        },
        {
            label: "A Partner, Not Just a Vendor",
            content:
                "We believe in building long-term partnerships with our clients. We work closely with you to understand your mobile environment and security challenges, tailoring our MDM solution to seamlessly integrate with your existing infrastructure and policies.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Advanced Threat Detection and Prevention', content: 'Go beyond simple malware detection. Our MDM leverages advanced analytics and machine learning to identify suspicious behavior and potential security risks, proactively neutralizing threats before they compromise your data.' },
        { label: 'Containerization and Secure Access', content: 'Secure access to corporate resources while preserving user privacy. Our MDM platform enables containerization of corporate data and applications, ensuring sensitive information remains isolated and protected on personal devices.' },
        { label: 'Continuous Optimization and Improvement', content: 'We believe in ongoing refinement. Our MDM platform is constantly updated with the latest security advancements and threat intelligence, ensuring your defenses stay ahead of evolving mobile threats and vulnerabilities.' },
       
  
   
      ];
      const Datacards = [
        {
          title: 'Seamless Device Onboarding and Configuration',
          content: 'Streamline device deployment with automated enrollment and configuration workflows. Whether it’s BYOD or corporate-owned, we ensure every device is secured and compliant from day one.'
        },
        {
          title: 'Granular Policy Management and Control',
          content: 'Define and enforce granular security policies tailored to your specific needs. From app restrictions and encryption to data loss prevention and remote wipe capabilities, we empower you to manage every aspect of your mobile environment.'
        },
        {
          title: 'Real-Time Visibility and Monitoring',
          content: 'Gain complete visibility into your mobile device landscape. Track device location, usage patterns, and compliance status in real-time, enabling proactive identification and mitigation of potential threats.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="Mobile Device Management (MDM Solutions)"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Secure Your Digital Gateway: Ampcus Cyber’s Mobile Device Management"
                subtitle=""
                description1="In today’s mobile-centric world, smartphones and tablets are no longer just communication tools – they’re gateways to sensitive corporate data and critical applications. Yet, managing and securing this diverse landscape of devices poses unique challenges. Ampcus Cyber’s Mobile Device Management (MDM) empowers you to overcome these hurdles, delivering comprehensive control and unwavering security for your mobile fleet, ensuring business productivity thrives alongside robust protection."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            <FourCardSection
        title="Unifying the Mobile Landscape"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Beyond Compliance, Beyond Basic Security"
        tabs={securityTabsData}
      />
    </div>
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Mobile Device Security?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Secure Your Mobile Gateway with Confidence?"
                description="Don’t let unsecured mobile devices be the Achilles heel of your security posture. Contact Ampcus Cyber today and let us be your trusted partner in mobile device management. We’ll empower you to secure your mobile fleet, protect your sensitive data, and unlock the full potential of your mobile workforce, all with unwavering confidence and peace of mind."
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

export default MobileDevice;



