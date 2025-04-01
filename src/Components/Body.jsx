import React, { useState } from "react";
import RestaurantCard from "./ResturantCard";
import { restaurantList } from "../utils/mockData.jsx";

const Body = () => {
    // State to manage the list of restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    const [isFiltered, setIsFiltered] = useState(false); // State to track filter toggle

    // Function to toggle between all restaurants and top-rated restaurants
    const filterHighRatedRestaurants = () => {
        if (isFiltered) {
            // If already filtered, show all restaurants
            setFilteredRestaurants(restaurantList);
            setIsFiltered(false);
        } else {
            // Filter restaurants with avgRating > 4
            const highRated = restaurantList.filter(
                (restaurant) => restaurant.data.avgRating > 4
            );
            setFilteredRestaurants(highRated);
            setIsFiltered(true);
        }
    };

    return (
        <div className="body">
            {/* Filter Button */}
            <button className="filter-button" onClick={filterHighRatedRestaurants}>
                {isFiltered ? "Show All Restaurants" : "Show Top Rated Restaurants"}
            </button>

            {/* Restaurant Cards */}
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;