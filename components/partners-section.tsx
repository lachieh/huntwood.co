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

const PartnerLogo = ({ label }: { label: string }) => (
  <div className="h-12 md:h-14 rounded-xl bg-white/70 ring-1 ring-gray-200 flex items-center justify-center px-4">
    <span className="text-gray-600 text-sm">{label}</span>
  </div>
);

export function PartnersSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Ecosystem & tooling"
          subtitle="We're tool-agnostic and integrate with the platforms you already use."
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          <PartnerLogo label="DroneDeploy" />
          <PartnerLogo label="Esri / ArcGIS" />
          <PartnerLogo label="Capella / SAR" />
          <PartnerLogo label="Planet / Optical" />
          <PartnerLogo label="Trimble / GNSS" />
        </div>
      </div>
    </section>
  );
}
