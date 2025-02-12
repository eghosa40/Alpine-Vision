import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import HomePage from "src/pages/HomePage";

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
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </Router>
    );
}


