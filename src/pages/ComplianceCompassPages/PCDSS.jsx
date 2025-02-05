



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
import image1 from '../../../src/image/bgimage.jpg'


function PCDSS() {
    const descriptionItems = [
        "Meeting the rigorous requirements of PCI DSS can be challenging. Ampcus Cyber streamlines your path to compliance with our expert-led PCI DSS Certification services. We go beyond basic assessments, helping you not only achieve PCI compliance, but also build a robust security framework to secure cardholder data. Partner with us to safeguard your data, build trust and stay ahead of evolving cyber threats."
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
            description: 'Our experts conduct a thorough assessment to identify compliance gaps in your current systems. We review policies, procedures, and technical controls to outline a clear roadmap for achieving compliance.',
        },
        {
            icon: 'fas fa-chart-line', // FontAwesome icon class
            title: 'Risk Assessment & Mitigation ',
            description: 'We perform a comprehensive risk assessment, pinpointing vulnerabilities and recommending practical, customized solutions to mitigate risks to cardholder data.',
        },
        {
            icon: 'fas fa-road', // FontAwesome icon class
            title: '  Policy and Procedure Development ',
            description: 'PCI DSS compliance requires robust documentation. We help you develop and implement policies and procedures that meet PCI DSS standards and are easy to maintain.',
        },
        {
            icon: 'fas fa-road', // FontAwesome icon class
            title: ' Vulnerability Scanning & Penetration Testing ',
            description: 'Regular vulnerability scanning and penetration testing are essential for PCI DSS compliance. Our team conducts these tests, identifying potential weak points and ensuring that your network remains secure from external threats.',
        },
        {
            icon: 'fas fa-road', // FontAwesome icon class
            title: ' Audit Preparation and Support ',
            description: 'Preparing for a PCI DSS audit can be overwhelming. We offer audit preparation and support, ensuring your documentation, systems, and procedures align with PCI DSS requirements for a seamless audit experience.',

        },
        {
            icon: 'fas fa-road', // FontAwesome icon class
            title: 'Continuous Monitoring and Maintenance   ',
            description: 'PCI DSS compliance isn’t a one-time event; it requires ongoing vigilance. We offer continuous monitoring and maintenance to help you stay compliant year-round, minimizing risks and ensuring your environment remains secure.',

        },
    ];


    const faqData = [
        {
            question: "What is PCI DSS?",
            answer: "The Payment Card Industry Data Security Standard (PCI DSS) is a critical security standard designed to protect cardholder data and reduce the risk of fraud. If your business processes, stores, or transmits credit card information, achieving and maintaining PCI DSS compliance is essential",
        },
        {
            question: " Why Choose Our PCI DSS Compliance Services?",
            answer: "We specialize in guiding businesses of all sizes through the complex PCI DSS requirements, ensuring your organization remains compliant, secure, and prepared for audits. Our experienced team of cybersecurity professionals will work with you at every step to simplify compliance while strengthening your security posture.   "

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
            label: "Proven Expertise",
            content:
                "With years of experience in cybersecurity compliance, our specialists bring in-depth knowledge of PCI DSS standards and best practices to ensure your business is fully compliant and protected.",
        },
        {
            label: "Tailored Solutions",
            content:
                "We understand that every business has unique needs. Our team designs customized compliance solutions, balancing your security needs with the practical realities of your organization.",
        },
        {
            label: "End-to-End Support ",
            content:
                "From initial assessment to audit completion, we provide support at every stage, helping you navigate the complexities of PCI DSS compliance with ease.",
        },
    ];


    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
    return (
        <>
            <div className=" h-full w-full bg-black bg-cover bg-center " />
            <SubPageHero
                title="PCI DSS Compliance Services"
                subtitle="Simplify the Journey, Strengthen Your Data Security Posture…!"
                descriptionItems={descriptionItems}
                ctaText="Get Started Today"
                formFields={formFields}
            />





            <CarouselWithText
                title="Comprehensive PCI DSS Services"
                description="Our end-to-end PCI DSS services cover every aspect of compliance, from assessment to certification."
                cards={cardsData}
            />

            {/* Why Choose Section */}

            {/* Dynamic Section for Heading and Subheading */}
            <DynamicCardComponent title="Why Choose Ampcus Cyber As Your PCI QSA?" items={items} />







            {/* Carousel Component */}



            <ContactCard
                title="Get Started with PCI DSS Compliance"
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

export default PCDSS;



