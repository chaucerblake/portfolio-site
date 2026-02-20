"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto section-padding flex flex-col items-center text-center pt-24 pb-20">
        {/* Headshot Placeholder */}
        <div className="fade-in mb-10">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-accent/5 rounded-full blur-sm" />
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-dark-card border border-white/10 overflow-hidden">
              <Image
                src="/headshot.png"
                alt="Chaucer Blake"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-6 fade-in">
          Welcome
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-light-text leading-[1.05] tracking-tight mb-6 fade-in">
          Chaucer
          <br />
          <span className="gradient-text">Blake</span>
        </h1>
        <p className="text-xl sm:text-2xl text-light-text/60 font-light leading-relaxed max-w-xl mb-10 fade-in">
          Driving the future of AI —{" "}
          <span className="text-light-text/90 font-normal">
            from strategy to product.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            View My Journey
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-light-text/20 text-light-text text-sm font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-light-text/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-light-text/30 to-transparent" />
      </div>
    </section>
  );
}
