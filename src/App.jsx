import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "src/context/AuthContext"; // Import Auth Provider
import { CartProvider } from "src/context/CartContext";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Shop from "src/pages/Shop";
import ProductDetail from "src/pages/Product";
import Cart from "src/pages/Cart";
import Login from "src/pages/Login";
import Register from "src/pages/Register";


function DebugAuth() {
    const auth = useAuth();
    window.auth = auth; // Expose auth globally for testing
    return null;
}

export default function App() {
    return (
        <AuthProvider> {/* Wrap everything inside AuthProvider */}
            <DebugAuth /> {/* Attach auth globally */}
            <CartProvider> {/* Then wrap CartProvider inside */}
                <Router>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="/products/:id" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
}
