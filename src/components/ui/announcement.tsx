"use client";

import { CldImage, getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import { cormorant, inter } from "./fonts";

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

export default function Announcement() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-8`}>
        🚨 New YMG Event! 🚨
        </h2>

        {/* Image */}
        <div className="card overflow-hidden mb-8">
          <CldImage
            alt="YMG Melbourne Conference 2026"
            src="ymgMelbConf26_blmot4"
            width={600}
            height={600}
            placeholder="blur"
            blurDataURL={getBlurDataUrl("ymgMelbConf26_blmot4")}
            className="w-full h-auto"
          />
        </div>

        {/* Description */}
        <p className={`${inter.className} text-[var(--foreground-muted)] leading-relaxed mb-8`}>
            A men's weekend getaway to power-up mid year, grow in faith, brotherhood and leadership. A power-packed line up of great speakers, fellowship and food. Give God permission to lead you on the path of authentic, Christ-like manhood.
        </p>

        {/* Sign Up Button */}
        <Link href="/power-retreat-sign-up" className="btn-primary inline-block">
          Sign Up
        </Link>
      </div>
    </section>
  );
}
