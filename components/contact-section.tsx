"use client";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="max-w-3xl mx-auto text-center">
    {eyebrow && (
      <div className="mb-3 flex justify-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset bg-[#ffdd18] text-[#1b1b1b] border-[#62776b]">
          {eyebrow}
        </span>
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base md:text-lg text-gray-600">{subtitle}</p>
    )}
  </div>
);

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's map out your next step"
          subtitle="Sydney, Australia · fletcher@huntwood.co · +61 402 028 158"
        />
        <div className="mt-6 flex justify-center">
          <a
            href="https://calendar.app.google/K2fwPXSiZ9NXKZ5k6"
            className="rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#344330] hover:bg-[#23301f] transition-colors"
          >
            Book a chat
          </a>
        </div>
        {/* <form className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full rounded-xl ring-1 ring-gray-300 p-3 focus:ring-2 focus:ring-[#344330] outline-none"
              placeholder="First name"
            />
            <input
              className="w-full rounded-xl ring-1 ring-gray-300 p-3 focus:ring-2 focus:ring-[#344330] outline-none"
              placeholder="Last name"
            />
          </div>
          <input
            className="w-full rounded-xl ring-1 ring-gray-300 p-3 focus:ring-2 focus:ring-[#344330] outline-none"
            placeholder="Work email"
          />
          <textarea
            className="w-full rounded-xl ring-1 ring-gray-300 p-3 min-h-[120px] focus:ring-2 focus:ring-[#344330] outline-none"
            placeholder="Tell us briefly about your goals"
          />
          <div className="flex items-center justify-between">
            <label className="text-xs text-[#62776b]">
              By submitting, you agree to be contacted about Huntwood Co
              services.
            </label>
            <button
              type="button"
              className="rounded-xl px-5 py-2.5 text-sm font-medium text-white bg-[#344330] hover:bg-[#23301f] transition-colors"
            >
              Send message
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}
