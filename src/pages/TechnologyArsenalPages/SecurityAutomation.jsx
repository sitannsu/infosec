
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

function SecurityAutomation() {
    const descriptionItems = [
        "Automate Tasks. Boost Productivity. (SOAR Solutions). Ampcus Cyber’s advanced SOAR services automate incident response workflows, enabling faster detection and containment of threats. We empower you to improve your security posture and minimize the impact of cyberattacks."
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
            label: "Your Trusted Guide",
            content:
                "Our team of seasoned security experts doesn’t just implement technology; they partner with you, understanding your unique challenges and tailoring SOAR to fit your specific needs and objectives.",
        },
        {
            label: "Innovation at Your Core",
            content:
                "We leverage cutting-edge advancements in automation and AI, ensuring your SOAR platform is always ahead of the curve, constantly evolving to outsmart the latest threats.",
        },
        {
            label: "More Than a Vendor, a Partner",
            content:
                "We’re invested in your success. We don’t believe in one-size-fits-all solutions; we work hand-in-hand with you to ensure your SOAR solution is seamlessly integrated, delivering maximum impact and ongoing value.",
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
                title="Security Automation and Orchestration (SOAR)"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Break Free from Security Silos: Unleash the Power of Ampcus Cyber SOAR"
                subtitle="Beyond Patchwork Security"
                description1="The modern security landscape is a battlefield: A relentless storm of alerts, manual tasks, and ever-evolving threats. Drowning in this chaos, your security team struggles to navigate fragmented data, prioritize responses, and stay ahead of the curve. Welcome to Ampcus Cyber SOAR, your revolutionary weapon in this digital war."
                description2="Ampcus Cyber SOAR shatters the silo walls, seamlessly integrating your diverse security tools into a unified command center. Imagine a real-time war room, where data pours in from endpoints, firewalls, SIEMs, and more, presented on a single, comprehensive dashboard. No more switching between screens, chasing clues, or piecing together a scattered puzzle. You see the entire battlefield – every threat, every vulnerability, every anomaly – laid bare before you."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
          
        
              {/* Governance EngineTabs */}
              
    


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Ampcus Cyber SOAR? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Transform Your Security Landscape?"
                description="Don’t let security woes hold you back. Unleash the power of Ampcus Cyber SOAR and watch your security operations undergo a revolutionary transformation. Experience the clarity of unified data, the efficiency of automated workflows, and the confidence of proactive defense. Contact us today for a free consultation and take the first step towards a future where security is not a burden, but a strategic advantage."
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

export default SecurityAutomation;



