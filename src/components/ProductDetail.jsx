import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "src/context/CartContext";
import products from "src/data/products";

export default function ProductDetail() {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    useEffect(() => {
        if (!product) {
            const timer = setTimeout(() => navigate("/shop"), 3000);
            return () => clearTimeout(timer);
        }
    }, [product, navigate]);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-xl text-gray-700 mb-4">Product not found.</p>
                <Link to="/shop" className="text-blue-600 underline">
                    Return to Shop
                </Link>
            </div>
        );
    }

    // Ensure hoverImage exists; fallback to main image if missing
    const images = [product.image, product.hoverImage || product.image];

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        console.log("Added to cart:", product);
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="flex gap-4">
                        {/* Thumbnails */}
                        <div className="flex flex-col gap-4">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-20 h-20 border rounded-lg overflow-hidden bg-white ${
                                        selectedImage === index ? "border-gray-900" : "border-gray-200"
                                    }`}
                                >
                                    <img
                                        src={img || "/placeholder.svg"}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1">
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src={images[selectedImage] || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-4xl font-medium text-black mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl text-black mb-6">
                            {new Intl.NumberFormat("en-GB", {
                                style: "currency",
                                currency: "GBP",
                            }).format(product.price)}
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <label htmlFor="quantity" className="block text-gray-700 mb-2">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}