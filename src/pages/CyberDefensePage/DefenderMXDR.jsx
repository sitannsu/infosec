
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
import FunctionalPrincipleCard from '@/component/FunctionalPrincipleCard';
import identityicon from "../../image/identity.png"
import InfoCard from '@/component/InfoCardDynamic';
import bgimage from "../../image/11.jpg"
import defender from "../../image/defender.png"
function DefenderMXDR() {
    const descriptionItems = [
        "Ampcus Cyber’s Defender MXDR service offers comprehensive 24/7 monitoring, proactive threat detection, and swift incident response. Backed by advanced threat intelligence, real-time monitoring, and automated responses, we ensure your organization maintains a secure and compliant cybersecurity posture with rapid threat mitigation."
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


    const cardData = [
      {
        title: 'THREAT RESPONSE AND SECURITY INCIDENT MANAGEMENT',
        points: [
          { label: 'Proactive Threat Hunting', text: 'Identify threats across all network endpoints and layers.' },
          { label: 'Incident Response Management', text: 'Manage incidents with predefined SLAs and escalation procedures.' },
          { label: 'Event Analysis', text: 'Correlate events from critical assets like firewalls and servers.' },
          { label: 'Incident Containment', text: 'Perform eradication and recovery actions to contain threats.' },
        ],
      },
      {
        title: 'CONTINUOUS MONITORING AND LOGGING',
        points: [
          { label: '24/7 Monitoring', text: 'Continuously monitor network traffic, system logs, and security events.' },
          { label: 'Real-Time Alerts', text: 'Generate and notify alerts in real-time.' },
          { label: 'Comprehensive Logging', text: 'Maintain detailed audit trails to ensure compliance and efficiency.' },
          { label: 'Comprehensive Logging', text: 'Maintain detailed audit trails to ensure compliance and efficiency.' },
        ],
      },
      {
        title: 'Advanced Threat Intelligence and Analysis',
        points: [
          { label: 'Threat Intelligence Integration:', text: 'Identify and analyze emerging threats.' },
          { label: 'Vulnerability Scanning', text: 'Perform early detection of potential risks.' },
          { label: 'Continuous Improvement', text: 'Conduct regular reviews and updates.' },
          { label: 'Detailed Analysis', text: 'Provide actionable insights and recommendations through thorough incident analysis.' },
        ],
      },
   
      {
        title: 'Reporting and Documentation',
        points: [
          { label: 'Security Reports', text: ' Generate detailed monitoring reports.'},
          { label: 'Incident Documentation', text: 'Document incident responses and investigation outcomes.' },
          { label: 'Regular Reporting', text: ' Provide monthly and weekly security summaries.' },
          { label: 'Custom Dashboards', text: ' Tailored insights and reports to meet your business needs.' },
        ],
      },
      {
        title: 'Governance and Compliance',
        points: [
          { label: 'Monthly Governance Calls', text: 'Partnering with your incident management teams to ensure seamless coordination and continuous improvement.' },
          { label: 'Regulatory Compliance', text: 'Ensure alignment with legal requirements and industry standards.' },
          { label: 'SLA Management', text: ' Conduct regular reviews to ensure service quality' },
        ],
      },
      {
        title: 'AI-Powered Threat Detection and Analysis',
        points: [
          { label: 'Automated Detection', text: ' Utilize AI to identify and prioritize threats.' },
          { label: "User and Entity Behavior Analytics (UEBA)", text: 'Monitor user and entity behavior for unusual activities.' },
          { label: 'Predictive Threat Modeling', text: 'Forecast potential threats using machine learning.' },
        ],
      },
      
      {
        title: 'Automated Incident Response and Orchestration',
        points: [
          { label: 'Predefined Responses', text: 'Use incident response playbooks for common security incidents.' },
          { label: 'Tool Orchestration', text: 'Automate responses to detected threats.' },
          { label: 'Self-Healing Mechanisms', text: ' Automatically remediate affected systems.' },
        ],
      },
      {
        title: 'Enhanced Threat Intelligence Integration',
        points: [
          { label: 'Real-Time Updates', text: 'Continuously update threat intelligence sources.' },
          { label: 'Dark Web Monitoring', text: ' Early detection of threat indicators.' },
          { label: 'Advanced Correlation', text: 'Detect sophisticated multi-vector attacks.' },
        ],
      },
      {
        title: 'Zero Trust Architecture Implementation',
        points: [
          { label: 'Continuous Authentication', text: ' Employ MFA and dynamic access controls.' },
          { label: 'Micro-Segmentation', text: ' Prevent lateral movement of threats' },
          { label: 'Policy-Based Access Controls', text: ' Enforce strict access policies based on user roles and device health.' }
        ],
      },
    ];
    



    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
   
     
      const principles = [
        {
          icon: identityicon,
          title: 'IDENTIFY SECURITY THREATS',
          description: 'Proactively detect and mitigate cybersecurity threats to prevent breaches.',
        },
        {
          icon: identityicon,
          title: 'INCIDENT MANAGEMENT',
          description: 'Efficiently manage and escalate incidents using state-of-the-art tools and methodologies.',
        },
        {
          icon: identityicon,
          title: 'CONTINUOUS IMPROVEMENT',
          description: 'Regularly enhance SOC operations to reduce threat detection latency.',
        },
        {
          icon: identityicon,
          title: 'REGULATORY COMPLIANCE',
          description: 'Ensure full compliance with regional regulations and standards.',
        },
      ];
    return (
        <>
            <SubPageHero
                title="Defender MXDR (Managed Extended Detection and Response) – Protect Your Digital Assets"
                subtitle=""
                descriptionItems={descriptionItems}
                // ctaText="Get Started Today"
                formFields={formFields}
            />


         
      
      
<div>
      {/* Common Heading */}
      <h2 className="text-2xl font-bold text-center my-8">
        Our Functional Principles: Detect | Manage | Improve | Compliance
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {principles.map((principle, index) => (
          <FunctionalPrincipleCard
            key={index}
            icon={principle.icon}
            title={principle.title}
            description={principle.description}
          />
        ))}
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Tailored Integration of Defender MXDR with Your Cybersecurity Framework</h2>
      <p className="mb-8 text-gray-600">
        At Ampcus Cyber, we specialize in customizing our MXDR services to seamlessly integrate with your organization’s existing
        cybersecurity infrastructure. Our tailored approach ensures that MXDR complements and enhances your current cyber defenses
        by optimizing your security framework.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <InfoCard key={index} title={card.title} points={card.points} />
        ))}
      </div>
    </div>

    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16" 
      style={{ backgroundImage: `url(${bgimage})` }} 
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="md:w-3/5 w-full p-6 bg-white bg-opacity-80 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-4">Why is Defender MXDR the right choice for your organization?</h2>
          <p className="text-gray-700">
          24/7 SOC Hotline: Ensures round-the-clock support for all security incidents, minimizing potential damage and downtime.<br/>
Mobile App for Real-Time Monitoring: Get real-time updates and notifications, incident data and SOC insights enabling swift decision-making in response to the evolving cyber threats.<br/>
Customized PowerBI Dashboard: Visualize security data for in-depth analysis and actionable insights customized to your requirement<br/>
Roadmap to Improve Security Posture: Continuous improvement and adaptation of your organization’s security measures for long-term resilience against cyberattacks.<br/>
Regular Security Audits & Assessments: Evaluate cybersecurity measures periodically with detailed reports to address gaps and maintain compliance with regulatory requirements.<br/>
Seamless Transition and Skilled Team: Experience a smooth migration from existing SOC services with minimal service disruption. Our team is comprised of experts with experience in cybersecurity and SOC operations, backed by continuous training and certifications.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-2/5 w-full p-6 flex justify-center">
          <img src={defender} alt="Section visual" className="rounded-md shadow-lg max-w-full" /> {/* Replace with your image path */}
        </div>
      </div>
    </div>
            {/* Carousel Component */}

        

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

export default DefenderMXDR;



