import React from "react";

const ContactUs = () => {
    return (
        <div className="contact-us container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="contact-header text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
                <p className="text-lg text-gray-600">
                    We'd love to hear from you! Reach out to us anytime.
                </p>
            </div>

            {/* Contact Information Section */}
            <div className="contact-info mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                    Whether you have a question, feedback, or need assistance, our team is here to help. Feel free to reach out to us through any of the following channels:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                        <strong>Email:</strong> support@foodiehub.com
                    </li>
                    <li>
                        <strong>Phone:</strong> +1 234 567 890
                    </li>
                    <li>
                        <strong>Address:</strong> 123 Foodie Street, Gourmet City, FL 56789
                    </li>
                </ul>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                <form className="space-y-6">
                    <div className="form-group">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Enter your message"
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="submit-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;