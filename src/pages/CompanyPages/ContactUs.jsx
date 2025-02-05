import ContactForm from '@/component/ContactFormSection';
import LocationMap from '@/component/FourCardSection';
import FourCardSection from '@/component/FourCardSection';
import HeroDynamic from '@/component/HeroDynamic';
import ContactSection from '@/component/NewContactPage';
import NewContactPage from '@/component/NewContactPage';
import { Footer } from '@/widgets/layout';
import React from 'react';
// Make sure the path is correct
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Datacards = [

  {
    title: 'India',
    content: 'Unit 101, Oxford Towers, H.a.l Ii Stage, Bangalore, Bangalore North, Karnataka, India, 560008'
  },



];


function ContactUs() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
  ];

  return (
    <div>



      <div className="relative flex min-h-[60vh] sm:min-h-[80vh] lg:min-h-[calc(100vh-64px)] items-center justify-center bg-cover bg-[url('/img/img11.jpg')]">
        {/* Background Overlay */}
        {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" /> */}

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center relative z-10">
          {/* Dynamic Section for Heading and Subheading */}
          <HeroDynamic
            heading={
              <span className="text-[#fac21f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight font-heisman">
                Lets Connect
              </span>
            }
            subheading={
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                Your security is our priority. Reach out to us today, and let’s discuss how we can safeguard your digital world.
              </p>
            }
            headingClass="text-white font-lato"
            subheadingClass="text-white font-lato"
          />
        </div>
      </div>
      {/* <ContactForm
        title="Contact Us"
        contactEmail="Lets Connect@azinfosec.com"
        contactPhone="(703) 666-3720 "
        socialLinks={socialLinks}
      /> */}

      <NewContactPage
        title="Tell us about your security needs" />




      <LocationMap
        title="Address "
        address="Unit 101, Oxford Towers, H.A.L II Stage, Bangalore, Bangalore North, Karnataka, India, 560008"
        mapUrl="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Unit%20101,%20Oxford%20Towers,%20H.a.l%20Ii%20Stage,%20Bangalore,%20Bangalore%20North,%20Karnataka,%20India,%20560008&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        message="Feel free to visit us during office hours for any inquiries or assistance."
      />



      <div className="bg-white">
        <Footer />
      </div>

    </div>



  );
}

export default ContactUs;
