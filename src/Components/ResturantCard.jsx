import React from "react"; // Import React library
import { CloudinaryImageLink } from "../utils/constent"; // Import the Cloudinary image link constant

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo } = resData; // Destructure properties from resData

    return (
        <div className="res-card border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition">
            {/* Restaurant Image */}
            <img
                className="res-image w-full h-40 object-cover rounded-lg mb-4"
                src={`${CloudinaryImageLink}${cloudinaryImageId}`}
                alt={name}
            />

            {/* Restaurant Details */}
            <div className="res-details">
                <h2 className="res-name text-lg font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="res-cuisine text-sm text-gray-600 mb-2">
                    {cuisines.join(", ")}
                </p>
                <div className="res-info flex justify-between items-center text-sm text-gray-600">
                    <span
                        className={`res-rating px-2 py-1 rounded-lg ${avgRating >= 4
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                    >
                        ⭐ {avgRating}
                    </span>
                    <span className="res-delivery-time">{deliveryTime} mins</span>
                    <span className="res-cost">{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;