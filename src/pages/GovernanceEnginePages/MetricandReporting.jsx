

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

function MetricandReporting() {
    const descriptionItems = [
        "Ampcus Cyber’s Metrics & Reporting service empowers you to transform raw data into actionable insights, enabling data-driven decisions for improved security posture and optimized security investments."
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
            label: "Customized Dashboard Development",
            content:
                "Tailored dashboards that present key metrics and indicators in an intuitive and accessible manner, providing a comprehensive overview of your governance and risk landscape.",
        },
        {
            label: "Performance Metrics Tracking",
            content:
                "Monitoring and tracking performance metrics that matter most to your organization’s success, allowing you to measure the effectiveness of your governance and risk management strategies.",
        },
        {
            label: "Incident and Response Reporting",
            content:
                "Detailed reporting on incidents, breaches, and response times, facilitating a thorough understanding of your organization’s resilience in the face of emerging threats.",
        },
        {
            label: "Compliance Reporting",
            content:
                "Streamlining compliance reporting processes, ensuring that your organization stays ahead of regulatory requirements and industry standards.",
        },
      
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    const securityTabsData = [
        { label: 'Tailored Security Metrics', content: 'We identify the key performance indicators (KPIs) that matter most to your unique cyber threats and risk landscape, ensuring your resources are laser-focused on defense priorities.' },
        { label: 'Real-Time Visibility & Insights', content: 'We build dynamic dashboards and reports that offer a comprehensive, up-to-date view of your security posture, enabling proactive mitigation and informed decisions.' },
        { label: 'Actionable Storytelling', content: 'We don’t just show you the numbers; we translate them into clear, actionable insights, revealing trends, anomalies, and critical areas for immediate risk mitigation and vulnerability patching.' },
        { label: 'Continuous Improvement & Optimization', content: 'We believe in data-driven evolution, continually refining your metrics and reporting framework to adapt to your changing threat landscape and evolving security strategy.' },
      ];
      
    return (
        <>
            <SubPageHero
                title="Metrics and Reporting"
                subtitle="Transform Data into Actionable Insights"
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


            <HeroSection
                title="Beyond Checklists: Measure, Analyze, Secure with Ampcus Cyber’s Metrics & Reporting for Security Programss"
                subtitle=""
                description1="In today’s cyber battlefield, flaunting compliance certificates is like wielding a plastic sword. Your security program needs to be a razor-sharp shield, honed and optimized for maximum protection. But without clear, actionable metrics and reporting, you’re swinging blind, wasting resources, and exposing vulnerabilities.Governance and risk management aren’t just tick-boxes – they’re a compass steering your success. But without clear, actionable insights, your compass spins wild, leaving you lost in a sea of data. That’s where Ampcus Cyber’s Metrics & Reporting for Security Programs steps in, your expert armorers forging data-driven insights to transform your defenses from paper tigers to impregnable fortresses."
                description2="We’re not data dumpers. We’re security data alchemists, transforming technical jargon into powerful narratives that reveal the true health of your security posture. We go beyond vanity metrics, crafting bespoke dashboards and reports that pinpoint your strengths, expose weaknesses, and illuminate the path to continuous improvement."
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              {/* Governance EngineTabs */}
              <div>
      <GovernanceEngineTabs
        title="Here’s how we turn data into a Cyber Shield"
        tabs={securityTabsData}
      />
    </div>



            {/* Why Choose Section */}
            <DynamicCardComponent title="Services That Define Excellence in Metrics and Reporting " items={items} />


            {/* Carousel Component */}

            <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Connect with Us"
                description="Investing in Metrics & Reporting for Security Programs isn’t just about compliance – it’s about maximizing your security ROI. It’s about transforming data into actionable intelligence, empowering your team to make confident decisions, proactively manage risks, and optimize your security program for impenetrable defenses.

Ready to ditch the cyber blindfold and see your security posture with unwavering clarity?

Contact Ampcus Cyber today for a free consultation and discover how we can forge your data into the ultimate security shield."
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

export default MetricandReporting;



