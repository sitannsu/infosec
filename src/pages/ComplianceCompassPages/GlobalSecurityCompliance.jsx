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
import computer from "../../../public/img/computer.jpg"
import insurance from "../../../public/img/insurance1.png"
import process from "../../../public/img/process1.png"
import timeline from "../../../public/img/timeline1.png"
import vendor from "../../../public/img/vendor1.png"
import CollapsibleSection from "@/component/CollapsibleSection";
export function GlobalSecurityCompliance() {
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
            label: "Customized Audits",
            content:
                "Customized audits as per your business requirements.",
        },
        {
            label: "Industry Expertise ",
            content:
                "Tailored solutions for finance, healthcare, insurance, e-commerce, and beyond.",
        },
        {
            label: "Proactive Monitoring ",
            content:
                "Stay compliant as regulations evolve.",
        },
        {
            label: "Risk Management ",
            content:
                "Minimize fines, protect data, and build trust.",
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
        { label: 'Secure Financial Transactions', content: 'SWIFT CSP services ensure the secure transmission of financial messages, protecting your organization and clients from unauthorized access and fraudulent activities..' },
        { label: 'Regulatory Compliance', content: 'Implementing SWIFT CSP aligns your financial institution with regulatory requirements, reducing the risk of non-compliance issues and ensuring adherence to global financial security standards.' },
        { label: 'Fraud Prevention', content: 'SWIFT CSP includes controls to prevent and detect fraudulent activities, safeguarding your financial institution against cyber threats that could compromise the integrity of financial transactions.' },
        { label: 'Trust and Reputation', content: 'Adhering to SWIFT CSP standards builds trust among clients, partners, and stakeholders, enhancing the reputation of your financial institution in the global financial services landscape.' },

        { label: 'Global Recognition', content: 'SWIFT CSP is globally recognized, providing a standardized approach to financial cybersecurity that is acknowledged and respected across the international financial community.' },

    ];






    const handleContactClick = () => {
        console.log("Contact button clicked!");
    };

    const sections = [
        {
            heading: "ISMS- ISO/IEC 27001",
            subheadings: [
                {
                    title: "Get ISO 27001 and IEC 27001 Compliance Certification",
                    descriptions: [
                        "AZ Infosec offers a comprehensive solution that simplifies the process of achieving and maintaining ISO/IEC 27001 certification, which is a globally recognized standard for information security management systems (ISMS).",
                        "In an era where information is a critical asset, AZ Infosec introduces its Information Security Management System (ISMS), an ISO/IEC 27001 certification service. Elevate your organization’s commitment to information security with a globally recognized certification that signifies robust data protection measures",
                        // "Description 3 for Title 1.1",
                    ],
                },
                {
                    title: "Benefits of ISO/IEC 27001:-",
                    descriptions: [
                        "-Global Recognition",
                        "-Risk Mitigation",
                        "-Compliance Achievement",
                        "-Competitive Edge",
                        "-Market Reputation",

                    ],
                },
            ],
        },
        {
            heading: "SOC 1 and SOC 2",
            subheadings: [
                {
                    title: "Strengthen Trust. Achieve SOC 1 & SOC 2 Compliance.",
                    descriptions: [
                        "Build client confidence with independent verification of your internal controls. AZ Infosec guides you through SOC 1 & SOC 2 audits, ensuring strong internal controls and robust security practices. Gain a competitive edge with independent verification of your compliance posture."
                    ],
                },
                {
                    title: "Benefits of ISO/IEC 27001.",
                    descriptions: [
                        "-Global Recognition",
                        "-Client Confidence",
                        "-Compliance Achievement",
                        "-Competitive Edge",
                        "-Market Reputation",

                    ],
                },
            ],
        },
        {
            heading: "PCI DSS",
            subheadings: [
                {
                    title: "Achieve PCI DSS Compliance with Confidence.",
                    descriptions: [
                        "Meeting the rigorous requirements of PCI DSS version 4.0 and onwards can be challenging.  AZ Infosec streamlines your path to compliance with our expert-led PCI DSS Certification services. We help you not only achieve PCI compliance, but also build a robust security framework to secure the cardholder data environment (CDE). Connect with us to safeguard your data, build trust and stay ahead of evolving cyber threats.",
                        "",
                    ],
                },
            ],
        },
        {
            heading: "PCI SAQ Facilitation",
            subheadings: [
                {
                    title: "Streamline PCI DSS SAQ with Our Guidance.",
                    descriptions: [
                        "Our tailored approach, backed by our seasoned cybersecurity professionals, facilitates a seamless journey towards PCI DSS SAQ certification. We are committed to delivering exceptional PCI DSS SAQ services to our clients, ensuring that they maintain a secure payment processing environment and meet all PCI DSS compliance requirements",
                        "",
                    ],
                },
            ],
        },

        {
            heading: "HIPAA",
            subheadings: [
                {
                    title: "Safeguard sensitive healthcare data with HIPAA Compliance",
                    descriptions: [
                        "Safeguard sensitive healthcare data with HIPAA Compliance.AZ Infosec guides you through the process, ensuring the highest level of security and compliance for your healthcare data. Strengthen security, build trust, and attract loyal patients.",

                    ],
                },
                {
                    title: "Benefits of HIPAA Compliance:-",
                    descriptions: [
                        "-PHI security",
                        "- Compliance Achievement",
                        "-Industry Recognition",
                        "-Market Reputation",

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
                                Global Security Compliance
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                Protecting data and meeting global security standards is essential for today’s businesses. Our Global Security Compliance service simplifies the path to regulatory compliance, helping you adhere to requirements like GDPR, HIPAA, PCI-DSS, and more—without the headache.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>






            {/* Why Choose Section */}
            <DynamicCardComponent title="Why Choose Us?" items={tabs} />




            {/* <section className="text-gray-600 body-font font-lato">
                <div className="  ">
                    <div className="flex flex-wrap w-full  flex-col items-center text-center">

                        <CollapsibleSection sections={collapsedata} />
                    </div>
                </div>
            </section> */}

            <CollapsibleSection
                sections={sections}
                title="Stay Secure, Stay Compliant"
                heading=""
                subheading=""
            />











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

export default GlobalSecurityCompliance;