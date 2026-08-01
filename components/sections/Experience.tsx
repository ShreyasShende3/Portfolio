import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import { TIMELINE } from "@/data/timeline";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Experience &amp; Education</h2>
        <p className="mt-2 text-sm text-ink-muted">Hover a card (or tab to it) to read the details.</p>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
          <span className="flex items-center gap-1.5">
            <FiBriefcase size={12} className="text-accent" />
            Experience
          </span>
          <span className="flex items-center gap-1.5">
            <FiBookOpen size={12} className="text-accent-2" />
            Education
          </span>
          <span className="font-mono">Current → 2019</span>
        </div>
      </Reveal>

      <div className="relative mt-10">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block"
        />
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {TIMELINE.map((entry, i) => {
            const isWork = entry.kind === "work";
            return (
              <Reveal
                key={`${entry.kind}-${isWork ? entry.title : entry.degree}`}
                delay={i * 0.05}
                className={`relative ${isWork ? "md:col-start-2" : "md:col-start-1"}`}
              >
                <span
                  aria-hidden
                  style={isWork ? { left: "-1.25rem" } : { right: "-1.25rem" }}
                  className={`absolute top-2 hidden h-3 w-3 rounded-full border-2 bg-surface md:block ${
                    isWork ? "border-accent" : "border-accent-2"
                  }`}
                />

                <div
                  tabIndex={0}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-surface-panel p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {entry.logo && (
                    <div
                      aria-hidden
                      style={{
                        backgroundImage: `url(${entry.logo})`,
                        WebkitMaskImage: "linear-gradient(to left, black 22%, transparent 68%)",
                        maskImage: "linear-gradient(to left, black 22%, transparent 68%)",
                      }}
                      className="pointer-events-none absolute inset-0 bg-size-[42%] bg-position-[108%_50%] bg-no-repeat opacity-40 transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60"
                    />
                  )}

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3">
                      {isWork ? (
                        <>
                          <span className="font-mono text-xs uppercase tracking-widest text-accent">
                            {entry.arc}
                          </span>
                          {entry.current && (
                            <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                              Current
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent-2">
                          <FiBookOpen size={12} />
                          Education
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-ink">
                      {isWork ? entry.title : entry.degree}
                    </h3>
                    <p className="text-sm text-ink-muted">
                      {isWork ? entry.organization : entry.school} · {entry.location} · {entry.period}
                    </p>

                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                      <div className="overflow-hidden">
                        {isWork ? (
                          <ul className="mt-3 space-y-2">
                            {entry.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                              >
                                <span
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted"
                                  aria-hidden
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-3 font-mono text-xs text-ink-muted">GPA {entry.gpa}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
