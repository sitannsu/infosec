
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

function DDoS() {
    const descriptionItems = [
        "Ampcus Cyber’s advanced DDoS Protection Solutions shield your website and applications from malicious attacks. We ensure business continuity and uninterrupted operations, minimizing downtime and revenue loss caused by DDoS attacks."
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
                "Our team comprises veteran DDoS mitigation specialists with a deep understanding of attack methodologies and the intricate dynamics of the cyber threat landscape. They possess the expertise to analyze complex attack patterns and implement effective countermeasures to keep your digital doors",
        },
        {
            label: "Proven Track Record and Unwavering Reliability",
            content:
                "We boast a strong track record of successfully safeguarding diverse organizations from even the most sophisticated DDoS attacks. Our commitment to unwavering reliability assures you that your digital operations are entrusted to a capable and dependable partner.",
        },
        {
            label: "Collaborative Approach and Ongoing Support",
            content:
                "We believe in building long-term partnerships with our clients. We work closely with your team to understand your business continuity needs and adapt our solution to seamlessly integrate into your existing environment, providing ongoing support and proactive threat vigilance.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Advanced Threat Intelligence', content: 'We leverage AI-powered threat intelligence feeds and extensive global attack data to predict and anticipate evolving DDoS tactics. This proactive approach keeps your defenses one step ahead of the latest attack vectors and emerging threats.' },
        { label: 'Customizable Mitigation Strategies', content: 'No one-size-fits-all approach here. We work closely with you to understand your specific needs and infrastructure, tailoring our DDoS Protection solution to effectively counteract the threats you face most.' },
        { label: 'Seamless Integration and Visibility', content: 'Our DDoS Protection seamlessly integrates with your existing security infrastructure and tools, providing centralized visibility and control over your entire security posture. You gain a unified view of threats and mitigation efforts, enhancing your overall security awareness.' },
       
  
   
      ];
      const Datacards = [
        {
          title: 'Multi-Layered Defense',
          content: 'We deploy a multi-tiered defense architecture, strategically placed at network edge points, to effectively absorb and mitigate DDoS attacks at various stages. Our advanced scrubbing centers filter malicious traffic, ensuring legitimate users experience uninterrupted access.'
        },
        {
          title: 'Rapid Attack Detection and Response',
          content: 'Our security operations center boasts advanced real-time threat detection and mitigation capabilities. We identify and neutralize DDoS attacks instantly, minimizing downtime and maximizing uptime for your critical business operations.'
        },
        {
          title: 'Automated Incident Response',
          content: 'Minimize human intervention with automated playbooks tailored to specific DDoS attack types. Our system instantly triggers predefined mitigation actions, ensuring faster response times and minimizing potential damage.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="DDoS Protection"
                subtitle="DDoS Mitigation Solutions – Stop Attacks. Stay Online!"
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Ampcus Cyber’s DDoS Protection – Unwavering Resilience for Your Digital Presence"
                subtitle=""
                description1="Navigating the digital realm exposes businesses to the inevitable threat of cyberattacks. Among these, Distributed Denial-of-Service (DDoS) attacks loom as formidable storms, ready to overpower your online presence and paralyze operations. Enter Ampcus Cyber’s DDoS Protection – your impervious shield against the most ferocious DDoS assaults. With us, your digital infrastructure gains a guardian, ensuring uninterrupted business continuity and unwavering stability amidst the storm."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            <FourCardSection
        title="Standing Firm Against the Digital Flood"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Beyond Basic DDoS Mitigation"
        tabs={securityTabsData}
      />
    </div>
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your DDoS Protection? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Weather the Digital Storm with Confidence?"
                description="Don’t let DDoS attacks disrupt your business and reputation. Partner with Ampcus Cyber and let us be your trusted guardian in the digital landscape. We’ll stand alongside you, shielding your online presence from even the most relentless storms, ensuring your business operates with unwavering stability and peace of mind.

Contact us today for a free consultation and embark on a journey towards a secure and resilient digital future with Ampcus Cyber’s DDoS Protection."
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

export default DDoS;



