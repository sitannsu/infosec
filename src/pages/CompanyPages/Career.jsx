
import React, { useRef, useState } from 'react';
import HeroDynamic from '@/component/HeroDynamic';
import { Footer } from '@/widgets/layout';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
function WorkWithUs() {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    position: '',
    resume: null,
    message: '',
    consent: false,
  });

  const handleChange = async (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, resume: reader.result });
      };
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null!");
      return;
    }

    emailjs
      .send(
        "service_s727i87",
        "template_p0d5l1j",
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedin: formData.linkedin,
          position: formData.position,
          message: formData.message,
          resume: formData.resume, // Base64 encoded file
        },
        "5L6Y0-NiVR4-PDFks"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your application has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            linkedin: "",
            position: "",
            resume: null,
            message: "",
            consent: false,
          });
          formRef.current.reset();
        },
        (err) => {
          console.log("FAILED...", err instanceof EmailJSResponseStatus);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] sm:min-h-[80vh] lg:min-h-[calc(100vh-64px)] items-center justify-center bg-cover bg-[url('/img/img11.jpg')]">
        {/* Background Overlay */}
        {/* <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" /> */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center  relative z-10">
          <HeroDynamic
            heading={
              <span className="text-[#fac21f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight font-heisman ">
                Careers
              </span>
            }
            subheading={
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 md:mt-6 leading-relaxed font-heisman">
                Start building a career that matters! <br />
                <span>We are always looking for passionate and talented individuals to join our growing team. If you're eager to make an impact and contribute to something meaningful, we’d love to hear from you!.</span>
              </p>


            }
            headingClass="text-white font-lato"
            subheadingClass="text-white font-lato"
          />
        </div>
      </div>


      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Join Our Team</h1>
        <p className="text-gray-700 text-center mb-8">

        </p>

        <p className="text-gray-700 text-center mb-8">
          Please fill out the form below and upload your resume. Our team will review your application and get in touch with you if there's a fit.
        </p>

        <div className="flex justify-center text-2xl">
          <p>Application Form</p>
        </div>


        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-gray-700 font-medium">
              LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="position" className="block text-gray-700 font-medium">
              Position You're Interested In
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-gray-700 font-medium">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.docx"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />

          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Why Do You Want to Work With Us? (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="mx-auto block bg-blue-900 text-white hover:text-black py-2 px-6 text-sm rounded-md hover:bg-[#0FFCBE] transition duration-300"
          >
            Submit
          </button>
        </form>
        <p className="text-gray-700 text-center mt-6">
          Once you submit your application, our team will review your profile. If your qualifications match our requirements, we will get in touch with you.
        </p>
      </div>


      <div className="bg-white">
        <Footer />
      </div>



    </div>
  );
}

export default WorkWithUs;