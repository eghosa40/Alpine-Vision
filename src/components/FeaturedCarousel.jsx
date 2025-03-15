import React, { useState } from "react";
import { useCart } from "src/context/CartContext";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import products from "src/data/products";

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart();

    // Dynamically get 3 products
    const getDisplayedProducts = (currentIndex) => {
        const slice = products.slice(currentIndex, currentIndex + 3);
        if (slice.length < 3) {
            return slice.concat(products.slice(0, 3 - slice.length)); // Wrap-around effect
        }
        return slice;
    };

    const displayedProducts = getDisplayedProducts(currentIndex);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
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
                                <ProductCard product={product} addToCart={addToCart} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Navigation Buttons */}
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

                {/* Dots Indicator */}
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

const ProductCard = ({ product, addToCart }) => (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out border-2 border-gray-700 p-6">
        <Link to={`/product/${product.id}`} className="block">
            <div className="relative w-full aspect-square overflow-hidden bg-white">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        if (!e.target.dataset.fallback) {
                            e.target.dataset.fallback = "true";
                            e.target.src = "/fallback-image.jpg";
                        }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
        </Link>
        <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-700">
                {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                }).format(product.price)}
            </p>
            {product.description && (
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            )}
            <div className="mt-6 flex flex-col gap-3">
                <Button
                    as={Link}
                    to={`/product/${product.id}`}
                    className="w-full !bg-black !text-white !border-black !shadow-lg rounded-md py-3 transition-all duration-300"
                >
                    View Details
                </Button>
                <Button
                    onClick={() => addToCart(product)}
                    className="w-full !bg-black !text-white !border-black !shadow-lg rounded-md py-3 transition-all duration-300"
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
);

export default FeaturedCarousel;



