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

function DataGoverance() {
    const descriptionItems = [
        "Ampcus Cyber’s Data Governance services help you establish a structured framework for data management, ensuring data privacy, security, and compliance. We empower you to gain control, build trust with stakeholders, and derive valuable insights from your data assets."
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
            label: "Strategic Framework Development",
            content:
                "Crafting a comprehensive data governance framework that aligns with your business goals, ensures compliance, and maximizes data value.",
        },
        {
            label: "Data Quality Management",
            content:
                "Implementing strategies and processes to maintain data accuracy, consistency, and integrity throughout its lifecycle.",
        },
        {
            label: "Security and Compliance Integration",
            content:
                "Embedding security and compliance measures into the core of your data governance strategy to protect sensitive information and ensure regulatory adherence.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Data Inventory and Classification', content: 'We shine a light on your data’s hiding places, understanding its volume, velocity, and value, ensuring informed decision-making and resource allocation.' },
        { label: 'Policy and Procedure Development', content: 'We don’t believe in one-size-fits-all approaches. We work with you to craft tailored policies and procedures that fit your culture, industry, and regulatory landscape.' },
        { label: 'Access and Control Management', content: 'We build a secure fortress around your data, implementing granular access controls and robust monitoring systems to prevent unauthorized access and potential breaches.' },
        { label: 'Data Lifecycle Management', content: 'We ensure your data lives a healthy life, from its creation to secure disposal, with effective retention policies and automated processes that maximize efficiency and minimize risk' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Data Governance"
                subtitle="Govern Your Data with Data Governance Services"
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Untangle the Data Deluge: Tame Your Chaos with Ampcus Cyber’s Data Governance Services"
                subtitle=""
                description1="In today’s data-driven world, information is power. But without proper governance, it can quickly become a chaotic tsunami, drowning your business in compliance headaches and missed opportunities. That’s where Ampcus Cyber steps in, your experienced data wranglers, transforming your data deluge into a predictable, manageable, and valuable asset with our Data Governance Services."
                description2="We’re not data disciplinarians. We’re data architects, collaborating with you to understand your unique data landscape, identify vulnerabilities, and craft a customized roadmap for success. We translate complex regulations into simple solutions, empowering you to unlock the true potential of your data while ensuring robust compliance and trust."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we navigate the data storm with you"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Data Governance isn’t a technical chore – it’s a strategic imperative. It’s about unlocking the true value of your data, minimizing compliance burdens, and building a culture of data responsibility and trust.

Ready to transform your data deluge into a powerful and compliant asset?

Contact Ampcus Cyber today for a free consultation and discover how we can tame your data chaos and unleash its full potential.."
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

export default DataGoverance;



