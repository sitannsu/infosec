

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

function SecureDevOps() {
    const descriptionItems = [
        "Ampcus Cyber’s Secure DevOps solutions integrate security throughout your development lifecycle. We identify vulnerabilities early in the development process and empower you to develop secure applications faster without compromising security, mitigating risks, and ensuring a secure foundation for your applications."
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
                "Our team comprises proven DevSecOps specialists with deep expertise in secure coding practices, application security tools, and compliance requirements, ensuring your solution is tailored to your specific needs and development culture.",
        },
        {
            label: "Technology-Driven Innovation",
            content:
                "We leverage cutting-edge GRC platforms and advanced analytics to automate tasks, streamline processes, and deliver actionable insights for data-driven decision-making.",
        },
        {
            label: "Collaborative Partnership",
            content:
                "We work closely with your team to understand your specific needs and challenges, customizing our GRC solution to seamlessly integrate with your existing infrastructure and processes.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Security Champions, Not Roadblocks', content: 'We believe in empowering developers, not hindering them. Our solution provides intuitive tools and training programs, enabling developers to identify and address security issues themselves, fostering a culture of shared responsibility for application security.' },
        { label: 'Threat Intelligence and Vulnerability Management', content: 'Stay ahead of the evolving threat landscape. We provide access to real-time threat intelligence feeds and vulnerability databases, keeping developers and security teams informed about the latest risks and enabling proactive patching and mitigation strategies.' },
        { label: 'Compliance Confidence', content: 'Navigate complex compliance regulations with ease. Our solution assists in meeting industry-specific security standards and helps you maintain a compliant and audit-ready environment throughout the development lifecycle.' },
       
  
   
      ];
      const Datacards = [
        {
          title: 'Shift Left Security',
          content: 'We move beyond traditional post-development security testing, embedding security practices and tools into every phase of your SDLC. From code commits to deployments, vulnerabilities are identified and neutralized early, minimizing the potential for costly rework and remediation.'
        },
        {
          title: 'Automated Security Testing',
          content: 'Forget tedious manual tasks. We leverage a suite of automated security testing tools, covering static code analysis, dynamic application security testing (DAST), and software composition analysis (SCA), providing comprehensive coverage throughout your development cycle.'
        },
        {
          title: 'Continuous Integration and Security',
          content: 'Our solution seamlessly integrates with your existing CI/CD pipelines, making security checks an inherent part of every build and deployment. This continuous feedback loop ensures vulnerabilities are caught and addressed instantly, preventing them from reaching production environments.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="Secure DevOps & Application Security"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Bridging the Security Gap: Ampcus Cyber’s Secure DevOps & Application Security Solution"
                subtitle=""
                description1="In today’s fast-paced world of software development, speed and agility are crucial. Yet, neglecting security in the pursuit of rapid releases can create a treacherous chasm – one vulnerability hidden deep within your code can bring your operations crashing down. Ampcus Cyber’s Secure DevOps & Application Security solution becomes your trusted bridge, seamlessly integrating security throughout your software development lifecycle (SDLC), empowering you to deliver secure, reliable applications with unwavering confidence."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            <FourCardSection
        title="Security Woven into the Fabric of Development"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Empowering Developers, Securing Applications"
        tabs={securityTabsData}
      />
    </div>
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Secure DevOps Journey?? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Bridge the Security Gap and Accelerate Secure Innovation?"
                description="Don’t let security concerns slow down your development cycle. Contact Ampcus Cyber today and let us be your trusted partner in building a secure and agile DevSecOps culture. We’ll help you bridge the security gap, empowering your developers to deliver world-class applications with unwavering confidence and peace of mind."
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

export default SecureDevOps;



