import React, { useState } from "react";
import { useCart } from "src/context/CartContext";
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
        imageUrl: showcase1,
    },
    {
        id: "2",
        name: "Summit Shield",
        price: 249.99,
        description: "Maximum UV protection for high-altitude skiing.",
        imageUrl: showcase1,
    },
    {
        id: "3",
        name: "Glacier View",
        price: 179.99,
        description: "Wide-view lens for panoramic mountain vistas.",
        imageUrl: showcase2,
    },
    {
        id: "4",
        name: "Powder Perfection",
        price: 219.99,
        description: "High performance in powder conditions.",
        imageUrl: showcase1,
    },
    {
        id: "5",
        name: "Arctic Explorer",
        price: 289.99,
        description: "For the extreme cold, ultimate performance.",
        imageUrl: showcase2,
    },
];
const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart(); // ✅ Now addToCart is accessible

    const displayedProducts = products.slice(currentIndex, currentIndex + 3);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

// Helper function to get exactly 3 products, wrapping around if needed
const getDisplayedProducts = (currentIndex) => {
    const slice = products.slice(currentIndex, currentIndex + 3);
    if (slice.length < 3) {
        return slice.concat(products.slice(0, 3 - slice.length));
    }
    return slice;
};

const ProductCard = ({ product }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out border-2 border-gray-700 p-6">
            <Link to={`/product/${product.id}`} className="block">
                <img
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    onError={(e) => {
                        if (!e.target.dataset.fallback) {
                            e.target.dataset.fallback = "true";
                            e.target.src = "/fallback-image.jpg";
                        }
                    }}
                    className="h-48 w-full object-contain object-center transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </Link>
            <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-700">
                    ${product.price.toFixed(2)}
                </p>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-6 flex flex-col gap-3">
                    <Button
                        as={Link}
                        to={`/product/${product.id}`}
                        className="w-full !bg-black !text-white !border-black !shadow-lg rounded-md py-3 transition-all duration-300"
                    >
                        View Details
                    </Button>
                    <Button
                        // onClick={() => console.log("Add to cart:", product.id)}
                        onClick={() => {
                            addToCart(product);
                            console.log("Cart after adding (FeaturedCarousel):", product);
                        }}
                        className="w-full !bg-black !text-white !border-black !shadow-lg rounded-md py-3 transition-all duration-300"
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Featured Collection
                </h2>
                <div className="relative">
                    <motion.div
                        key={currentIndex}
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
                                className="mx-2 w-full max-w-sm overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out sm:w-64"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all duration-200 ease-in-out hover:bg-gray-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all duration-200 ease-in-out hover:bg-gray-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`mx-1 h-2 w-2 rounded-full ${
                                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCarousel;



