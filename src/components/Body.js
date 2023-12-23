import { restList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [update, setUpdate] = useState(restList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterList = update.filter((res) => res.info.avgRating > 4);
            setUpdate(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {update.map((res, id) => (
          <RestaurantCard key={id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
