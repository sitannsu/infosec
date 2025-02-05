






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
import ContactCard from "@/component/CardDynamic";
import DynamicCardComponent from "@/component/ChooseSection";
import CollapsibleSection from "@/component/CollapsibleSection";
import { sections } from "@/data/regional-security-data";
export function RegionalSecurityCompliance() {
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

    ];
    const handleTabClick = (index) => {
        setActiveTab(index); // Update active tab on click
    };

    const tabs = [
        {
            label: "Localized Expertise",
            content:
                "Customized solutions aligned with the regulatory frameworks as per your legal and regulatory requirements.",
        },
        {
            label: "Comprehensive Compliance Support",
            content:
                "From initial assessments to ongoing monitoring, we streamline your compliance journey.",
        },
        {
            label: "Empowering Growth  ",
            content:
                "Stay compliant as regulations evolve.",
        },
        {
            label: "Risk Management ",
            content:
                "Minimize fines, protect data, and build trust.",
        },
    ];
    const securityTabsData = [
        {
            label: "Laws & Regulations",
            content: [
                {
                    title: "Important Laws",
                    items: [
                        "Personal Data Protection Law",
                        "UAE Information Assurance (NESA)",
                        "Dubai Cybersecurity Law",
                    ],
                },
                {
                    title: "Additional Insights",
                    items: [
                        "Compliance guidelines for smart governance",
                        "Best practices for data privacy standards",
                    ],
                },
            ],
        },
        { label: 'UAE', content: '	Personal Data Protection Law,	UAE Information Assurance (NESA),	Dubai Cybersecurity Law,	Dubai Data Law,	Smart Dubai Data Regulation,Network and Information Security (NIS) Directive,Abu Dhabi Regulation for Data Protection in the Emirate of Abu Dhabi,	Abu Dhabi Information Security Standards & Controls	Abu Dhabi Smart City Framework,	Abu Dhabi Healthcare Information And Cyber Security Standard (ADHICS)' },
        { label: 'KSA', content: 'Personal Data Protection Law,	Cybersecurity Regulations Issued By NCA,	E-Commerce Law,	Telecommunication Law,	National Data Governance Framework,	SAMA CSF,	Network and Information Security (NIS) Directive,	Communications and Information Technology Commission (CITC),	National Information Assurance Program (NIAP)' },
        {
            label: 'INDIA', content: [
                "Digital Personal Data Protection Act",
                "RBI Payment & Settlement Systems Act",
                "RBI Data Localization Audit",
                "RBI PA & PG Audit",
                "RBI CSF For Banks",
                "RBI NBFC Guidelines Audit",
                "NABARD Security Audit",
                "IRDA Audit",
                "ISNP Audit",
                "UIDAI AUA & KUA Compliance Audit",
                "SEBI Cyber Security & Resilience Framework Audit",
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
                                Regional Security Compliance
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                AZ Infosec offers tailored compliance and privacy solutions that meet the unique security compliance needs of businesses mandatory by the state or central government or regulatory authorities or legislation. With deep expertise in regional security standards, we help organizations stay secure, compliant, and resilient in an evolving digital landscape.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>







            <DynamicCardComponent title="As a AZ Infosec partner you will get" items={tabs} />


            {/* <GovernanceEngineTabs
                title="Secure your regional compliance today with AZ Infosec"
                subtitle="your trusted partner in safeguarding data and building resilient operations across borders.
"
                
                tabs={tabitems}
            /> */}

            <div id="collapsible-section1">
                <CollapsibleSection
                    sections={sections}
                    title="Secure your regional compliance today with AZ Infosec"
                    heading=""
                    subheading=""
                />

            </div>

            <GetStarted
                image={image1}
                header="Ready to safeguard your business and maintain peace of mind?"
                description="Contact us to learn more about our compliance solutions and start securing your operations today."
                buttonText="Let's Talk"
                linkTo="/contactus"
            />

            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default RegionalSecurityCompliance;