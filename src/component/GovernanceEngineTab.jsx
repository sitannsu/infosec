


import React, { useState } from "react";

const GovernanceEngineTabs = ({ title, subtitle, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || "");

  return (
    <div className="relative flex content-center items-center justify-center py-10 font-lato  bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg ">
      {/* Content Wrapper */}
      <div className="max-w-7xl container mx-auto px-6 md:px-10 flex flex-col min-h-[500px] relative">
        {/* Title and Subtitle */}
        <div className="text-center">
          {title && <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-purple-700">{title}</h2>}
          {subtitle && <p className="text-base md:text-lg text-gray-600 mb-8">{subtitle}</p>}

          {/* Tab Navigation */}
          {/* <div className="flex flex-wrap justify-center items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`px-6 py-3 text-base md:text-lg font-medium rounded-full transition-all duration-300 ease-in-out ${activeTab === tab.label
                  ? "bg-purple-600 text-white shadow-lg scale-105" // Active
                  : "bg-gray-200 text-gray-700 hover:bg-purple-400 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}


          <div className="flex flex-wrap justify-center items-center gap-3 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium rounded-full transition-all duration-300 ease-in-out ${activeTab === tab.label
                  ? "bg-purple-600 text-white shadow-lg scale-105" // Active Tab
                  : "bg-gray-200 text-gray-700 hover:bg-purple-400 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Tab Content */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-6xl p-6 md:p-10 rounded-xl shadow-xl bg-white border border-gray-300">
            {tabs.map(
              (tab) =>
                tab.label === activeTab && (
                  <div key={tab.label} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tab.content.map((section, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50"
                      >
                        <h3 className="text-xl font-bold text-purple-700 mb-3">{section.title}</h3>
                        <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceEngineTabs;







