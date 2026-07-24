import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dumbbell, Utensils, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import nutritionistImage from "@/assets/nutritionist.jpg";
import doctorImage from "@/assets/doctor.jpg";
import exerciseImage from "@/assets/exercise.jpg";
import lifestyleImage from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Equi Wellness Health Club" },
      { name: "description", content: "Explore guided exercise, nutritionist care, doctor consultations, and lifestyle maintenance at Equi Wellness." },
      { property: "og:title", content: "Services — Equi Wellness Health Club" },
      { property: "og:description", content: "Explore guided exercise, nutritionist care, doctor consultations, and lifestyle maintenance at Equi Wellness." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails = [
  {
    id: "exercise",
    title: "Guided Exercise",
    subtitle: "Movement that fits your body",
    description:
      "Our trainers don't hand out templates. They assess your posture, mobility, strength, and goals to build a program that progresses safely. Whether you're recovering from injury, training for an event, or just getting started, your plan is built for your body.",
    features: ["One-on-one personal training", "Small group sessions", "Mobility and recovery work", "Progress tracking and plan updates"],
    image: exerciseImage,
    icon: Dumbbell,
  },
  {
    id: "nutrition",
    title: "Nutritionist Care",
    subtitle: "Food as fuel and medicine",
    description:
      "Our registered nutritionists look at the full picture — your labs, energy, digestion, preferences, and schedule — to create a plan you can actually follow. No crash diets, just sustainable nourishment.",
    features: ["Initial nutrition assessment", "Meal planning and recipes", "Gut health and hormone support", "Follow-up coaching sessions"],
    image: nutritionistImage,
    icon: Utensils,
  },
  {
    id: "doctor",
    title: "Doctor Consultations",
    subtitle: "Medical insight for everyday wellness",
    description:
      "Our lifestyle medicine doctors connect the dots between your exercise, nutrition, sleep, stress, and bloodwork. They help identify root causes and guide you toward prevention, not just treatment.",
    features: ["Lifestyle medicine visits", "Lab review and interpretation", "Sleep and stress management", "Preventive health planning"],
    image: doctorImage,
    icon: HeartPulse,
  },
  {
    id: "lifestyle",
    title: "Lifestyle Maintenance",
    subtitle: "Habits that last",
    description:
      "Long-term health is built in the small moments. Our lifestyle coaches help you create routines around recovery, sleep, stress, and daily movement so progress sticks.",
    features: ["Habit coaching", "Recovery and sleep rituals", "Stress management tools", "Quarterly wellness reviews"],
    image: lifestyleImage,
    icon: Sparkles,
  },
];

function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-cream-100 py-20 md:py-28">
        <div className="container-tight text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we offer</span>
          <h1 className="mt-4 font-display text-4xl font-medium text-foreground md:text-5xl">
            Services designed around you
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Four connected disciplines. One unified plan. Our trainers, nutritionists, doctors, and lifestyle coaches collaborate so every part of your health moves forward together.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      <section className="py-16 md:py-24">
        <div className="container-wide space-y-24 md:space-y-32">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <service.icon className="size-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{service.title}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-medium text-foreground md:text-4xl">
                  {service.subtitle}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link to="/contact">
                    Book this service
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream-100 py-16 md:py-24">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl font-medium text-foreground md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a complimentary consultation and our team will help you choose the right combination of services.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Schedule a free consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
