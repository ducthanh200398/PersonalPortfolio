"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">
            Available for opportunities
          </span>
        </div>

        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Pham Duc</span>{" "}
          <span className="text-primary">Thanh</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Senior Backend Go Engineer
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Go", "PostgreSQL", "Redis", "Kubernetes", "Kafka"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-md bg-secondary border border-border text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span>Hanoi, Vietnam</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:duc.thanh200398@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-border hover:bg-secondary"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-border hover:bg-secondary"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
