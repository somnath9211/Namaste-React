import React from "react";
import { CloudinaryImageLink } from "../utils/constent.jsx";
import useCartStore from "../store/appStore.jsx"; // <-- Import your Zustand store

const MenuItem = ({ items }) => {
    const { name, price, ratings, imageId } = items?.card?.info;
    const addItem = useCartStore(state => state.addItem); // <-- Get addItem from Zustand

    const handleAddToCart = (item) => {
        console.log("Adding to cart:", item);
        addItem(item); // <-- Use Zustand's addItem
    };

    return (
        <div className="menu-item flex justify-between items-center border-b border-gray-200 py-4">
            {/* Left Section: Details */}
            <div className="menu-item-details flex-1 pr-4">
                <h4 className="menu-item-name text-lg font-semibold text-gray-800">{name}</h4>
                <p className="menu-item-price text-sm text-gray-600">₹{price / 100}</p>
                {ratings?.aggregatedRating?.rating && (
                    <p className="menu-item-rating text-sm text-green-600 flex items-center">
                        ⭐ {ratings.aggregatedRating.rating}{" "}
                        <span className="menu-item-rating-count text-gray-500 ml-1">
                            ({ratings.aggregatedRating.ratingCountV2})
                        </span>
                    </p>
                )}
            </div>

            {/* Right Section: Image and Add Button */}
            <div className="menu-item-image-container flex flex-col items-center">
                <img
                    src={`${CloudinaryImageLink}${imageId}`}
                    alt={name}
                    className="menu-item-image w-20 h-20 object-cover rounded-lg mb-2"
                />
                <button
                    className="menu-item-add-button bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                    onClick={() => handleAddToCart(items)}
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default MenuItem;