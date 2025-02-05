import BlogCard from "@/component/BlogCard";
import HeroDynamic from "@/component/HeroDynamic";
import React from "react";
import image1 from '@/image/bgimage.jpg'
import Team1 from "../../../public/img/team-1.jpg"
import { Footer } from "@/widgets/layout";
import GetStarted from "@/component/GetStarted";


const BlogPage = () => {
    const blogs = [
        {
            title: "Cutting Through the Hype and Preparing AI for Cybersecurity's Biggest Challenges!",
            description:
                "Artificial Intelligence is spreading its influence far and wide, impacting nearly every aspect of our lives...",
            author: "Richa Arya",
            date: "January 16, 2025",
            tags: ["Cybersecurity", "Phishing", "Security Testing", "Social Engineering", "Tech", "Tools"],
            image: Team1,
        },
        {
            title: "The Perfect Storm: How AI is Revolutionizing Social Engineering Attacks in 2025",
            description:
                "The convergence of advanced AI with social engineering has created what I call the perfect storm...",
            author: "Ashwany Pillai",
            date: "January 6, 2025",
            tags: ["Cybersecurity", "Phishing", "Social Engineering"],
            image: "https://via.placeholder.com/150",
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
                                Blogs
                            </span>
                        }
                        subheading={
                            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                                Protecting personal data and individuals' privacy is crucial in today’s digital environment. AZ Infosec's Privacy Compliance service helps your business adhere to essential privacy standards and regulations, offering solutions that align with international best practices and regional data protection and privacy laws.
                            </p>
                        }
                        headingClass="text-white font-lato"
                        subheadingClass="text-white font-lato"
                    />
                </div>
            </div>
            <div className=" min-h-screen p-8 font-lato ">
                <div className="max-w-6xl mx-auto text-center px-4 sm:px-8 mb-8 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#01012b] mb-4 sm:mb-3">
                        Blog List
                    </h2>

                </div>

                <div className="space-y-6">
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>
            </div>


            <GetStarted
                image={image1}
                header="Ready to strengthen your blog strategy?"
                description=" Connect with us to learn how our services can enhance your organization's security posture"
                buttonText="Let's Talk"
                linkTo="/contactus"
            />



            <div className="bg-gray-100">
                <Footer />
            </div>

        </>
    );
};

export default BlogPage;