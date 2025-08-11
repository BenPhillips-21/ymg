"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./image-carousel.css";

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4500 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide"></div>
          <div className="embla__slide">
            <CldImage
              alt="Jesus Christ"
              src="WhatsApp_Image_2025-06-27_at_15.53.59_qen4wd"
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
              src="WhatsApp_Image_2025-07-05_at_09.33.53_e7qsgk"
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
              src="WhatsApp_Image_2025-07-08_at_09.23.32_aijaas"
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
              src="WhatsApp_Image_2025-06-25_at_01.04.13_zd8i5z"
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
              src="WhatsApp_Image_2025-06-27_at_15.54.01_tqkvyi"
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
              src="WhatsApp_Image_2025-06-27_at_15.55.43_1_wgdune"
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
              src="WhatsApp_Image_2025-07-05_at_09.36.31_j2yfo3"
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
              src="WhatsApp_Image_2025-06-27_at_15.54.40_ueo1gv"
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
              src="WhatsApp_Image_2025-06-27_at_15.55.46_lbuach"
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
              src="WhatsApp_Image_2025-07-08_at_09.22.24_bkizjy"
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
