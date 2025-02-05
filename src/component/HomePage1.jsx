import React from "react";

const CxTComponent = () => {
    const features = [
        {
            icon: "🖱️",
            title: "Design",
            description: "User-centric, visual, interactive, functional, aesthetic and animated",
        },
        {
            icon: "⚡",
            title: "Digital Transformation",
            description: "AI, ML, data analytics, automation, mobile app and portal development, blockchain",
        },
        {
            icon: "♻️",
            title: "Business Process Automation",
            description: "Operations alignment assessments & roadmap, business workflow automation, RPA",
        },
    ];

    return (
        <div className="bg-black text-white py-20 px-8">
            <div className="max-w-screen-xl mx-auto">
                {/* Left Section: Title and Description */}
                <div className="mb-16">
                    <h3 className="text-red-500 text-xs uppercase font-semibold tracking-widest mb-4">
                        What We Do
                    </h3>
                    <h1 className="text-5xl font-extrabold mb-8">
                        CxT with User at the Core
                    </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        We, at Kilowatt, leverage our expertise and leadership in design, digital technologies, and business process automation for customer experience transformation (CxT).
                    </p>
                    <p className="text-lg leading-relaxed">
                        Think of us as your technology partner for software development, performance marketing, mobile app development, web development, and ecommerce solutions. The three tenets of our customer experience transformation are:
                    </p>
                </div>

                {/* Right Section: Features with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-3xl">
                                {feature.icon}
                            </div>
                            {/* Title */}
                            <h4 className="text-xl font-semibold mt-4">{feature.title}</h4>
                            {/* Description */}
                            <p className="text-sm mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CxTComponent;



