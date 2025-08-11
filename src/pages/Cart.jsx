import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/CartSlice";
import { CloudinaryImageLink } from "../utils/constent.jsx";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items); // Access the cart items from the Redux store
    console.log("Cart Items:", cartItems); // Log the cart items for debugging

    // Function to calculate the total price
    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => {
                const price = item?.card?.info?.price / 100 || 0; // Use 0 if price is undefined
                const quantity = item.quantity || 1; // Use 1 if quantity is undefined
                return total + price * quantity;
            }, 0)
            .toFixed(2);
    };

    // Function to handle increasing the quantity of an item
    const handleIncreaseQuantity = (item) => {
        dispatch(addItem({ item })); // Add 1 to the item's quantity
    };

    // Function to handle decreasing the quantity of an item
    const handleDecreaseQuantity = (id) => {
        const item = cartItems.find((item) => item.card.info.id === id);
        if (item.quantity > 1) {
            dispatch(removeItem(id)); // Decrease the quantity by 1
        } else {
            dispatch(removeItem(id)); // Remove the item if quantity is 1
        }
    };

    // Function to handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch the clearCart action
    };

    return (
        <div className="cart-page container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-center text-lg">
                    Your cart is empty. Add some delicious food to your cart!
                </p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item, index) => (
                            <div
                                key={`${item?.card?.info?.id}-${index}`} // Combine item ID and index to ensure uniqueness
                                className="cart-item flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
                            >
                                {/* Item Photo */}
                                <img
                                    src={`${CloudinaryImageLink}${item?.card?.info?.imageId}`}
                                    alt={item?.card?.info?.name || "Item"}
                                    className="h-20 w-20 object-cover rounded-lg"
                                />

                                {/* Item Details */}
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {item?.card?.info?.name || "Unnamed Item"}
                                    </h2>
                                    <p className="text-gray-600">
                                        Price: ₹{(item?.card?.info?.price / 100 || 0).toFixed(2)}
                                    </p>
                                    <p className="text-gray-600">
                                        Total: ₹
                                        {((item?.card?.info?.price / 100 || 0) * (item.quantity || 1)).toFixed(2)}
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="quantity-controls flex items-center space-x-4">
                                    <button
                                        className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-400"
                                        onClick={() => handleDecreaseQuantity(item.card.info.id)}
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-medium">{item.quantity || 1}</span>
                                    <button
                                        className="bg-gray-300 text-gray-800 px-2 py-1 mx-2 rounded-lg hover:bg-gray-400"
                                        onClick={() => handleIncreaseQuantity(item)}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    className="remove-button bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                    onClick={() => handleDecreaseQuantity(item.card.info.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Total Price: <span className="font-bold">₹{calculateTotal()}</span>
                        </p>
                        <div className="flex flex-col space-y-4">
                            <button
                                className="checkout-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                            >
                                Proceed to Checkout
                            </button>
                            <button
                                className="clear-cart-button bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
                                onClick={handleClearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;