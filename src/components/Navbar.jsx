import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import CartDropdown from "src/components/CartDropdown";
import { Button } from "src/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "src/components/ui/navigation-menu";
import { useCart } from "src/context/CartContext";
import { useAuth } from "src/context/AuthContext"; // Assuming AuthContext is set up

export default function Navbar() {
    const [showCart, setShowCart] = React.useState(false);
    const { cart } = useCart();
    const { user, logout } = useAuth();

    // Conditionally set navigation links based on user role
    const navLinks =
        user && user.role === "admin"
            ? [
                { to: "/shop", label: "Shop" },
                { to: "/admin", label: "Manage" },
                { to: "/blog", label: "Blog" },
            ]
            : [
                { to: "/shop", label: "Shop" },
                { to: "/story", label: "Our Story" },
                { to: "/blog", label: "Blog" },
            ];

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <nav className="w-full flex h-16 items-center justify-between px-2 md:px-4 relative">
                <div className="w-full flex items-center justify-between mx-auto px-2 md:px-4">
                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="flex gap-8">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.to}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={link.to}
                                            className="relative text-sm font-medium text-gray-800 hover:text-black group"
                                        >
                                            {link.label}
                                            {/* Laser underline */}
                                            <span className="absolute left-0 bottom-[-2px] block h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Centered Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link
                            to="/"
                            className="text-2xl font-semibold text-gray-900 hover:text-gray-900"
                        >
                            Alpine Vision
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    {/* Right Side Actions */}
                    <div
                        className="flex items-center gap-6"
                        onMouseEnter={() => setShowCart(true)}
                        onMouseLeave={() => setShowCart(false)}
                    >
                        {user ? (
                            <button
                                onClick={logout}
                                className="
        relative
        text-sm font-medium text-gray-800
        hover:text-black
        group
        bg-transparent border-none p-0
        focus:outline-none
      "
                            >
                                Logout
                                {/* Laser underline */}
                                <span className="absolute left-0 bottom-[-2px] block h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="
        relative
        text-sm font-medium text-gray-800
        hover:text-black
        group
      "
                            >
                                Login
                                {/* Laser underline */}
                                <span className="absolute left-0 bottom-[-2px] block h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )}

                        <Link to="/cart" className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative bg-transparent hover:bg-gray-200"
                            >
                                <ShoppingBag className="h-6 w-6 text-gray-900" />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
                            </Button>
                            {showCart && <CartDropdown />}
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}


