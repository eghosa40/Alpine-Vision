import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Shop from "src/pages/Shop";
import ProductDetail from "src/pages/ProductDetail";

export default function App() {
    return (
        <Router>
            {/* A flex container that ensures the Navbar stays at the top,
          the page content expands as needed, and the Footer stays at the bottom */}
            <div className="flex flex-col min-h-screen">
                {/* Navbar (the one we fixed earlier) */}
                <Navbar />

                {/* Main content area that grows to fill available space */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                    </Routes>
                </main>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </Router>
    );
}


