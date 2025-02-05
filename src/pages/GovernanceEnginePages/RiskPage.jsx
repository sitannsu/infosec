


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
import GovernanceEngineTabs from "@/component/GovernanceEngineTab";
import DynamicCardComponent from "@/component/ChooseSection";
import ContactCard from "@/component/CardDynamic";
import CollapsibleSection from "@/component/CollapsibleSection";
import { sections } from "@/data/Risk-data";
export function RiskPage() {
    const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

    // Define tab data with the image and compliance list for each tab
    const tabData = [
        {
            title: "Global Security Compliance",
            content: "Navigating the complex web of regulatory requirements is simplified with our Compliance Compass.This solution serves as your trusty guide in achieving and maintaining compliance with industry standards and regulations.",
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
            title: "Regional Security Compliance ",
            content: "Maintaining control over your digital environment is crucial for sustained cybersecurity. Our Governance Engine acts as the central nervous system, orchestrating and optimizing security policies, processes, and procedures. By providing a unified framework, it empowers your organization to proactively manage risk, enforce security protocols, and foster a culture of continuous improvement.",
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
            title: "Privacy Compliance",
            content: "In an ever-expanding threat landscape, being aware of potential vulnerabilities is non-negotiable. Our Threat & Vulnerability Radar constantly scans and assesses your digital terrain, identifying and prioritizing potential threats. By providing real-time insights and actionable intelligence, this solution equips your security teams to stay one step ahead, fortifying your defenses against emerging cyber threats.",
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
    const tabs = [
        {
            label: "Internal & External Risk Assessment",
            content:
                "From architecture review to regulatory compliance, we cover every governance and risk need..",
        },
        {
            label: "Strategic Approach to Security ",
            content:
                "Our framework prioritizes proactive risk management and aligns with your business objectives.",
        },
        {
            label: "Strengthened Resilience:  ",
            content:
                "Equip your organization to face cyber threats with robust, adaptable governance structures",
        },
        {
            label: "Risk Management: ",
            content:
                "Achieve excellence in SWIFT CSP with proactive assistance from our dedicated support team, ensuring a seamless implementation process and ongoing compliance with financial security standards.",
        },
    ];



    const complianceSolutions1 = [
        { label: "ISMS- ISO/IEC 27001", path: "/pcdss" },
        { label: "SOC 1 and SOC 2", path: "/pcdss" },
        { label: "PCI DSS", path: "/pcdss" },
        { label: "PCI SAQ Facilitation", path: "/pcdss" },
        { label: "HIPAA Security", path: "/pcdss" },
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

    const securityTabsData = [
        { label: 'Internal & External Risk Assessment', content: '	Information Security Risk Assessment & Management: Comprehensive evaluations to identify, prioritize, and mitigate potential threats to your organization’s security..' },
        {
            label: 'Vendor & Partner Risk', content: '	Third-Party Risk Management: Protect your business from risks associated with vendors and partners by evaluating their security practices and ensuring alignment with your standards.',
            content: '	Cyber Crisis Simulation: Train and prepare teams to handle cyber crises through realistic simulations.	Incident Response Planning: Build and implement response plans to mitigate impact and ensure rapid recovery.	Cybersecurity Insurance Support: Guidance on selecting and implementing cybersecurity insurance tailored to your risk profile.'
        },
        { label: 'Data Privacy & Compliance', content: 'Data Privacy Impact Assessment: Assess data processing activities for privacy risks to comply with regulations and protect personal information.' },
        { label: 'Strengthen Your Risk Strategy with AZ inforsec', content: 'Our Risk Management solutions empower organizations to operate securely and confidently. Reach out to discover how we can enhance your risk strategy.' },



    ];

    const tabitems = [
        {
            label: "Internal & External Risk Assessment",
            content: [
                {
                    title: "Internal & External Risk Assessment",
                    items: [
                        "Information Security Risk Assessment & Management: Comprehensive evaluations to identify, prioritize, and mitigate potential threats to your organization’s security..",

                    ],
                },

            ],
        },
        {
            label: "Vendor & Partner Risk",
            content: [
                {
                    title: "Vendor & Partner Risk",
                    items: ["Third-Party Risk Management: Protect your business from risks associated with vendors and partners by evaluating their security practices and ensuring alignment with your standards",
                    ],
                },


            ],

        },
        // New Tab: Data Management

        {
            label: "Data Privacy & Compliance",
            content: [
                {
                    title: "Data Privacy & Compliance",
                    items: [
                        "Data Privacy Impact Assessment: Assess data processing activities for privacy risks to comply with regulations and protect personal information",


                    ],
                },

            ],
        },

        // New Tab: Risk Assessment

    ];



    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };
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
                                Risk Management Services
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                Risk Management services are designed to proactively identify, assess, and manage security and privacy risks, safeguarding your organization’s critical assets and ensuring regulatory compliance.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>



            <CollapsibleSection
                sections={sections}
                title="Core Risk Management Solutions"
                heading=""
                subheading=""
            />


            <GetStarted
                image={image1}
                header="Ready to strengthen your governance and risk strategy?"
                description=" Connect with us to learn how our services can enhance your organization's security posture"
                buttonText="Let's Talk"
                linkTo="/contactus"
            />




            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default RiskPage;