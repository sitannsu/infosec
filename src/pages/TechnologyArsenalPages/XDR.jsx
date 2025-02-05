


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

function XDR() {
    const descriptionItems = [
        "Detect Threats Faster. Gain Broader Visibility. Ampcus Cyber’s XDR security solutions unify security data from across your IT infrastructure. We empower you to gain deeper insights, detect threats faster, and take proactive measures and prevent attacks before they happen."
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
            label: "Seasoned Cybersecurity Virtuosos",
            content:
                "Our team comprises seasoned security professionals with a deep understanding of the evolving threat landscape and the intricacies of unified defense orchestration. They possess the expertise to seamlessly conduct your security symphony, ensuring flawless performance.",
        },
        {
            label: "Constant Threat Score Updates",
            content:
                "XDR is a living, evolving security solution. We continuously update it with the latest threat intelligence and technological advancements, keeping your defenses in perfect harmony with the ever-changing digital world.",
        },
        {
          label: "Seamless Integration, Unwavering Security",
          content:
              "XDR integrates seamlessly with your existing infrastructure, enhancing your security posture without disrupting your workflows or business operations. You’ll enjoy robust protection that plays in perfect time with your organizational goals.",
      },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Proactive Defense, Not Reactive Chaos', content: 'XDR is not content with reacting to breaches. It actively hunts for suspicious patterns and anomalies, silencing them before they escalate into full-blown attacks. You’ll enjoy proactive resilience, minimizing disruption, and safeguarding your critical operations.' },
        { label: 'Actionable Insights, Not Data Deluge', content: 'XDR translates complex data into actionable intelligence, guiding your security team with precise instructions and prioritized interventions. No more struggling with confusing scores or deciphering meaningless alerts.' },
        { label: 'Empowering Every Player', content: 'XDR democratizes security. It empowers your employees to contribute to the overall defense posture, making them active participants in the security chorus. Your human firewall becomes integral to your security symphony.' },
    
      ];
      const Datacards = [
        {
          title: 'Dismantle Silos',
          content: 'XDR seamlessly integrates data from endpoints, networks, cloud environments, and security tools, painting a holistic picture of your security posture. No longer flying blind, you gain comprehensive visibility into potential threats lurking within the fragmented noise.'
        },
        {
          title: 'AI-Powered Precision',
          content: 'Forget the cacophony of false alarms. XDR’s advanced analytics and machine learning algorithms meticulously analyze the security score, amplifying genuine threats while silencing irrelevant noise. You’ll focus only on the critical melodies, making informed decisions with laser-sharp clarity.'
        },
        {
          title: 'Unified Response, a Powerful Crescendo',
          content: 'XDR doesn’t merely gather data, it orchestrates a swift and coordinated response. It seamlessly aligns firewalls, endpoint protection, and response teams into a unified chorus, neutralizing threats before they disrupt your digital harmony.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="XDR"
                subtitle="Extended Detection and Response Service"
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Elevate Defense with XDR Excellence: Ampcus Cyber’s Extended Detection and Response (XDR) Service"
                subtitle=""
                description1="Step into a new era of cybersecurity defense with Ampcus Cyber’s Extended Detection and Response (XDR) service. In a threat landscape where adversaries are more sophisticated than ever, traditional security measures fall short. Our XDR service is not just about detection; it’s about extended visibility, rapid response, and a comprehensive defense strategy that evolves with the dynamic nature of cyber threats."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
             <FourCardSection
        title="Beyond Fragmented Defenses"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Fortifying Your Security Posture with Ampcus Cyber’s XDR"
        tabs={securityTabsData}
      />
    </div>
   


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber? Your Trusted Cybersecurity Conductor " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Stage Your Digital Resilience?"
                description="Don’t let fragmented defenses and disjointed responses undermine your digital potential. Contact Ampcus Cyber today and let us conduct your XDR implementation. We’ll harmonize your security posture, empower your team, and guide you in composing a digital masterpiece of unwavering resilience.

Contact us today for a free consultation and let’s orchestrate your digital security symphony together."
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

export default XDR;



