

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

function CyberCrisis() {
    const descriptionItems = [
        "Ampcus Cyber’s Cyber Crisis Simulation service puts your incident response plan to the test, exposing vulnerabilities and helping you refine your response strategies to minimize damage and ensure a swift recovery from cyberattacks."
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
            label: "Customized Simulation Design",
            content:
                "Crafting realistic cyber crisis scenarios that align with your organizational risks, allowing your teams to practice responses to situations they may encounter in the real world.",
        },
        {
            label: "Team Training and Collaboration",
            content:
                "Fostering collaboration among your teams through simulated crises, ensuring that everyone understands their roles and responsibilities in the event of a cyber-emergency.",
        },
        {
            label: "Post-Simulation Analysis",
            content:
                "Comprehensive analysis after each simulation, providing valuable insights into strengths, weaknesses, and areas for improvement in your organization’s crisis response capabilities.",
        },
        {
            label: "Strategic Recommendations",
            content:
                "Translating simulation findings into strategic recommendations, helping you enhance your cybersecurity posture and fortify your defenses against future crises.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Bespoke Scenario Crafting', content: 'We delve deep into your threat landscape, building customized simulations that mirror your industry, size, and potential attack vectors. It’s your crisis, tailor-made for maximum impact.' },
        { label: 'Immersive & Interactive Environment', content: 'We recreate the pressure cooker of a cyberattack, immersing your team in a dynamic, evolving scenario that tests their decision-making, communication, and crisis management skills under a digital microscope.' },
        { label: 'Real-Time Feedback & Coaching', content: 'Our cyber veterans stand beside you, offering expert guidance and actionable insights as your team navigates the flames. We don’t just point out mistakes; we equip them with the skills to overcome them.' },
        { label: 'Continuous Improvement & Adaptation', content: 'Cybersecurity is a constant chess match. We help you analyze the simulation results, identify weak points, and continuously refine your response plans to stay ahead of the ever-evolving threat landscape.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Cyber Crisis Simulation Services"
                subtitle="Test Your Defenses & Refine Your Response."
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Paper Drills: Establish Cyber Resilience with Ampcus Cyber’s Cyber Crisis Simulations"
                subtitle=""
                description1="In today’s digital era, a crisis isn’t confined to physical walls. A single cyberattack can unleash a firestorm, engulfing your reputation, finances, and operations. Preparedness isn’t just a box to tick; it’s a muscle forged in the crucible of reality. That’s where Ampcus Cyber’s Cyber Crisis Simulations come in, your digital boot camp transforming paper plans into ironclad resilience."
                description2="We’re not armchair crisis theorists. We’re cyber gladiators, crafting hyper-realistic simulations that thrust your team into the heart of a digital wildfire. We tailor each scenario to your unique vulnerabilities, injecting real-world pressure and unexpected twists to expose cracks in your armor and reveal the true heroes within."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we build your team into cyber crisis champions"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Cyber Crisis Simulation" items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Cyber Crisis Simulations isn’t just about surviving an attack – it’s about thriving in the face of adversity. It’s about building a culture of preparedness, confidence, and resilience that ensures your organization emerges from any digital crisis stronger than ever.

Don’t wait for the real crisis to test your mettle. Make your team’s cyber resilience today.

Contact Ampcus Cyber for a free consultation and discover how we can craft your personalized cyber crisis simulation."
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

export default CyberCrisis;







