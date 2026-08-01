import Image from "next/image";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";
import { CERTIFICATES } from "@/data/certificates";
import { PUBLICATIONS, SCHOLAR_STATS } from "@/data/scholar";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const STAT_TILES = [
  { label: "Citations", all: SCHOLAR_STATS.citationsAll, since: SCHOLAR_STATS.citationsSince2021 },
  { label: "h-index", all: SCHOLAR_STATS.hIndexAll, since: SCHOLAR_STATS.hIndexSince2021 },
];

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Certificates &amp; Publications
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.06}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-surface-panel p-6 text-center transition-shadow hover:shadow-[0_0_0_1px_var(--color-accent),0_0_24px_-8px_var(--color-accent)]">
              <div className="relative h-20 w-20">
                <Image src={cert.badge} alt={cert.name} fill sizes="80px" className="object-contain" />
              </div>
              <p className="text-sm font-medium text-ink">{cert.name}</p>
              <p className="text-xs text-ink-muted">{cert.issuer}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent"
                >
                  Verify
                  <FiExternalLink size={12} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Publications
        </h3>
        <a
          href={site.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-line bg-surface-panel px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <GiGraduateCap size={16} />
          Google Scholar profile
          <FiExternalLink size={12} />
        </a>
      </div>

      <Reveal delay={0.05}>
        <div className="mt-4 grid max-w-sm grid-cols-2 gap-3">
          {STAT_TILES.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-surface-panel p-4 text-center"
            >
              <p className="font-mono text-2xl font-semibold text-accent">{stat.all}</p>
              <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
              <p className="mt-0.5 font-mono text-[10px] text-ink-muted/70">
                {stat.since} since 2021
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {PUBLICATIONS.length > 0 && (
        <div className="mt-4 space-y-3">
          {PUBLICATIONS.map((pub) => (
            <Reveal key={pub.title}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface-panel p-5">
                <FiFileText size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-ink">{pub.title}</p>
                  <p className="mt-1 text-xs text-ink-muted">{pub.authors}</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {pub.venue} · {pub.year}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    {!!pub.citations && (
                      <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                        Cited by {pub.citations}
                      </span>
                    )}
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent"
                      >
                        Read paper
                        <FiExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
