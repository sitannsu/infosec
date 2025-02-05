
import TrainingHero from '@/component/TrainingHero';
import bgImage from '../../image/bgimage.jpg'; 
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
const sampleLeftContent = (
<div className="">
  <div className="flex items-center mb-4 bg-white p-4 rounded-lg">
    {/* Heading */}
    <h2 className="text-3xl font-bold">
      Certify as a Payment Security Compliance Manager with CPSCM Workshop
    </h2>
    {/* Image */}
    <img src={bgImage} alt="Workshop Image" className="ml-4 w-24 h-24 object-cover rounded-lg shadow-lg" />
  </div>
  
  {/* Paragraph */}
  <p className="text-black mb-6">
    Join our CPSCM Workshop for comprehensive training on the entire PCI DSS Suite including PCI DSS, PCI PIN, PCI 3DS, PCI SAQ, UPI, Mobile Wallets and beyond.   
    </p>
    <h2 className="text-3xl font-bold">
    Certified Payment Security Compliance Manager (CPSCM)
    </h2>
    <p className="text-black my-4">
    This comprehensive workshop shapes professionals to unlock expertise in payment security compliance. Secure your role as a leader in the evolving landscape of payment security.  
    </p>
</div>

);

const CPSCM = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked!");
};
const securityTabsData = [
    { label: 'Day 1', content: "" },
    { label: 'Day 2', content: "" },
    { label: 'Day 3', content: '' },
    { label: 'Day 4', content: '' },

  ];
  const Datacards = [
    {
      title: 'Real-Time Endpoint Activity Monitoring',
      content: 'You will learn from experienced instructors who are experts in payment security compliance.'
    },
    {
      title: 'Advanced Threat Detection with Machine Learning',
      content: 'You will have the opportunity to network with other professionals in payment security compliance'
    },
    {
      title: 'Automated Data Collection and Correlation',
      content: 'You will receive access to the latest resources and information on payment security compliance.'
    },
   
  ];
  const principles = [
    {
      icon: identityicon,
      title: '01 Building the Foundation',
      description: 'Dive into the background and evolution of the payment industry, understanding the intricacies of payment transaction flows, and exploring the roles and responsibilities of entities within the payment ecosystem. Get acquainted with the various form factors for payment and payment channels, staying up to date with the latest changes in PCI DSS v4.0.',
    },
    {
      icon: identityicon,
      title: '02 Understanding the PCI Suite of Standard',
      description: 'Delve into the details of PCI DSS requirements, from data discovery to compensating controls. Explore synergized compliance approach and gain insights into the broader suite of payment standards beyond PCI DSS, including PCI PIN, PCI 3DS, PCI P2PE, PCI CP, SSF, and SWIFT.',
    },
    {
      icon: identityicon,
      title: '03 Emerging Payment Technologies',
      description: 'Uncover the intricacies of SWIFT, UPI, Mobile Payments, QR Codes, and Contactless Payments. Learn their architectures, security measures, transaction flows, and global adaptability, ensuring a comprehensive understanding of the diverse landscape of modern payment technologies.',
    },
    {
      icon: identityicon,
      title: '04 Maintaining Compliance',
      description: 'Grasp the nuances of maintaining compliance, the frequency of activities for PCI DSS annual revalidation, and the crucial aspects of report review. Explore the PCI DSS resources and knowledge library, culminating in a practical case study to reinforce your understanding.',
    },
  ];
  return (
    <>
      <TrainingHero
      bgImage={bgImage}
      leftContent={sampleLeftContent}
      courseFeeDetails={[
        { amount: 130, label: 'REGULAR PARTICIPANTS' },
        { amount: 100, label: 'ISACA & ISC2 MEMBER' },
        { amount: 80, label: 'RETURNING PARTICIPANTS' },
      ]}
      formTitle="Fill the form to Register!"
      formFields={[
        { type: 'text', placeholder: "Participant's Name" },
        { type: 'text', placeholder: 'Organization Name' },
        { type: 'text', placeholder: 'Designation' },
        { type: 'email', placeholder: 'Email Address' },
        { type: 'text', placeholder: 'Country' },
        { type: 'tel', placeholder: 'Phone Number' },
      ]}
      batchDetails={[
        'APAC Batch: Dec 16th – Dec 19th 2024 (6:00 AM – 10:00 AM GMT)',
        'US & Europe: Dec 2nd – Dec 5th 2024 (1:00 PM – 5:00 PM GMT)',
      ]}
      CPSCMFees={[
        'Regular Participant – USD $130',
        'ISACA/ISC2 Member/ Clients – USD $100',
       " Returning Participants/Clients – USD $80"
      ]}
      consentText="I consent to the use of my information by Ampcus Cyber, Credly, and their partners for training preparation, follow-ups, CPE verification/confirmation, certification, and related activities."
      buttonText="SUBMIT"
    />
  
      <HeroSection
                title=""
                subtitle=""
                description1="In an ever-evolving digital landscape, the security of payment transactions is of paramount importance. As the number of cyberattacks targeting payment data increases, the demand for payment security compliance professionals who can help organizations protect this data is also increasing. The Certified Payment Security Compliance Manager (CPSCM) training program is meticulously designed to empower security professionals with the knowledge and skills necessary to navigate the complexities of the payment industry and ensure robust security measures. CPSCM, a True Payment Security Workshop covering the security & compliance around all Digital Payments – Certified Payment Security Compliance Manager (CPSCM). A Training beyond the learning of PCI DSS, but the entire PCI Suite of compliances (PCI DSS, PCI PIN, PCI 3DS, PCI P2PE, PCI SSF, PCI SAQ, etc.) including various forms of payment and payment channels (Cards, UPI, Mobile Wallets, QR Codes, Payment Gateways, Internet Banking, Palm Payments, and more)."
                description2=""
                imageSrc={gengine1}
                primaryButtonText="Get Started"
                secondaryButtonText="Learn More"
                onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
                onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
            />
              <div>
      {/* Common Heading */}
      <h2 className="text-2xl font-bold text-center my-8">
      What to Expect from Certified Payment Security Compliance Manager Training Program?
      </h2>
      <p className='text-base  text-center my-8 mx-auto'> The CPSCM certification demonstrates that you have the knowledge and skills to help organizations comply with the Payment Card Industry Data Security Standard (PCI DSS) and understand various other forms of payment and payment channels.</p>

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
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Why CPSCM Training Program Is Important?</h2>
      <p className="mb-4">
        In the dynamic landscape of the payment industry, the Certified Payment Security Compliance Manager (CPSCM) training program emerges as an essential asset for professionals seeking to thrive in this complex domain. Here’s why CPSCM is vital for participants:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Comprehensive Understanding:</strong> CPSCM provides participants with a comprehensive understanding of the payment industry’s intricacies, covering everything from the evolution of payment methods to the latest standards like PCI DSS v4.0.
        </li>
        <li>
          <strong>Risk Mitigation and Compliance:</strong> By combining risk assessment methodologies and in-depth discussions on control requirements, participants gain the expertise to implement robust security measures. This knowledge is crucial for mitigating risks and ensuring compliance in an ever-evolving regulatory landscape.
        </li>
        <li>
          <strong>Adaptability to Emerging Technologies:</strong> The program goes beyond traditional payment methods, delving into emerging technologies such as mobile payments, QR codes, and contactless payments. This knowledge is essential for professionals who need to stay ahead of the curve in a rapidly changing industry.
        </li>
        <li>
          <strong>Industry-Relevant Insights:</strong> Led by industry experts, CPSCM offers insights into the roles and responsibilities of entities within the payment ecosystem. Participants gain practical knowledge that is directly applicable to their professional roles, making them valuable assets to their organizations.
        </li>
        <li>
          <strong>Global Perspective:</strong> Understanding the global adaptability of payment technologies is crucial in today’s interconnected world. CPSCM equips participants with insights into different payment channels, ensuring they can navigate the complexities of both local and international payment ecosystems.
        </li>
        <li>
          <strong>Practical Application:</strong> CPSCM doesn’t just impart theoretical knowledge; it includes case studies and discussions from a Qualified Security Assessor (QSA) standpoint. This practical application ensures participants are not only well-versed in theory but also equipped to apply their knowledge in real-world scenarios.
        </li>
      </ul>
      <p className="mb-4">
        In essence, CPSCM is not just a payment security training program; it’s a transformative experience that equips participants with the skills, knowledge, and confidence to navigate the complexities of payment security and compliance successfully.
      </p>
    </div>
       <FourCardSection
        title="Benefits of Joining CPSCM (Certified Payment Security Compliance Manager)"
        cards={Datacards}
      />
         <DynamicCardWithImage
                imageSrc="https://example.com/image.jpg"
                title="Who Should Attend?"
                description="CPSCM is designed for a diverse audience – whether you’re a seasoned IT professional, a security analyst, or someone with a keen interest in cybersecurity. This workshop caters to all skill levels, offering a progressive learning path that benefits both beginners and experienced practitioners looking to upskill and stay at the forefront of cybersecurity trends. The CPCSM certification will give you the skills you need to manage a payment security program. The course will teach you how to develop, implement, and maintain a comprehensive payment security program. This will help you protect your organization’s payment data from unauthorized access, use, or disclosure."
            />
                 <GovernanceEngineTabs
        title="What will you learn over 4 days in Certified Payment Security Compliance Manager (CPSCM) Workshop?"
        subtitle=""
        tabs={securityTabsData}
      />

            <ContactCard
                title=""
                subtitle=""
                description="The Certified Payment Security Compliance Manager (CPSCM) certification is a valuable credential for anyone who wants to work in payment security compliance. The skills acquired in this workshop will not only fortify your career in payment security but will also position you as a key player in safeguarding the digital world. So, are you ready to become a Certified Payment Security Compliance Manager? Join our CPSCM Workshop Today! Don’t miss out on this opportunity to elevate your cybersecurity skills. Register for the CPSCM Workshop today and secure your spot in a transformative learning experience."
                // email="contact@example.com"
                buttonText="Register Now"
                onButtonClick={handleContactClick}
            />
    </>
  
    
    
  );
};

export default CPSCM;
