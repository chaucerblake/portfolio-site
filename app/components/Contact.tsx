"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-dark relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto section-padding text-center">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text tracking-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-accent">something together.</span>
          </h2>
          <p className="text-xl text-light-text/50 font-light leading-relaxed max-w-xl mx-auto mb-12">
            I&apos;m always open to conversations about AI, product management,
            and the future of technology. Let&apos;s connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chaucer.blake@example.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/chaucerblake"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-light-text/20 text-light-text text-sm font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5">
          <p className="text-light-text/20 text-sm">
            &copy; {new Date().getFullYear()} Chaucer Blake. Built with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
