

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

function ICSSecurity() {
    const descriptionItems = [
        "Ampcus Cyber’s ICS Security services protect your industrial control systems from cyber threats. We ensure operational continuity, safeguard critical infrastructure, and empower you to optimize your industrial processes with confidence."
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
            label: "Vulnerability Identification & Mitigation",
            content:
                "We go beyond superficial scans, delving deep into your control systems, networks, and devices to unearth hidden vulnerabilities before they turn into disruptive solos.",
        },
        {
            label: "Risk Management & Prioritization",
            content:
                "We tailor your security strategy to the specific tempo of your industry and operations, prioritizing risks based on impact and exploitability, ensuring your resources are focused on the most critical vulnerabilities.",
        },
        {
            label: "Zero-Trust & Segmentation Implementation",
            content:
                "We build a layered defense, segmenting your network like instruments in an orchestra, minimizing attack surfaces, and ensuring even a rogue note can’t disrupt the entire performance.",
        },
        {
            label: "Vigilant Oversight and Swift Response",
            content:
                "We maintain constant vigilance over your industrial processes, actively monitoring for irregularities and potential threats. Our rapid incident response is poised to swiftly counter any emerging issues, preventing them from escalating into disruptive events.",
        },
        {
            label: "Compliance & Best Practices Harmonization",
            content:
                "We ensure your security strategy seamlessly blends with industry regulations and best practices, guaranteeing a performance that resonates with compliance requirements.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Vulnerability Identification & Mitigation', content: 'We go beyond superficial scans, delving deep into your control systems, networks, and devices to unearth hidden vulnerabilities before they turn into disruptive solos.' },
        { label: 'Risk Management & Prioritization', content: 'We tailor your security strategy to the specific tempo of your industry and operations, prioritizing risks based on impact and exploitability, ensuring your resources are focused on the most critical vulnerabilities.' },
        { label: 'Zero-Trust & Segmentation Implementation', content: 'We build a layered defense, segmenting your network like instruments in an orchestra, minimizing attack surfaces, and ensuring even a rogue note can’t disrupt the entire performance.' },
        { label: 'Vigilant Oversight and Swift Response', content: 'We maintain constant vigilance over your industrial processes, actively monitoring for irregularities and potential threats. Our rapid incident response is poised to swiftly counter any emerging issues, preventing them from escalating into disruptive events.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="ICS Security Service"
                subtitle="Secure Your Industrial Operations."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Bits and Bytes: Secure Your Operational Heartbeat with Ampcus Cyber’s ICS & OT Security"
                subtitle=""
                description1="In today’s industrial landscape, where physical meets digital, your operational technology (OT) and industrial control systems (ICS) are the invisible conductors of your business symphony. But this intricate harmony is vulnerable to discordant chords – cyber threats that can bring your operations to a screeching halt. That’s where Ampcus Cyber’s ICS & OT Security steps in, tuning your defenses to play a flawless security concerto."
                description2="We’re not security orchestras churning out generic melodies. We’re cybersecurity maestros, deeply understanding the unique rhythm of your industrial environment. We analyze your machinery, protocols, and workflows, then compose bespoke security symphonies to protect your most critical assets. We translate technical jargon into tangible solutions, empowering your team to become active conductors in the safety of your OT and ICS."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we harmonize your industrial security"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            {/* <DynamicCardComponent title="Services That Define Excellence in Cyber Crisis Simulation" items={items} /> */}


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in ICS & OT Security isn’t just about meeting regulations – it’s about safeguarding your operational pulse. It’s about protecting your people, equipment, and reputation from the devastating consequences of cyber threats.

Don’t let your industrial symphony be disrupted by cyber discord. Partner with Ampcus Cyber to turn your OT and ICS into a fortress of security and ensure your operations play on, flawlessly and forever.

Contact us today for a free consultation and discover how we can compose the perfect ICS & OT security symphony for your unique industrial performance.."
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

export default ICSSecurity;







