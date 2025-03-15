// src/components/SearchBar.jsx
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { cn } from "src/lib/utils";
import { Link } from "react-router-dom";
import products from "src/data/products"; // Replace with actual product data

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);

    // Filter products by name
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            className={cn(
                "group relative flex items-center bg-white",
                "border-b-2 border-transparent transition-all duration-300 ease-in-out",
                "hover:border-gray-800 focus-within:border-gray-800"
            )}
            onMouseEnter={() => setFocused(true)}
            onMouseLeave={() => {
                if (!query) setFocused(false);
            }}
        >
            {/* Search Icon */}
            <SearchIcon className="h-5 w-5 text-gray-800" strokeWidth={2.5} />

            {/* Expanding Input Field */}
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    if (!query) setFocused(false);
                }}
                className={cn(
                    "bg-transparent outline-none ml-2 py-1 w-0 text-gray-800",
                    "transition-all duration-300 ease-in-out",
                    focused ? "w-48" : "group-hover:w-48"
                )}
            />

            {/* Real-time Search Results */}
            {focused && query && (
                <div
                    className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md z-10
                     border border-gray-100"
                >
                    <ul className="max-h-56 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <li key={product.id} className="px-3 py-2 hover:bg-gray-100">
                                    <Link to={`/products/${product.id}`} className="flex items-center gap-3">
                                        {/* Product Image */}
                                        <img
                                            src={product.image || "/fallback-image.jpg"}
                                            alt={product.name}
                                            className="w-12 h-12 object-cover rounded-md border"
                                        />

                                        {/* Product Details */}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">{product.name}</span>
                                            <span className="text-xs text-gray-600">${product.price.toFixed(2)}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-gray-500">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

