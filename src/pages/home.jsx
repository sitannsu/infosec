import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Footer } from "@/widgets/layout";
import HeroDynamic from "@/component/HeroDynamic";
import CyberSecurityCarousel from "@/component/CyberSecurityCarousel";

import TestimonialsSection from "@/component/Testimonial";
import ComplianceSection from "@/component/ComplainceSection";
import LogoSection from "@/component/LogoSection";
import Locations from "@/component/Location";
import GetStarted from "@/component/GetStarted";
import LatestBlog from "@/component/LatestBlog";
import image1 from '@/image/bgimage.jpg'
import CxTComponent from "@/component/HomePage1";
import Slider from "react-slick";
import CompanySlideSection from "@/component/CompanySlideSection";
import Accredation from "@/component/Accredation";

export function Home() {
  const [activeTab, setActiveTab] = useState(0); // Initialize active tab index

  const handleTabClick = (index) => {
    setActiveTab(index); // Update active tab on click
  };

  const headingData = [
    {
      heading: "Compliance",
      para: "",
      link: "/compliance", // Add the link for each heading
    },
    {
      heading: "Governance & Risk",
      para: "",
      link: "/governaceengine", // Add the link for each heading
    },
    {
      heading: "Technological Risk Management",
      para: "",
      link: "/technological", // Add the link for each heading
    },
    {
      heading: "Talent-as-a-Service",
      para: "",
      link: "/managedsecurity", // Add the link for each heading
    },
  ];

  return (
    <>
      <div className="relative flex min-h-[60vh] sm:min-h-[80vh] lg:min-h-[calc(100vh-64px)] items-center justify-center bg-cover bg-[url('/img/home3.jpg')]">

        {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" /> */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center relative z-10">
          <HeroDynamic
            heading={
              <span className="text-yellow-500 text-2xl sm:text-2xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight font-heisman">
                Get Your Business Secured & Compliance Ready in One Single Go!!!
              </span>
            }
            subheading={
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman pt-3">
                AZ InfoSec, Enabling True Security, Beyond Compliance. Our Cybersecurity experts simplify the process, saving your time, effort, and money.
              </p>
            }
            headingClass="text-white font-lato"
            subheadingClass="text-white font-lato"
          />
        </div>
      </div>

      {/* Boxes Section */}
      <div className="relative  py-16 lg:py-24">
        <div className="flex justify-center items-center mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {headingData.map((item, index) => (
              <Link to={item.link} key={index}> {/* Use Link to navigate to pages */}
                <div
                  className="group relative flex flex-col items-center justify-center p-6 text-white bg-blue-900 border-2 rounded-lg shadow-lg transition-all duration-300 h-28 "
                  style={{
                    borderImage: "linear-gradient(90deg, transparent, purple, transparent) 1",
                  }}
                >
                  {/* Glowing Red Border Effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-blue-900 opacity-0 group-hover:opacity-100 group-hover:animate-pulse flex justify-center items-center " />
                  <h3 className="z-10 text-lg text-center  font-semibold ">{item.heading}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CompanySlideSection />

      <Accredation />

      <TestimonialsSection />

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

export default Home;
