"use client";

import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "NMS - New Generation Mobile Services JSC",
    role: "Backend Developer",
    period: "Aug 2024 - Aug 2025",
    description:
      "Developing microservices and backend solutions for enterprise applications.",
    highlights: [
      "Backend developer for Cloudrity - DDoS protection and WAF solution for Viettel Cyber Security",
      "PIC for User Service in electric bike rental platform with 20+ team members",
      "Designed database architecture and API development for microservices",
    ],
  },
  {
    company: "FOSEC - Information Security JSC",
    role: "Backend & Fullstack Developer",
    period: "Aug 2020 - Aug 2024",
    description:
      "Built security-focused applications and enterprise solutions for major Vietnamese enterprises.",
    highlights: [
      "Developed BluePAM - Privileged Access Management for Viettel Cyber Security",
      "Built firewall and central management solutions for General Corporation 319",
      "Created attendance and monitoring systems with AI/ML integration",
    ],
  },
  {
    company: "FSS - Financial Software Solutions",
    role: "Intern",
    period: "Dec 2019 - Apr 2020",
    description:
      "Data processing and backend development with Python and PostgreSQL.",
    highlights: [
      "Processed and analyzed data using Python",
      "Worked with PostgreSQL databases",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            Building secure, scalable backend systems for enterprise clients and
            cybersecurity solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Content */}
              <div className="group">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {exp.role}
                  </h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
