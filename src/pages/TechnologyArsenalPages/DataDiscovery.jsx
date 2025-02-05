


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

function DataDiscovery() {
    const descriptionItems = [
        "Manage Your Data. Ensure Compliance. Ampcus Cyber’s Data Discovery solutions unlock hidden data across your organization. We empower you to streamline data governance, ensure regulatory compliance, and mitigate data security risks."
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
            label: "Your Expert Navigators",
            content:
                "We’re not just technology providers; we’re your trusted data Sherpas, with the expertise to guide you through the most intricate data landscapes.",
        },
        {
            label: "Innovation as Our Compass",
            content:
                "We leverage the latest data discovery tools and techniques, ensuring you’re always equipped with the most cutting-edge solutions.",
        },
        {
            label: "Collaborative Voyage",
            content:
                "We treat your data journey as a shared adventure, working closely with your team to customize your path and seamlessly integrate with your existing infrastructure.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Data-Driven Decision Making', content: 'Navigate with confidence, utilizing precise metrics and predictive analytics to inform every strategic choice. No more flying blind – every decision shines with the clarity of data-driven insight.' },
        { label: 'Compliance in Your Sails', content: 'Ensure smooth sailing amidst evolving regulations. We help you identify and manage sensitive data, mitigating compliance risks and fostering a culture of responsible data governance.' },
        { label: 'Innovation Unbound', content: 'Empower your teams to tap into the infinite potential of your data. Foster a culture of data-driven collaboration, where insights fuel groundbreaking ideas and innovation becomes the very heartbeat of your organization.' },
       
      ];
      const Datacards = [
        {
          title: 'Uncharted Territories',
          content: 'We scour archived data lakes, dormant systems, and unexplored corners of your infrastructure, unearthing forgotten data gems that hold the key to unlocking new possibilities.'
        },
        {
          title: 'Untangling the Data Gordian Knot',
          content: 'We tackle data sprawl head-on, meticulously classifying and organizing your information into a readily accessible, comprehensible structure. No more wrestling with chaotic silos – your data becomes a meticulously curated library, ready to be explored and utilized.'
        },
        {
          title: 'Illuminating Hidden Connections',
          content: 'We’re the data whisperers, unearthing the subtle patterns and relationships buried within your information. With advanced analytics and AI, we reveal the correlations, trends, and anomalies that hold the seeds of groundbreaking insights and strategic decisions.'
        },
       
      ];
    return (
        <>
            <SubPageHero
                title="Data Discovery"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Illuminate the Shadows: Ampcus Cyber’s Data Discovery Service"
                subtitle=""
                description1="Your data is a vast ocean, teeming with valuable insights and untapped potential. Yet, beneath the surface lurks a hidden reality: chaos, redundancy, and missed opportunities. Navigating this digital expanse alone can be overwhelming, leaving you adrift in a sea of disconnected information. This is where Ampcus Cyber’s Data Discovery emerges as your trusted captain, charting a course to transform your data from a murky unknown into a shimmering sea of actionable intelligence."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
             <FourCardSection
        title="Deeper Than Mere Search"
        cards={Datacards}
      />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="From Insights to Impact"
        subtitle="Our data discovery journey doesn’t end at mere revelation.
We translate your newfound knowledge into tangible opportunities for empowerment and growth."
        tabs={securityTabsData}
      />
    </div>
   


            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber as Your Data Diving Partner? " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Ready to Navigate Your Data Odyssey and Unleash the Power of Information?"
                description="Don’t let hidden data assets remain in the shadows. Choose Ampcus Cyber’s Data Discovery and let us be your expert guide. We’ll navigate the labyrinth of your information landscape, unlocking its potential, optimizing your data utilization, and empowering you to weave a future where information drives every decision and fuels your organization’s success.

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

export default DataDiscovery;



