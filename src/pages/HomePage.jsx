// src/pages/HomePage.jsx
import React from "react";
import Hero from "src/components/Hero";
import ProductShowcase from "src/components/ProductShowcase";
import FeaturedCarousel from "src/components/FeaturedCarousel";

export default function HomePage() {
    return (
        <div>
            {/* Remove or comment out the debug message */}
            {/* <p className="text-2xl text-blue-500 text-center mt-8">Hello, HomePage is rendered!</p> */}
            <Hero />
            <ProductShowcase />
            <FeaturedCarousel />
            {/* Other sections can go here */}
        </div>
    );
}

