import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { PROJECTS, GITHUB_PROFILE_URL } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Projects</h2>
        <p className="mt-2 text-sm text-ink-muted">A few things I&apos;ve shipped recently.</p>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-panel p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-ink">{project.name}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FiGithub size={14} />
                </a>
              </div>
              {project.period && (
                <p className="mt-1 font-mono text-xs text-ink-muted">{project.period}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

              <div className="mt-4 rounded-xl border border-line bg-surface p-3">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted/70">
                  Pipeline
                </p>
                <ArchitectureDiagram flow={project.flow} />
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  Live demo
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          View more on GitHub
          <FiArrowRight size={14} />
        </a>
      </Reveal>
    </section>
  );
}
