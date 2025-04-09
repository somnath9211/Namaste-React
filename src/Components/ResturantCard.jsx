import React from "react"; // Import React library
import { CloudinaryImageLink } from "../utils/constent"; // Import the Cloudinary image link constant

const RestaurantCard = (props) => {
    const { resData } = props; // Destructure the props
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo } = resData; // Directly destructure from resData

    return (
        <div className="res-card">
            <img
                className="res-image"
                src={`${CloudinaryImageLink}${cloudinaryImageId}`}
                alt={name}
            />
            <div className="res-details">
                <h2 className="res-name">{name}</h2>
                <p className="res-cuisine">{cuisines.join(", ")}</p>
                <div className="res-info">
                    <span className={`res-rating ${avgRating >= 4 ? "high-rating" : "low-rating"}`}>
                        ⭐ {avgRating}
                    </span>
                    <span className="res-cost">{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;