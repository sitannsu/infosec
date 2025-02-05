import React from "react";
import "./complaince.css";

const steps = [
  {
    title: "Train",
    letter: "T",
    description: "To ensure compliance, understanding controls and requirements is crucial. Industry-specific training aids implementation throughout the project journey.",
    icon: "/path-to-icon1.png",
    bgColor: "bg-red-600",
  },
  {
    title: "Scope",
    letter: "S",
    description: "This phase aims to identify all the applications, system components, and departments having access to critical information to scope them for the compliance standard.",
    icon: "/path-to-icon2.png",
    bgColor: "bg-teal-500",
  },
  {
    title: "Assess",
    letter: "A",
    description: "We assess the certification standard by identifying potential threats, gaps, and vulnerabilities. A detailed report will be provided.",
    icon: "/path-to-icon3.png",
    bgColor: "bg-red-600",
  },
  {
    title: "Mitigate",
    letter: "M",
    description: "Ampcus Cyber will assign a consultant to address gaps identified in the Assessment Phase with unlimited remediation support for up to 6 months.",
    icon: "/path-to-icon4.png",
    bgColor: "bg-teal-500",
  },
  {
    title: "Audit",
    letter: "A",
    description: "The phase involves the final audit by a PCI QSA or an Auditor; on successful completion of the audit, the firm shall be awarded the certificates.",
    icon: "/path-to-icon5.png",
    bgColor: "bg-red-600",
  },
];

const ComplianceSection = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Make Your Compliance Journey Easy With Ampcus Cyber's Approach!</h2>
      <p className="text-lg max-w-3xl mx-auto mb-12">
        Strategic Defense, Proactive Protection. At Ampcus Cyber, we don’t just react to threats; we anticipate and neutralize them before they become a problem.
        Ampcus Cyber takes a zero-trust approach to protect data privacy – never trust, and always verify to get the businesses compliant against standards and help them run their business smoothly.
      </p>

      <div className="grid md:grid-cols-5 gap-24 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? "odd-card" : "even-card"}`}
          >
            <div className="card-content">
              {index % 2 !== 0 ? (
                // Layout for Odd Card
                <>
                  <div className={`text-4xl font-bold mb-2 ${step.bgColor.split('-')[1]} stepNumber`}>
                    {step.letter}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  <div className="flex items-center justify-center mt-4 mb-8">
                    <div className="bg-red-900 rounded-full p-4">
                      <img src={step.icon} alt={step.title} className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bottom-arch"></div>
                </>
              ) : (
                // Layout for Even Card
                <>
                  <div className="flex items-center justify-center mt-8 mb-4">
                    <div className="bg-red-900 rounded-full p-4">
                      <img src={step.icon} alt={step.title} className="h-8 w-8" />
                    </div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${step.bgColor.split('-')[1]} stepNumber`}>
                    {step.letter}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplianceSection;
