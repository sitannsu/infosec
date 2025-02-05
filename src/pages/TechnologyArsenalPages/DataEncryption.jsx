


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

function DataEncryption() {
    const descriptionItems = [
        "Stop Data Breaches. Encrypt Now. Ampcus Cyber’s Data Encryption Solutions safeguard your sensitive data at rest, in transit, and in use preventing unauthorized access and data breaches. We ensure compliance with data privacy regulations and empower you to build trust with stakeholders."
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
            label: "Seasoned Security Experts",
            content:
                "Our team comprises experienced security professionals with a deep understanding of data encryption technologies and the evolving threat landscape. They possess the expertise to design, implement, and maintain secure data encryption solutions tailored to your specific requirements.",
        },
        {
            label: "Compliance and Regulatory Expertise",
            content:
                "We understand the complex world of data privacy regulations. Our solutions comply with industry-leading standards and regulations, ensuring your organization remains compliant and mitigating the risk of costly",
        },
        {
            label: "Holistic Security Approach",
            content:
                "We believe data encryption is just one piece of the puzzle. We offer a comprehensive range of security solutions that work synergistically with our data encryption tools, providing a layered defense that protects your data at every stage.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Transparent Encryption', content: 'Experience seamless encryption without compromising user experience. Our solutions integrate seamlessly with your existing applications and infrastructure, ensuring data encryption and decryption happen transparently in the background.' },
        { label: 'Cloud-Based Encryption', content: 'Secure your data in the cloud with confidence. Our solutions extend robust encryption capabilities to cloud environments, safeguarding your data even beyond the physical boundaries of your on-premises infrastructure.' },
        { label: 'Data Loss Prevention', content: 'Safeguard sensitive data from unauthorized access and misuse with our comprehensive solutions. Our integrated data loss prevention features are designed to detect and prevent any attempts at unauthorized access, exfiltration, or misuse of encrypted data, ensuring your information stays secure.' },
  
      ];
      const Datacards = [
        {
          title: 'Multi-Layered Protection',
          content: 'We offer a comprehensive suite of encryption solutions, encompassing data at rest, data in transit, and data in use. This multi-layered approach ensures your data remains protected regardless of its state or location.'
        },
        {
          title: 'Advanced Encryption Algorithms',
          content: 'We leverage the latest and most secure encryption algorithms, such as AES-256, to ensure your data remains unreadable even in the hands of unauthorized actors. Additionally, we offer key management solutions to guarantee the secure storage and distribution of encryption keys.'
        },
        {
          title: 'Granular Control and Customization',
          content: 'Tailor your data security to your specific needs. Our solutions offer granular control over encryption policies, allowing you to define which data is encrypted, who has access to keys, and under what circumstances encryption is applied.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="Data Encryption Solutions"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Ampcus Cyber: Fortifying Your Data with Unwavering Encryption Solutions"
                subtitle=""
                description1="In a digital era fueled by data, safeguarding sensitive information is of utmost importance. The repercussions of breaches and leaks extend beyond compromised data—trust is eroded, reputations are damaged, and financial stability is put at risk. Ampcus Cyber’s Data Encryption Solutions empower you to confront these challenges proactively, offering robust and comprehensive encryption tools that secure your data throughout its entire lifecycle, from creation to storage to transmission."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              <FourCardSection
        title="Beyond Basic Encryption"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="From Secure Storage to Seamless Access"
        tabs={securityTabsData}
      />
    </div>
  


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Data Encryption Needs? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Fortify Your Data with Unwavering Encryption?"
                description="Don’t let data breaches and leaks put your business at risk. Contact Ampcus Cyber today and let us be your trusted partner in data security. We’ll help you design and implement a comprehensive data encryption strategy that safeguards your valuable information, fosters trust with your stakeholders and propels your organization towards a future of secure and resilient data operations."
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

export default DataEncryption;



