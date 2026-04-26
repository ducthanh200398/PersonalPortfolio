"use client";

import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Education & Training
          </h2>
        </div>

        {/* Education card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">
                  Banking Academy of Vietnam
                </h3>
                <p className="text-primary mb-2">
                  Management Information Systems
                </p>

                <p className="text-muted-foreground text-sm">
                  Undergraduate Studies in Management Information Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
