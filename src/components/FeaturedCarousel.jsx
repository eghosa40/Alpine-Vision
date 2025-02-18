import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import showcase1 from "src/assets/showcase1.webp";
import showcase2 from "src/assets/showcase2.webp";

// Mock product data
const products = [
    {
        id: "1",
        name: "Alpine Pro X",
        price: 199.99,
        description: "High-performance goggles with anti-fog technology.",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: "2",
        name: "Summit Shield",
        price: 249.99,
        description: "Maximum UV protection for high-altitude skiing.",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: "3",
        name: "Glacier View",
        price: 179.99,
        description: "Wide-view lens for panoramic mountain vistas.",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: "4",
        name: "Powder Perfection",
        price: 219.99,
        description: "High performance in powder conditions.",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: "5",
        name: "Arctic Explorer",
        price: 289.99,
        description: "For the extreme cold, ultimate performance.",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
];

// Helper function to get exactly 3 products, wrapping around if needed
const getDisplayedProducts = (currentIndex) => {
    const slice = products.slice(currentIndex, currentIndex + 3);
    if (slice.length < 3) {
        return slice.concat(products.slice(0, 3 - slice.length));
    }
    return slice;
};

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayedProducts = getDisplayedProducts(currentIndex);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Featured Collection
                </h2>
                <div className="relative">
                    <motion.div
                        key={currentIndex} // This key triggers the fade transition when currentIndex changes
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center"
                    >
                        {displayedProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="mx-2 w-full max-w-sm overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl sm:w-64"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <img
                                        src={product.imageUrl || showcase1}
                                        alt={product.name}
                                        onError={(e) => {
                                            if (!e.target.dataset.fallback) {
                                                e.target.dataset.fallback = "true";
                                                e.target.src = showcase2;
                                            }
                                        }}
                                        className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                                    <p className="mb-4 text-lg font-semibold text-gray-700">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <p className="mb-4 text-sm text-gray-600">{product.description}</p>
                                    <div className="flex justify-between">
                                        <Button
                                            as={Link}
                                            to={`/product/${product.id}`}
                                            className="mt-4 px-8 py-3 !bg-black !text-white !border-black shadow-sm transition-colors duration-300"
                                        >
                                            View Details
                                        </Button>
                                        <Button
                                            onClick={() => console.log("Add to cart:", product.id)}
                                            className="mt-4 px-8 py-3 !bg-black !text-white !border-black shadow-sm transition-colors duration-300"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all duration-200 ease-in-out hover:bg-gray-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all duration-200 ease-in-out hover:bg-gray-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCarousel;

