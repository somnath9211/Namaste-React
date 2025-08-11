import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "../store/CartSlice"; // Import the cart slice reducer

const appStore = configureStore({
    reducer: {
        cart: cartReduser, // Add the cart slice reducer to the store
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true, // Enable serializable check
        }),

});
appStore.dispatch({ type: "cart/clearCart" });
export default appStore; 