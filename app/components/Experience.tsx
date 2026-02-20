"use client";

const experiences = [
  {
    role: "Team Lead, Financial Planning",
    company: "TD",
    period: "Feb 2024 — Present",
    description:
      "Leading a team of 20+ financial planners, driving strategic planning, KPI tracking, and cross-functional collaboration with TD's Emerging Technology and AI units.",
    highlights: [
      "Spearhead operational workflows improving team productivity",
      "Partner with AI and Emerging Technology teams on new product initiatives",
      "Manage end-to-end team performance, hiring, and development",
    ],
  },
  {
    role: "Senior Financial Advisor",
    company: "TD",
    period: "Sep 2022 — Feb 2024",
    description:
      "Top-tier advisor managing complex financial portfolios while mentoring junior advisors and collaborating on digital transformation projects.",
    highlights: [
      "Achieved and exceeded all sales targets consistently",
      "Led mentorship programs for new team members",
      "Contributed to process optimization and digital adoption initiatives",
    ],
  },
  {
    role: "Financial Advisor",
    company: "TD",
    period: "Mar 2020 — Sep 2022",
    description:
      "Built and managed a growing book of business, delivering personalized financial solutions through data-driven needs assessments.",
    highlights: [
      "Grew client portfolio through consultative, needs-based approach",
      "Leveraged data analytics to identify client opportunities",
      "Recognized for client satisfaction and retention",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "TD",
    period: "Jun 2018 — Mar 2020",
    description:
      "Started my career at TD, building a strong foundation in client relations, financial products, and operational excellence.",
    highlights: [
      "Delivered exceptional client service across multiple product lines",
      "Built deep product knowledge across banking and investment services",
      "Identified for fast-track development and promotion",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-light-card">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="fade-in">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-text tracking-tight mb-6">
            A career built on
            <br />
            <span className="text-accent">intentional growth.</span>
          </h2>
          <p className="text-lg text-dark-text/60 max-w-2xl mb-16">
            Four promotions in seven years — each role a deliberate step toward
            leading at the intersection of technology and business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="fade-in relative pl-8 md:pl-20"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-accent shadow-lg shadow-accent/30" />

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-black/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-text">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-dark-text/40 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-dark-text/60 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-dark-text/50 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
