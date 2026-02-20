"use client";

const education = [
  {
    degree: "Bachelor of Commerce",
    field: "Business Management",
    school: "Toronto Metropolitan University",
    period: "2014 — 2018",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    degree: "Google Project Management",
    field: "Professional Certificate",
    school: "Google",
    period: "2024",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-text tracking-tight mb-16">
            Always <span className="text-accent">learning.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="fade-in group p-8 rounded-2xl bg-light-card/50 hover:bg-light-card border border-transparent hover:border-accent/10 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-accent/60 group-hover:text-accent transition-colors duration-300 mb-6">
                {edu.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-1">
                {edu.degree}
              </h3>
              <p className="text-accent font-semibold text-sm mb-2">
                {edu.field}
              </p>
              <p className="text-dark-text/50 text-sm mb-1">{edu.school}</p>
              <p className="text-dark-text/30 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
