
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

function CyberSecuirtyForensic() {
    const descriptionItems = [
        "Ampcus Cyber’s Cybersecurity Forensics and Incident Response Investigations service provides comprehensive investigation, evidence collection, and remediation strategies to identify the source of a breach, contain the threat, and minimize damage. We empower you to recover from cyberattacks with confidence.."
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






    const items = [
        {
            label: "Digital Crime Scene Analysis",
            content:
                "Uncovering the digital footprints of cyber threats through meticulous analysis of the incident scene, enabling a comprehensive understanding of the attack.",
        },
        {
            label: "Forensic Data Recovery",
            content:
                "Retrieving and reconstructing digital evidence to provide a complete picture of the incident, supporting legal and regulatory requirements.",
        },
        {
            label: "Malware Analysis and Attribution",
            content:
                "Identifying and analyzing malware to determine its origin, characteristics, and potential impact, aiding attribution and future threat mitigation.",
        },
        {
            label: "Incident Report and Documentation",
            content:
                "Compiling detailed incident reports and documentation that not only fulfill regulatory requirements but also serve as valuable resources for continuous improvement.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Rapid Deployment & Containment', content: 'We act with lightning speed, securing the scene, neutralizing the threat, and minimizing further damage before evidence evaporates into the digital ether.' },
        { label: 'Meticulous Evidence Collection & Analysis', content: 'We’re forensic data whisperers, extracting hidden truths from logs, files, and network traces to paint a crystal-clear picture of the attack.' },
        { label: 'In-Depth Threat Hunting & Attribution', content: 'We don’t settle for easy answers. We delve deep into attacker patterns, malware signatures, and global threat intelligence to unmask the perpetrators and understand their motives.' },
        { label: 'Comprehensive Reporting & Actionable Insights', content: 'We don’t just hand you a dusty report. We translate complex findings into clear, actionable recommendations for recovery, remediation, and long-term cyber resilience.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Cybersecurity Forensics and Incident Response Investigations"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="When the Digital Dust Settles: Unmasking Threats with Ampcus Cyber’s Cybersecurity Forensics & Incident Response Investigations"
                subtitle=""
                description1="In the digital Wild West, every breach leaves a trail. But deciphering those digital footprints, unearthing the culprits, and mitigating the damage requires more than a six-shooter. That’s where Ampcus Cyber’s Cybersecurity Forensics & Incident Response Investigations come in, your digital detectives meticulously reconstructing the crime scene and bringing cyber perpetrators to justice."
                description2="We’re not data cowboys. We’re forensic artisans, combing through the wreckage of your digital ecosystem, preserving and analyzing evidence with meticulous precision. We don’t just identify the breach; we uncover its motive, modus operandi, and the trail of digital breadcrumbs leading back to the perpetrators."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we shine a light on the darkest corners of your cybercrime scene"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Cybersecurity Forensics and Incident Response Investigations" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Cybersecurity Forensics & Incident Response Investigations isn’t just about finding answers – it’s about regaining control. It’s about turning the tide on cyber criminals, minimizing damage, and building a fortress-like defense against future attacks.

Don’t let cyber criminals walk away unscathed. Let Ampcus Cyber be your digital Sherlock Holmes, unearthing the truth and bringing justice to your doorstep.

Contact us today for a free consultation and discover how we can turn your digital dust into the key to unlocking cyber resilience."
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

export default CyberSecuirtyForensic;







