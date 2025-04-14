import { montserrat } from "./fonts";

export default function OurMission() {
    return (
      <section className="flex flex-col items-center justify-center max-w-full px-4 py-8 mx-auto space-y-4">
        <h1 className={`${montserrat.className} text-[#1c272c] text-3xl lg:text-4xl font-bold text-center underline`}>Our Mission</h1> 
        <h1 className={`${montserrat.className} text-1xl lg:text-2xl text-[#1c272c] text-center leading-relaxed`}>  
          To disciple and equip young men with the truth of the gospel for personal growth in Christ, and in brotherhood and evangelisation.
        </h1>
      </section>
    );
  }