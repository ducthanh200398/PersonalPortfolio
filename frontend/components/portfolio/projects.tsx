"use client";

import { ExternalLink, Shield, Server, Users, Bike, Globe, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BluePAM",
    subtitle: "Privileged Access Management",
    client: "Viettel Cyber Security",
    icon: Shield,
    description:
      "Enterprise PAM solution for SSH, RDP, web, and database access management with security risk prevention and certificate management.",
    technologies: ["Go", "Gin", "uber-go/fx", "PostgreSQL", "Redis", "Hashicorp", "Active Directory", "Elasticsearch"],
    highlights: [
      "Remote access to SSH servers",
      "User management with SSO",
      "Active Directory integration",
    ],
  },
  {
    title: "Cloudrity",
    subtitle: "DDoS Protection & WAF",
    client: "Viettel Cyber Security",
    icon: Server,
    description:
      "Website protection application with DDoS attack prevention, WAF rules, rate limiting, and comprehensive security features.",
    technologies: ["Go", "Redis", "MongoDB", "Elasticsearch", "Pusher", "Casdoor"],
    highlights: [
      "Microservices for WAF rules and rate limiting",
      "Audit log service with Elasticsearch",
      "IAM integration and password management",
    ],
  },
  {
    title: "Bike Rental Platform",
    subtitle: "Electric Vehicle Rental",
    client: "Vinsmart Future",
    icon: Bike,
    description:
      "Large-scale electric bike rental application with 20+ team members, focusing on user service architecture and database design.",
    technologies: ["Go", "Redis", "PostgreSQL"],
    highlights: [
      "PIC for User Service microservice",
      "Database architecture design",
      "API development and system design",
    ],
  },
  {
    title: "Firewall & Central Management",
    subtitle: "Enterprise Security Solution",
    client: "General Corporation 319",
    icon: Shield,
    description:
      "Firewall software and hardware solution with centralized server management for enterprise security needs.",
    technologies: ["Go", "Python", "Flask", "Celery", "Angular", "Redis"],
    highlights: [
      "Whitelist/blacklist features in Go",
      "WebSocket and TCP socket communication",
      "Centralized server development",
    ],
  },
  {
    title: "Finez",
    subtitle: "Financial Management App",
    icon: Wallet,
    description:
      "Simple and secure personal finance management application with mobile and microservices architecture.",
    technologies: ["Go", "Gin", "uber-go/fx", "Flutter", "PostgreSQL", "Redis", "Ory Kratos"],
    highlights: [
      "User service microservice development",
      "Mobile app with Flutter",
      "Secure authentication with Ory Kratos",
    ],
  },
  {
    title: "HCT.VN",
    subtitle: "Commodity Trading Platform",
    client: "Ho Chi Minh City Commodity Exchange",
    icon: Globe,
    description:
      "ERP website with CRM modules and customer management for commodity trading operations.",
    technologies: ["Python", "Odoo", "PostgreSQL", "XML", "CSS"],
    highlights: [
      "CRM and customer management modules",
      "Frontend development for main website",
    ],
  },
];

export function Projects() {
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
            Enterprise-grade solutions for cybersecurity, fintech, and
            large-scale applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                {project.client && (
                  <span className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-secondary border border-border">
                    {project.client}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-primary mb-3">{project.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((highlight, i) => (
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
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
