import React, { useState } from "react";

const Cart = () => {
    // Sample cart items (you can replace this with dynamic data)
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Pizza Margherita", price: 12.99, quantity: 1 },
        { id: 2, name: "Cheeseburger", price: 8.99, quantity: 2 },
        { id: 3, name: "Pasta Alfredo", price: 10.99, quantity: 1 },
    ]);

    // Function to calculate the total price
    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Function to handle quantity change
    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    // Function to remove an item from the cart
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="cart-page container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-center">
                    Your cart is empty. Add some delicious food to your cart!
                </p>
            ) : (
                <div className="cart-items space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="cart-item flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                            {/* Item Details */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">
                                    Price: ${item.price.toFixed(2)}
                                </p>
                                <p className="text-gray-600">
                                    Total: $
                                    {(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="quantity-controls flex items-center space-x-4">
                                <button
                                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    onClick={() =>
                                        handleQuantityChange(item.id, -1)
                                    }
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium">
                                    {item.quantity}
                                </span>
                                <button
                                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    onClick={() =>
                                        handleQuantityChange(item.id, 1)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            {/* Remove Button */}
                            <button
                                className="remove-button text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Cart Summary */}
            {cartItems.length > 0 && (
                <div className="cart-summary mt-8 border-t border-gray-200 pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Cart Summary
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Total Price: ${calculateTotal()}
                    </p>
                    <button className="checkout-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;