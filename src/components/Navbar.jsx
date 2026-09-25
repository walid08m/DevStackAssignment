import { useState } from "react";
import logoText from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoText}
              alt="DS Dev Stack"
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="grid grid-cols-3 items-center md:hidden">

          {/* Hamburger */}
          <div className="flex justify-start">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <img
                src={hamburger}
                alt="Menu"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <a href="#">
              <img
                src={logoText}
                alt="DS Dev Stack"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2">
            <button className="text-xs font-medium text-gray-700 whitespace-nowrap">
              Sign In
            </button>

            <button className="px-2.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white text-xs font-medium whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
            <a
              href="#"
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
