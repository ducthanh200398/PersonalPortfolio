"use client";

import { Database, Server, Cloud, Code2, Layers, Zap, Shield, Terminal } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  database: Database,
  cloud: Cloud,
  shield: Shield,
  layers: Layers,
  zap: Zap,
  terminal: Terminal,
};

export function Skills() {
  const { data, loading } = usePortfolio();
  const skillProfile = data?.SkillProfile;

  if (loading) {
    return null;
  }

  const skillGroups = skillProfile?.SkillGroups || [];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            {skillProfile?.Description}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.Icon] || Code2;
            return (
              <div
                key={group.Title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {group.Title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.Skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-secondary text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
