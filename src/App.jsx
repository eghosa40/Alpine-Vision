import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CartProvider} from "src/context/CartContext";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Shop from "src/pages/Shop";
import ProductDetail from "src/pages/Product";
import Cart from "src/pages/Cart";

export default function App() {
    return (
        <CartProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}