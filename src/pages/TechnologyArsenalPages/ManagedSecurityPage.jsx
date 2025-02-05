


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
export function ManagedSecurityPage() {
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
        {
            image: insurance,
            title: "",
            description:
                "Our Talent-as-a-Service model gives you access to top cybersecurity professionals when and where you need them.",
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
    const tabs = [
        {
            label: "Leadership & Compliance",
            content: [
                <span><strong></strong> Is governing cyber security a challenge for your organization? We can take your worries away and our seasonal leaders can lead it for you and make sure that you always meet the compliance requirements.
                </span>,


            ]
        },
        {
            label: "Managed Security & Legal Support ",
            content: [
                <span><strong></strong> Let us help to build and manage the security team for your organization and achieve your security goals.</span>,


            ]
        },
        {
            label: " Employee Training & Awareness",
            content: [
                <span><strong></strong> Employee training is a mandate by most legislation/ regulations and even standards. It requires organizations to conduct compliance training programs for employees on the laws, regulations, and standards applicable to their job function or industry. Our training and skill development program is designed for Corporates looking to enhance their knowledge and skills.</span>,


            ]
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
                                Talent as a Service
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                AZ infosec’s Talent as a Service Solutions provide specialized, flexible resources to support your organization’s security, privacy, and regulatory needs. Our services offer expert oversight, hands-on management, and training to enhance your security posture without adding full-time overhead.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>





            <DynamicCardComponent title="Core Offering" items={tabs} />



            {/* <section className="text-gray-600 body-font font-lato">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-4xl  font-bold mb-2 text-[#01012b]">Why Choose AZ infosec?</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-medium text-lg">Our vision is to empower businesses to thrive in a threat-free digital world. We aim to achieve this by providing unwavering support and innovative solutions to mitigate cybersecurity risks effectively.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4 h-full">
                            <div className="border-2 border-purple-600 p-6 rounded-lg bg-[#edf6fd]   ">
                                <div className="w-20 h-full inline-flex items-center justify-center rounded-full  text-indigo-900 mb-4 ">
                                    <img className="h-20 rounded w-20 object-cover object-center mb-6 items-center flex justify-items-center" src={insurance} alt="content" />

                                </div>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-2 "></h2>
                                <p className="leading-relaxed text-base text-black">Expertise in handling diverse industries and regulatory frameworks.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 h-full">
                            <div className="border-2 border-purple-600 p-6 rounded-lg bg-[#edf6fd] text-center ">
                                <div className="w-20 h-full inline-flex items-center justify-center rounded-full  text-indigo-900 mb-4 ">
                                    <img className="h-20 rounded w-20 object-cover object-center mb-6" src={process} alt="content" />

                                </div>
                                <h2 className="text-lg text-gray-900 font-bold  title-font mb-2"></h2>
                                <p className="leading-relaxed text-base text-black">Advanced tools and methodologies for thorough testing and risk mitigation.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 h-full">
                            <div className="border-2 border-purple-600 p-6 rounded-lg bg-[#edf6fd] text-center ">
                                <div className="w-20 h-full inline-flex items-center justify-center rounded-full  text-indigo-900 mb-4 ">
                                    <img className="h-20 rounded w-20 object-cover object-center mb-6" src={vendor} alt="content" />

                                </div>
                                <h2 className="text-lg text-gray-900 font-bold  title-font mb-2"> </h2>
                                <p className="leading-relaxed text-base text-black">Tailored recommendations and actionable insights for enhanced security..</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 h-full">
                            <div className="border-2 border-purple-600 p-6 rounded-lg bg-[#edf6fd] text-center ">
                                <div className="w-20 h-full inline-flex items-center justify-center rounded-full  text-indigo-900 mb-4 ">
                                    <img className="h-20 rounded w-20 object-cover object-center mb-6" src={timeline} alt="content" />

                                </div>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-2"></h2>
                                <p className="leading-relaxed text-base text-black">Our Talent-as-a-Service model gives you access to top cybersecurity professionals when and where you need them.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}


            {/* <WhyChooseAZInfosec
                title="Why Choose AZ infosec?"
                items={itemstab}
            /> */}





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

export default ManagedSecurityPage;


