"use client";

import { Mail, MessageCircle, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "duc.thanh200398@gmail.com",
    href: "mailto:duc.thanh200398@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0357 575 566",
    href: "https://zalo.me/0357575566",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hoang Mai, Hanoi, Vietnam",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/ducthanh200398",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            Interested in collaborating or have a project in mind? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground break-all">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
