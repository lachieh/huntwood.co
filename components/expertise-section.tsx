import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    metric: "160%",
    label: "Net Revenue Retention",
    description:
      "Achieved at DroneDeploy through strategic customer success initiatives",
  },
  {
    metric: "$1.5M+",
    label: "Pipeline Growth",
    description:
      "Generated through technical sales engineering and solution design",
  },
  {
    metric: "5+",
    label: "Years Experience",
    description:
      "Deep expertise across mining, construction, and defense sectors",
  },
];

const technologies = [
  "SAR Imagery",
  "Drone Technology",
  "Geospatial Data",
  "Customer Success",
  "Sales Engineering",
  "Solution Architecture",
  "Mining Technology",
  "Defense Applications",
];

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-pretty text-muted">
              Extensive experience with leading geospatial technology companies
              including Rio Tinto, DroneDeploy, Capella Space, and Nearmap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-0 items-stretch">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm leading-relaxed text-muted my-auto mb-0 mt-auto">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Core Technologies & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
