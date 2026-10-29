import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] px-5 py-6 text-white sm:px-8 lg:px-16">

            <div className="mx-auto max-w-7xl">

                {/* Brand */}
                <div className="mb-12">
                    <h2 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Wanderlust
                    </h2>

                    <p className="mt-2 max-w-lg text-sm text-gray-400 sm:text-base">
                        Your gateway to extraordinary travel experiences around the world.
                    </p>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-normal uppercase tracking-wide">
                            Newsletter
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-gray-400">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>

                        <form className="mt-4 flex max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="min-w-0 flex-1 bg-[#333333] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-cyan-500"
                            />

                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="flex w-12 items-center justify-center bg-[#333333] text-xl text-white transition hover:bg-cyan-500"
                            >
                                <ArrowUpRight size={21} />
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wide">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                href="/destinations"
                                className="transition hover:text-white"
                            >
                                Destinations
                            </Link>

                            <Link
                                href="/bookings"
                                className="transition hover:text-white"
                            >
                                My Bookings
                            </Link>

                            <Link
                                href="/profile"
                                className="transition hover:text-white"
                            >
                                My Profile
                            </Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wide">
                            Support
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                            <Link
                                href="/help"
                                className="transition hover:text-white"
                            >
                                Help Center
                            </Link>

                            <Link
                                href="/terms"
                                className="transition hover:text-white"
                            >
                                Terms of Service
                            </Link>

                            <Link
                                href="/privacy"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm uppercase tracking-wide">
                            Contact Us
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                            <a
                                href="tel:7869011622"
                                className="transition hover:text-white"
                            >
                                786 901 1622
                            </a>

                            <a
                                href="mailto:info@wandarland.com"
                                className="transition hover:text-white"
                            >
                                info@wandarland.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Border */}
                <div className="mt-12 border-t border-white/10 pt-5">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        {/* Copyright */}
                        <p className="text-xs text-gray-500">
                            © 2026 Wanderlust. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6">

                            <a
                                href="#"
                                aria-label="X"
                                className="text-gray-300 transition hover:text-white"
                            >
                                <span className="text-xl">𝕏</span>
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-gray-300 transition hover:text-white"
                            >
                                <FaLinkedin size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-gray-300 transition hover:text-white"
                            >
                                <FaInstagram size={19} />
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}