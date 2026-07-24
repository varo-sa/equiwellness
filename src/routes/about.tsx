import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Equi Wellness Health Club" },
      { name: "description", content: "Learn about Equi Wellness, a health club that combines guided exercise, nutrition, medical care, and lifestyle coaching." },
      { property: "og:title", content: "About — Equi Wellness Health Club" },
      { property: "og:description", content: "Learn about Equi Wellness, a health club that combines guided exercise, nutrition, medical care, and lifestyle coaching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Personalized care",
    description: "No two bodies are alike. Every plan is tailored to the individual's body, history, and goals.",
    icon: Target,
  },
  {
    title: "Collaborative team",
    description: "Trainers, nutritionists, and doctors share insights so your care is coordinated, not fragmented.",
    icon: Users,
  },
  {
    title: "Prevention-first",
    description: "We focus on keeping you well, not just treating symptoms when they appear.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable habits",
    description: "Quick fixes don't last. We help you build routines that fit your real life.",
    icon: Heart,
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-cream-100 py-20 md:py-28">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">About us</span>
              <h1 className="mt-4 font-display text-4xl font-medium text-foreground md:text-5xl">
                Wellness that works as a system
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Equi Wellness was founded on a simple idea: exercise, nutrition, medical care, and lifestyle habits should work together. Too often, people bounce between trainers, diets, and doctors with no one connecting the dots. We're here to change that.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our club is a calm, welcoming space where members receive guided support across every pillar of health. Whether your goal is more energy, better sleep, injury recovery, or long-term vitality, we build a plan around you.
              </p>
              <Button asChild className="mt-8">
                <Link to="/contact">Meet our team</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Bright wellness studio interior at Equi Wellness"
                loading="lazy"
                width={1920}
                height={1088}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our values</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
              What guides everything we do
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-card-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / approach */}
      <section className="border-y border-border bg-cream-100 py-20 md:py-28">
        <div className="container-tight text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our team</span>
          <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
            Experts who collaborate
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Our staff includes certified personal trainers, registered dietitians, lifestyle medicine physicians, and habit coaches. They meet regularly to review member progress and adjust plans together.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { number: "12+", label: "Certified professionals" },
              { number: "500+", label: "Members supported" },
              { number: "4", label: "Connected disciplines" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-3xl font-medium text-primary">{stat.number}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
