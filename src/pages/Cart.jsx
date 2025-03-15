import { Link } from "react-router-dom";
import { useCart } from "src/context/CartContext";
import { Button } from "src/components/ui/button";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Format currency to GBP
    const formatPrice = (amount) =>
        new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(amount);

    // Empty Cart View
    if (cart.length === 0) {
        return (
            <div className="w-full bg-white text-black pt-[80px]">
                <div className="max-w-screen-lg mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Your cart is empty</h1>
                    <p className="text-sm sm:text-base mb-4">
                        Add some items to your cart to see them here.
                    </p>
                    <Button
                        asChild
                        className="bg-black text-white transition duration-200 px-6 py-3 text-sm sm:text-base font-semibold rounded-sm"
                    >
                        <Link to="/shop">Continue Shopping</Link>
                    </Button>
                </div>
            </div>
        );
    }

    // Cart with Items
    return (
        <div className="w-full bg-white text-black pt-[80px]">
            <div className="max-w-screen-lg mx-auto px-4 py-8">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Shopping Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT: Cart Items */}
                    <div className="lg:col-span-8">
                        <ul className="flex flex-col space-y-6">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                                >
                                    {/* Product Details */}
                                    <div className="flex items-start space-x-4">
                                        {/* Product Image */}
                                        <div className="w-20 h-20 bg-white rounded-md overflow-hidden">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                className="w-full h-full object-contain bg-white"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-lg sm:text-xl font-medium">{item.name}</h2>
                                            <p className="text-sm mt-1">{formatPrice(item.price)} each</p>
                                        </div>
                                    </div>

                                    {/* Controls & Pricing */}
                                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center space-x-1">
                                            {/* Decrease Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    updateQuantity(item.id, -1); // subtract 1
                                                }}
                                                className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md transition duration-200"
                                                title="Decrease quantity"
                                            >
                                                -
                                            </button>
                                            {/* Quantity Display */}
                                            <span className="w-[40px] h-[40px] flex items-center justify-center bg-white text-black text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            {/* Increase Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    updateQuantity(item.id, 1); // add 1
                                                }}
                                                className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md transition duration-200"
                                                title="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Item Total Price */}
                                        <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>

                                        {/* Remove (X) Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeFromCart(item.id);
                                            }}
                                            className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md transition duration-200"
                                            title="Remove item"
                                        >
                                            X
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="flex flex-col">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm">Subtotal</span>
                                <span className="text-base font-semibold">{formatPrice(subtotal)}</span>
                            </div>
                            <Button
                                asChild
                                className="bg-black text-white transition duration-200 py-3 text-sm sm:text-base font-semibold rounded-sm"
                            >
                                <Link to="/">Checkout</Link>
                            </Button>
                            <p className="text-xs mt-4">
                                Shipping and taxes will be calculated at checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}