


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

function SecurityTraining() {
    const descriptionItems = [
        "Empower Users. Stop Phishing Attacks. Ampcus Cyber’s Security Awareness Platform empowers your users to identify and avoid cyber threats. We create engaging training programs that build a strong security culture, significantly reducing your organization’s risk of falling victim to cyberattacks."
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
                "Our team comprises experienced security awareness specialists who understand the unique challenges of building an effective training program. They will tailor solutions to your specific needs and industry requirements.",
        },
        {
            label: "Data-Driven Approach and Continuous Improvement",
            content:
                "We leverage data analytics to track program effectiveness and identify areas for improvement. We believe in continuous refinement and update our platform regularly to ensure its relevance and effectiveness.",
        },
        {
            label: "Seamless Integration and Scalability",
            content:
                "Our platform seamlessly integrates with your existing HR systems and LMS, minimizing disruption and maximizing your training ROI. We offer scalable solutions to accommodate organizations of all sizes and industries.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Phishing Simulations and Real-World Scenarios', content: 'Go beyond theoretical concepts and test your employees’ preparedness with simulated phishing attacks and realistic security scenarios. This hands-on training helps them identify red flags, practice safe behavior, and build resilience against real-world threats.' },
        { label: 'Security Culture Building Activities', content: 'Foster a culture of security within your organization. Our platform offers engaging activities, awareness campaigns, and internal competitions to keep security top-of-mind and encourage employees to actively participate in safeguarding your digital assets.' },
        { label: 'Continuous Updates and Threat Intelligence', content: 'Stay ahead of evolving cyber threats with our constantly updated platform. We integrate the latest threat intelligence and attack trends into our training modules, ensuring your employees are equipped to defend against the newest tactics and scams.' },
       
  
   
      ];
      const Datacards = [
        {
          title: 'Engaging and Interactive Learning',
          content: 'Ditch the dry lectures and monotonous training manuals. Our platform utilizes engaging microlearning modules, interactive simulations, and gamified scenarios to keep employees engaged and actively learning key security concepts.'
        },
        {
          title: 'Tailored Content for Diverse Roles',
          content: 'We understand that security needs differ across departments. Our platform offers customizable training modules based on employee roles and responsibilities, ensuring targeted learning that directly addresses their specific risks and vulnerabilities.'
        },
        {
          title: 'Regular Assessments and Reporting',
          content: 'Track the effectiveness of your security training program with real-time assessments and comprehensive reports. Identify knowledge gaps, measure progress, and refine your training strategies for continuous improvement..'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="Security Training & Awareness Platform"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Empowering Your Defense: Ampcus Cyber’s Security Training & Awareness Platform"
                subtitle=""
                description1="In today’s digital landscape, the human element remains the weakest link in any security chain. Traditional training methods often fall short, leaving employees unprepared for evolving cyber threats and unknowingly vulnerable to social engineering attacks, phishing scams, and data breaches. Ampcus Cyber’s Security Training & Awareness Platform bridges this gap, empowering your employees with the knowledge, skills, and situational awareness they need to become your first line of defense against cyberattacks."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            <FourCardSection
        title="Building a Security-Conscious Culture"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Beyond Basic Awareness, Building Resilience"
        tabs={securityTabsData}
      />
    </div>
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Your Security Awareness Training?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Build a Security-Conscious Workforce?"
                description="Don’t leave your security posture vulnerable to human error. Contact Ampcus Cyber today and let us help you build a proactive, engaged workforce equipped to defend against cyber threats. We’ll empower your employees with the knowledge, skills, and confidence to become your strongest security asset."
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

export default SecurityTraining;



