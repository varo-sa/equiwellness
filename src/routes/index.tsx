import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Leaf, HeartPulse, Utensils, Dumbbell, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import nutritionistImage from "@/assets/nutritionist.jpg";
import doctorImage from "@/assets/doctor.jpg";
import exerciseImage from "@/assets/exercise.jpg";
import lifestyleImage from "@/assets/lifestyle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Equi Wellness Health Club — Exercise, Nutrition & Medical Care" },
      { name: "description", content: "Join Equi Wellness for guided exercise, nutritionist care, doctor consultations, and lifestyle maintenance tailored to your body and goals." },
      { property: "og:title", content: "Equi Wellness Health Club — Exercise, Nutrition & Medical Care" },
      { property: "og:description", content: "Join Equi Wellness for guided exercise, nutritionist care, doctor consultations, and lifestyle maintenance tailored to your body and goals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Guided Exercise",
    description: "Personal training and movement plans designed around your body, goals, and recovery needs.",
    image: exerciseImage,
    icon: Dumbbell,
  },
  {
    title: "Nutritionist Care",
    description: "One-on-one nutrition coaching to fuel your body, balance hormones, and support long-term health.",
    image: nutritionistImage,
    icon: Utensils,
  },
  {
    title: "Doctor Consultations",
    description: "Lifestyle medicine consultations that connect your movement, diet, sleep, and overall wellbeing.",
    image: doctorImage,
    icon: HeartPulse,
  },
  {
    title: "Lifestyle Maintenance",
    description: "Habit coaching, recovery rituals, and ongoing support to keep you consistent and resilient.",
    image: lifestyleImage,
    icon: Sparkles,
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bright, plant-filled wellness studio with yoga mats and natural wood floors"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container-wide relative flex min-h-[80vh] items-center py-20 md:min-h-[85vh]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Leaf className="size-3.5" />
              Whole-body wellness
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.15] text-foreground md:text-6xl lg:text-7xl">
              Health built around <em className="not-italic text-primary">your</em> body
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Equi Wellness brings together guided exercise, nutritionist care, doctor consultations, and lifestyle maintenance — all tailored to how you live.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our facilities</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-medium text-foreground md:text-4xl">
              Everything you need under one roof
            </h2>
            <p className="mt-4 text-muted-foreground">
              From personalized training to medical guidance, our team works together to design a plan that fits your life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <service.icon className="size-4.5" />
                    </div>
                    <h3 className="font-display text-lg font-medium text-card-foreground">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-cream-100 py-20 md:py-28">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our approach</span>
              <h2 className="mt-3 text-balance font-display text-3xl font-medium text-foreground md:text-4xl">
                Tailored to you, not a template
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We start with where you are. Our trainers, nutritionists, and doctors collaborate to understand your body, schedule, and goals — then build a plan that evolves with you.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Body-aware exercise programming",
                  "Nutrition plans based on your labs and lifestyle",
                  "Medical oversight from lifestyle medicine doctors",
                  "Ongoing coaching to maintain momentum",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg className="size-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={lifestyleImage}
                  alt="Morning wellness routine with meditation, healthy food, and journaling"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl border border-border bg-card p-5 shadow-lg lg:block">
                <p className="font-display text-lg text-card-foreground">"Small steps, every day, lead to big changes."</p>
                <p className="mt-2 text-xs text-muted-foreground">— Equi Wellness philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Member stories</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground md:text-4xl">
              Real results, real lives
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "For the first time, my workouts, meals, and health checks are all in one place. It finally feels sustainable.",
                name: "Saraswati M.",
                role: "Lalitpur",
              },
              {
                quote: "The doctor and nutritionist worked with my trainer to address my fatigue. I have energy I haven't had in years.",
                name: "Janak Tiwari",
                role: "Kathmandu",
              },
              {
                quote: "Everything is customized. No generic plans. Just support",
                name: "Priya Giri",
                role: "Imadol",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
                <p className="font-display text-lg leading-relaxed text-card-foreground">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:py-24">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-medium text-primary-foreground md:text-4xl">
                Start with a complimentary consultation
              </h2>
              <p className="mt-4 whitespace-pre-line text-primary-foreground/80">
                -Meet our team{"\n"}
                -Tour the club{"\n"}
                &nbsp;-Discover a wellness plan designed only for you
              </p>
              <Button asChild size="lg" variant="outline" className="mt-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Book your visit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
