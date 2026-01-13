"use client";

import React, { useCallback } from "react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { cormorant, inter } from "./fonts";

const images = [
  { src: "WhatsApp_Image_2025-06-27_at_15.53.59_qen4wd", width: 500, height: 500 },
  { src: "WhatsApp_Image_2025-07-05_at_09.33.53_e7qsgk", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-07-08_at_09.23.32_aijaas", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-06-25_at_01.04.13_zd8i5z", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-06-27_at_15.54.01_tqkvyi", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-06-27_at_15.55.43_1_wgdune", width: 500, height: 500 },
  { src: "WhatsApp_Image_2025-07-05_at_09.36.31_j2yfo3", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-06-27_at_15.54.40_ueo1gv", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-06-27_at_15.55.46_lbuach", width: 960, height: 600 },
  { src: "WhatsApp_Image_2025-07-08_at_09.22.24_bkizjy", width: 960, height: 600 },
  { src: "bknxiwhzdngqz2e6n6d6", width: 500, height: 500 },
  { src: "bonnlbssrzspihuxvu6o", width: 960, height: 600 },
  { src: "ezwgfw3o2smxfb6kq9td", width: 960, height: 600 },
  { src: "yss9ad5ltotmbqjzgvle", width: 960, height: 600 },
  { src: "xco1nhdomanq7sgwn2ca", width: 960, height: 600 },
];

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

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none opacity-50" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
            Our Community
          </span>
          <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-4`}>
            Life in YMG
          </h2>
          <div className="section-divider mt-6" />
          </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border-subtle)] text-[var(--foreground)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 -translate-x-1/2 lg:translate-x-0"
            aria-label="Previous image"
          >
            <BsChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border-subtle)] text-[var(--foreground)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 translate-x-1/2 lg:translate-x-0"
            aria-label="Next image"
          >
            <BsChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 lg:mx-16" ref={emblaRef}>
            <div className="flex gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0"
                >
                  <div className="card overflow-hidden group">
                    <div className="relative aspect-[4/3] overflow-hidden">
            <CldImage
                        alt={`YMG community photo ${index + 1}`}
                        src={image.src}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        placeholder="blur"
                        blurDataURL={getBlurDataUrl(image.src)}
              crop={{
                          type: "fill",
                source: true,
              }}
            />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          </div>
          </div>
              ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
