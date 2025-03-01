import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import placeholderImage from "src/assets/showcase3.webp"; // Ensure this path is correct

const products = [
    { id: "1", name: "Alpine Pro", price: 120.0, image: placeholderImage, category: "Performance" },
    { id: "2", name: "Summit Explorer", price: 90.0, image: placeholderImage, category: "Performance" },
    {
        id: "3",
        name: "Snow Drift",
        price: 80.0,
        originalPrice: 100.0,
        image: placeholderImage,
        category: "Casual",
        onSale: true,
    },
    { id: "4", name: "Mountain Glide", price: 70.0, image: placeholderImage, category: "Casual" },
    { id: "5", name: "Storm Vision", price: 150.0, image: placeholderImage, category: "Performance" },
    { id: "6", name: "Powder View", price: 110.0, image: placeholderImage, category: "Casual" },
];

const categories = ["All", "Performance", "Casual", "Sale"];
const sortOptions = {
    relevant: "Most Relevant",
    "price-low": "Price: Low to High",
    "price-high": "Price: High to Low",
    newest: "Newest Arrivals",
};

export default function ProductListing() {
    const [sortBy, setSortBy] = useState("relevant");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : selectedCategory === "Sale"
                ? products.filter((product) => product.onSale)
                : products.filter((product) => product.category === selectedCategory);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "newest":
                return a.isNew ? -1 : b.isNew ? 1 : 0;
            default:
                return 0;
        }
    });

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category Filter */}
            <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            selectedCategory === category
                                ? "bg-black text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-end mb-8 relative">
                <div className="relative inline-block text-left">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center border border-gray-300 px-4 py-2 w-48 rounded-md cursor-pointer bg-white text-black shadow-md"
                    >
                        <span className="text-sm flex-1">{`Sort by: ${sortOptions[sortBy]}`}</span>
                        <ChevronDown className="h-4 w-4 ml-2 text-black" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-1 w-48 border border-gray-200 shadow-md z-10 rounded-md overflow-hidden bg-white">
                            <div className="py-1 bg-white">  {/* Force White Background */}
                                {Object.keys(sortOptions).map((option) => (
                                    <button
                                        key={option}
                                        className="w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-black bg-white"
                                        onClick={() => {
                                            setSortBy(option);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {sortOptions[option]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {sortedProducts.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id} className="group no-underline">
                        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-0.5 rounded-lg overflow-hidden">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                                <img
                                    src={product.image || placeholderImage}
                                    alt={product.name}
                                    className="object-cover object-center w-full h-full"
                                />
                                {product.onSale && (
                                    <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-bl-md">
                                        SALE
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-base text-gray-900">{product.name}</h3>
                                <div className="mt-1 flex items-center space-x-2">
                                    {product.originalPrice ? (
                                        <>
                                            <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                            <span className="text-gray-900 font-semibold">${product.price.toFixed(2)}</span>
                                        </>
                                    ) : (
                                        <span className="text-gray-900 font-semibold">${product.price.toFixed(2)}</span>
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


