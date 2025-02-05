

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import ButtonNav from "./ButtonNav";
import { Link } from "react-router-dom";
// import Infologo from "../../../public/img/Infologo.jpeg"
import Infologo from "../../../public/img/AZ2.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [activeNestedADropdown, setActiveNestedADropdown] = useState(null);
  const [activeNestedBDropdown, setActiveNestedBDropdown] = useState(null);
  const [activeNestedCDropdown, setActiveNestedCDropdown] = useState(null);
  const [activeNestedEDropdown, setActiveNestedEDropdown] = useState(null);
  const [isWebAppOpen, setIsWebAppOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


  const [showNumber, setShowNumber] = useState(false);

  const handleClick = () => {
    setShowNumber((prev) => !prev); // Toggle the visibility of the number
  };


  // const handleMenuToggle = () => {

  //   setIsMenuOpen(!isMenuOpen);
  // };




  const handleMenuToggle = () => {
    if (isMenuOpen) {
      // Reset all dropdown states when closing the menu
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }
    setIsMenuOpen(!isMenuOpen);
  };


  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };




  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const [activeNestedcDropdown, setActiveNestedcDropdown] = useState(null);


  const handleNestedcDropdownToggle = (nestedcDropdown) => {
    setActiveNestedcDropdown((activeNestedcDropdown) => (activeNestedcDropdown === nestedcDropdown ? null : nestedcDropdown));
  };


  // const handleDropdownToggle = (dropdown) => {
  //   setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  // };

  // const handleNestedDropdownToggle = (nestedDropdown) => {
  //   setActiveNestedDropdown((prev) =>
  //     prev === nestedDropdown ? null : nestedDropdown
  //   );
  // };


  const handleNestedDropdownToggle = (nestedDropdown) => {
    setActiveNestedDropdown(
      activeNestedDropdown === nestedDropdown ? null : nestedDropdown
    );
  };
  const handleNestedADropdownToggle = (nestedDropdown) => {
    setActiveNestedADropdown((prev) =>
      prev === nestedDropdown ? null : nestedDropdown
    );
  };

  const handleNestedBDropdownToggle = (nestedDropdown) => {
    setActiveNestedBDropdown((prev) =>
      prev === nestedDropdown ? null : nestedDropdown
    );
  };
  const handleNestedCDropdownToggle = (nestedDropdown) => {
    setActiveNestedCDropdown((prev) =>
      prev === nestedDropdown ? null : nestedDropdown
    );
  };

  const handleNestedEDropdownToggle = (nestedDropdown) => {
    setActiveNestedEDropdown((prev) =>
      prev === nestedDropdown ? null : nestedDropdown
    );
  };



  // const handleMenuToggle = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };

  const [activeMenu, setActiveMenu] = useState("compliance");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const menus = {
    compliance: {
      title: "Compliance",
      sections: [
        {
          heading: "Global Security Compliance",
          path: "/globalsecurity",
          items: [
            "ISMS- ISO/IEC 27001",
            "SOC 1 and SOC 2",
            "PCI DSS",
            "PCI SAQ Facilitation",
            "HIPAA ",
          ],
        },
        {
          heading: "Regional Security Compliance",
          path: "/regionalsecurity",
          items: ["United Arb Emirates", "Kingdom of Saudi Arabia ", "India", "Oman", "Bahrain", "Qatar"],
        },
        {
          heading: "Privacy Compliance",
          path: "/privacycompliance",
          items: [
            "PIMS- ISO/IEC 27701",
            "DPDP Act Compliance",
            "GDPR Compliance",
          ],
        },
        {
          heading: "Business Continuity and Disaster Recovery",
          path: "/businesscontinuity",
          items: ["BCMS- ISO/IEC 22301"],
        },
      ],
    },
    governance: {
      title: "Governance & Risk",
      sections: [
        {
          heading: "Governance",
          path: "/governancepage",
          items: [
            "Security Architecture Review",
            "Cyber Crisis Simulation",
            "Data Governance",
            "Cyber Security Insurance Support",
            " Metrics and Reporting",
            " Incident Response Planning",
            "Security Policy and Strategy Development",
            "Security Maturity Program & Improvement",
            "ICS Security Services",
            "Cloud Security Services",
            "Legal Services",
          ],
        },
        {
          heading: "Risk ",
          path: "/riskpage",
          items: [
            "Internal & External Risk Assessment",
            "Vendor & Partner Risk",
            "Data Privacy & Compliance",
          ],
        },
      ],
    },
    Technology: {
      title: "Technogical Risk Management",

      sections: [
        {
          heading: "Network Security",
          path: "/networksecurity",
          items: [
            "Network Arcitecture Review ",
            " Network Vulnerability Assessment & Penetration Testing",
            "Wireless Security Assessment",
          ],
        },
        {
          heading: "Application Security",
          path: "/applicationsecurity",
          items: [
            "Advanced Penetration Testing",
            "Mobile Application Vulnerability Assessment & Penetration Testing",
            " Web Application Vulnerability Assessment & Penetration Testing",
            " Source Code Review",
          ],
        },
        {
          heading: "Operational Security",
          path: "/operationalsecurity",
          items: [
            "DevSecOps",
            "Configuration Management & Hardening",
            "Vulnerability Remediation Guidance",
          ],
        },
        {
          heading: "Advanced Security Testing",
          path: "/advancedsecurity",
          items: [
            "Red Team Assessment",
            "blue Team Assessment",
            "Social Engineering Testing",
            "Ransomware Simulation & Assessment",



          ],
        },
        {
          heading: "Compliance & Cloud Security",
          path: "/compliancecloudsecurity",
          items: [
            "Compliance-Focused Assessments (PCI DSS, GDPR & HIPAA)",

            " Cloud Security Assessment",

          ],
        },
        {
          heading: "Emerging Threats",
          path: "/emergingthreat",
          items: [
            "Attack Surface Analysis",
            "IoT Security Assessment",
            " Threat Modelling",

          ],
        },
      ],
    },
    Managed: {
      title: " Talent as a Service ",

      sections: [
        {
          heading: "Leadership & Compliance",
          path: "/leadership-compliance",
          items: [
            "Virtual/Shared CISO as a Service",
            "DPO as a service",

          ],
        },
        {
          heading: "Managed Security & Legal Support",
          path: "/managedsecurity-legalsupport",
          items: [

            "Managed Security Services ",
            "Cyber attorney as a service ",

          ],
        },
        {
          heading: "Employee Training & Awareness",
          path: "/employeetraining-awareness",
          items: [
            "Security Training Programs",

          ],
        },

      ],
    },
    // Add other menus dynamically as needed
  };

  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-blue-900  text-white'
        : 'bg-transparent text-white font-bold'
        }`}
    >
      {/* Desktop and Tablet Navbar */}
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-blue-900 font-bold text-lg">
          <Link to="/" className="">
            <img
              className="h-16 w-16 sm:h-24 sm:w-24 rounded object-cover object-center mb-4 sm:mb-2"
              src={Infologo}
              alt="content"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {/* <li className="hover:text-blue-500">Home</li> */}

          <li className="hover:text-[#0FFCBE]">
            <Link to="/" className="text-xl" >
              Home
            </Link></li>

          <li className="hover:text-[#0FFCBE]">
            <Link to="/aboutus" className="text-xl">
              About Us
            </Link></li>
          <li
            className="relative cursor-pointer  hover:text-[#0FFCBE] py-3 px-2 text-xl "
            onMouseEnter={() => handleDropdownToggle("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Services
            {activeDropdown === "services" && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl  px-6 py-4 z-50 ml-16 mt-2 w-[1200px] grid grid-cols-[40%,60%] gap-4 rounded-lg animate-fadeIn">
                {/* Left Side - Menu Headings */}
                <div className="space-y-3 bg-blue-600 p-3 rounded-lg shadow-md">
                  {Object.keys(menus).map((menuKey) => {
                    const isActive = activeMenu === menuKey;
                    const linkPath = menus[menuKey].path || "#";

                    return (
                      <Link
                        to={linkPath}
                        key={menuKey}
                        className={`block flex items-center justify-between cursor-pointer p-2 rounded-md transition-all duration-300 ${isActive
                          ? "bg-blue-900 text-white font-bold shadow-lg"
                          : "hover:bg-blue-900 hover:shadow"
                          }`}
                        onClick={() => handleMenuClick(menuKey)}
                      >
                        <h3
                          className={`text-sm ${isActive ? "text-white" : "text-white"
                            } transition-colors duration-300`}
                        >
                          {menus[menuKey].title}
                        </h3>
                        <span
                          className={`transform transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"
                            }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Right Side - Submenus */}
                <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-blue-50 to-blue-900 p-3 rounded-lg shadow-md" onClick={handleMenuToggle}>
                  {menus[activeMenu].sections.map((section, index) => {
                    const path = section.path || "/";

                    return (
                      <div
                        key={index}
                        className="p-3 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <Link to={path}>
                          <h4 className="font-normal text-sm text-blue-900 hover:text-blue-900 transition-colors duration-300">
                            {section.heading}
                          </h4>
                        </Link>
                        <ul className="mt-2 text-xs text-gray-900 space-y-1">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="cursor-pointer hover:text-blue-500 hover:scale-105 transition-all duration-300"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </li>


          {/* <li className="hover:text-blue-500">Products</li> */}
          <li className="hover:text-[#0FFCBE]">
            <Link to="/industrysupport" className="text-xl">Industry</Link> </li>

          <li className="hover:text-[#0FFCBE]"><Link to="/blog" className=" text-xl" >
            Blogs
          </Link></li>
          <li className="hover:text-[#0FFCBE]">
            <Link to="/career" className="text-xl">
              Work With Us
            </Link></li>


        </ul>




        <ButtonNav />
        <li className="hover:text-blue-500 flex items-center">
          <button
            onClick={handleClick}
            className=" focus:outline-none"
          >
            <i className="fa-brands fa-whatsapp text-4xl"></i>
          </button>
          {showNumber && (
            <span className="ml-2 text-white text-lg">+91-9040349501</span>
          )}
        </li>






        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-blue-500"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {
        isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <ul className="p-4 space-y-4 text-black">
              <li className="hover:text-blue-500">
                <Link to="/" className="" onClick={handleMenuToggle} >
                  Home
                </Link></li>
              <li className="hover:text-blue-500">
                <Link to="/aboutus" className="" onClick={handleMenuToggle} >
                  About Us
                </Link></li>
              {/* Services Mobile Dropdown */}
              <li>
                {/* Services Section */}
                <div
                  className="flex justify-between items-center hover:text-blue-500 cursor-pointer"
                  onClick={() => handleDropdownToggle("services-mobile")}
                >
                  Services
                  <span className="text-xs">{activeDropdown === "services-mobile" ? "▲" : "▼"}</span>
                </div>

                {activeDropdown === "services-mobile" && (
                  <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                    {/* Compliance Section */}
                    <li
                      className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                      onClick={() => handleNestedDropdownToggle("webAppSecurity-mobile")}
                    >
                      Compliance
                      <span className="text-xs">
                        {activeNestedDropdown === "webAppSecurity-mobile" ? "▲" : "▼"}
                      </span>
                    </li>

                    {activeNestedDropdown === "webAppSecurity-mobile" && (
                      <ul className="ml-4 mt-2 space-y-2 text-gray-700">
                        {/* Global Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500  relative">
                          <Link to="/globalsecurity" className="" onClick={handleMenuToggle}>
                            Global Security Compliance
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>ISMS- ISO/IEC 27001</li>
                          <li>SOC 1 and SOC 2</li>
                          <li>PCI DSS</li>
                          <li>PCI SAQ Facilitation</li>
                          <li>HIPAA Security</li>
                          <li>PCI DSS</li>
                        </ul> */}
                        </li>

                        {/* Regional Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/regionalsecurity" className="" onClick={handleMenuToggle}>
                            Regional Security Compliance
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>UAE NESA</li>
                          <li>KSA SAMA</li>
                          <li>India</li>
                        </ul> */}
                        </li>

                        {/* Privacy Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/privacycompliance" className="" onClick={handleMenuToggle}>
                            Privacy Compliance
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>PIMS- ISO/IEC 27701</li>
                          <li>DPDP Act Compliance</li>
                          <li>GDPR Compliance</li>
                        </ul> */}
                        </li>

                        {/* Business Continuity and Disaster Recovery with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/businesscontinuity" className="" onClick={handleMenuToggle}>
                            Business Continuity and Disaster Recovery
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>BCMS- ISO/IEC 22301</li>
                        </ul> */}
                        </li>
                      </ul>
                    )}

                    {/* Governance and Risk Section */}
                    <li
                      className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                      onClick={() => handleNestedDropdownToggle("governanceRisk-mobile")}
                    >
                      Governance and Risk
                      <span className="text-xs">
                        {activeNestedDropdown === "governanceRisk-mobile" ? "▲" : "▼"}
                      </span>
                    </li>

                    {activeNestedDropdown === "governanceRisk-mobile" && (
                      <ul className="ml-4 mt-2 space-y-2 text-gray-500">
                        {/* Technological Risk Management */}
                        <li className="flex justify-between items-center cursor-pointer hover:text-blue-500">
                          <Link to="/governancepage" className="" onClick={handleMenuToggle}>
                            Governance
                          </Link>

                          <span className="text-xs">▼</span>
                        </li>

                        {/* Managed Security & Compliance Workforce Solutions */}
                        <li className="flex justify-between items-center cursor-pointer hover:text-blue-500">
                          <Link to="/riskpage" className="" onClick={handleMenuToggle}>
                            Risk
                          </Link>
                          <span className="text-xs">▼</span>
                        </li>
                      </ul>
                    )}



                    <li
                      className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                      onClick={() => handleNestedDropdownToggle("technology-mobile")}
                    >
                      <Link className="">
                        Technological Risk Management
                      </Link>

                      <span className="text-xs">
                        {activeNestedDropdown === "technology-mobile" ? "▲" : "▼"}
                      </span>
                    </li>

                    {activeNestedDropdown === "technology-mobile" && (
                      <ul className="ml-4 mt-2 space-y-2 text-gray-500">
                        {/* Global Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/networksecurity" className="" onClick={handleMenuToggle}>
                            Network Security
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>ISMS- ISO/IEC 27001</li>
                          <li>SOC 1 and SOC 2</li>
                          <li>PCI DSS</li>
                          <li>PCI SAQ Facilitation</li>
                          <li>HIPAA Security</li>
                          <li>PCI DSS</li>
                        </ul> */}
                        </li>

                        {/* Regional Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/applicationsecurity" className="" onClick={handleMenuToggle}>
                            Application Security
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>UAE NESA</li>
                          <li>KSA SAMA</li>
                          <li>India</li>
                        </ul> */}
                        </li>

                        {/* Privacy Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/operationalsecurity" className="" onClick={handleMenuToggle}>
                            Operational Security
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>PIMS- ISO/IEC 27701</li>
                          <li>DPDP Act Compliance</li>
                          <li>GDPR Compliance</li>
                        </ul> */}
                        </li>

                        {/* Business Continuity and Disaster Recovery with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/advancedsecurity" className="" onClick={handleMenuToggle}>
                            Advanced Security Testing
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>BCMS- ISO/IEC 22301</li>
                        </ul> */}
                        </li>
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/compliancecloudsecurity" className="" onClick={handleMenuToggle}>
                            Compliance & Cloud Security
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>BCMS- ISO/IEC 22301</li>
                        </ul> */}
                        </li>
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/emergingthreat" className="" onClick={handleMenuToggle}>
                            Emerging Threats
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>BCMS- ISO/IEC 22301</li>
                        </ul> */}
                        </li>
                      </ul>
                    )}

                    <li
                      className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                      onClick={() => handleNestedDropdownToggle("managed-mobile")}
                    >
                      {/* <Link to="/managedsecurity" className="" onClick={handleMenuToggle}> */}
                      Talent As a Service
                      {/* </Link> */}

                      <span className="text-xs">
                        {activeNestedDropdown === "managed-mobile" ? "▲" : "▼"}
                      </span>
                    </li>

                    {activeNestedDropdown === "managed-mobile" && (
                      <ul className="ml-4 mt-2 space-y-2 text-gray-500">
                        {/* Global Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/leadership-compliance" className="" onClick={handleMenuToggle}>
                            Leadership & Compliance
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>ISMS- ISO/IEC 27001</li>
                          <li>SOC 1 and SOC 2</li>
                          <li>PCI DSS</li>
                          <li>PCI SAQ Facilitation</li>
                          <li>HIPAA Security</li>
                          <li>PCI DSS</li>
                        </ul> */}
                        </li>

                        {/* Regional Security Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/managedsecurity-legalsupport" className="" onClick={handleMenuToggle}>
                            Managed Security & Legal Support
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>UAE NESA</li>
                          <li>KSA SAMA</li>
                          <li>India</li>
                        </ul> */}
                        </li>

                        {/* Privacy Compliance with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          <Link to="/employeetraining-awareness" className="" onClick={handleMenuToggle}>
                            Employee Training & Awareness
                          </Link>
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>PIMS- ISO/IEC 27701</li>
                          <li>DPDP Act Compliance</li>
                          <li>GDPR Compliance</li>
                        </ul> */}
                        </li>

                        {/* Business Continuity and Disaster Recovery with Hover */}
                        <li className="group cursor-pointer hover:text-blue-500 relative">
                          {/* <Link to="/businesscontinuity" className="" onClick={handleMenuToggle}>
                            Cyber attorney as a service
                          </Link> */}
                          {/* <ul className="hidden group-hover:block ml-4 mt-2 space-y-2 text-gray-400">
                          <li>BCMS- ISO/IEC 22301</li>
                        </ul> */}
                        </li>
                      </ul>
                    )}
                  </ul>
                )}
              </li>

              <li className="hover:text-blue-500">
                <Link to="/industrysupport" className="" onClick={handleMenuToggle}>Industry</Link> </li>

              <li className="hover:text-blue-500" >Blogs</li>
              <li className="hover:text-blue-500">
                <Link to="/career" className="" onClick={handleMenuToggle}>Work With Us</Link> </li>
            </ul>
          </div>
        )
      }








    </nav >
  );
};

export default Navbar;



