"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./image-carousel.css";

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 4500 })]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
          </div>
          <div className="embla__slide">
          </div>
          <div className="embla__slide">
          </div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="bknxiwhzdngqz2e6n6d6"
              width="500"
              height="500"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="bknxiwhzdngqz2e6n6d6"
              width="500"
              height="500"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="bonnlbssrzspihuxvu6o"
              width="960"
              height="600"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="ezwgfw3o2smxfb6kq9td"
              width="960"
              height="600"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div> 
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="yss9ad5ltotmbqjzgvle"
              width="960"
              height="600"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="xco1nhdomanq7sgwn2ca"
              width="960"
              height="600"
              crop={{
                type: "auto",
                source: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
