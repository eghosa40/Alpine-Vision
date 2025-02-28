import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Sample product data
const products = [
    {
        id: "1",
        name: "Lounge Tunic/ Black",
        price: 50.0,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%2013.15.09-3VxLdy85AiTbi0yl07Z9IVudv8ZfEg.png",
        category: "Tops",
        isNew: false,
    },
    {
        id: "2",
        name: "Lounge Tunic/ Blue",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Tops",
        isNew: false,
    },
    {
        id: "3",
        name: "Lounge Tunic/ Cream",
        price: 50.0,
        originalPrice: 40.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Tops",
        onSale: true,
    },
    {
        id: "4",
        name: "Sonia Skirt",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Bottoms",
        isNew: true,
    },
    {
        id: "5",
        name: "Sonia Dress",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Dresses",
        isNew: false,
    },
    {
        id: "6",
        name: "Wide Pant",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Bottoms",
        isNew: false,
    },
    {
        id: "7",
        name: "Haori Jacket",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Tops",
        isNew: true,
    },
    {
        id: "8",
        name: "Wide Pant / Blue",
        price: 50.0,
        image: "/placeholder.svg?height=400&width=300",
        category: "Bottoms",
        isNew: false,
    },
];

export default function ProductListing() {
    const [sortBy, setSortBy] = useState("relevant");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Sort products based on selected option
    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "newest":
                return a.isNew ? -1 : b.isNew ? 1 : 0;
            default:
                return 0; // "relevant" - keep original order
        }
    });

    // Get display text for current sort option
    const getSortText = (option) => {
        switch (option) {
            case "relevant":
                return "Most Relevant";
            case "price-low":
                return "Price: Low to High";
            case "price-high":
                return "Price: High to Low";
            case "newest":
                return "Newest Arrivals";
            default:
                return "Sort";
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-8">
                <div className="relative">
                    <div
                        className="flex items-center border border-gray-200 px-4 py-2 w-48 cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span className="text-sm flex-1">Sort by: {getSortText(sortBy)}</span>
                        <ChevronDown className="h-4 w-4 ml-2" />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 shadow-md z-10">
                            <div className="py-1">
                                {["relevant", "price-low", "price-high", "newest"].map((option) => (
                                    <div
                                        key={option}
                                        className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                                        onClick={() => {
                                            setSortBy(option);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {getSortText(option)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {sortedProducts.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} className="group">
                        <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-2px]">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="object-cover object-center w-full h-full"
                                />
                                {product.onSale && (
                                    <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1">
                                        SALE
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-base text-gray-900">{product.name}</h3>
                                <div className="mt-1 flex items-center">
                                    {product.originalPrice ? (
                                        <>
                                            <span className="text-gray-500 line-through mr-2">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                            <span className="text-gray-900">${product.price.toFixed(2)}</span>
                                        </>
                                    ) : (
                                        <span className="text-gray-900">${product.price.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

