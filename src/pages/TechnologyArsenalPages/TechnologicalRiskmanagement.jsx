// import React from 'react'

// const TechnologicalRiskmanagement = () => {
//     return (
//         <div>TechnologicalRiskmanagement</div>
//     )
// }

// export default TechnologicalRiskmanagement


import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import HeroDynamic from "@/component/HeroDynamic";
import CyberSecurityCarousel from "@/component/CyberSecurityCarousel";
import TabContent from "@/component/TabContent";
import b2 from "../../../public/img/b1.jpg"
import b1 from "../../../public/img/b1.jpg"
import insurance from "../../../public/img/insurance1.png"
import process from "../../../public/img/process1.png"
import timeline from "../../../public/img/timeline1.png"
import vendor from "../../../public/img/vendor1.png"
import TestimonialsSection from "@/component/Testimonial";
import ComplianceSection from "@/component/ComplainceSection";
import LogoSection from "@/component/LogoSection";
import Locations from "@/component/Location";
import GetStarted from "@/component/GetStarted";
import LatestBlog from "@/component/LatestBlog";
import image1 from '@/image/bgimage.jpg'
import ButtonSolutions from "@/component/ButtonSolution";
import DynamicCardComponent from "@/component/ChooseSection";
import ContactCard from "@/component/CardDynamic";
import WhyChooseAZInfosec from "@/component/WhyChooseUs";
export function TechnologicalRiskmanagement() {
    const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

    // Define tab data with the image and compliance list for each tab
    const tabData = [
        {
            title: "Compliance ",
            content: "Cyber security compliance are becoming mandatory norms it helps to gain the customer trust and enhance the business reputation",
            imageSrc: { b1 }, // Update with actual image path
            complianceItems: [
                "PCI DSS",
                "Global Security Compliance",
                "PCI 3DS",
                "PCI P2PE",
                "PCI CP",
                "PCI SSF",
                "Facilitated PCI SAQ",
                "ISMS - ISO/IEC 27001",
                "PIMS - ISO/IEC 27701",
                "BCMS - ISO/IEC 22301",
                "SOC 1 and SOC 2",
                "HITRUST",
                "NIST CSF Implementation",
                "ISA 62443",
                "Synergized Compliance Model",
                "SWIFT CSF",
                "CISA Cybersecurity Maturity Model Certification"
            ]

        },
        {
            title: "Governance and Risk ",
            content: "Our Governance and Risk services are designed to address the complexities of security governance and risk management. Backed by decades of expertise, we’ve crafted a service portfolio that not only draws on our team's deep knowledge but also prioritizes practical solutions for real-world business challenges.We bridge the gap between compliance and operational ease, empowering your organization to confidently navigate risks while maintaining robust governance practices.",
            imageSrc: { b2 },
            complianceItems: ["Security Architecture Review",
                "Risk Assessment & Management",
                "Governance Framework Development",
                "Security Program Maturity Assessment & Improvement",
                "Security Policy & Strategy Development",
                "Third Party Risk Management",
                "Data Governance",
                "Metrics & Reporting",
                "Incident Response Planning",
                "Cyber Crisis Simulation",
                "Cyber Security Insurance Support",
                "ICS Security",
                "Cybersecurity Forensics and Incident Response Investigations",
                "Cloud Security",
                "Virtual/Shared CISO as a Service",
                "DPO as a Service",
                "Data Privacy Impact Assessment"]
        },
        {
            title: "Technological Risk Management:",
            content: " Technology is a powerful enabler, but without safeguards, it can become a risk. At AZ Infosec, we ensure your technology remains a blessing, not a burden",
            imageSrc: { b2 },
            complianceItems: ["Network Architecture Review",
                "Network Vulnerability Assessment & Penetration Testing",
                "Web Application Vulnerability Assessment & Penetration Testing",
                "Mobile Application Vulnerability Assessment & Penetration Testing",
                "Advanced Penetration Testing",
                "Configuration Management & Hardening",
                "Vulnerability Remediation Guidance",
                "Compliance Focused Assessments - PCI DSS, GDPR & HIPAA",
                "Red Team Assessment",
                "Purple Team Assessment",
                "Wireless Security Assessment",
                "Social Engineering Testing",
                "IoT Security Assessment",
                "Cloud Security Assessment",
                "Source Code Review",
                "Threat Modelling",
                "Attack Surface Analysis",
                "DevSecOps",
                "Ransomware Simulation & Assessment"]
        },
        {
            title: "Managed Risk",
            content: " Finding skilled security professionals is no easy task, especially in today’s competitive cybersecurity landscape. The shortage of qualified talent makes the challenge even greater.",
            imageSrc: { b2 },
            complianceItems: ["Data Leakage Prevention",
                "Identity & Access Management",
                "SIEM",
                "XDR",
                "Data Discovery",
                "Web Application Firewall",
                "Governance, Risk & Compliance",
                "Endpoint Detection & Response",
                "Data Encryption Solutions",
                "Threat Intelligence Management",
                "Secure DevOps & Application Security",
                "Mobile Device Management",
                "DDoS Protection",
                "Security Training & Awareness",
                "Platform Security",
                "Automation and Orchestration (SOAR)"]
        },

    ];
    const handleTabClick = (index) => {
        setActiveTab(index); // Update active tab on click
    };

    const complianceSolutions1 = [
        { label: "PCI DSS", path: "/pcdss" },
        { label: "Global Security Compliance", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        "Global Security Compliance",
        "PCI 3DS",
        "PCI P2PE",
        "PCI CP",
        "PCI SSF",
        "Facilitated PCI SAQ",
    ];
    const tabs = [
        {
            label: "Network Security",
            content: [
                <span><strong></strong>AZ Infosec takes a hands-on approach to network security testing. Through penetration testing, we simulate real-world cyberattacks to identify weak links and fortify your defenses against potential breaches.</span>,

            ]
        },
        {
            label: " Application Security  ",
            content: [
                <span><strong></strong>Our comprehensive assessment pinpoints potential vulnerabilities before they become threats, providing a proactive defense against cyber adversaries.We understand that one size doesn’t fit all. Our tailored solutions cater to your unique business environment, ensuring that your cybersecurity strategy is as individual as your fingerprint.</span>,

            ]
        },
        {
            label: "Operational Security  ",
            content: [
                <span><strong></strong> We move security left, making it an inseparable partner in every development stage. Integrated threat modeling, automated security tooling, and continuous code reviews become part of the development rhythm, identifying and eliminating vulnerabilities before they can disrupt performance.</span>,

            ]
        },

        {
            label: "Advanced Security Testing",
            content: [
                <span><strong></strong>No More Blind Spots. We step into the shoes of your adversaries, immersing ourselves in their dark underbelly. We understand their tools, their tactics, their hunger for your data. This intimate understanding allows us to anticipate their moves, predict their attacks, and ultimately, outsmart them at their own game.</span>,

            ]
        },

        {
            label: "Compliance & Cloud Security",
            content: [
                <span><strong></strong> Our team boasts diverse expertise across PCI DSS, GDPR, and HIPAA, ensuring a comprehensive understanding of each framework.We craft personalized solutions, recognizing the unique requirements of each organization, providing precision-crafted compliance strategies.</span>,
                <span><br /><strong></strong>We prepare your cloud for the digital tempest, simulating real-world attack vectors to test your defenses against evolving threats. Our assessments ensure your cloud remains a secure haven, even amidst the darkest cyber storms.</span>,

            ]
        },
        {
            label: "Emerging Threats",
            content: [
                <span><strong></strong>The digital landscape shimmers with opportunity, but beneath its inviting surface lurks a constant shadow: the threat of attack. Hackers, like digital specters, probe and prod, searching for the chink in your armor, the vulnerability that could bring your world crashing down. Utilize AZ Infosec’s Threat Modeling: tactical intelligence unit, shedding light on potential vulnerabilities before they become exploited.</span>,

            ]
        },
    ];
    const items = [
        {
            image: "https://via.placeholder.com/50", // Replace with actual image URL
            text1: "1800 +",
            text2: "Business Certified",
        },
        {
            image: "https://via.placeholder.com/50", // Replace with actual image URL
            text1: "2000+",
            text2: "Projects Completed",
        },
        {
            image: "https://via.placeholder.com/50", // Replace with actual image URL
            text1: "18+",
            text2: "Global Presence",
        },
    ];
    const blogs = [
        {
            image: "/path-to-image1.jpg",
            title: "Introduction to Managed Detection and Response (MDR)",
            description: "Managed Detection and Response (MDR) is your all-in-one solution for cybersecurity.",
            link: "#"
        },
        {
            image: "/path-to-image2.jpg",
            title: "Digital Operational Resilience Act (DORA): A Comprehensive Guide",
            description: "Understanding the DORA Act for enhanced cybersecurity compliance.",
            link: "#"
        },
        {
            image: "/path-to-image3.jpg",
            title: "Comprehensive Guide to the NIS 2 Directive",
            description: "Key changes, compliance requirements, and implications.",
            link: "#"
        }
    ];



    const itemstab = [
        {
            image: insurance,
            title: "",
            description:
                "Expertise in handling diverse industries and regulatory frameworks.",
        },
        {
            image: process,
            title: "",
            description:
                "Advanced tools and methodologies for thorough testing and risk mitigation.",
        },
        {
            image: vendor,
            title: "",
            description:
                "Tailored recommendations and actionable insights for enhanced security.",
        },


    ];
    return (
        <>







            <div className="relative flex min-h-[60vh] sm:min-h-[80vh] lg:min-h-[calc(100vh-64px)] items-center justify-center bg-cover bg-[url('/img/img11.jpg')]">
                {/* Background Overlay */}
                {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" /> */}

                {/* Hero Content */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center relative z-10">
                    {/* Dynamic Section for Heading and Subheading */}
                    <HeroDynamic
                        heading={
                            <span className="text-[#fac21f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight font-heisman">
                                Technological Risk Management
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                Empowering your business to stay ahead of evolving cyber threats with cutting-edge risk management solutions. Our comprehensive services ensure resilience, compliance, and robust security across your technology ecosystem.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>


            <DynamicCardComponent title="Core Offerings" items={tabs} />




            <WhyChooseAZInfosec
                title="Why Choose Us?"
                subtitle=""
                items={itemstab}
            />





            {/* <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-4xl  font-bold mb-2 text-[#01012b]">Call to Action:</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-medium text-lg">Strengthen your organization's defenses against technological risks today. Contact Us for a detailed consultation or to schedule an assessment</p>
            </div> */}


            {/* Get Started */}
            <GetStarted
                image={image1}
                header="Ready To Get Started? We're Here To Help!"
                description="Empower your organization with expert cybersecurity solutions tailored to your specific needs."
                buttonText="Let's Talk"
                linkTo="/contactus"
            />

            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default TechnologicalRiskmanagement;