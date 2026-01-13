import Image from "next/image";
import { cormorant, inter } from "@/components/ui/fonts";
import kennyImage from "../../../public/images/kenny.png";

export default function AboutPage() {
  const originParagraphs = [
    "When Fr Ken Barker MGL was in Assisi in the Jubilee Year 2000 praying in the small church where St Francis and his brothers spent much of their time, he sensed the Lord wanted a movement of young men in Australia, which would spread also to other countries.",
    "He sensed the Lord wanted young men to rise up in the Church today with a deep faith, purity of heart, and strength of character, to become leaders for the future. The Lord wanted to help young men to change; to know they can be made new.",
    "Fr Ken shared this vision with some young men in Canberra who had already begun to gather with other young men to support one another around sport, teachings, and personal sharing. They shared the vision together and a movement was born.",
    "During Covid, and due to other influences, the movement lost momentum. We are now in a moment of renaissance with renewed vision and vigour to fulfill the Lord's dream for men. This renewal has been assisted by a strong group of young men in Adelaide led by Charl Abd elmalk who in 2024 decided to change their original name and come into communion with YMG.",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
            Our Story
          </span>
          <h1 className={`${cormorant.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mt-4`}>
            About Us
          </h1>
          <div className="section-divider mt-8" />
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
                Where It All Began
              </span>
              <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-4 mb-8`}>
                YMG Origins
              </h2>
              
              <div className="space-y-6">
                {originParagraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`${inter.className} text-[var(--foreground-muted)] leading-relaxed text-lg`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="card p-4 glow-accent">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={kennyImage}
                    alt="Fr Ken Barker"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className={`${cormorant.className} text-2xl font-bold text-[var(--foreground)]`}>
                    Fr Ken Barker MGL
                  </h3>
                  <p className={`${inter.className} text-[var(--accent-primary)] mt-1`}>
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[var(--background-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
              What Guides Us
            </span>
            <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-4`}>
              Our Core Values
            </h2>
            <div className="section-divider mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Faith",
                description: "Rooted in Christ and the teachings of the Catholic Church, we seek to grow in our relationship with God.",
                icon: "🙏",
              },
              {
                title: "Purity of Heart",
                description: "Striving for moral integrity and freedom from sin, walking in truth and authentic masculinity.",
                icon: "💎",
              },
              {
                title: "Strength of Character",
                description: "Building the virtues needed to become servant leaders in the Church and the world.",
                icon: "⚔️",
              },
            ].map((value, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className={`${cormorant.className} text-2xl font-bold text-[var(--foreground)] mb-4`}>
                  {value.title}
                </h3>
                <p className={`${inter.className} text-[var(--foreground-muted)] leading-relaxed`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
  );
}
