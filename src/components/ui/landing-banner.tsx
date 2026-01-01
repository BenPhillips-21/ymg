import Image from "next/image";
import { montserrat } from "./fonts";
import landingBanner from "../../../public/images/landing-banner.jpg";

export default function LandingBanner() {
  return (
    <div className="relative w-full" style={{ width: "100vw" }}>
      <div className="relative w-[100%] h-[550px] lg:h-[670px] mx-auto overflow-hidden">
        <Image
          src={landingBanner}
          fill
          style={{ objectFit: "cover", objectPosition: "center 95%" }}
          alt="Image of hikers on mountaintop above clouds"
          placeholder="blur"
          priority
        />
      </div>
      <div className="absolute w-[95%] top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className={`${montserrat.className} text-[#1c272c] w-[100%] text-4xl lg:text-7xl font-bold`}
        >
          YOUNG MEN OF GOD
        </h1>
      </div>
      <div className="absolute w-[100%] lg:w-[65%] top-[88%] lg:top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className={`${montserrat.className} text-[#f1b051] text-l lg:text-2xl font-bold`}
        >
          YMG is a movement of 18-35 year old Catholic men seeking the fullness of life that only Jesus can give.
        </h1>
      </div>
    </div>
  );
}