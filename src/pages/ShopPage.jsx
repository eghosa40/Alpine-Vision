import React, { useState } from "react";
import ProductCard from "src/components/ProductCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "src/components/ui/select";

// Mock product data
const products = [
    {
        id: "1",
        name: "Alpine Pro X",
        price: 199.99,
        description: "High-performance goggles with anti-fog technology.",
        imageUrl: "/placeholder.svg?height=400&width=400",
        category: "Anti-Fog",
    },
    {
        id: "2",
        name: "Summit Shield",
        price: 249.99,
        description: "Maximum UV protection for high-altitude skiing.",
        imageUrl: "/placeholder.svg?height=400&width=400",
        category: "UV Protection",
    },
    {
        id: "3",
        name: "Glacier View",
        price: 179.99,
        description: "Wide-view lens for panoramic mountain vistas.",
        imageUrl: "/placeholder.svg?height=400&width=400",
        category: "Wide-View",
    },
    // Add more products as needed
];

const ShopPage = () => {
    const [sortBy, setSortBy] = useState("newest");
    const [filterCategory, setFilterCategory] = useState("all");

    const sortProducts = (productsArray) => {
        switch (sortBy) {
            case "price-low-high":
                return [...productsArray].sort((a, b) => a.price - b.price);
            case "price-high-low":
                return [...productsArray].sort((a, b) => b.price - a.price);
            case "newest":
            default:
                return productsArray; // Assuming the original order is by newest
        }
    };

    const filterProducts = (productsArray) => {
        if (filterCategory === "all") return productsArray;
        return productsArray.filter((product) => product.category === filterCategory);
    };

    const displayedProducts = sortProducts(filterProducts(products));

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold">Premium Ski Goggles</h1>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Anti-Fog">Anti-Fog</SelectItem>
                        <SelectItem value="UV Protection">UV Protection</SelectItem>
                        <SelectItem value="Wide-View">Wide-View</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
