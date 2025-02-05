



import { Footer } from '@/widgets/layout';
import React from 'react';
import HeroDynamic from './HeroDynamic';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="relative flex min-h-[60vh] sm:min-h-[80vh] lg:min-h-[calc(100vh-64px)] items-center justify-center ">
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" />

                {/* Hero Content */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative z-10">
                    {/* Dynamic Section for Heading and Subheading */}
                    <div className="privacy-policy container  p-4 sm:p-6 md:px-16 mt-20 sm:mt-32 text-gray-700 bg-gray-100 rounded-md shadow-md">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Privacy Policy</h1>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Introduction</h2>
                            <p className="text-sm sm:text-base">
                                At AZ Infosec Pvt. Ltd., we prioritize your privacy. We gather and utilize your data to provide relevant cybersecurity services and for billing or contractual purposes. If it is required to share your data with any of our partners, then it is only with trusted partners under strict confidentiality to protect your data. We implement robust security measures to protect your information. You have the right to access, correct, or delete your data.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Purpose</h2>
                            <p className="text-sm sm:text-base">
                                This policy applies to the processing of users’ personal data. Its purpose is to provide our current, former, and potential users with a general understanding of the type of personal information we collect, the purpose of collection and processing, and how information is processed.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Information We Collect</h2>
                            <p className="text-sm sm:text-base">
                                We collect various types of information to provide and enhance our services, including:
                            </p>
                            <ul className="list-disc list-inside pl-4 sm:pl-6">
                                <li>
                                    <strong>Personal Information:</strong> Data that can identify you as an individual, such as:
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>Name: Your full name as provided during registration or while submitting the contact forms on the website.</li>
                                        <li>Email Address: Utilized for communication and service-related inquiries.</li>
                                        <li>Phone Number: For contact and verification purposes.</li>
                                        <li>Other Contact Details: Any additional contact information you provide.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Usage Data (Anonymized):</strong> Collected automatically when you interact with our website, including:
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>IP Addresses: To identify the location from which you access our website.</li>
                                        <li>Browser Types: Information about the browser you use to access our website.</li>
                                        <li>Pages Visited: Details about the pages you visit and the actions you take on our website.</li>
                                        <li>Device Information: Data about the device you use, such as operating system and device type.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        {/* Repeat similar responsive adjustments for other sections */}
                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">How We Use Your Information</h2>
                            <p className="text-sm sm:text-base">
                                We utilize the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc list-inside pl-4 sm:pl-6">
                                <li>
                                    <strong>Service Provision:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>Communication: To send you updates, notifications, and other relevant information about our company and services.</li>
                                        <li>Customer Support: To provide aid and support for any issues or inquiries you may have.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Personalization:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>Content Customization: To tailor the content and services we provide based on your preferences and interactions.</li>
                                        <li>Advertising: With your consent, we will utilize email addresses for future marketing initiatives.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Security:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>Data Protection: To implement security measures that protect your information from unauthorized access, edit, disclosure, or destruction.</li>
                                        <li>Fraud Prevention: To detect and prevent fraudulent activities and ensure the integrity of our website.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>


                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Sharing Your Information:</h2>
                            <p className="text-sm sm:text-base">
                                We may share your information with trusted third parties to enhance our services. These partners are bound by stringent confidentiality agreements to protect your data.
                            </p>
                            <ul className="list-disc list-inside pl-4 sm:pl-6">
                                <li>
                                    <strong>For legal reasons:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>To comply with the law or to protect the rights, property, or safety of AZ Infosec Pvt. Ltd., our users, or others, including to prevent fraud or other illegal activity.</li>

                                    </ul>
                                </li>
                                <li>
                                    <strong>In the case of a business transfer:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>

                                    </ul>
                                </li>
                            </ul>
                        </section>



                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Data Security</h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                We employ robust measures to protect your data, ensuring its confidentiality and integrity. Our security practices include:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                                <li>
                                    <strong>Encryption:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>Data Encryption:</strong> Encrypting data both in transit and at rest to prevent unauthorized access.</li>
                                        <li><strong>Secure Communication:</strong> Using secure protocols (e.g., HTTPS, HSTS) for data transmission.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Access Controls:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>Role-Based Access:</strong> Limiting access to your data based on roles and responsibilities.</li>
                                        <li><strong>Authentication:</strong> Implementing multi-factor authentication to verify user identities.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Regular Audits:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>Security Audits:</strong> Conducting regular audits to identify and address potential vulnerabilities.</li>
                                        <li><strong>Compliance Checks:</strong> Ensuring compliance with industry standards and regulations.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Your Rights</h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                                <li><strong>Access:</strong> You can request disclosure of the personal information we hold about you.</li>
                                <li><strong>Deletion:</strong> You can request the deletion of your personal information from our systems.</li>
                                <li><strong>Opt-Out:</strong> You can opt out from having AZ Infosec Pvt. Ltd., store your personal information.</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Exercising Your Rights</h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                To exercise your rights, follow these steps:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                                <li><strong>Submitting Requests:</strong> Contact us at <a href="mailto:hello@azsecure.co" className="text-blue-500 underline">hello@azsecure.co</a>. We are committed to responding promptly and diligently.</li>
                                <li><strong>Authorizing an Agent:</strong> Provide written authorization if you wish to authorize an agent to act on your behalf.</li>
                                <li><strong>Verifying Requests:</strong> We will verify requests by matching the provided information with our records to ensure the security of your data.</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Analytics Tools</h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                We use analytics tools to monitor and improve our website, which includes:
                            </p>
                            <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                                <li><strong>Google Analytics and other Google platforms and services:</strong></li>
                                <ul className="list-disc list-inside ml-6">
                                    <li><strong>Visitor Metrics:</strong> Monitoring visitor metrics to understand how users interact with our website.</li>
                                    <li><strong>Site Performance:</strong> Analyzing site performance to identify and address issues.</li>
                                    <li><strong>User Behavior:</strong> Tracking user behavior to improve the user experience.</li>
                                    <li><strong>Serving Ads:</strong> To serve ads on Google search and other platforms.</li>
                                </ul>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Updates to Privacy Policy</h2>
                            <p className="text-sm sm:text-base leading-relaxed">
                                Our privacy policies are subject to periodic revisions to reflect changes in our practices or regulatory requirements. Updated policies will be posted on our website’s privacy policy page and will take effect immediately for new users and upon acknowledgment for existing users. We encourage you to review our privacy policies regularly to stay informed about how we protect your personal information.
                            </p>
                        </section>

                        {/* Add similar styles for other sections */}
                    </div>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </>
    );
};

export default PrivacyPolicy;

