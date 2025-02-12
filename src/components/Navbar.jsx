import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "src/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "src/components/ui/navigation-menu";

export default function Navbar() {
    const [cartCount, setCartCount] = React.useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // Define your nav links for easy mapping.
    const navLinks = [
        { to: "/", label: "Shop" },
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

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-800" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-800" />
                            )}
                        </button>
                    </div>

                    {/* Centered Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/" className="text-2xl font-semibold text-gray-900 hover:text-gray-900">
                            Alpine Vision
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-6">
                        <Link to="outline" className="text-sm font-medium text-gray-800  hover:text-black">
                            Login
                        </Link>
                        <Button variant="ghost" size="icon" className="relative bg-transparent hover:bg-gray-200">
                            <ShoppingBag className="h-6 w-6 text-gray-900" />
                            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
                {cartCount}
              </span>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Panel */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-8 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block relative py-2 text-sm font-medium text-gray-800 hover:text-black group"
                            >
                                {link.label}
                                {/* Laser underline for mobile */}
                                <span
                                    style={{ top: "calc(100% + 4px)" }}
                                    className="absolute left-0 bottom-0 block h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}



