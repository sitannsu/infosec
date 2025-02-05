// import React from 'react'

// const IndustrySupport = () => {
//     return (
//         <div>IndustrySupport</div>
//     )
// }

// export default IndustrySupport



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
import StatisticsSection from "@/component/StatisticsSection";
import SolutionSection from "@/component/SolutionSection";
export function IndustrySupport() {
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
                "blue Team Assessment",
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
            title: "Managed Security & Compliance Workforce Solutions",
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
                                Industry
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                At AZ infosec, we serve industries from various sectors which includes but are not limited to Banking, Financial Services & Insurance, Cloud based Service Providers, E-Commerce, Healthcare, Payment Processing, Data Center, IT Service Providers, BPO & Customer Service Centers, Retail & Manufacturing etc.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>












            <StatisticsSection />






            <div className="bg-white py-10 px-4 sm:px-8 lg:px-20 font-lato">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-6 leading-snug">
                    Implementing Compliance Standards for the Managed Service Industry
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    Banking, Financial Services & Insurance is an industry that encompasses a wide gamut of businesses including credit unions, banks, credit card companies, insurance companies, consumer finance companies, stock brokerages, and investment funds to name a few. Every business has its own unique challenges in terms of internal controls and securing systems. For an industry as crucial as this, the economy requires high-level security control frameworks and policies in place, to ensure the protection of customer data and information. Implementing a robust compliance program is paramount for the Industry.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    <span className="font-semibold">AZ Infosec</span> specializes in Information Security and Cyber Security – Consulting, Audit, Certification, and Compliance services. Leveraging our capabilities and industry insights, we provide your organizations with the resources required to ensure compliance with the Industry Regulations and Compliance Standard. We help your business beyond Compliance to strengthen the security posture of your entire organization and prevent incidents of a data breach.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    Demonstrating high-level commitment, our team will help your organization with the implementation of effective Control frameworks like <span className="font-semibold">SOC 1, SOC 2, PCI DSS, ISO 27001</span>, Vulnerability Assessment, and Penetration Testing. Our team will also help your organization in your efforts of achieving <span className="font-semibold">HIPAA, CCPA, GDPR, NESA Compliance</span> to name a few.
                </p>
            </div>





            {/*  */}

            <section className="bg-blue-50 py-8 px-4 sm:py-12 sm:px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-6 sm:mb-10">
                        Does the Information Security Challenges Sound Familiar to You?
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        {[
                            "Protecting your IT Infrastructure against cyber-security threats.",
                            "Safeguarding business-critical information and data.",
                            "Identifying and securing critical assets of the company.",
                            "Training and making your staff competent with their respective roles.",
                            "Detecting and responding to breaches.",
                            "Managing third-party risks.",
                            "Establishing effective policies and procedure frameworks.",
                            "Demonstrating compliance with a myriad of overlapping and ambiguous Standards.",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 px-4 mb-6 sm:mb-8"
                            >
                                <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 transition-transform duration-300 transform hover:scale-105">
                                    <div className="flex-shrink-0">
                                        <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <p className="text-blue-800 text-base font-medium">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <SolutionSection />

            <section className="text-gray-600 body-font">
                <div className="container px-4 sm:px-6 py-12 sm:py-24 mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#01012b]">
                            Suggested Service
                        </h1>
                        <p className="text-gray-900 font-medium text-base sm:text-lg lg:w-1/2 w-full leading-relaxed">
                            {/* Add a description here if needed */}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-4">
                            <div className="border-2 border-blue-600 p-6 rounded-lg text-center">
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <img
                                        className="h-20 w-20 rounded-full object-cover object-center"
                                        src={insurance}
                                        alt="ISO 27001"
                                    />
                                </div>
                                <h2 className="text-lg text-gray-900 font-bold mb-2">ISO 27001</h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="border-2 border-blue-600 p-6 rounded-lg text-center">
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <img
                                        className="h-20 w-20 rounded-full object-cover object-center"
                                        src={process}
                                        alt="SOC 2"
                                    />
                                </div>
                                <h2 className="text-lg text-gray-900 font-bold mb-2">SOC 2</h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="border-2 border-blue-600 p-6 rounded-lg text-center">
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <img
                                        className="h-20 w-20 rounded-full object-cover object-center"
                                        src={vendor}
                                        alt="GDPR/ DPDP Act"
                                    />
                                </div>
                                <h2 className="text-lg text-gray-900 font-bold mb-2">GDPR/ DPDP Act</h2>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="border-2 border-blue-600 p-6 rounded-lg text-center">
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <img
                                        className="h-20 w-20 rounded-full object-cover object-center"
                                        src={timeline}
                                        alt="Technical Assessment"
                                    />
                                </div>
                                <h2 className="text-lg text-gray-900 font-bold mb-2">
                                    Technical Assessment
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted
                image={image1}
                header="Ready to strengthen your industry strategy?"
                description=" Connect with us to learn how our services can enhance your organization's security posture"
                buttonText="Let's Talk"
                linkTo="/contactus"
            />














            <div className="bg-gray-100">
                <Footer />
            </div>
        </>
    );
}

export default IndustrySupport;