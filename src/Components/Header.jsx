import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BRAND_LOGO } from "../utils/constent";
import { FaHome, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const cart = useSelector((store) => store.cart.items);
    const cartItemsCount = cart.length;

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex justify-between items-center px-4 md:px-8 py-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <img
                        className="h-12 w-12 object-contain"
                        src={BRAND_LOGO}
                        alt="brand_logo"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">FoodieHub</h1>
                </div>

                {/* Location Section (hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-2 text-gray-600">
                    <span className="text-sm font-medium">Tukkuguda, Telengana, India</span>
                    <span className="text-lg">▼</span>
                </div>

                {/* Hamburger Icon (visible on small screens) */}
                <button
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Section (hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex items-center space-x-6">
                        <li>
                            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <FaHome className="text-lg" />
                                <span className="text-sm font-medium">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <FaUser className="text-lg" />
                                <span className="text-sm font-medium">Somnath</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                <FaShoppingCart className="text-lg" />
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {navOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <ul className="flex flex-col items-start px-6 py-4 space-y-4">
                        <li>
                            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900" onClick={() => setNavOpen(false)}>
                                <FaHome className="text-lg" />
                                <span className="text-sm font-medium">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium" onClick={() => setNavOpen(false)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium" onClick={() => setNavOpen(false)}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900" onClick={() => setNavOpen(false)}>
                                <FaUser className="text-lg" />
                                <span className="text-sm font-medium">Somnath</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="relative flex items-center space-x-2 text-gray-700 hover:text-gray-900" onClick={() => setNavOpen(false)}>
                                <FaShoppingCart className="text-lg" />
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;