// src/pages/ProductPage.jsx
import ProductDetail from "src/components/ProductDetail";
import FeaturedCarousel from "src/components/FeaturedCarousel";

export default function ProductPage() {
    return (
        <div className="pt-32 bg-white">
            {/* ProductDetail now dynamically retrieves product data using useParams */}
            <ProductDetail />
            <div className="mt-12">
                <FeaturedCarousel />
            </div>
        </div>
    );
}

