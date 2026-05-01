"use client";

import { ExternalLink, Shield, Server, Bike, Globe, Wallet, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/context/PortfolioContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  server: Server,
  bike: Bike,
  globe: Globe,
  wallet: Wallet,
  star: Star,
};

export function Projects() {
  const { data, loading } = usePortfolio();
  const projectsProfile = data?.ProjectsProfile;

  if (loading) {
    return null;
  }

  const projects = projectsProfile?.Projects || [];
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            {projectsProfile?.Description}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = iconMap[project.Icon] || Star;
            return (
              <div
                key={project.Title}
                className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  {project.Client && (
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-secondary border border-border">
                      {project.Client}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {project.Title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.Subtitle}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.Description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.Highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {project.Technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.Technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground">
                      +{project.Technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
