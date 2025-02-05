


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

function GovernanceRisk() {
    const descriptionItems = [
        "Ampcus Cyber’s advanced GRC solutions streamline your governance, risk, and compliance processes. We help you achieve continuous compliance with regulations, build a strong security posture, and mitigate threats before they impact your business."
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
            label: "Seasoned GRC Experts",
            content:
                "Our team comprises seasoned GRC specialists with deep expertise in governance best practices, risk management methodologies, and compliance requirements across diverse industries.",
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
        { label: 'Centralized Data Repository', content: 'Consolidate and normalize data from disparate sources – policies, risk assessments, audit logs – into a single, centralized repository. This unified view empowers efficient analysis and informed decision-making across your organization.' },
        { label: 'Actionable Intelligence, Not Data Deluge', content: 'Our GRC solution transforms complex data into actionable insights. Advanced analytics and reporting tools reveal trends, identify gaps, and prioritize actions, guiding you towards strategic risk mitigation and improved compliance posture.' },
        { label: 'Continuous Improvement Cycle', content: 'We believe in iterative refinement. Our GRC solution facilitates ongoing monitoring and feedback loops, allowing you to continuously adapt your governance frameworks, risk assessments, and compliance processes to keep pace with evolving regulations and business needs.' },
  
   
      ];
      const Datacards = [
        {
          title: 'Holistic Governance Framework',
          content: 'We go beyond ticking compliance boxes. Our GRC solution establishes a robust and adaptable governance framework, aligning your policies, processes, and controls with industry best practices and your unique business objectives.'
        },
        {
          title: 'Proactive Risk Management',
          content: 'We move from reactive risk mitigation to proactive identification and neutralization. Our advanced risk assessment tools and methodologies pinpoint potential vulnerabilities and threats before they disrupt your operations.'
        },
        {
          title: 'Streamlined Compliance Management',
          content: 'Forget the compliance maze. We automate routine compliance tasks, streamline reporting processes, and provide real-time visibility into your compliance posture, ensuring constant alignment with relevant regulations.'
        },
      
      ];
    return (
        <>
            <SubPageHero
                title="Governance, Risk & Compliance"
                subtitle="Manage Risk. Achieve Compliance."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Navigating the Digital Crossroads: Ampcus Cyber’s GRC – Aligning Governance, Risk, and Compliance in Your Digital Ecosystem"
                subtitle=""
                description1="In today’s dynamic digital landscape, navigating the intersection of governance, risk, and compliance (GRC) demands precision and adaptability. Siloed approaches and manual processes leave organizations vulnerable to inefficiencies, regulatory breaches, and unforeseen risks. Ampcus Cyber’s GRC emerges as your comprehensive roadmap, meticulously aligning your governance frameworks with effective risk management and unwavering compliance, propelling your organization towards sustainable and secure growth."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
            <FourCardSection
        title="Beyond Checklist Compliance"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we illuminate your path to resilient success"
        tabs={securityTabsData}
      />
    </div>
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber as Your GRC Partner? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Embrace a Strategic Approach to GRC?"
                description="Don’t let fragmented data, unaddressed risks, and compliance woes hinder your digital progress. Contact Ampcus Cyber today and let us be your trusted GRC partner. We’ll help you navigate the evolving digital landscape with confidence, ensuring your organization is not just compliant, but secure, resilient, and poised for sustainable growth.

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


            <div className="bg-gray-50 py-16">
                <FAQAccordion faqItems={faqData} />
            </div>





        </>
    );
}

export default GovernanceRisk;



