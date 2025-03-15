import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // 1. Load cart from localStorage on first render
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // 2. Sync cart to localStorage on every update (for redundancy)
    // If you prefer to only update localStorage in the actions below,
    // you can remove this effect. However, leaving it ensures the cart
    // is always saved even if you add new actions later.
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // 3. Cart Actions

    // Add item to cart (or increase quantity if it already exists)
    const addToCart = (product) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === product.id);
            let newCart;
            if (index !== -1) {
                newCart = prevCart.map((item, i) =>
                    i === index ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                newCart = [...prevCart, { ...product, quantity: 1 }];
            }
            // Update localStorage immediately
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter((item) => item.id !== id);
            // Update localStorage immediately
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    // Update item quantity
    const updateQuantity = (id, amount) => {
        setCart((prevCart) => {
            const newCart = prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            );
            // Update localStorage immediately
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}


