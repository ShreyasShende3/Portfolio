import type { IconType } from "react-icons";
import { FiFilm } from "react-icons/fi";
import { GiConsoleController, GiHiking, GiSoccerBall, GiSwimfins } from "react-icons/gi";
import { INTERESTS } from "@/data/interests";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, IconType> = {
  Gaming: GiConsoleController,
  Anime: FiFilm,
  Football: GiSoccerBall,
  Hiking: GiHiking,
  Swimming: GiSwimfins,
};

export function BeyondTheCode() {
  return (
    <section id="beyond" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Beyond the Code</h2>
        <p className="mt-2 max-w-xl text-sm text-ink-muted">
          When I&apos;m not building pipelines, this is where I&apos;m usually at.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-6 flex flex-wrap gap-3">
          {INTERESTS.map(({ label }) => {
            const Icon = ICONS[label];
            const isFootball = label === "Football";
            return (
              <li key={label}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
                    isFootball
                      ? "border-barca-blue/40 bg-barca-blue/5 text-barca-red"
                      : "border-line bg-surface-panel text-ink-muted"
                  }`}
                >
                  {Icon && <Icon size={16} className={isFootball ? "text-barca-red" : "text-accent"} />}
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
