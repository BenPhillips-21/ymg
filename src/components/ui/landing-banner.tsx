import Image from "next/image";
import { ebGaramond } from "./fonts";

export default function LandingBanner() {
  return (
    <div className="relative w-full" style={{ width: "100vw" }}>
      <div className="relative w-[100%] h-[550px] lg:h-[670px] mx-auto overflow-hidden">
        <Image
          src="/images/wandererAboveTheFog.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center 95%"
          alt="Wanderer Above The Fog"
          priority
        />
      </div>
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className={`${ebGaramond.className} text-[#333652] w-[100%] text-4xl lg:text-7xl font-bold`}
        >
          YOUNG MEN OF GOD
        </h1>
      </div>
      <div className="absolute top-[88%] lg:top-[93%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className={`${ebGaramond.className} text-[#FAD02C] text-1xl lg:text-3xl font-bold`}
        >
          YMG is a movement of 18-35 year old Catholic men seeking the fullness of life that only Jesus can give.
        </h1>
      </div>
    </div>
  );
}