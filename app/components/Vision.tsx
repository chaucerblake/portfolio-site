"use client";

export default function Vision() {
  return (
    <section id="vision" className="py-32 bg-dark relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-8">
            Vision
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text tracking-tight leading-tight mb-8">
            AI will redefine every industry.
            <br />
            <span className="text-accent">
              I want to build the products that lead the way.
            </span>
          </h2>

          <div className="w-16 h-px bg-accent/50 mx-auto my-12" />

          <p className="text-xl text-light-text/50 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            My career has been a deliberate journey toward the intersection of
            technology and human impact. I&apos;ve led teams, shaped strategy,
            and partnered with AI innovators — all to prepare for the role where
            I can make the biggest difference.
          </p>

          <p className="text-xl text-light-text/50 font-light leading-relaxed max-w-2xl mx-auto">
            Product management in AI isn&apos;t just about shipping features.
            It&apos;s about understanding what people need before they know they
            need it — and having the leadership, empathy, and technical
            intuition to deliver it.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Lead",
              desc: "7+ years building and inspiring high-performing teams",
            },
            {
              title: "Bridge",
              desc: "Connecting business strategy with emerging technology",
            },
            {
              title: "Build",
              desc: "Turning AI capabilities into products people love",
            },
          ].map((pillar, i) => (
            <div key={i} className="fade-in" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                <h3 className="text-2xl font-bold text-light-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-light-text/40 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
