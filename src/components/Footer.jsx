import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

export default function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add newsletter signup logic here
    };

    return (
        <footer className="w-screen">
            {/* Newsletter Section: full-width background */}
            <div className="w-screen bg-[#f2f3f5]">
                {/* Centered content container */}
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
                            Stay in the Loop
                        </h2>
                        <p className="mb-8 text-lg text-gray-700">
                            Subscribe for exclusive deals, new arrivals, and pro skiing tips to elevate your mountain experience.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-auto flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                required
                            />
                            <Button
                                type="submit"
                                className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content: full-width background */}
            <div className="w-screen bg-zinc-950">
                {/* Centered content container */}
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-zinc-100">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Alpine Vision</h3>
                            <p className="text-base text-zinc-300">
                                High-Performance Ski Goggles for Every Adventure
                            </p>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                                <span>Anti-Fog</span>
                                <span>•</span>
                                <span>UV Protection</span>
                                <span>•</span>
                                <span>Impact-Resistant</span>
                            </div>
                        </div>

                        {/* Shop Navigation */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider">Shop</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        to="/shop"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Shop All
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider">Customer Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        to="/faq"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shipping"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Shipping & Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/warranty"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Warranty
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-white transition-colors hover:text-gray-200"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                            <p className="text-sm text-emerald-400">
                                Hassle-Free 30-Day Returns
                            </p>
                        </div>

                        {/* Social Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider">Join Our Community</h3>
                            <p className="text-sm text-zinc-400">
                                Follow us for pro skiing tips & product updates!
                            </p>
                            <div className="flex gap-6">
                                <Link to="#" className="text-zinc-400 transition-colors hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link to="#" className="text-zinc-400 transition-colors hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <Facebook className="h-6 w-6" />
                                </Link>
                                <Link to="#" className="text-zinc-400 transition-colors hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-6 w-6" />
                                </Link>
                                <Link to="#" className="text-zinc-400 transition-colors hover:text-white">
                                    <span className="sr-only">YouTube</span>
                                    <Youtube className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-12 border-t border-zinc-800"></div>

                    {/* Copyright */}
                    <div className="mt-8 pt-4 text-center text-sm text-zinc-400">
                        <p>© {new Date().getFullYear()} Alpine Vision. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
