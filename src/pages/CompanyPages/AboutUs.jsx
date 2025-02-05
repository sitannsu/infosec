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
import WhyChooseAZInfosec from "@/component/WhyChooseUs";
export function AboutUs() {
  const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

  // Define tab data with the image and compliance list for each tab
  // const tabData = [
  //   {
  //     title: "Compliance ",
  //     content: "Cyber security compliance are becoming mandatory norms it helps to gain the customer trust and enhance the business reputation",
  //     imageSrc: { b1 }, // Update with actual image path
  //     route: "/globalsecurity",
  //     complianceItems: [
  //       "Global Security Compliance",
  //       "Regional Security Compliance",
  //       "Privacy Compliance",
  //       "Business Continuity and Disaster Recovery",

  //     ]

  //   },
  //   {
  //     title: "Governance and Risk ",
  //     content: "Our Governance and Risk services are designed to address the complexities of security governance and risk management. Backed by decades of expertise, we’ve crafted a service portfolio that not only draws on our team's deep knowledge but also prioritizes practical solutions for real-world business challenges.We bridge the gap between compliance and operational ease, empowering your organization to confidently navigate risks while maintaining robust governance practices.",
  //     imageSrc: { b2 },
  //     complianceItems: ["Governance",
  //       "Risk ",
  //     ]
  //   },
  //   {
  //     title: "Technological Risk Management:",
  //     content: " Technology is a powerful enabler, but without safeguards, it can become a risk. At AZ Infosec, we ensure your technology remains a blessing, not a burden",
  //     imageSrc: { b2 },
  //     complianceItems: [" Network Security",
  //       "Application Security",
  //       "Operational Security",
  //       "Advanced Security Testing",
  //       "Compliance & Cloud Security",
  //       "Emerging Threats",
  //     ]
  //   },
  //   {
  //     title: "Talent as a Service",
  //     content: " Finding skilled security professionals is no easy task, especially in today’s competitive cybersecurity landscape. The shortage of qualified talent makes the challenge even greater.",
  //     imageSrc: { b2 },
  //     complianceItems: ["Leadership & Compliance",
  //       "Managed Security & Legal Support",
  //       "Employee Training & Awareness",]
  //   },

  // ];



  const tabData = [
    {
      title: "Compliance ",
      content: "Cyber security compliance are becoming mandatory norms it helps to gain the customer trust and enhance the business reputation",
      imageSrc: { b1 }, // Update with actual image path
      complianceItems: [
        { label: "Global Security Compliance", link: "/globalsecurity" },
        { label: "Regional Security Compliance", link: "/regionalsecurity" },
        { label: "Privacy Compliance", link: "/privacycompliance" }, // No link for this item
        { label: "Business Continuity and Disaster Recovery", link: "/businesscontinuity" },
      ],
    },
    {
      title: "Governance and Risk ",
      content: "Our Governance and Risk services are designed to address the complexities of security governance and risk management...",
      imageSrc: { b2 },
      complianceItems: [
        { label: "Governance", link: "/governancepage" },
        { label: "Risk", link: "/riskpage" },
      ],
    },
    {
      title: "Technological Risk Management:",
      content: "Technology is a powerful enabler, but without safeguards, it can become a risk...",
      imageSrc: { b2 },
      complianceItems: [
        { label: "Network Security", link: "/networksecurity" },
        { label: "Application Security", link: "/applicationsecurity" },
        { label: "Operational Security", link: "/operationalsecurity" },
        { label: "Advanced Security Testing", link: "/advancedsecurity" },
        { label: "Compliance & Cloud Security", link: "/compliancecloudsecurity" },
        { label: "Emerging Threats", link: "/emergingthreat" },
      ],
    },
    {
      title: "Talent as a Service",
      content: "Finding skilled security professionals is no easy task, especially in today’s competitive cybersecurity landscape...",
      imageSrc: { b2 },
      complianceItems: [
        { label: "Leadership & Compliance", link: "/leadership-compliance" },
        { label: "Managed Security & Legal Support", link: "/managedsecurity-legalsupport" },
        { label: "Employee Training & Awareness", link: "/employeetraining-awareness" },
      ],
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

  const itemstab = [
    {
      image: insurance,
      title: "Expertise You Can Trust",
      description:
        "Decades of experience and deep industry knowledge enable us to deliver solutions tailored to your unique challenges.",
    },
    {
      image: process,
      title: "Comprehensive Protection",
      description:
        "From compliance to risk management, we cover every aspect of cybersecurity, ensuring your business stays secure.",
    },
    {
      image: vendor,
      title: "Customer-Centric Approach",
      description:
        "Your success is our priority. We offer practical, scalable solutions designed with your business goals in mind.",
    },
    {
      image: timeline,
      title: "On-Demand Talent",
      description:
        "Our Talent-as-a-Service model gives you access to top cybersecurity professionals when and where you need them.",
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
                About Us
              </span>
            }
            subheading={
              <>
                <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                  At AZ Infosec, our mission is simple yet vital: safeguarding your digital world. As a purpose-driven cybersecurity consultancy, we’re dedicated to protecting your digital assets and ensuring your business environment remains secure and private.

                </p>
                <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman" >We envision a threat-free digital space and deliver tailored solutions to minimize security risks effectively. With a commitment to excellence, we empower businesses to navigate the complex cybersecurity landscape confidently.</p>
              </>

            }
            headingClass="text-white font-lato"
            subheadingClass="text-white font-lato"
          />
        </div>
      </div>




      {/* Tab Section */}

      <div className="mt-8 container mx-auto px-4 font-lato">
        {/* <div className="max-w-6xl mx-auto text-center px-8 mb-12">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#01012b] mb-4">
            Our comprehensive range of services includes:
          </h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          </p>
          <p className="text-md md:text-lg italic text-red-900 mt-4">
          </p>
        </div> */}



        <div className="max-w-6xl mx-auto text-center px-4 sm:px-8 mb-8 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#01012b] mb-4 sm:mb-3">
            Our comprehensive range of services includes:
          </h2>

        </div>

        <div>

          <div className="flex justify-center items-center mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {tabData.map((tab, index) => (
                <div
                  key={index}
                  className={` relative flex flex-col items-center justify-center p-6 text-black border-2 rounded-lg shadow-lg transition-all duration-100 ${index === activeTab ? "text-blue-600" : "text-black"
                    } group ${index === activeTab ? 'border-blue-600' : ''}`} // Add purple border for active tab
                  style={{
                    borderImage: "linear-gradient(90deg, transparent, blue, transparent) 1", cursor: "pointer",
                  }}
                  onClick={() => handleTabClick(index)}
                >
                  {/* Glowing Purple Border Effect */}
                  <div className={`absolute inset-0 rounded-lg border-2 border-blue-600 opacity-0 group-hover:opacity-100 group-hover:animate-pulse ${index === activeTab ? 'opacity-100 animate-pulse' : ''}`} />

                  <button
                    className="relative z-10 text-lg font-semibold transition-all duration-300"

                  >
                    {tab.title}
                  </button>
                </div>
              ))}
            </div>
          </div>


          <div className="mt-8">
            <Card className="shadow-lg border-4 border-gradient-to-r from-blue-500 via-indigo-600 to-pink-500 rounded-lg hover:shadow-xl font-lato">
              <CardBody>
                <Typography variant="h5" color="blue" className="font-bold mb-4">
                  {tabData[activeTab].title}
                </Typography>
                <Typography className="text-gray-700 font-semibold">
                  {tabData[activeTab].content}
                </Typography>
              </CardBody>

              {/* TabContent */}
              <TabContent
                imageSrc={tabData[activeTab].imageSrc}
                complianceItems={tabData[activeTab].complianceItems}
              />
            </Card>
          </div>

        </div>
      </div>






      <WhyChooseAZInfosec
        title="Why Choose AZ Infosec?"
        subtitle="Our vision is to empower businesses to thrive in a threat-free digital world. We aim to achieve this by providing unwavering support and innovative solutions to mitigate cybersecurity risks effectively."
        items={itemstab}
      />




      <GetStarted
        image={image1}
        header="Ready To Get Started? We're Here To Help!"
        description="Empower your organization with expert cybersecurity solutions tailored to your specific needs."
        buttonText="Lets Talk"
        linkTo="/contactus"
      />

      <div className="bg-gray-100">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;