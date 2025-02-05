
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

function DPO() {
    const descriptionItems = [
        "Ampcus Cyber’s DPO as a Service ensures your business meets data privacy regulations. We act as your dedicated Data Protection Officer (DPO), providing expert guidance, managing compliance processes, and empowering you to build trust with stakeholders."
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
            label: "Expert Data Protection Leadership",
            content:
                "Our DPOs are seasoned experts with a deep understanding of data protection regulations, ensuring that your organization meets compliance requirements and builds a culture of data responsibility.",
        },
        {
            label: "Flexible Engagement Models",
            content:
                "Recognizing that data protection needs vary, our flexible engagement models allow you to access DPO expertise as a service, tailored to the specific requirements of your organization.",
        },
        {
            label: "Complete Data Protection Strategies",
            content:
                "We go beyond compliance checklists. Our DPOs develop holistic data protection strategies that align with your business goals, ensuring the responsible and ethical use of data.",
        },
  
      
    ];
    const Datacards = [
        {
          title: 'Data Protection Compliance Assessments',
          content: 'Comprehensive assessments to evaluate your organization’s current data protection measures and identify areas for improvement to meet regulatory standards.'
        },
        {
          title: 'Privacy Impact Assessments (PIA)',
          content: 'Conducting PIAs to assess the impact of data processing activities on privacy and implementing measures to mitigate potential risks.'
        },
        {
          title: 'Regulatory Liaison and Reporting',
          content: 'Serving as the point of contact for regulatory authorities and managing the reporting process, ensuring timely and accurate communication in the event of data incidents.'
        },
        {
          title: 'Data Subject Rights Management',
          content: 'Developing and implementing processes to manage data subject requests, ensuring compliance with regulations such as GDPR and CCPA.'
        }
      ];

    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Gap Analysis & Risk Assessment', content: 'We delve deep into your data practices, identifying potential vulnerabilities and ensuring you’re on the right path to fulfilling your legal obligations.' },
        { label: 'Policy & Procedure Development', content: 'We craft clear, actionable policies and procedures that protect your data, empower your employees, and keep you ahead of the curve.' },
        { label: 'Data Subject Request Fulfillment', content: 'We handle data subject access requests (DSARs) and other compliance obligations with meticulous accuracy and efficiency, safeguarding your data while respecting individual rights.' },
        { label: 'Training & Awareness Programs', content: 'We empower your team with the knowledge and skills they need to handle data responsibly, becoming champions of privacy within your organization.' },
        { label: 'Liaison with Regulatory Bodies', content: 'We act as your bridge to data protection authorities, ensuring smooth communication and minimizing potential conflicts or concerns.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="DPO as a Service"
                subtitle="Navigate Data Privacy. Simplify Compliance."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Navigate the Seas of Data Privacy with Confidence with Ampcus Cyber’s DPO as a Service"
                subtitle=""
                description1="In today’s data-driven world, privacy regulations aren’t just bureaucratic hurdles – they’re the compass guiding responsible, ethical business practices. But navigating the complex terrain of GDPR, CCPA, and other privacy frameworks can feel like stumbling through a legal jungle. That’s where Ampcus Cyber’s DPO as a Service comes in, your expert Sherpa leading you to a data-powered future with confidence and compliance."
                description2="We’re not compliance robots reciting regulations. We’re privacy pioneers, with deep expertise in data protection laws and the evolving regulatory landscape. We become your trusted advisor, standing shoulder-to-shoulder with you to build a robust privacy program tailored to your unique needs and industry."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we illuminate the path to privacy compliance"
        tabs={securityTabsData}
      />
    </div>

    <FourCardSection
        title="Services That Define Excellence in DPO as A Service"
        cards={Datacards}
      />

            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for DPO as A Service?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in DPO as a Service isn’t just about checking compliance boxes – it’s about building trust, minimizing risk, and unlocking the full potential of your data responsibly and ethically. It’s about turning complex regulations into a competitive advantage, attracting customers, and fostering a culture of data privacy within your organization.

Don’t get lost in the jungle of data privacy regulations. Partner with Ampcus Cyber to navigate the path with confidence and clarity.

Contact Ampcus Cyber today for a free consultation and discover how our DPO as a Service can transform your data practices and unlock a future of responsible growth."
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

export default DPO;







