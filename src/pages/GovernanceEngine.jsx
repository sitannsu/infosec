import React from "react";
import image1 from '@/image/bgimage.jpg'
import HeroDynamic from "@/component/HeroDynamic"; // Ensure the path is correct
import GetStarted from "@/component/GetStarted";
import { Footer } from "@/widgets/layout";
import DynamicCardComponent from "@/component/ChooseSection";

export function GovernanceEngine() {

  const tabs = [
    {
      label: "Governance",
      content:
        "Governance & Risk services empower organizations to build a solid security foundation, manage risks proactively, and establish resilient governance frameworks. Our expertise spans essential areas to help you navigate regulatory, operational, and strategic challenges with confidence.",
    },
    {
      label: "Risk ",
      content:
        "Risk Management services are designed to proactively identify, assess, and manage security and privacy risks, safeguarding your organization’s critical assets and ensuring regulatory compliance.",
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
                Governance and Risk
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

      <DynamicCardComponent title="Core Offering" items={tabs} />
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


export default GovernanceEngine;