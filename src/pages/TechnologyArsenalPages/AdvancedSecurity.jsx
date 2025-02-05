


















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
import TestimonialsSection from "@/component/Testimonial";
import ComplianceSection from "@/component/ComplainceSection";
import LogoSection from "@/component/LogoSection";
import Locations from "@/component/Location";
import GetStarted from "@/component/GetStarted";
import LatestBlog from "@/component/LatestBlog";
import image1 from '@/image/bgimage.jpg'
import ButtonSolutions from "@/component/ButtonSolution";
import ContactCard from "@/component/CardDynamic";
import DynamicCardComponent from "@/component/ChooseSection";
import GovernanceEngineTabs from "@/component/GovernanceEngineTab";
import insurance from "../../../public/img/insurance1.png"
import process from "../../../public/img/process1.png"
import timeline from "../../../public/img/timeline1.png"
import vendor from "../../../public/img/vendor1.png"
import CollapsibleSection from "@/component/CollapsibleSection";
export function AdvancedSecurity() {
    const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

    // Define tab data with the image and compliance list for each tab
    const tabData = [
        {
            title: "PIMS - ISO/IEC 27701 Compliance",
            content: " PIMS - ISO/IEC 27701 Compliance Strengthen your Privacy Information Management System (PIMS)Our team guides you through achieving ISO/IEC 27701 certification, an international standard for managing and protecting personally identifiable information (PII). This service includes:Gap Analysis: Identify areas for improvement in data privacy management.PIMS Framework Design: Develop a structured approach to managing PII.Certification Support: Assistance in preparing for ISO/IEC 27701 audits and certification.",
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
            title: "DPDP Act Compliance ",
            content: "DPDP Act ComplianceEnsure Compliance with India’s Data Protection LawFor businesses operating in or with India, compliance with the Digital Personal Data Protection (DPDP) Act is crucial. AZ Infosec helps ensure compliance with India’s unique data protection requirements, including:Data Handling & Privacy Policy Updates: Adapt your policies and practices to align with the DPDP Act.Data Subject Rights: Implement measures to facilitate user rights, such as access, rectification, and deletion.Regular Compliance Audits: Ongoing assessments to keep your organization compliant.",
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
            title: "GDPR Compliance",
            content: " GDPR ComplianceProtect Data and Meet EU StandardsFor businesses handling EU resident data, GDPR compliance is non-negotiable. AZ Infosec offers full GDPR compliance services, including:Data Mapping & Processing Records: Track and document data flows in line with GDPR.Risk Assessment & Data Protection Impact Assessments (DPIA): Identify potential risks and implement safeguards.Data Breach Management: Establish protocols to manage and report data breaches within required timelines.Why AZ Infosec for Privacy Compliance?Tailored Regional Expertise: Understanding of the unique regulatory landscapes in the UAE, KSA, India, and the EU.End-to-End Support: From initial assessments to certification and ongoing monitoring.Simplified Compliance Processes: Solutions that make achieving and maintaining compliance seamless and efficient.",
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
            title: "Business Conituity and Disaster Recovery",
            content: "Arming your organization with the latest cybersecurity technologies is essential for staying ahead of cyber adversaries. Our Technology Arsenal comprises a suite of advanced tools and solutions tailored to your organization's specific needs. From highly developed firewalls to intrusion detection systems, our arsenal is designed to strengthen your cybersecurity infrastructure, ensuring a proactive defense against evolving cyber threats.",
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
        // {
        //   title: "Cyberscurity Awarness",
        //   content: "Recognizing that human error is a significant factor in cybersecurity incidents, our comprehensive Cybersecurity Awareness Training Programs address this vulnerability by empowering your workforce with the knowledge and skills needed to recognize and mitigate cyber threats. From phishing simulations to best practices for secure online behavior, these programs foster a security-conscious culture within your organization.",
        //   imageSrc: { b2 },
        //   complianceItems: ["Certified Payment Security Compliance Manager",
        //     "Certified AI Security Specialist",
        //     "Certified Data Privacy Manager",
        //     "Certified NIST CSF v2.0 Specialist"]
        // },
        // {
        //   title: "Training Program",
        //   content: "Content for Tab 2",
        //   imageSrc: { b2 },
        //   complianceItems: ["Compliance Item A", "Compliance Item B"]
        // },
        // Add more tab objects as needed
    ];
    const handleTabClick = (index) => {
        setActiveTab(index); // Update active tab on click
    };

    const securityTabsData = [
        { label: 'PIMS - ISO/IEC 27701 Compliance', content: '	PIMS - ISO/IEC 27701 CompliancePIMS - ISO/IEC 27701 Compliance Strengthen your Privacy Information Management System (PIMS)Our team guides you through achieving ISO/IEC 27701 certification, an international standard for managing and protecting personally identifiable information (PII). This service includes:Gap Analysis: Identify areas for improvement in data privacy management.PIMS Framework Design: Develop a structured approach to managing PII.Certification Support: Assistance in preparing for ISO/IEC 27701 audits and certification.' },
        { label: 'DPDP Act Compliance', content: 'DPDP Act Compliance DPDP Act ComplianceEnsure Compliance with India’s Data Protection LawFor businesses operating in or with India, compliance with the Digital Personal Data Protection (DPDP) Act is crucial. AZ Infosec helps ensure compliance with India’s unique data protection requirements, including:Data Handling & Privacy Policy Updates: Adapt your policies and practices to align with the DPDP Act.Data Subject Rights: Implement measures to facilitate user rights, such as access, rectification, and deletion.Regular Compliance Audits: Ongoing assessments to keep your organization compliant.' },
        { label: 'GDPR Compliance', content: 'GDPR ComplianceGDPR ComplianceProtect Data and Meet EU StandardsFor businesses handling EU resident data, GDPR compliance is non-negotiable. AZ Infosec offers full GDPR compliance services, including:Data Mapping & Processing Records: Track and document data flows in line with GDPR.Risk Assessment & Data Protection Impact Assessments (DPIA): Identify potential risks and implement safeguards.Data Breach Management: Establish protocols to manage and report data breaches within required timelines.Why AZ Infosec for Privacy Compliance?Tailored Regional Expertise: Understanding of the unique regulatory landscapes in the UAE, KSA, India, and the EU.End-to-End Support: From initial assessments to certification and ongoing monitoring.Simplified Compliance Processes: Solutions that make achieving and maintaining compliance seamless and efficient.' },
        // { label: 'Business Conituity and Disaster Recovery', content: 'Business Conituity and Disaster Recovery Arming your organization with the latest cybersecurity technologies is essential for staying ahead of cyber adversaries. Our Technology Arsenal comprises a suite of advanced tools and solutions tailored to your organization specific needs. From highly developed firewalls to intrusion detection systems, our arsenal is designed to strengthen your cybersecurity infrastructure, ensuring a proactive defense against evolving cyber threats.' },


    ];


    const complianceSolutions1 = [
        { label: "PIMS- ISO/IEC 27701", path: "/pcdss" },
        { label: "DPDP Act Compliance", path: "/pcdss" },
        { label: "GDPR Compliance", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },

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
    const tabitems = [
        {
            label: "PIMS - ISO/IEC 27701 Compliance",
            content: [
                {
                    title: "Our team guides you through achieving ISO/IEC 27701 certification, an international standard for managing and protecting personally identifiable information (PII). This service includes:",
                    items: [
                        "Gap Analysis: Identify areas for improvement in data privacy management",
                        "PIMS Framework Design: Develop a structured approach to managing PII.",
                        "Dubai Cybersecurity Law",
                    ],
                },
                {
                    title: "",
                    items: [
                        "Certification Support: Assistance in preparing for ISO/IEC 27701 audits and certification.",
                        "Strengthen your Privacy Information Management System (PIMS)",
                    ],
                },
            ],
        },
        {
            label: "DPDP Act Compliance",
            content: [
                {
                    title: "For businesses operating in or with India, compliance with the Digital Personal Data Protection (DPDP) Act is crucial. AZ Infosec helps ensure compliance with India’s unique data protection requirements, including:",
                    items: ["Data Handling & Privacy Policy Updates: Adapt your policies and practices to align with the DPDP Act.", "Data Subject Rights: Implement measures to facilitate user rights, such as access, rectification, and deletion",],
                },
                {
                    title: "",
                    items: ["Regular Compliance Audits: Ongoing assessments to keep your organization compliant.", "Ensure Compliance with India’s Data Protection Law",],
                },


            ],

        },
        // New Tab: Data Management
        {
            label: "GDPR Compliance",
            content: [
                {
                    title: "For businesses handling EU resident data, GDPR compliance is non-negotiable. AZ Infosec offers full GDPR compliance services, including:",
                    items: [
                        "Data Mapping & Processing Records: Track and document data flows in line with GDPR.",
                        "Risk Assessment & Data Protection Impact Assessments (DPIA): Identify potential risks and implement safeguards.",

                    ],
                },
                {
                    title: "",
                    items: [
                        "Data Breach Management: Establish protocols to manage and report data breaches within required timelines",
                        "Protect Data and Meet EU Standards",

                    ],
                },
            ],
        },
        // New Tab: Risk Assessment

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

    const sections = [

        {
            heading: "Red Team Assessment",
            subheadings: [
                {
                    title: " Simulate real-world attack scenarios to evaluate detection and response capabilities.",
                    descriptions: [

                    ],
                },

            ],
        },
        {
            heading: "Purple Team Assessment",
            subheadings: [
                {
                    title: "Combine offensive and defensive approaches to improve overall security posture.",
                    descriptions: [

                    ],
                },
            ],
        },

        {
            heading: "Social Engineering Testing",
            subheadings: [
                {
                    title: " Assess your organization's human vulnerabilities and employee awareness.",
                    descriptions: [

                    ],
                },
            ],
        },
        {
            heading: "Ransomware Simulation & Assessment",
            subheadings: [
                {
                    title: " Prepare for ransomware threats with simulated attacks and mitigation strategies.",
                    descriptions: [

                    ],
                },
            ],
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
                                Advanced Security
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                No More Blind Spots. We step into the shoes of your adversaries, immersing ourselves in their dark underbelly. We understand their tools, their tactics, their hunger for your data. This intimate understanding allows us to anticipate their moves, predict their attacks, and ultimately, outsmart them at their own game.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>


            <CollapsibleSection
                sections={sections}
                title="Our advanced security services cover four key areas:"
                heading=""
                subheading=""
            />






            <GetStarted
                image={image1}
                header="Ready to strengthen your advanced security practices? "
                description="Contact us today to ensure full compliance and build trust with your customers across regions."
                buttonText="Let's Talk "
                linkTo="/contactus"
            />




            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default AdvancedSecurity;