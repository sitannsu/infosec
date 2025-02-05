


import { Footer } from "@/widgets/layout";
import React from "react";

const TermsAndConditions = () => {
    return (
        <>
            <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-0" />

                {/* Hero Content */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative z-10">
                    {/* Dynamic Section for Heading and Subheading */}
                    <div className="privacy-policy container mx-auto p-4 sm:p-6 md:px-16  mt-20 sm:mt-32 text-gray-700 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 text-center">
                            Terms and Conditions
                        </h1>
                        <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            Access to and use of this website{" "}
                            <a
                                href="https://www.azsecure.co"
                                className="text-blue-500 underline"
                            >
                                www.azsecure.co
                            </a>{" "}
                            is subject to the following Terms & Conditions. If you do not agree with these Terms & Conditions, please do not access or use this website. These terms may be changed by AZ Infosec at any time without notice. Accessing and using this website constitutes your agreement to be bound by these Terms & Conditions, as amended, modified, or replaced, from time to time.
                        </p>




                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Information on this website</h2>
                            <p className="text-sm sm:text-base">
                                This website has been designed to be a resource for information on matters that might be of interest to members of the general public including current or potential clients. Although AZ Infosec has made reasonable efforts to ensure that the materials contained on this website are accurate, it does not warrant or guarantee: the accuracy, currency or completeness of the materials; that the website will be available without interruption, error or omission; that defects will be corrected; or that the website and the server(s) that make it available are free from viruses or harmful components.
                            </p>
                            <p className="text-sm sm:text-base">
                                The website and the information provided on the website are provided “as is” and “as available” without representations, warranties or conditions of any kind, either expressed or implied, including, but not limited to, those of merchantability, fitness for a particular purpose, or non-infringement.
                            </p>
                            <p className="text-sm sm:text-base">
                                AZ Infosec hereby authorizes you to view, store, print, reproduce, copy and distribute any pages or parts thereof within this website for non-commercial use only. In consideration of this authorization, you agree that any copy of these pages or any distribution of such pages, which you make, shall retain all copyright and other proprietary notices contained herein and that any such use of the website such that no applicable laws are breached by you or any recipient of such pages.
                            </p>
                        </section>
                        {/* Additional sections */}




                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Confidentiality of communications</h2>
                            <p className="text-sm sm:text-base">
                                Unsolicited information and material may not be treated as confidential and will not be protected by any privilege. Although the use of this website may facilitate access to or communications with members of AZ Infosec by e-mail, voicemail or otherwise, accessing or using this website and/or receipt of any such communications or transmissions by any member of AZ Infosec does not create a Master-Servant relationship, unless our firm agrees to represent you. Therefore, AZ Infosec does not guarantee the confidentiality of any communications sent by e-mail or through its website, or left in voicemail messages on firm telephones or otherwise.
                            </p>

                        </section>





                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Links to other websites</h2>
                            <p className="text-sm sm:text-base">
                                There may be links throughout the website to other websites. These links are provided for convenience only, and do not mean that AZ Infosec endorses or recommends the information contained in such linked websites, or guarantees its accuracy, timeliness or fitness for a particular purpose. AZ Infosec takes no responsibility whatsoever for the content or practices of third party sites.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">AZ Infosec Training refund policy</h2>
                            <p className="text-sm sm:text-base">
                                In the event that a participant fails to take part in any training offerings, they have the following options available to them:
                            </p>


                            <ul className="list-disc list-inside pl-4 sm:pl-6">
                                <li>
                                    <strong>Service Provision:</strong>
                                    <ul className="list-disc list-inside ml-4 sm:ml-6">
                                        <li>1) AZ Infosec training team shall provide the participant with the training event calendar, and the participant may choose to take part in any subsequent training of their choice, in lieu of the payment made by them for the training they could not attend.
                                        </li>
                                        <p>or</p>
                                        <li>2) The participant may inform the AZ Infosec team of their inability to participate and seek a refund, which shall be provided to them within 15 days of the request.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>


                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">No guarantees</h2>
                            <p className="text-sm sm:text-base">
                                If any result of any legal matter of any compliances are portrayed in this website, please note that any such result was dependent on the facts of that particular case/clients and that the results will differ if based on different facts. Any statement, testimonial, or endorsement contained herein does not constitute a guarantee, warranty, or prediction regarding the ultimate result or outcome of any activity.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Liability</h2>
                            <p className="text-sm sm:text-base">
                                AZ Infosec and its Board of Directors will have no liability for any damage, direct or indirect, arising from the access or use of any information provided on this website. The information provided on the website is not legal/cyber security advice and should not be relied upon as such. Doing so without seeking the advice of legal counsel constitutes a misuse of the information
                            </p>
                        </section>









                        <section className="mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Feedback</h2>
                            <p className="text-sm sm:text-base">
                                We welcome your feedback. If you have questions or comments about AZ Infosec website, its contents, or these Terms & Conditions, please contact us at{" "}
                                <a
                                    href="mailto:hello@azsecure.co"
                                    className="text-blue-500 underline"
                                >
                                    hello@azsecure.co
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-100">
                <Footer />
            </div>
        </>
    );
};

export default TermsAndConditions;

