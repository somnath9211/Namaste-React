import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const MenuCard = ({ menu }) => {
    useEffect(() => {
        console.log("Menu Card Data", menu); // Log the menu prop for debugging
    }, []); // Log when menu prop changes

    const { title, itemCards } = menu; // Destructure the card from menu prop
    // const { title } = card; // Destructure itemCards and title from card
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle expand/collapse

    const toggleExpand = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    return (
        <div className="menu-card border border-gray-200 rounded-lg shadow-md mb-4">
            {/* Header Section */}
            <div
                className="menu-card-header flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
                onClick={toggleExpand}
            >
                <h3 className="menu-card-title text-lg font-semibold text-gray-800">
                    {title || "Menu"} {itemCards?.length > 0 ? `(${itemCards.length})` : ""}
                </h3>
                <span className="menu-card-arrow text-gray-600 text-xl">
                    {isExpanded ? "▲" : "▼"}
                </span>
            </div>

            {/* Collapsible Content */}
            {isExpanded && (
                <div className="menu-card-content p-4 bg-white">
                    {itemCards?.map((item) => (
                        <MenuItem key={item?.card?.info?.id} items={item} />
                    ))}
                </div>
            )}


        </div>
    );
};

export default MenuCard;