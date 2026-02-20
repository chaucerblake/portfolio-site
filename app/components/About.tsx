"use client";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-text tracking-tight mb-12">
            The intersection of
            <br />
            <span className="text-accent">people and technology.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 fade-in-left">
            <p className="text-lg text-dark-text/70 leading-relaxed">
              With 7+ years of full-cycle partner and account management at TD
              Canada Trust, I&apos;ve built my career at the intersection of
              revenue execution and technology. From managing $1M+ SMB
              portfolios to leading BDR teams and collaborating with TD&apos;s
              internal AI and automation unit, every step has been intentional.
            </p>
            <p className="text-lg text-dark-text/70 leading-relaxed">
              I&apos;m driven by a singular mission: to bridge the gap between
              cutting-edge AI capabilities and the real-world products that
              transform how people live and work. Product management in the AI
              space isn&apos;t just a career goal — it&apos;s where my passion
              for technology meets my instinct for building things people love.
            </p>
          </div>

          <div className="space-y-6 fade-in-right">
            {/* Stat cards */}
            {[
              { number: "7+", label: "Years in Partner & Account Management" },
              { number: "150%", label: "SR Achievement YoY" },
              { number: "12", label: "BDRs Led as Remote Account Manager" },
              { number: "1", label: "Mission: AI Product Management" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-5 rounded-2xl bg-light-card/50 hover:bg-light-card transition-colors duration-300 group"
              >
                <span className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 min-w-[60px]">
                  {stat.number}
                </span>
                <span className="text-dark-text/60 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
