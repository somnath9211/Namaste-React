import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useCartStore = create(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addItem: (item) => {
                    const id = item.card?.info?.id;
                    if (!id) return;
                    const existingItem = get().cart.find(i => i.card?.info?.id === id);
                    if (existingItem) {
                        set({
                            cart: get().cart.map(i =>
                                i.card?.info?.id === id
                                    ? { ...i, quantity: (i.quantity || 1) + 1 }
                                    : i
                            ),
                        });
                    } else {
                        set({ cart: [...get().cart, { ...item, quantity: 1 }] });
                    }
                },
                removeItem: (id) => {
                    const existingItem = get().cart.find(i => i.card?.info?.id === id);
                    if (existingItem && existingItem.quantity > 1) {
                        set({
                            cart: get().cart.map(i =>
                                i.card?.info?.id === id
                                    ? { ...i, quantity: i.quantity - 1 }
                                    : i
                            ),
                        });
                    } else {
                        set({
                            cart: get().cart.filter(i => i.card?.info?.id !== id),
                        });
                    }
                },
                clearCart: () => set({ cart: [] }),
            }),
            { name: 'cart-storage' }
        )
    )
);

export default useCartStore;