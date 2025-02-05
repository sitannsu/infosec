
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

function WebApplication() {
    const descriptionItems = [
        "Block Attacks. Secure Your Web Apps. Ampcus Cyber’s advanced Web Application Firewall (WAF) solutions shield your web applications from evolving cyber threats. We block malicious attacks, protect sensitive data, and ensure uninterrupted application availability."
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
                "Our team comprises seasoned web application security specialists with a deep understanding of attack vectors and the ever-evolving threat landscape. They possess the expertise to design, implement, and maintain robust WAF solutions that safeguard your applications against even the most sophisticated threats.",
        },
        {
            label: "Constant Innovation and Optimization",
            content:
                "We are committed to continuous improvement. Our WAF platform is constantly evolving, incorporating the latest security advancements and threat intelligence to guarantee your defenses remain ahead of the curve.",
        },
        {
            label: "A Partner, Not Just a Provider",
            content:
                "We believe in building long-term partnerships with our clients. We work closely with your team to understand your specific needs and challenges, tailoring our WAF solution to seamlessly integrate with your existing infrastructure and security strategy.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Proactive Threat Hunting', content: 'We go beyond static signatures and rules. Our WAF employs advanced machine learning algorithms to identify and neutralize zero-day vulnerabilities and emerging threats in real-time. This proactive approach ensures your defenses are not just reactive, but actively hunt down and eliminate potential threats before they can cause harm.' },
        { label: 'Minimized False Positives', content: 'Ensure smooth sailing amidst evolving regulations. We help you identify and manage sensitive data, mitigating compliance risks and fostering a culture of responsible data governance.' },
        { label: 'Seamless Integration and Actionable Insights', content: 'Our WAF integrates seamlessly with your existing infrastructure and security tools, providing centralized visibility and control over your application security posture. Additionally, we deliver detailed reports and actionable insights, empowering you to continuously improve your defenses and make informed security decisions' },
       
      ];
      const Datacards = [
        {
          title: 'Comprehensive Protection',
          content: 'Our WAF offers a multi-layered defense against a vast array of web application vulnerabilities, including SQL injection, cross-site scripting, and DDoS attacks. We act as your digital gatekeeper, meticulously scrutinizing every HTTP request and response, ensuring only legitimate traffic reaches your applications.'
        },
        {
          title: 'Real-Time Threat Intelligence',
          content: 'We stay ahead of the evolving threat landscape through a global network of security researchers and analysts. Our WAF is constantly updated with the latest attack signatures and vulnerability information, ensuring your defenses remain proactive and resilient against even the most novel threats.'
        },
        {
          title: 'Granular Control and Customization',
          content: 'We understand that every application is unique. Our WAF provides granular control over security policies, allowing you to tailor your defense to the specific needs and vulnerabilities of your applications. No one-size-fits-all approach here – we ensure your protection is as precise as it is powerful.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="Advanced Web Application Firewall Solutions"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Ampcus Cyber’s Web Application Firewall : Fortifying Your Digital Gateway Against Modern Threats"
                subtitle=""
                description1="In today’s digitally driven world, web applications are the lifeblood of online businesses. Yet, these critical gateways are under constant siege from sophisticated attackers, armed with ever-evolving tactics to exploit vulnerabilities and compromise data. Ampcus Cyber’s Web Application Firewall (WAF) stands as your unwavering shield, meticulously filtering and inspecting every incoming request to your web applications, neutralizing threats before they can infiltrate your digital fortress."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
             <FourCardSection
        title="Beyond Static Defenses, Beyond Mere Compliance"
        subtitle="Beyond Static Defenses, Beyond Mere Compliance"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Beyond Static Defenses, Beyond Mere Compliance"
        subtitle="Our data discovery journey doesn’t end at mere revelation.
We translate your newfound knowledge into tangible opportunities for empowerment and growth.."
        tabs={securityTabsData}
      />
    </div>
   


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Web Application Security? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Fortify Your Web Applications with Unwavering Security??"
                description="Don’t let your web applications become vulnerable gateways for cyberattacks. Choose Ampcus Cyber’s WAF and let us be your trusted digital security partner. We’ll build an impenetrable shield around your applications, protecting your data, your reputation, and your business from the ever-present threat of cybercrime.

Contact us today for a consultation and let’s embark on a journey towards building a secure digital future for your web applications.

Embark on your data odyssey. Contact Ampcus Cyber today and let our Data Discovery be your compass, guiding you towards unprecedented insights, optimized operations, and a future where data becomes your most valuable asset."
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

export default WebApplication;



