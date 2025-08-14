import React from "react";
import { CloudinaryImageLink } from "../utils/constent.jsx";
import useCartStore from "../store/appStore.jsx";

const Cart = () => {
    const cartItems = useCartStore(state => state.cart);
    const addItem = useCartStore(state => state.addItem);
    const removeItem = useCartStore(state => state.removeItem);
    const clearCart = useCartStore(state => state.clearCart);

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => {
                const price = item?.card?.info?.price / 100 || 0;
                const quantity = item.quantity || 1;
                return total + price * quantity;
            }, 0)
            .toFixed(2);
    };

    const handleIncreaseQuantity = (item) => {
        addItem(item);
    };

    const handleDecreaseQuantity = (id) => {
        const item = cartItems.find((item) => item.card.info.id === id);
        if (item.quantity > 1) {
            removeItem(id);
        } else {
            removeItem(id);
        }
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="cart-page container mx-auto px-2 md:px-8 py-8 min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" className="w-32 h-32 mb-6 opacity-70" />
                    <p className="text-gray-500 text-xl font-medium">Your cart is empty.<br />Add some delicious food!</p>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.card.info.id}
                                className="cart-item flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4"
                            >
                                {/* Item Photo */}
                                <img
                                    src={`${CloudinaryImageLink}${item?.card?.info?.imageId}`}
                                    alt={item?.card?.info?.name || "Item"}
                                    className="h-24 w-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 border"
                                />

                                {/* Item Details */}
                                <div className="flex-1 w-full md:w-auto">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                        {item?.card?.info?.name || "Unnamed Item"}
                                    </h2>
                                    <p className="text-gray-600 text-base">
                                        Price: <span className="font-bold">₹{(item?.card?.info?.price / 100 || 0).toFixed(2)}</span>
                                    </p>
                                    <p className="text-gray-600 text-base">
                                        Total: <span className="font-bold">₹{((item?.card?.info?.price / 100 || 0) * (item.quantity || 1)).toFixed(2)}</span>
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4 md:mt-0">
                                    <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                                        <button
                                            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-400 transition"
                                            onClick={() => handleDecreaseQuantity(item.card.info.id)}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold mx-3">{item.quantity || 1}</span>
                                        <button
                                            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-400 transition"
                                            onClick={() => handleIncreaseQuantity(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary bg-white p-8 rounded-xl shadow-md flex flex-col justify-between min-w-[300px] h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cart Summary</h2>
                        <p className="text-lg text-gray-600 mb-6 text-center">
                            Total Price: <span className="font-bold text-2xl text-green-600">₹{calculateTotal()}</span>
                        </p>
                        <button
                            className="checkout-button bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition mb-4"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            className="clear-cart-button bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;