

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

function DataLeakage() {
    const descriptionItems = [
        "Secure Your Data. Ensure Compliance. Ampcus Cyber’s Data Leakage Prevention safeguards sensitive data from unauthorized access and exfiltration thereby preventing data loss incidents. We ensure compliance with data privacy regulations and empower you to build trust with stakeholders."
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
            label: "Seasoned Digital Architects",
            content:
                "Our team comprises leading data security experts, possessing a deep understanding of data loss vectors and the intricate architecture of modern digital ecosystems. They wield their expertise to anticipate and thwart even the most sophisticated data exfiltration attempts.",
        },
        {
            label: "Constant Threat Intelligence Network",
            content:
                "We maintain a vigilant watch on the ever-evolving data security landscape. Our comprehensive threat intelligence network ensures we stay ahead of emerging leakage techniques, constantly adapting our defenses to neutralize new and unforeseen threats.",
        },
        {
          label: "Seamless Integration, Unwavering Security",
          content:
              "We understand that data accessibility is critical to your operations. Our DLP solutions seamlessly integrate into your existing infrastructure, operating silently in the background, securing your data without disrupting your workflows.",
      },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Data Encryption', content: 'Sensitive data is rendered unintelligible to unauthorized eyes, both at rest and in transit, through robust encryption methods.' },
        { label: 'Granular Access Control', content: 'We fine-tune user permissions, granting access only to those entrusted with specific information, minimizing the attack surface and potential for misuse.' },
        { label: 'Content Filtering', content: 'Our intelligent filtering mechanisms act as digital gatekeepers, blocking the unauthorized transfer of sensitive information via email, file sharing platforms, and other channels.' },

      ];
      const Datacards = [
        {
          title: 'Shadow IT',
          content: 'We uncover unauthorized applications and cloud storage, dismantling clandestine channels through which sensitive information can unwittingly escape.'
        },
        {
          title: 'Insider Threats',
          content: 'We monitor user activity, pinpointing anomalous data transfers and suspicious behaviour that could signal deliberate or accidental exfiltration.'
        },
        {
          title: 'Human Error and Misconfiguration',
          content: 'We identify unintentional exposures stemming from misconfigurations and human error, preventing sensitive data from slipping through the cracks.'
        },
   
      ];
    return (
        <>
            <SubPageHero
                title="Data Leakage Prevention"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Perimeter Defenses: Ampcus Cyber’s Data Leakage Prevention – Fortifying Your Digital Core"
                subtitle="Transcending Traditional Safeguards"
                description1="Data, the lifeblood of modern enterprises, resides within a precarious digital landscape. While firewalls stand guard at the perimeter, internal vulnerabilities and evolving threats pose a constant risk: the silent, insidious threat of data leakage. In this labyrinthine digital realm, Ampcus Cyber’s Data Leakage Prevention (DLP) emerges as your vigilant sentinel, meticulously safeguarding your sensitive information at every stage of its digital journey."
                description2="Our Data Leakage Prevention (DLP) transcends the limitations of basic perimeter defenses. It intricately engages with data in various states—resting, moving, and in use—crafting a multi-layered shield to safeguard your invaluable information assets. We conduct thorough analysis of network traffic, meticulously scrutinize endpoint activities, and vigilantly monitor user behavior. Picture us as architects of digital forensics, ceaselessly shining a light into the shadows where data leakage silently lurks."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />

<FourCardSection
        title="Exposing the Shadows of Uncontrolled Data Flow"
        subtitle="We shed light on the hidden avenues of data loss, proactively addressing"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Building an Impregnable Data Citadel"
       subtitle="We don’t merely identify leaks; we proactively fortify your data defenses.Our DLP implements robust controls to ensure your information remains secure:"
        tabs={securityTabsData}
      />
    </div>
  


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber? Your Trusted Data Guardian" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Secure Your Digital Core?"
                description="Don’t let data leakage erode the foundations of your operations. Choose Ampcus Cyber’s Data Leakage Prevention and let us forge an impenetrable digital citadel around your sensitive information. We’ll be your trusted data guardians, your digital security architects, ensuring your information remains secure, accessible only to those you authorize, and forever protected from the silent threat of data loss.

Elevate your data security posture. Contact Ampcus Cyber today and let our Data Leakage Prevention be the cornerstone of your digital fortress, ensuring the unwavering protection of your sensitive information."
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

export default DataLeakage;



