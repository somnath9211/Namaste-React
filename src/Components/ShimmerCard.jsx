import React from "react";

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-details">
                <div className="shimmer-line shimmer-title"></div>
                <div className="shimmer-line shimmer-cuisine"></div>
                <div className="shimmer-info">
                    <div className="shimmer-line shimmer-rating"></div>
                    <div className="shimmer-line shimmer-cost"></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerCard;