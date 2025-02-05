
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

function IncidentResponse() {
    const descriptionItems = [
        "Ampcus Cyber’s Incident Response Planning service helps you prepare for and effectively respond to cybersecurity threats. We empower you to minimize downtime, protect sensitive data, and ensure business continuity in the face of an incident. We help you build a resilient security posture and ensure business continuity."
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
            label: "Strategic Incident Response Framework",
            content:
                "Crafting a comprehensive incident response framework that aligns with your business goals, compliance requirements, and the specific threats facing your organization.",
        },
        {
            label: "Tabletop Exercises and Training",
            content:
                "Proactive training through tabletop exercises that simulate real-world scenarios, preparing your teams to respond effectively when faced with actual incidents.",
        },
        {
            label: "Post-Incident Analysis and Improvement",
            content:
                "Learning from every incident. We conduct thorough post-incident analyses to identify areas for improvement and enhance your incident response capabilities continuously.",
        },
        {
            label: "Compliance Reporting",
            content:
                "Streamlining compliance reporting processes, ensuring that your organization stays ahead of regulatory requirements and industry standards.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Comprehensive Threat Assessment', content: 'We delve deep into your systems, networks, and processes, mapping your vulnerabilities and predicting potential attack vectors to ensure your plan covers all fronts.' },
        { label: 'Tailored Incident Response Playbook', content: 'We don’t believe in one-size-fits-all approaches. We craft a personalized playbook outlining roles, responsibilities, communication protocols, and precise steps to take when every second counts.' },
        { label: 'Regular Training & Simulations', content: 'We prepare your team with realistic drills and simulations to hone their skills, build muscle memory, and ensure flawless execution when the real sirens blare.' },
        { label: 'Regular Improvement & Evolution', content: 'We understand the cyber landscape is ever-shifting. We stay by your side, updating your plan, refining your response, and keeping you ahead of the curve.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Incident Response Planning Services"
                subtitle="Prepare for the Unexpected."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="When the Cyber Siren Blares: Be Prepared with Ampcus Cyber’s Incident Response Planning Services"
                subtitle=""
                description1="In today’s hyper-connected world, cyber threats aren’t a question of “if,” but “when.” A single breach can cripple your business, erode trust, and leave you scrambling in the wake of chaos. That’s where Ampcus Cyber’s Incident Response Planning Services come in, your cyber firefighters crafting a bulletproof plan to extinguish threats before they become infernos."
                description2="We’re not fire alarms. We’re incident response architects, collaborating with you to understand your unique digital landscape, identify potential vulnerabilities, and build a bespoke roadmap for rapid, effective response. We don’t just tick boxes; we prepare your team to act with precision and confidence even when the digital flames flicker highest."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we turn panic into proactiveness"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Incident Response Planning " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Incident Response Planning isn’t just a precaution – it’s an investment in resilience. It’s about minimizing downtime, safeguarding your reputation, and emerging from incidents stronger, faster, and wiser.

Don’t wait for the cyber alarm to wake you with a jolt. Prepare for the firestorm today.

Contact Ampcus Cyber for a free consultation and discover how we can craft your incident response plan for ultimate cyber resilience."
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

export default IncidentResponse;



