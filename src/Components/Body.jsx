import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

const Body = () => {
    // State variables
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    // Fetch restaurant data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2090762&lng=78.4761307&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            const restaurants =
                json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
            console.log(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Toggle between all restaurants and top-rated restaurants
    const toggleFilter = () => {
        if (isFiltered) {
            setFilteredRestaurants(allRestaurants);
            setIsFiltered(false);
        } else {
            const highRated = allRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(highRated);
            setIsFiltered(true);
        }
    };

    // Search function triggered by the Search button
    const handleSearch = () => {
        if (searchText.trim() === "") {
            setFilteredRestaurants(allRestaurants); // Reset to all restaurants if search is empty
        } else {
            const searchResults = allRestaurants.filter((restaurant) => {
                const nameMatch = restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                const cuisinesMatch = restaurant.info.cuisines.some((cuisine) =>
                    cuisine.toLowerCase().includes(searchText.toLowerCase())
                );
                return nameMatch || cuisinesMatch;
            });
            setFilteredRestaurants(searchResults);
        }
    };

    return (
        <div className="body p-4 max-w-7xl mx-auto">
            {/* Search Bar and Filter Buttons */}
            <div className="search-filter-bar flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
                {/* Search Bar */}
                <div className="flex w-full md:w-1/2 space-x-2">
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Search for restaurants or cuisines..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="flex space-x-4">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        onClick={toggleFilter}
                    >
                        {isFiltered ? "Show All Restaurants" : "Show Top Rated Restaurants"}
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                        onClick={() => {
                            setSearchText(""); // Clear the search text
                            setFilteredRestaurants(allRestaurants); // Reset to all restaurants
                            setIsFiltered(false); // Reset the filter state
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Conditional Rendering: Show Shimmer UI or Restaurant Cards */}
            {isLoading ? (
                <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array(20)
                        .fill("")
                        .map((_, index) => (
                            <ShimmerCard key={index} />
                        ))}
                </div>
            ) : (
                <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredRestaurants.map((restaurant) => (
                        <Link
                            to={"/resturant/" + restaurant.info.id}
                            key={restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant.info} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;