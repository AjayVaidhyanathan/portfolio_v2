import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WorkSection from "@/components/WorkSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { SAMPLE_PROJECTS } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Ticker />
      <WorkSection projects={SAMPLE_PROJECTS} />

      {/* Approach Section */}
      <section id="approach" className="bg-[var(--navy)] px-14 py-24 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)] relative z-10">
          <div>
            <div className="text-[12px] font-semibold tracking-widest uppercase text-[var(--sand)] opacity-60 mb-4">How I work</div>
            <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-normal leading-[0.95] tracking-tight text-white">
              My <em className="italic text-[var(--sand)] font-normal">approach</em>
            </h2>
          </div>
          <p className="text-16px leading-[1.8] text-[rgba(255,255,255,0.5)] font-light">
            Good product work starts with <strong className="text-[rgba(255,255,255,0.85)] font-medium">understanding the problem clearly</strong> before reaching for a solution. I spend more time in discovery than most PMs - because clarity in discovery saves weeks in delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 relative z-10">
          <ApproachCard
            number="01"
            title="Start with the problem"
            desc="User interviews, support data, analytics - everything gets read before a spec is written. I prioritize understanding over velocity in discovery."
          />
          <ApproachCard
            number="02"
            title="Build the business case"
            desc="Good ideas don't always get funded. I write honest ROI estimates and risk analysis - the kind that make decisions easier, not harder."
          />
          <ApproachCard
            number="03"
            title="Ship with the team"
            desc="Specs engineers want to read, design context that unlocks creativity, blockers cleared before they become fires. Delivery is a team sport."
          />
          <ApproachCard
            number="04"
            title="Learn and document"
            desc="Every launch is a learning event. I document what worked and what didn't so the next team doesn't start from zero."
          />
        </div>
      </section>

      <Skills />
      <About />
      <Contact />

      <footer className="bg-[var(--navy2)] border-t border-[rgba(255,255,255,0.06)] px-14 py-7 flex justify-between items-center">
        <span className="text-[12px] font-medium text-[rgba(255,255,255,0.25)] tracking-wide">
          Ajay Swaminathan <span className="text-[var(--sand)] opacity-60 ml-1 mr-1">-</span> Munich, Germany
        </span>
        <span className="text-[12px] font-medium text-[rgba(255,255,255,0.25)] tracking-wide">
          2025 <span className="text-[var(--sand)] opacity-60 ml-1 mr-1">-</span> hello@ajayvaidhyanathan.com
        </span>
      </footer>
    </main>
  );
}

function ApproachCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] p-9 group hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(232,213,176,0.2)] transition-all duration-300">
      <span className="font-serif text-[72px] text-[rgba(232,213,176,0.1)] leading-none -tracking-widest block mb-6">{number}</span>
      <h3 className="text-[15px] font-semibold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.45)] font-light">{desc}</p>
    </div>
  )
}
