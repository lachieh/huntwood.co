"use client";

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl ring-1 ring-[#62776b] bg-[#344330] flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span
            className="font-semibold tracking-tight uppercase"
            style={{ letterSpacing: ".04em" }}
          >
            Huntwood Co
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80 transition-opacity">
            About
          </a>
          <a href="#approach" className="hover:opacity-80 transition-opacity">
            Approach
          </a>
          <a href="#services" className="hover:opacity-80 transition-opacity">
            Services
          </a>
          <a href="#impact" className="hover:opacity-80 transition-opacity">
            Impact
          </a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm bg-[#344330] hover:bg-[#23301f] transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
