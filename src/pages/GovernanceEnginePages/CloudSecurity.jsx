
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

function CloudSecurity() {
    const descriptionItems = [
        "Ampcus Cyber’s Cloud Security services help you secure your cloud environment from evolving threats. We secure your cloud environment, ensure compliance with regulations, and help you achieve agility and innovation without compromising security."
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
            label: "Strategic Cloud Security Architecture",
            content:
                "We don’t believe in one-size-fits-all security. Our experts design strategic cloud security architectures tailored to the unique needs and risks of your business.",
        },
        {
            label: "Multi-Cloud Expertise",
            content:
                "Operating in a multi-cloud environment? We’ve got you covered. Our services extend seamlessly across various cloud platforms, ensuring consistent security..",
        },
        {
            label: "Seamless Regulatory Alignment",
            content:
                "Our Cloud Security services offer continuous compliance checks, enabling you to effortlessly align your cloud environment with prevailing industry standards.",
        },
    
      
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Threat Landscape & Risk Assessment', content: 'We don’t just point at clouds; we dissect them, analyzing your unique cloud configuration, data sensitivity, and compliance requirements to predict potential storms and chart a risk-minimized course.' },
        { label: 'Identity & Access Management', content: 'We build a security fortress around your cloud data, implementing granular access controls and robust authentication protocols to ensure only authorized individuals set foot on your virtual cloud lands.' },
        { label: 'Data Security & Encryption', content: 'We treat your data like precious cargo, securing it with layered encryption protocols, secure data loss prevention (DLP) solutions, and comprehensive backup and recovery strategies.' },
        { label: 'Relentless Monitoring & Threat Detection', content: 'We keep a vigilant eye on your cloud horizon, employing advanced threat intelligence and AI-powered security tools to detect even the faintest cyber-glimmer before it grows into a storm.' },
        { label: 'Crisis Response & Remediation', content: 'We’re your cyber first responders, equipped with rapid response plans and expert incident handling procedures to minimize damage and keep your cloud voyage on track.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Cloud Security"
                subtitle="Fortify Your Cloud Fortress with Cloud Security Services."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond the Cloud Horizon: Navigate with Confidence with Ampcus Cyber’s Cloud Security Solutions"
                subtitle=""
                description1="In today’s digital sky, the cloud beckons with infinite possibilities. But soaring through this vibrant expanse requires a trusty navigator, one who charts the course to security and ensures your journey isn’t riddled with turbulent cyber threats. That’s where Ampcus Cyber’s Cloud Security Solutions come in, your expert air traffic controllers guiding you to a cloud experience filled with unwavering confidence and boundless potential."
                description2="We’re not cloud cheerleaders chanting generic mantras. We’re cybersecurity architects, meticulously assessing your cloud environment, identifying hidden vulnerabilities, and crafting bespoke defense strategies to protect your data, applications, and infrastructure from the ever-evolving storm of cyber threats."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we secure your cloud odyssey"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Cloud Security?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Cloud Security isn’t just about checking compliance boxes – it’s about empowering your cloud journey with unwavering trust. It’s about protecting your most valuable assets, minimizing risk, and unlocking the full potential of the cloud without fear of cyber turbulence.

Don’t let cyber threats clip your cloud wings. Partner with Ampcus Cyber to chart a secure course and soar through the boundless possibilities of the cloud with confidence.

Contact Ampcus Cyber today for a free consultation and discover how we can be your trusted navigator on your cloud odyssey."
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

export default CloudSecurity;







