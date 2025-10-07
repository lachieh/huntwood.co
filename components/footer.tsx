export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 bg-[#f8fbf3]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-[#344330] flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span
              className="font-semibold uppercase text-[#344330]"
              style={{ letterSpacing: ".04em" }}
            >
              Huntwood Co
            </span>
          </div>
          <p className="text-sm text-[#344330]">
            Geospatial strategy, remote sensing enablement, and platform
            operations for enterprises across APAC.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3 text-[#344330]">Links</div>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="hover:opacity-80 transition-opacity"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#approach"
                className="hover:opacity-80 transition-opacity"
              >
                Approach
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:opacity-80 transition-opacity">
                Impact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3 text-[#344330]">Contact</div>
          <ul className="space-y-2 text-[#344330]">
            <li>Sydney, Australia</li>
            <li>
              <a href="mailto:fletcher@huntwood.co">fletcher@huntwood.co</a>
            </li>
            <li>
              <a href="tel:+61402028158">+61 402 028 158</a>
            </li>
            <li>
              <a
                href="https://www.huntwood.co"
                target="_blank"
                rel="noreferrer"
              >
                www.huntwood.co
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-8 text-xs text-[#62776b]">
        © {new Date().getFullYear()} Huntwood Co Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
