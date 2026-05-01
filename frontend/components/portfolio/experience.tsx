"use client";

import { Building2, Calendar } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export function Experience() {
  const { data, loading } = usePortfolio();
  const experienceProfile = data?.ExperienceProfile;

  if (loading) {
    return null;
  }

  const experiences = experienceProfile?.Experiences || [];
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
            {experienceProfile?.Description}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={`${exp.Company}-${exp.Role}`} className="relative pl-8 pb-12 last:pb-0">
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
                    {exp.Role}
                  </h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {exp.Period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.Company}</span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.Description}</p>

                <ul className="space-y-2">
                  {exp.Highlights.map((highlight, i) => (
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
