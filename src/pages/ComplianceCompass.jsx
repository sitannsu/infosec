import React from "react";
import image1 from '@/image/bgimage.jpg'
import HeroDynamic from "@/component/HeroDynamic"; // Ensure the path is correct
import DynamicCardComponent from "@/component/ChooseSection";
import { Footer } from "@/widgets/layout";
import GetStarted from "@/component/GetStarted";

export function ComplainceCompass() {

  const tabs = [
    {
      label: "Global Security Compliance",
      content:
        "Protecting data and meeting global security standards is essential for today’s businesses. Our Global Security Compliance service simplifies the path to regulatory compliance, helping you adhere to requirements like GDPR, HIPAA, PCI-DSS, and more—without the headache.",
    },
    {
      label: "Regional Security Compliance ",
      content:
        "AZ Infosec offers tailored compliance and privacy solutions that meet the unique security compliance needs of businesses mandatory by the state or central government or regulatory authorities or legislation. With deep expertise in regional security standards, we help organizations stay secure, compliant, and resilient in an evolving digital landscape.",
    },
    {
      label: "Privacy Compliance ",
      content:
        "Protecting personal data and individuals' privacy is crucial in today’s digital environment. AZ Infosec's Privacy Compliance service helps your business adhere to essential privacy standards and regulations, offering solutions that align with international best practices and regional data protection and privacy laws.",
    },
    {
      label: "Business Continuity  ",
      content:
        "In an unpredictable world, safeguarding your operations against disruptions is essential. AZ Infosec’s Business Continuity and Disaster Recovery services help organizations build resilience, minimize downtime, and maintain critical operations even in the face of unexpected events. Our service is anchored by the Business Continuity Management System(BCMS), based on ISO/IEC 22301 standards.",
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
                Compliance
              </span>
            }
            subheading={
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                Let us help to solve the complexities of compliance and its impact on your organization’s success. Our comprehensive solutions provide a clear pathway to navigate the intricate web of compliance requirements, ensuring your organization operates with confidence and security.
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

export default ComplainceCompass;
