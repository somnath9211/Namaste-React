import React from "react";
import { Link } from "react-router-dom";
import { BRAND_LOGO } from "../utils/constent";
import { FaHome, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img
                    className="h-12 w-12 object-contain"
                    src={BRAND_LOGO}
                    alt="brand_logo"
                />
                <h1 className="text-2xl font-bold text-gray-800">FoodieHub</h1>
            </div>

            {/* Location Section */}
            <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm font-medium">Purulia, West Bengal, India</span>
                <span className="text-lg">▼</span>
            </div>

            {/* Navigation Section */}
            <div className="flex items-center space-x-6">
                <ul className="flex items-center space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                        >
                            <FaHome className="text-lg" />
                            <span className="text-sm font-medium">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                        >
                            <FaUser className="text-lg" />
                            <span className="text-sm font-medium">Somnath</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                        >
                            <FaShoppingCart className="text-lg" />
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;