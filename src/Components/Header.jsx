import { BRAND_LOGO } from "../utils/constent";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={BRAND_LOGO}
                    alt="brand_logo"
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

export default Header;