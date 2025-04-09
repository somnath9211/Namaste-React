import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
    // State to manage the list of restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false); // State to track filter toggle
    const [isLoading, setIsLoading] = useState(true); // State to track loading

    // Fetch data from API when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true); // Set loading to true before fetching
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3211538&lng=78.559541&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        // Set the fetched restaurants to the state
        setFilteredRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
        setIsLoading(false); // Set loading to false after fetching
    };

    // Function to toggle between all restaurants and top-rated restaurants
    const filterHighRatedRestaurants = () => {
        if (isFiltered) {
            // If already filtered, fetch all restaurants again
            fetchData();
            setIsFiltered(false);
        } else {
            // Filter restaurants with avgRating > 4
            const highRated = filteredRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
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

            {/* Conditional Rendering: Show Shimmer UI or Restaurant Cards */}
            {isLoading ? (
                <div className="shimmer-container">
                    {Array(20)
                        .fill("")
                        .map((_, index) => (
                            <ShimmerCard key={index} />
                        ))}
                </div>
            ) : (
                <div className="res-container">
                    {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;