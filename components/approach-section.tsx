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

export function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our approach"
          title="Assess · Architect · Activate"
          subtitle="A simple, outcome-led framework to evaluate your current state, design the right stack and standards, and embed new ways of working."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white">
            <h3 className="text-xl font-semibold">Assess</h3>
            <p className="mt-2 text-sm text-gray-600">
              Interviews, usage audits, data model reviews, and workflow mapping across teams and tools.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Platform & license audit (e.g., DroneDeploy)</li>
              <li>Data governance & security overview</li>
              <li>Capability & training gap analysis</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white">
            <h3 className="text-xl font-semibold">Architect</h3>
            <p className="mt-2 text-sm text-gray-600">
              Target-state designs, SOPs, and an adoption plan that align tech choices with business value.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Reference workflows & SOP library</li>
              <li>Naming, metadata & QC standards</li>
              <li>Integration & API recommendations</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white">
            <h3 className="text-xl font-semibold">Activate</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pilot projects, enablement, and change management so improvements stick and scale.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Champion program & playbooks</li>
              <li>Training paths & office hours</li>
              <li>Continuous optimisation & support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
