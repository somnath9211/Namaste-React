import React from "react";
import MenuCard from "../Components/MenuCard.jsx";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu.js";
import ShimmerRestaurant from "../Components/ShimmerRestaurant.jsx";

const Resturant = () => {
    const { resId } = useParams(); // Get restaurant ID from URL parameters
    const { resInfo, menuData } = useResturantMenu(resId); // Custom hook to fetch restaurant menu data
    // Show shimmer loader if data is not available
    if (!resInfo || menuData.length === 0) return <ShimmerRestaurant />;

    return (
        <div className="restaurant-page container mx-auto px-4 py-8">
            {/* Restaurant Header */}
            <div className="restaurant-header text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{resInfo.name}</h1>
                <p className="text-lg text-gray-600">{resInfo.costForTwoMessage}</p>
            </div>

            {/* Restaurant Details */}
            <div className="restaurant-card bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
                <div className="restaurant-meta flex justify-between items-center mb-4">
                    <span className="rating text-green-600 font-semibold">
                        ⭐ {resInfo.avgRating} ({resInfo.totalRatingsString})
                    </span>
                    <span className="delivery-time text-gray-600">
                        {resInfo.sla.deliveryTime} mins
                    </span>
                </div>
                <p className="cuisine text-gray-600 mb-2">
                    <strong>Cuisines:</strong> {resInfo.cuisines.join(", ")}
                </p>
                <p className="outlet text-gray-600">
                    <strong>Outlet:</strong> {resInfo.areaName}
                </p>
                <div className="restaurant-offer mt-4 text-green-500 font-medium">
                    Free delivery on orders above ₹199
                </div>
            </div>

            {/* Menu Section */}
            <div className="menu-section">
                <h2 className="menu-header text-2xl font-semibold text-gray-800 mb-6 text-center">
                    — MENU —
                </h2>

                {/* Search Bar */}
                <div className="menu-search flex justify-center mb-6 max-w-3xl mx-auto">
                    <input
                        type="text"
                        className="search-input w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Search for dishes"
                    />
                    <button className="search-button bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-600 transition">
                        <span role="img" aria-label="search">
                            🔍
                        </span>
                    </button>
                </div>
            </div>

            {/* Menu Card Section */}
            <div className="menu-card-section divide-y divide-gray-200 max-w-3xl mx-auto">
                {menuData.map((menuItem, index) => (
                    <MenuCard
                        key={index}
                        menu={menuItem.card.card}
                        isExpanded={true} // Set to true to show all menu items by default

                    />
                ))}
            </div>
        </div>
    );
};

export default Resturant;