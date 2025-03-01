import { ebGaramond } from "./fonts";

export default function OurMission() {
    return (
      <section className="flex flex-col items-center justify-center max-w-full px-4 py-8 mx-auto space-y-4">
        <h1 className={`${ebGaramond.className} text-[#333652] text-6xl font-bold text-center underline`}>Our Mission</h1> 
        <h1 className={`${ebGaramond.className} text-5xl text-[#333652] text-center leading-relaxed`}>  
          To disciple and equip young men with the truth of the gospel for personal growth in Christ, and in brotherhood and evangelisation.
        </h1>
      </section>
    );
  }