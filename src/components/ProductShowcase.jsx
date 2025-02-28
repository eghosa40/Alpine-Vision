import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "src/components/ui/button";

// Import your images from the assets folder
import showcase1 from "src/assets/showcase5.webp";
import showcase2 from "src/assets/showcase3.webp";
import showcase3 from "src/assets/showcase4.webp";

const ProductSection = ({
                            title,
                            description,
                            imageSrc,
                            sellingPoints,
                            reverse = false,
                            showButton = false,
                        }) => {
    const ref = useRef(null);

    // useScroll based on the section's position
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Amplify the vertical parallax effect (from 800px down to -800px)
    const y = useTransform(scrollYProgress, [0, 1], [800, -800]);

    // Text content block
    const textContent = (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-sans">
                {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-light">
                {description}
            </p>
            <p className="text-sm md:text-base text-gray-500 font-light">
                {sellingPoints}
            </p>
            {showButton && (
                <Button
                    // Force the button to be black with white text from the start
                    className="mt-4 px-8 py-3 !bg-black !text-white !border-black shadow-sm hover:!bg-black hover:!text-white hover:!border-black transition-colors duration-300"
                    size="lg"
                >
                    Discover More
                </Button>
            )}
        </motion.div>
    );

    // Image content block
    const imageContent = (
        <motion.div style={{ y }} className="relative h-[300px] md:h-[500px]">
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                src={imageSrc}
                alt="Ski Goggle"
                className="absolute inset-0 w-full h-full object-contain"
            />
        </motion.div>
    );

    return (
        <section
            ref={ref}
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
            <div className="max-w-screen-xl mx-auto px-4 py-6 md:py-8 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {reverse ? (
                        <>
                            {imageContent}
                            {textContent}
                        </>
                    ) : (
                        <>
                            {textContent}
                            {imageContent}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default function ProductShowcase() {
    return (
        <div className="bg-white">
            <ProductSection
                title="Engineered for the Extreme"
                description="Experience unparalleled clarity in any condition with our flagship model."
                imageSrc={showcase1}
                sellingPoints="Unrivaled Clarity – Anti-Fog, Maximum Visibility, All-Weather Performance."
            />
            <ProductSection
                title="Beyond Protection"
                description="Cutting-edge technology meets uncompromising safety."
                imageSrc={showcase2}
                sellingPoints="UV-Blocking Lens, Impact-Resistant, Feather-Light Feel."
                reverse={true}
            />
            <ProductSection
                title="Elevated Precision"
                description="Designed for those who demand nothing but the best."
                imageSrc={showcase3}
                sellingPoints="Adaptive Fit, Wide Field of View, Seamless Comfort."
                showButton={true}
            />
        </div>
    );
}








