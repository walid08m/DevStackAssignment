import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src={logoText}
              alt="DS Dev Stack"
              className="h-10 w-auto"
            />

            <p className="text-sm text-gray-500 leading-6 mt-4 max-w-xs">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Product
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Home
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Technologies
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Company
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                About
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;