import { montserrat } from "@/components/ui/fonts";
import LandingBanner from "@/components/ui/landing-banner";
import OurMission from "@/components/ui/ourMission";
import TwoHalves from "@/components/ui/whoWeAre";
import ImageCarousel from "@/components/ui/image-carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full px-4 mx-auto space-y-4">
      <LandingBanner />
      <OurMission />
      <div className="hidden lg:block">
        <TwoHalves leftContent={leftContent} rightContent={rightContent} />
      </div>
      <div className="lg:hidden">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/x63K3S9Tx2M?si=eP7aO-oIV9dL3twx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <ImageCarousel />
    </div>
  );
}

const leftContent = (
  <div className="p-4">
    <iframe
      width="540"
      height="315"
      src="https://www.youtube.com/embed/x63K3S9Tx2M?si=eP7aO-oIV9dL3twx"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

const rightContent = (
  <div className="p-4">
    <h1
      className={`${montserrat.className} text-[#1c272c] text-2xl lg:text-4xl font-bold`}
    >
      Vision Statement
    </h1>
    <ul
      className={`${montserrat.className} text-[#1c272c] text-1xl lg:text-2xl list-disc pl-8`}
    >
      <li>To empower young men</li>
      <li>To grow in faith and identity as sons of God</li>
      <li>To walk in moral integrity in truth and freedom</li>
      <li>To become servant leaders in the church and the world today</li>
    </ul>
  </div>
);
