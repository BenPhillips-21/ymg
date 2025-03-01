import LandingBanner from "@/components/ui/landing-banner";
import OurMission from "@/components/ui/ourMission";
import TwoHalves from "@/components/ui/whoWeAre";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full px-4 py-8 mx-auto space-y-4">
      <LandingBanner />
      <OurMission />
      <TwoHalves leftContent={leftContent} rightContent={rightContent} />
    </div>
  );
}

const leftContent = (
  <div className="p-4">
    <h1></h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/x63K3S9Tx2M?si=eP7aO-oIV9dL3twx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);

const rightContent = (
  <div className="p-4">
        <h2 className="text-2xl font-bold">Left Side</h2>
        <p>This is the content for the left half.</p>
  </div>
);