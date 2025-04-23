import React from "react";

const ShimmerRestaurant = () => {
    return (
        <div className="shimmer-restaurant-page container mx-auto px-4 py-8">
            {/* Shimmer Restaurant Header */}
            <div className="shimmer-header text-center mb-8">
                <div className="bg-gray-300 h-8 w-1/3 mx-auto rounded mb-4"></div>
                <div className="bg-gray-300 h-4 w-1/4 mx-auto rounded"></div>
            </div>

            {/* Shimmer Restaurant Details */}
            <div className="shimmer-restaurant-card bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
                <div className="shimmer-meta flex justify-between items-center mb-4">
                    <div className="bg-gray-300 h-6 w-1/4 rounded"></div>
                    <div className="bg-gray-300 h-6 w-1/4 rounded"></div>
                </div>
                <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/3 mb-2 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>

            {/* Shimmer Menu Section */}
            <div className="shimmer-menu-section">
                <div className="bg-gray-300 h-6 w-1/3 mx-auto mb-6 rounded"></div>

                {/* Shimmer Search Bar */}
                <div className="shimmer-search flex justify-center mb-6 max-w-3xl mx-auto">
                    <div className="bg-gray-300 h-10 w-2/3 rounded-lg"></div>
                    <div className="bg-gray-300 h-10 w-12 rounded-lg ml-2"></div>
                </div>

                {/* Shimmer Menu Tags */}
                <div className="shimmer-tags flex justify-center space-x-4 mb-8">
                    <div className="bg-gray-300 h-8 w-24 rounded-lg"></div>
                    <div className="bg-gray-300 h-8 w-24 rounded-lg"></div>
                </div>
            </div>

            {/* Shimmer Menu Card Section */}
            <div className="shimmer-menu-card-section divide-y divide-gray-200 max-w-3xl mx-auto">
                {Array(5)
                    .fill("")
                    .map((_, index) => (
                        <div
                            key={index}
                            className="shimmer-menu-card py-4 flex justify-between items-center"
                        >
                            <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                            <div className="bg-gray-300 h-4 w-8 rounded"></div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ShimmerRestaurant;