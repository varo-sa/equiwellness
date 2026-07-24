import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Equi Wellness Health Club" },
      { name: "description", content: "Book a consultation or get in touch with Equi Wellness Health Club." },
      { property: "og:title", content: "Contact — Equi Wellness Health Club" },
      { property: "og:description", content: "Book a consultation or get in touch with Equi Wellness Health Club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "equi@wellnessnepal.com" },
  { icon: Phone, label: "Phone", value: "+977 9851077622" },
  { icon: MapPin, label: "Address", value: "Radhe Radhe, Bhaktapur" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 6am – 4pm" },
];

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-cream-100 py-20 md:py-28">
        <div className="container-tight text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Get in touch</span>
          <h1 className="mt-4 font-display text-4xl font-medium text-foreground md:text-5xl">
            Start your wellness journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Book a complimentary consultation, ask a question, or stop by for a tour. We'd love to meet you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-medium text-card-foreground">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we'll reach out within one business day.
              </p>
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-card-foreground">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-card-foreground">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-card-foreground">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                  >
                    <option>General consultation</option>
                    <option>Guided exercise</option>
                    <option>Nutritionist care</option>
                    <option>Doctor consultation</option>
                    <option>Lifestyle maintenance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                    placeholder="Tell us a little about your goals..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-medium text-foreground">Visit the club</h2>
                <p className="mt-2 text-muted-foreground">
                  Our space is designed to feel calm from the moment you walk in. Stop by for a tour or book a consultation online.
                </p>
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-border bg-cream-100 p-8">
                <h3 className="font-display text-lg font-medium text-foreground">Prefer to call?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak with our membership team to schedule your complimentary consultation.
                </p>
                <p className="mt-4 font-display text-xl text-primary">+977 9851077622</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
