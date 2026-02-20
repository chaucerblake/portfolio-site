"use client";

const experiences = [
  {
    role: "Remote Account Manager, SMB",
    company: "TD Canada Trust",
    location: "Toronto, ON",
    period: "Oct 2024 — Dec 2025",
    description:
      "Managed end-to-end deal support for a $1M+ SMB portfolio in Salesforce, led a team of 12 BDRs, and served as commercial liaison to TD Innovation Partners — TD's internal AI and automation unit.",
    highlights: [
      "Achieved 150% SR and 148% Units YoY through rigorous pipeline discipline and partner relationship management",
      "Led 12 BDRs on partner engagement, pipeline hygiene, and outreach prioritization",
      "Translated AI/automation capabilities into partner-facing value, supporting rollouts that generated net-new revenue",
      "Provided leadership with visibility into partner performance trends, deal registration gaps, and pipeline conversion",
    ],
  },
  {
    role: "Account Manager, SMB",
    company: "TD Canada Trust",
    location: "Fergus, ON",
    period: "Sep 2023 — Oct 2024",
    description:
      "Promoted from BDR into first Account Manager role — managed 2–5 junior staff, an SMB client portfolio, and both internal and external partner relationships across the Fergus region.",
    highlights: [
      "Promoted based on consistent performance and leadership potential",
      "Managed SMB client portfolio and regional partner relationships end-to-end",
      "Transitioned to remote-first Toronto territory upon promotion to senior role",
    ],
  },
  {
    role: "Business Development Representative",
    company: "Toronto-Dominion Canada Trust",
    location: "Toronto, ON",
    period: "May 2018 — Sep 2023",
    description:
      "Supported senior Account Managers on deal execution, managed partner tiers, and ran targeted re-engagement campaigns that drove measurable pipeline growth.",
    highlights: [
      "Drove a 30% increase in new SMB business in Q1 by reactivating dormant partner pipeline",
      "Maintained CRM accuracy and deal registration compliance across a tiered partner portfolio",
      "Flagged channel performance gaps to leadership and collaborated with Marketing & Operations on outreach alignment",
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
            7+ years of full-cycle partner and account management — from
            supporting deal execution to leading teams and managing $1M+ SMB
            portfolios at TD Canada Trust.
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-text">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <p className="text-dark-text/40 text-sm">{exp.location}</p>
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
