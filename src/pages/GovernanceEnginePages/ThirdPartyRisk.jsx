
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

function ThirdPartyRisk() {
    const descriptionItems = [
        "Ampcus Cyber’s Third-Party Risk Management services help you identify and mitigate risks associated with your vendors and partners. We ensure compliance, build trust across your ecosystem, and empower you to focus on core business activities."
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
            label: "Holistic Evaluation",
            content:
                "Our approach is not limited to vendor assessments. We conduct a comprehensive analysis, considering the interconnectedness of your third-party ecosystem and its potential impact on your security.",
        },
        {
            label: "Customized Risk Profiles",
            content:
                "We don’t believe in generic risk assessments. Our experts craft customized risk profiles for each third-party relationship, tailoring mitigation strategies to fit the specific nature of the partnership.",
        },
        {
            label: "Dynamic Security for Dynamic Trust",
            content:
                "Our continuous monitoring services offer dynamic security, ensuring the trustworthiness of your third-party relationships in the face of evolving threats and business dynamics.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Comprehensive Risk Assessments', content: 'We go beyond superficial checks, delving deep into your vendors’ security postures, compliance practices, and operational resilience, leaving no stone untangled.' },
        { label: 'Tailored Mitigation Strategies', content: 'We don’t prescribe one-size-fits-all solutions. We craft bespoke plans to address each vendor’s vulnerabilities, ensuring seamless integration with your existing framework.' },
        { label: 'Constant Monitoring & Vigilance', content: 'We don’t rest on our laurels. We proactively monitor your web of relationships, adapting your defenses to evolving threats and vendor changes, offering constant vigilance.' },
        { label: 'Enhanced Transparency & Collaboration', content: 'We build trust and accountability across your ecosystem, fostering open communication and shared responsibility for risk management.' },
      ];
      const Datacards = [
        {
          title: 'Vendor Risk Assessments',
          content: 'Thorough evaluations of your vendors’ security postures, identifying potential risks and providing actionable insights for mitigation.'
        },
        {
          title: 'Contractual Security Alignment',
          content: 'Ensuring that your contracts reflect robust security requirements, fostering a shared commitment to maintaining a secure business environment.'
        },
        {
          title: 'Incident Response Planning',
          content: 'Collaborative development of incident response plans, ensuring a coordinated approach in the event of a security incident involving a third party.'
        },
        {
          title: 'Continuous Education and Engagement',
          content: 'Empowering your teams with the knowledge and skills necessary to be active participants in maintaining a secure third-party ecosystem'
        }
      ];
    return (
        <>
            <SubPageHero
                title="Third-Party Risk Management"
                subtitle="Secure Your Supply Chain."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="In the Web of Third Parties? Untangle Your Risks with Ampcus Cyber’s Third-Party Risk Management Services."
                subtitle=""
                description1="Today’s world is intertwined, a complex web of partnerships and dependencies. But with great reliance comes great vulnerability. Your third-party ecosystem, while crucial, can harbor hidden risks, exposing your data, reputation, and operations to potential threats. That’s where Ampcus Cyber steps in, your expert spider-slayers, safeguarding your web with comprehensive Third-Party Risk Management Services."
                description2="We’re not risk finger-pointers. We’re collaborative risk navigators, working alongside you to map your third-party landscape, identify lurking dangers, and weave a proactive defense that shields your entire digital ecosystem."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we illuminate the path to secured connections"
        tabs={securityTabsData}
      />
    </div>
    <FourCardSection
        title="Services That Define Excellence In Risk Management"
        cards={Datacards}
      />


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber for Third-Party Risk Management?" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Third-Party Risk Management isn’t a cost – it’s an investment in peace of mind. It’s about minimizing cyber threats, maximizing vendor reliability, and building a resilient ecosystem that thrives in the face of uncertainty.

Ready to untangle your third-party risks and weave a web of secure success?

Contact Ampcus Cyber today for a free consultation and discover how we can be your trusted partner in navigating the interconnected world."
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

export default ThirdPartyRisk;



