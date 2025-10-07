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

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-5xl font-bold text-[#344330]">{value}</div>
    <div className="mt-1 text-sm md:text-base text-gray-600">{label}</div>
  </div>
);

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Outcomes that matter"
          subtitle="Representative results from recent programs. Replace with your exact client stats."
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat value=">60%" label="Cut time-to-value on platform rollouts" />
          <Stat value=">500 hrs" label="Saved via standards & automation" />
          <Stat value="5M+" label="ARR under strategic oversight" />
          <Stat value="14 yrs" label="APAC enablement experience" />
        </div>
      </div>
    </section>
  );
}
