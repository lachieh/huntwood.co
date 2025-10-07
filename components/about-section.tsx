const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) => (
  <div className="max-w-3xl mx-auto text-center">
    {eyebrow && (
      <div className="mb-3 flex justify-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset bg-[#ffdd18] text-[#1b1b1b] border-[#62776b]">
          {eyebrow}
        </span>
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">{title}</h2>
    {subtitle && <p className="mt-4 text-base md:text-lg text-gray-600">{subtitle}</p>}
  </div>
)

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#e1ecc5]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="We turn geospatial ambition into operational reality"
            subtitle="Fourteen years across APAC helping enterprises connect people, platforms, and policy. We bridge the gap between technology teams and project delivery so data becomes decisions."
          />
        </div>
        <div className="space-y-4 text-sm md:text-base text-[#344330]">
          <p>
            From mine sites to major infrastructure, Huntwood Co understands the realities of boots-on-ground work. We
            design pragmatic architectures and playbooks that simplify complexity across GIS, drone, and satellite
            tooling—so your experts can focus on outcomes, not admin.
          </p>
          <p>
            Our model blends hands-on implementation with executive advisory. Expect clear comms, measurable milestones,
            and a partner who's comfortable from strategy deck to API docs.
          </p>
        </div>
      </div>
    </section>
  )
}
