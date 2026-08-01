import Image from "next/image";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const quickFacts = ["Data Engineer @ Morgan Stanley", "MS CS, NJIT", site.location];

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="mb-4 inline-block rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
            {site.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-muted">{site.bio}</p>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted">
            {quickFacts.map((fact) => (
              <div key={fact} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span>{fact}</span>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-opacity hover:opacity-90"
            >
              <FiDownload size={15} />
              Resume
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FiMail size={15} />
              Email
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="justify-self-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-line bg-surface-panel sm:h-80 sm:w-80">
            <Image
              src="/profile.jpg"
              alt={site.name}
              fill
              sizes="(min-width: 640px) 320px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
