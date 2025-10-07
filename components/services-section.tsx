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

const ServiceCard = ({ title, body, points }: { title: string; body: string; points: string[] }) => (
  <div className="rounded-2xl shadow-sm p-6 md:p-8 ring-1 ring-gray-200 bg-white hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-3 text-sm text-gray-600">{body}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
)

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#f7f9f5]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Core services"
          title="Where we move the needle"
          subtitle="Flexible engagement from strategy sprints to on-call partnerships."
        />

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            title="Geospatial Strategy & Roadmaps"
            body="Define the operating model, success metrics, and investment plan to align platforms with business outcomes."
            points={["Current-state assessment", "Target-state architecture", "12–18 month roadmap"]}
          />
          <ServiceCard
            title="DroneDeploy Enablement"
            body="Audit licenses and usage, rationalise projects, and establish governance to scale adoption safely."
            points={["License & org audit", "Standardised project templates", "Admin & champion training"]}
          />
          <ServiceCard
            title="Remote Sensing (SAR & Optical)"
            body="Design monitoring programs, task satellites, and operationalise change detection within your GIS."
            points={["Tasking & vendor selection", "AOI & cadence design", "Delivery & QC workflows"]}
          />
          <ServiceCard
            title="Training & Change Management"
            body="Role-based enablement for admins, engineers, surveyors, and execs, with collateral you own."
            points={["Curriculum & paths", "Office hours & train-the-trainer", "Adoption metrics"]}
          />
          <ServiceCard
            title="Data Governance & Standards"
            body="Establish naming, metadata, and QA/QC processes that de-risk compliance and accelerate insight."
            points={["Metadata & lineage", "QC gates & approvals", "Retention & security"]}
          />
          <ServiceCard
            title="On-call Advisory & Support"
            body="A fractional partner for proposals, SOWs, feasibility, and go-to-market support when you need it."
            points={["Slack/Email support", "Lightweight SOW review", "Quarterly optimisation"]}
          />
        </div>
      </div>
    </section>
  )
}
