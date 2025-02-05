
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

function DataPrivacy() {
    const descriptionItems = [
        "Assess Risks. Ensure Privacy. Ampcus Cyber’s Data Privacy Impact Assessment service helps you identify and mitigate data privacy risks associated with your projects and processes. We ensure compliance with regulations and empower you to build trust with data subjects and stakeholders."
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
            label: "Comprehensive Privacy Analysis",
            content:
                "Rigorous analysis of data processing activities, identifying potential privacy risks and assessing their impact on individuals and compliance requirements.",
        },
        {
            label: "Innovative Project Support",
            content:
                "Tailoring DPIAs to support innovative projects, ensuring that your organization can embrace new technologies while maintaining a commitment to privacy.",
        },
        {
            label: "Privacy by Design Recommendations",
            content:
                "Providing recommendations for integrating privacy measures into project design, fostering a privacy-centric approach to data processing.",
        },
        {
            label: "Constant Compliance Monitoring",
            content:
                "Implementing processes for ongoing monitoring and reassessment, ensuring that your organization stays ahead of evolving privacy requirements.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Comprehensive Scope & Data Mapping', content: 'We chart the entire course of your project, identifying all data flows, processing activities, and potential stakeholders to ensure no privacy stone is left unturned.' },
        { label: 'Granular Risk Identification & Analysis', content: 'We don’t just point at danger zones; we analyze the nature and severity of each identified risk, assessing its potential impact on individuals and your organization..' },
        { label: 'Tailored Mitigation Strategies', content: 'We go beyond generic recommendations, crafting practical solutions and implementation plans that effectively address identified risks within the context of your project.' },
        { label: 'Stakeholder Engagement & Communication', content: 'We ensure everyone on board is equipped with the knowledge and tools they need to navigate the privacy landscape, fostering a culture of responsible data handling.' },
        { label: 'Post-Implementation Monitoring & Review', content: 'We stay alongside you even after the assessments are complete, monitoring the effectiveness of our solutions and offering ongoing guidance to ensure your privacy compass remains true.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Data Privacy Impact Assessment"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Ticking Boxes: Uncover Hidden Risks with Ampcus Cyber’s Data Privacy Impact Assessments"
                subtitle=""
                description1="In today’s data-driven world, every new project or initiative carries a hidden passenger: potential privacy risks. Ignoring them is like sailing off without a compass – inviting choppy waters of regulatory fines, reputational damage, and loss of customer trust. That’s where Ampcus Cyber’s Data Privacy Impact Assessments (DPIAs) come in, your expert cartographers charting a course for responsible innovation without unseen privacy hazards."
                description2="We’re not box-tickers churning out generic reports. We’re privacy navigators, meticulously deciphering the privacy implications of your projects, identifying potential risks, and proposing practical, actionable solutions to mitigate them before you set sail. We translate complex legal jargon into clear, concise insights, empowering your team to make informed decisions that prioritize both progress and privacy."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we illuminate the hidden reefs of data privacy"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Data Privacy Impact Assessment" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in DPIAs isn’t just about compliance – it’s about building trust, mitigating risk, and ensuring your innovation journey happens with clear skies and calm waters. It’s about safeguarding your reputation, protecting individual rights, and unlocking the full potential of your data responsibly.

Don’t let hidden privacy risks capsize your progress. Partner with Ampcus Cyber to embark on a secure voyage with our comprehensive DPIAs.

Contact Ampcus Cyber today for a free consultation and discover how we can help you navigate the data seas with confidence and compliance."
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

export default DataPrivacy;







