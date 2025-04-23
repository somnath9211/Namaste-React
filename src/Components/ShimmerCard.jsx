import React from "react";

const ShimmerCard = () => {
    return (
        <div className="shimmer-card border border-gray-200 rounded-lg shadow-md p-4 animate-pulse ">
            {/* Shimmer Image */}
            <div className="shimmer-image bg-gray-300 w-full h-40 rounded-lg mb-4"></div>

            {/* Shimmer Details */}
            <div className="shimmer-details space-y-2">
                <div className="shimmer-line shimmer-title bg-gray-300 h-4 w-3/4 rounded"></div>
                <div className="shimmer-line shimmer-cuisine bg-gray-300 h-3 w-1/2 rounded"></div>
                <div className="shimmer-info flex justify-between items-center">
                    <div className="shimmer-line shimmer-rating bg-gray-300 h-3 w-1/4 rounded"></div>
                    <div className="shimmer-line shimmer-cost bg-gray-300 h-3 w-1/4 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerCard;