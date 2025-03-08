import ProductDetail from "../components/ProductDetail";
import FeaturedCarousel from "src/components/FeaturedCarousel";

const productData = {
    id: "1",
    name: "Beni Shoga",
    price: 10.0,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci cursus, lacinia nisi ac, tempor lorem. Duis in vestibulum felis, id molestie sapien. Nunc vel felis non massa pretium vehicula ut vitae diam. Aenean lobortis fringilla mollis. Nullam venenatis velit vitae magna congue vulputate. Nunc sagittis purus ligula, a pulvinar magna venenatis nec.",
    images: [
        "/src/assets/showcase1.webp",
        "/src/assets/showcase2.webp",
        "/src/assets/showcase3.webp",
    ],
};

export default function ProductPage() {
    return (
        <div className="pt-32 bg-white">
            <ProductDetail product={productData} />
            <div className={"mt-12"}>
                <FeaturedCarousel />
            </div>
        </div>
    );
}
