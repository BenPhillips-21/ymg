import React from "react";
import { cormorant, inter } from "./fonts";

interface TwoHalvesProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoHalves = ({ leftContent, rightContent }: TwoHalvesProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="card p-2 overflow-hidden glow-accent">
            {leftContent}
          </div>

          {/* Right Content */}
          <div>
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export const VisionStatement = () => {
  const visionPoints = [
    "To empower young men",
    "To grow in faith and identity as sons of God",
    "To walk in moral integrity in truth and freedom",
    "To become servant leaders in the church and the world today",
  ];

  return (
    <div className="space-y-6">
      <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
        Our Purpose
      </span>
      <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)]`}>
        Vision Statement
      </h2>
      <div className="section-divider !mx-0" />
      <ul className="space-y-4">
        {visionPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-4 group">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] font-semibold text-sm group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--background)] transition-all duration-300">
              {index + 1}
            </span>
            <span className={`${inter.className} text-lg text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors duration-300`}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwoHalves;
