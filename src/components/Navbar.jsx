import logoText from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logoText}
            alt="DS Dev Stack"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
    </nav>
  );
}

export default Navbar;

