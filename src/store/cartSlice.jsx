import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Initial state of the cart
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); // Add item to the cart
        },
        removeItem: (state, action) => {
            // Remove item by ID
            const id = action.payload; // Assuming payload is the ID of the item to remove
            state.items = state.items.filter((item) => item.card.info.id !== id);
        },
        clearCart: (state) => {
            state.items = []; // Clear the cart
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // Export actions
export default cartSlice.reducer; // Export reducer