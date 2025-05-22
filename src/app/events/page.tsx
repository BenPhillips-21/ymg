"use client";

import { montserrat } from "@/components/ui/fonts";
import RegoForm from "@/components/ui/rego-form";
import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div className="flex flex-col text-center">
      <h1 className={`${montserrat.className} text-4xl underline font-bold mt-2`}>
        YMG Events
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col text-center m-5">
          <h1 className={`${montserrat.className} text-2xl font-bold`}>
            Brotherhood Nights
          </h1>
          <CldImage
            alt="YMG Brotherhood image"
            src="3_wlddxa"
            width="400"
            height="500"
          />
        </div>
        <div className="flex flex-col text-center m-5">
          <h1 className={`${montserrat.className} text-2xl font-bold`}>
            YMG Online
          </h1>
          <CldImage
            alt="YMG Online image"
            src="1_a9t0gw"
            width="400"
            height="500"
          />
        </div>
      </div>
      <RegoForm />
    </div>
  );
}
