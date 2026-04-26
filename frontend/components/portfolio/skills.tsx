"use client";

import { Database, Server, Cloud, Code2, Layers, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core Frameworks",
    icon: Code2,
    skills: ["Go (Gin, uber-go/fx)", "Python (Flask, FastAPI, Celery)", "Dart"],
  },
  {
    title: "Data Management & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "MinIO", "Google Cloud"],
  },
  {
    title: "Messaging & Streaming",
    icon: Zap,
    skills: ["Redis", "Kafka", "Pusher"],
  },
  {
    title: "System Architecture & Design",
    icon: Layers,
    skills: [
      "Microservices",
      "REST APIs",
      "WebSockets",
      "TCP Sockets",
      "Event-Driven",
    ],
  },
  {
    title: "Security & Auth",
    icon: Server,
    skills: [
      "Active Directory",
      "Hashicorp",
      "Ory Kratos",
      "Casdoor",
      "IAM Integration",
    ],
  },
];

export function Skills() {
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
            5+ years of experience building scalable backend systems,
            microservices, and security-focused applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
