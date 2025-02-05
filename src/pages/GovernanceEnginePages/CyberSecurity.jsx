
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

function CyberSecurity() {
    const descriptionItems = [
        "Ampcus Cyber’s Cyber Security Insurance Support service helps you navigate complex insurance policies, optimize your coverage, and ensure you’re prepared to maximize benefits in the event of a cyberattack. We empower you to minimize financial risk and focus on recovery.."
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
            label: "Risk Assessment and Coverage Analysis",
            content:
                "Conduct a thorough risk assessment to identify potential cyber threats and analyze insurance coverage to ensure alignment with your organization’s needs.",
        },
        {
            label: "Policy Customization",
            content:
                "Tailoring cyber crisis insurance policies to address the specific risks and vulnerabilities unique to your industry, ensuring comprehensive coverage.",
        },
        {
            label: "Claims Advisory and Management",
            content:
                "Providing guidance and support throughout the claims process, from initial filing to settlement, to ensure a smooth and efficient experience.",
        },
        {
            label: "Regular Policy Review",
            content:
                "Cyber threats evolve, and so should your insurance coverage. We conduct regular reviews to ensure that your policies remain aligned with emerging risks and industry changes.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Policy Review & Gap Analysis', content: 'We dissect your policy with a keen eye, identifying potential coverage gaps and ensuring you’re claiming every available benefit.' },
        { label: 'Claims Preparation & Optimization', content: 'We help you build a rock-solid case, gathering vital evidence, documenting losses, and crafting a compelling narrative that maximizes your claim value.' },
        { label: 'Expert Negotiation & Advocacy', content: 'We stand strong at your side, confidently negotiating with your insurer to secure the full and fair compensation you’re entitled to.' },
        { label: 'Post-Claim Guidance & Rebuilding', content: 'We stay alongside you even after the settlement, helping you navigate post-breach recovery, risk mitigation strategies, and potential policy renewals.' },
      
      ];
      
    return (
        <>
            <SubPageHero
                title="Cyber Security Insurance Support"
                subtitle="Maximize Coverage. Minimize Risk."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Coverage: Navigate the Cyber Breach Storm with Ampcus Cyber’s Crisis Insurance Support"
                subtitle=""
                description1="In today’s digital world, a cyber-breach isn’t just a technical glitch – it’s a potential tsunami, threatening to engulf your data, reputation, and finances. While cyber insurance offers a financial lifeline, navigating the claims process and maximizing your coverage can be a treacherous journey. That’s where Ampcus Cyber’s Cyber Crisis Insurance Support steps in, your expert Sherpas guiding you through the storm to secure the compensation you deserve."
                description2="We’re not insurance jargon translators. We’re cyber breach veterans, intimately familiar with the complexities of cyber insurance policies and the nuances of claims handling. We collaborate with you and your insurer, becoming your trusted advisor, and advocating for your best interests every step of the way."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we navigate the stormy seas of cyber insurance claims"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Cyber Crisis Insurance Support" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Cyber Crisis Insurance Support isn’t just about getting a payout – it’s about peace of mind. It’s about minimizing disruption, maximizing your insurance ROI, and emerging from the crisis stronger, faster, and wiser.

Don’t be swept away by the cyber breach flood. Let Ampcus Cyber be your guide to secure shores.

Contact us today for a free consultation and discover how we can ensure your cyber insurance becomes your most valuable weapon in the face of a digital storm."
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

export default CyberSecurity;







