import { useState } from "react";
import { Link } from "react-router-dom";

// Mock product data
const product = {
    id: "1",
    name: "Beni Shoga",
    price: 10.0,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci cursus, lacinia nisi ac, tempor lorem. Duis in vestibulum felis, id molestie sapien. Nunc vel felis non massa pretium vehicula ut vitae diam. Aenean lobortis fringilla mollis. Nullam venenatis velit vitae magna congue vulputate. Nunc sagittis purus ligula, a pulvinar magna venenatis nec.",
    images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-VLjXOFeOVo7twseF8njfGvstE9f3H2.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-VLjXOFeOVo7twseF8njfGvstE9f3H2.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-VLjXOFeOVo7twseF8njfGvstE9f3H2.png",
    ],
};

export default function ProductDetail() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Number.parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        console.log("Adding to cart:", {
            productId: product.id,
            quantity: quantity,
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-gray-500">
                    <li>
                        <Link to="/shop" className="hover:text-gray-700">
                            Shop
                        </Link>
                    </li>
                    <li>›</li>
                    <li className="text-gray-700">{product.name}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="flex gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-20 h-20 border rounded-lg overflow-hidden ${
                                    selectedImage === index ? "border-gray-900" : "border-gray-200"
                                }`}
                            >
                                <img
                                    src={image || "/placeholder.svg"}
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
                                src={product.images[selectedImage] || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-medium mb-4">{product.name}</h1>
                    <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

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
                        className="w-full bg-[#E88D83] text-white py-4 rounded-lg hover:bg-[#E27B70] transition-colors"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}



