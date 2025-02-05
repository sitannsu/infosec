


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

function IdentityAccess() {
    const descriptionItems = [
        "Secure Access. Empower Users. Ampcus Cyber’s Identity & Access Management (IAM) strengthens your security posture by granting the right access to the right people. We empower users with a seamless experience and ensure granular control for IT administrators."
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
            label: "Security Expertise at Your Fingertips",
            content:
                "Our team comprises seasoned IAM specialists with a deep understanding of access governance best practices and the evolving cyber threat landscape. They possess the expertise to design and implement robust security solutions tailored to your specific needs and challenges.",
        },
        {
            label: "Real-World Threat Intelligence Network",
            content:
                "We maintain a constant vigil on emerging access control vulnerabilities and cyber threats. Our real-time threat intelligence network ensures your IAM architecture is continuously refined and adapted to counter new and sophisticated attack vectors.",
        },
        {
          label: "Holistic Approach to Security",
          content:
              "We believe IAM is a cornerstone of a comprehensive security strategy. We seamlessly integrate our IAM solution with your existing security infrastructure, fostering a layered defense that safeguards your data at every stage of its digital journey.",
      },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Secure User Onboarding and Lifecycle Management', content: 'We streamline user onboarding through automated provisioning and deprovisioning based on role changes or terminations. This ensures timely access for authorized users while preventing unauthorized access for deactivated accounts.' },
        { label: 'Continuous Monitoring and Auditing', content: 'Our IAM solution monitors user activity and identifies suspicious behaviour, offering real-time insights and proactive threat detection. This continuous vigilance ensures prompt mitigation of potential security breaches and minimizes potential damage.' },
        { label: 'Cultura Transformation', content: 'Beyond technology, we foster a culture of secure access. We provide comprehensive training programs and ongoing support to equip your employees with the knowledge and skills necessary to handle sensitive data responsibly and contribute to overall security posture.' },
  
      ];
      const Datacards = [
        {
          title: 'Consolidated Governance',
          content: 'We dismantle siloed identities and disparate access systems, consolidating governance into a single, centralized platform. This streamlined framework offers unparalleled visibility and control, safeguarding sensitive data from unauthorized access and misuse.'
        },
        {
          title: 'Granular Access Control',
          content: 'Our IAM ensures every user, application, and device is assigned precise entitlements based on pre-defined roles and responsibilities. This principle of least privilege minimizes the attack surface and minimizes the potential for inadvertent or malicious data exposure.'
        },
        {
          title: 'Streamlined Access Experiences',
          content: 'We prioritize user experience with Single Sign-On (SSO) capabilities, allowing seamless access to multiple applications with a single set of credentials. This not only enhances convenience but also strengthens security by eliminating the need for multiple passwords and reducing the risk of phishing attacks.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="Identity & Access Management"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Siloed Access: Ampcus Cyber’s Identity & Access Management – Architecting Trustworthy Access in Your Digital Ecosystem"
                subtitle=""
                description1="In today’s digital landscape, where data is the lifeblood of the enterprise, fragmented identity management and inconsistent access protocols pose a significant risk. Ampcus Cyber’s Identity & Access Management (IAM) transcends this fragmented security posture, serving as the architect of trustworthy access across your entire ecosystem."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
               <FourCardSection
        title="Unifying Identities, Fortifying Your Digital Stronghold"
        cards={Datacards}
      />

              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Empowering Your Digital Workforce, Fortifying Security"
        tabs={securityTabsData}
      />
    </div>
 

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber? Your Trusted IAM Partner " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Architect Trustworthy Access in Your Digital World?"
                description="Don’t let fragmented access protocols undermine your security posture. Choose Ampcus Cyber’s IAM and empower your digital transformation. We’ll be your trusted architect, designing and implementing a secure access framework that fosters user productivity, protects sensitive data, and propels your business towards future-proofed security.

Elevate your digital security posture to the highest standard. Contact Ampcus Cyber today and let our Identity & Access Management be the foundation of your trusted access architecture, ensuring complete control and unwavering protection for your valuable data."
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

export default IdentityAccess;



