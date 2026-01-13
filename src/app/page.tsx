"use client";

import LandingBanner from "@/components/ui/landing-banner";
import OurMission from "@/components/ui/ourMission";
import TwoHalves, { VisionStatement } from "@/components/ui/whoWeAre";
import ImageCarousel from "@/components/ui/image-carousel";
import Announcement from "@/components/ui/announcement";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingBanner />
      <Announcement />
      <OurMission />
      
      {/* Vision Section with Video */}
      <TwoHalves 
        leftContent={
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/x63K3S9Tx2M?si=eP7aO-oIV9dL3twx"
              title="YMG Movement Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        } 
        rightContent={<VisionStatement />} 
      />
      
      <ImageCarousel />
    </div>
  );
}
