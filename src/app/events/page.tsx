"use client";

import { CldImage, getCldImageUrl } from "next-cloudinary";
import { cormorant, inter } from "@/components/ui/fonts";
import { BsCalendar, BsClock, BsGeoAlt } from "react-icons/bs";

// Generate blur placeholder URL using Cloudinary transformations
function getBlurDataUrl(src: string): string {
  return getCldImageUrl({
    src,
    width: 10,
    height: 10,
    quality: 1,
    effects: [{ blur: "1000" }],
  });
}

const events = [
  {
    title: "Brotherhood Nights",
    description: "Join us for an evening of fellowship, faith-sharing, and building authentic friendships with like-minded men.",
    image: "3_wlddxa",
    schedule: "Weekly",
    time: "7:00 PM",
    location: "Various Locations",
  },
  {
    title: "YMG Online",
    description: "Connect with brothers across the country through our virtual gatherings, perfect for those who can't attend in person.",
    image: "1_a9t0gw",
    schedule: "Bi-Weekly",
    time: "8:00 PM",
    location: "Online via Zoom",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
            Get Involved
          </span>
          <h1 className={`${cormorant.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mt-4`}>
            YMG Events
          </h1>
          <p className={`${inter.className} text-xl text-[var(--foreground-muted)] mt-6 max-w-2xl mx-auto`}>
            Join us at one of our regular gatherings and become part of a brotherhood committed to faith and growth.
          </p>
          <div className="section-divider mt-8" />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {events.map((event, index) => (
              <article key={index} className="card overflow-hidden group">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <CldImage
                    alt={event.title}
                    src={event.image}
                    fill
                    placeholder="blur"
                    blurDataURL={getBlurDataUrl(event.image)}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-card)] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className={`${cormorant.className} text-3xl font-bold text-[var(--foreground)] mb-4`}>
                    {event.title}
                  </h2>
                  <p className={`${inter.className} text-[var(--foreground-muted)] leading-relaxed mb-6`}>
                    {event.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                      <BsCalendar className="text-[var(--accent-primary)]" />
                      <span className={inter.className}>{event.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                      <BsClock className="text-[var(--accent-primary)]" />
                      <span className={inter.className}>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                      <BsGeoAlt className="text-[var(--accent-primary)]" />
                      <span className={inter.className}>{event.location}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a 
                    href="https://www.instagram.com/ymgmovement/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block mt-8"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6`}>
            Ready to Join the Brotherhood?
          </h2>
          <p className={`${inter.className} text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto`}>
            Take the first step in your journey. Reach out to us and discover how YMG can help you grow in faith and fellowship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us" className="btn-primary">
              Get in Touch
            </a>
            <a 
              href="https://www.instagram.com/ymgmovement/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
