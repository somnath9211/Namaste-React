import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./constent.jsx"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.ZvTuuf2Ppo5CVq6T03AJLwHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="logo"
        />
        <h1 className="brand-name">FoodieHub</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li>
            <a href="#cart">
              <img
                className="cart-logo"
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                alt="cart"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props; // Destructure the props
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwoString } = resData.data;

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660029979/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="res-details">
        <h2 className="res-name">{name}</h2>
        <p className="res-cuisine">{cuisines.join(", ")}</p>
        <div className="res-info">
          <span className={`res-rating ${avgRating >= 4 ? "high-rating" : "low-rating"}`}>
            ⭐ {avgRating}
          </span>
          <span className="res-delivery-time">{deliveryTime} mins</span>
          <span className="res-cost">{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
        })}

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


