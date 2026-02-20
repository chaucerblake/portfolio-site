"use client";

const skillCategories = [
  {
    title: "Leadership",
    icon: "01",
    skills: [
      "Team Management (20+)",
      "Performance Coaching",
      "Strategic Planning",
      "Talent Development",
      "Cross-Functional Leadership",
    ],
  },
  {
    title: "Product & Strategy",
    icon: "02",
    skills: [
      "Product Thinking",
      "Roadmap Planning",
      "Data-Driven Decisions",
      "Stakeholder Management",
      "Agile & Scrum",
    ],
  },
  {
    title: "Technology",
    icon: "03",
    skills: [
      "AI & Machine Learning",
      "Data Analytics",
      "Digital Transformation",
      "Process Automation",
      "Emerging Tech Strategy",
    ],
  },
  {
    title: "Communication",
    icon: "04",
    skills: [
      "Executive Presentations",
      "Client-Centric Design",
      "Needs Assessment",
      "Consultative Approach",
      "Change Management",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-text tracking-tight mb-6">
            What I bring
            <br />
            <span className="text-accent">to the table.</span>
          </h2>
          <p className="text-lg text-dark-text/60 max-w-2xl mb-16">
            A unique blend of hands-on leadership, strategic thinking, and
            technical curiosity — built for the AI product landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="fade-in group p-8 rounded-2xl bg-light-card/50 hover:bg-dark hover:text-light-text border border-transparent hover:border-white/10 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                {cat.icon}
              </span>
              <h3 className="text-lg font-bold mt-4 mb-6 text-dark-text group-hover:text-light-text transition-colors duration-500">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li
                    key={j}
                    className="text-sm text-dark-text/50 group-hover:text-light-text/60 transition-colors duration-500 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
