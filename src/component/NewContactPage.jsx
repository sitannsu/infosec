import React, { useState } from 'react';

const NewContactPage = ({ title }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        message: '',
        agreeToNewsletter: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: formData.message,
        };

        try {
            const response = await fetch('https://ampcus-backend.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                setResponseMessage('Email sent successfully!');
            } else {
                setResponseMessage('Failed to send the email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-20 mb-20">
            <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Business Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-blue-400 p-2 rounded-md w-full placeholder-gray-900"
                    required
                ></textarea>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="agreeToNewsletter"
                        checked={formData.agreeToNewsletter}
                        onChange={handleChange}
                        id="newsletter"
                        className="border-2 border-gray-400"
                    />
                    <label htmlFor="newsletter" className="text-gray-600 text-sm">
                        I agree to receive newsletters and other information related to company and its services
                    </label>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-900  hover:bg-[#0FFCBE] text-white font-bold py-2 px-6 rounded-md  disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Talk Today'}
                    </button>
                </div>
                {responseMessage && (
                    <p className="text-center mt-4 text-gray-600">{responseMessage}</p>
                )}
            </form>
        </div>
    );
};

export default NewContactPage;





