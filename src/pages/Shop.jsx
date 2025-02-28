import ProductListing from "src/components/ProductListing";

export default function Shop() {
    return (
        <main className="min-h-screen bg-white">
            <nav className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-8 h-12 items-center">
                        <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-500">
                            Tops
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                            Bottoms
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                            Sale
                        </a>
                    </div>
                </div>
            </nav>

            <ProductListing />
        </main>
    );
}

