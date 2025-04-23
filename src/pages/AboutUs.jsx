import React from "react";

const AboutUs = () => {
    return (
        <div className="about-us container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="about-header text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
                <p className="text-lg text-gray-600">Delivering Happiness, One Meal at a Time!</p>
            </div>

            {/* Content Section */}
            <div className="about-content space-y-8">
                {/* Who We Are */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-gray-600">
                        At FoodieHub, we are a team of passionate food lovers and tech enthusiasts who believe in the power of great food to bring people together. Our mission is to connect you with your favorite restaurants and cuisines, making food delivery fast, reliable, and enjoyable.
                    </p>
                </section>

                {/* Our Mission */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        We aim to revolutionize the food delivery experience by combining cutting-edge technology with a love for food. Whether you're craving a quick snack, a hearty meal, or a gourmet experience, we ensure that your food arrives fresh, hot, and on time.
                    </p>
                </section>

                {/* Our Vision */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                        To become the most trusted and loved food delivery platform, bringing joy to millions of customers and empowering local restaurants to thrive in the digital age.
                    </p>
                </section>

                {/* Why Choose Us */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Access to a wide variety of restaurants and cuisines.</li>
                        <li>Lightning-fast and reliable delivery service.</li>
                        <li>Seamless ordering experience through our user-friendly app.</li>
                        <li>Exclusive deals, discounts, and loyalty rewards for our customers.</li>
                        <li>Dedicated customer support to assist you anytime.</li>
                    </ul>
                </section>

                {/* Our Values */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Customer First:</strong> We prioritize your satisfaction above all else.</li>
                        <li><strong>Innovation:</strong> We constantly improve to provide the best experience.</li>
                        <li><strong>Community:</strong> We support local restaurants and communities.</li>
                        <li><strong>Sustainability:</strong> We are committed to eco-friendly practices.</li>
                    </ul>
                </section>

                {/* Our Journey */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Journey</h2>
                    <p className="text-gray-600">
                        Since our inception, FoodieHub has grown from a small startup to a trusted name in food delivery. With thousands of partner restaurants and millions of happy customers, we are proud to be part of your dining experience.
                    </p>
                </section>

                {/* Meet the Team */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                    <p className="text-gray-600">
                        Behind every successful delivery is a dedicated team of professionals who work tirelessly to ensure your satisfaction. From our delivery partners to our tech experts, every member of the FoodieHub family shares a passion for excellence.
                    </p>
                </section>

                {/* Join Our Journey */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Journey</h2>
                    <p className="text-gray-600">
                        We’re constantly evolving and improving to serve you better. Join us on this journey as we continue to make food delivery more convenient, delightful, and sustainable for everyone.
                    </p>
                </section>
            </div>

            {/* Call-to-Action Section */}
            <div className="about-cta text-center mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Satisfy Your Cravings?</h2>
                <p className="text-gray-600 mb-6">Download the FoodieHub app today and enjoy the best food delivery experience!</p>
                <button className="cta-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                    Download App
                </button>
            </div>
        </div>
    );
};

export default AboutUs;