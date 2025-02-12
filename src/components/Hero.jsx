import { Button } from "src/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "src/assets/hero.jpg"; // Make sure this image exists

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-screen-xl px-4 text-center">
                <div className="space-y-6">
                    <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        Elevate Your Vision
                    </h1>
                    <div className="pt-4">
                        <Link to="/shop">
                            <Button className="bg-white/10 text-white px-6 py-3 text-lg font-medium backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

