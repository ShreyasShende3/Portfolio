import type { IconType } from "react-icons";
import { FiBarChart2, FiCode, FiCpu, FiDatabase, FiGitBranch } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import { SKILL_BRANCHES } from "@/data/skills";
import { resolveToolIcon } from "@/lib/toolIcons";
import { Reveal } from "@/components/Reveal";

const BRANCH_ICONS: Record<string, IconType> = {
  "data-cloud": FiDatabase,
  "programming-sql": FiCode,
  "analytics-bi": FiBarChart2,
  "machine-learning": FiCpu,
  "devops-collab": FiGitBranch,
};

const BRANCH_RADIUS = 30;
const LEAF_RADIUS = 46;
const LEAF_SPREAD = 32;
const BRANCH_BEND = 9;
const LEAF_BEND = 4.5;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

/** Quadratic-bezier path between two points, bowed out perpendicular to the segment. */
function curvedPath(x1: number, y1: number, x2: number, y2: number, bend: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

const NODES = SKILL_BRANCHES.map((branch, i) => {
  const angle = -90 + i * (360 / SKILL_BRANCHES.length);
  const { x, y } = polar(angle, BRANCH_RADIUS);
  const bendSign = i % 2 === 0 ? 1 : -1;
  const leaves = branch.featured.map((tool, j, arr) => {
    const offset =
      arr.length === 1 ? 0 : -LEAF_SPREAD / 2 + (LEAF_SPREAD / (arr.length - 1)) * j;
    const pos = polar(angle + offset, LEAF_RADIUS);
    return { tool, ...pos };
  });
  return { branch, angle, x, y, bendSign, leaves };
});

/** Corner-bracket "HUD lock-on" frame that appears around a node on hover. */
function HudCorners({ size }: { size: "lg" | "sm" }) {
  if (size === "lg") {
    return (
      <>
        <span className="pointer-events-none absolute -left-2.5 -top-2.5 h-3 w-3 scale-75 border-l-2 border-t-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -right-2.5 -top-2.5 h-3 w-3 scale-75 border-r-2 border-t-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-3 w-3 scale-75 border-b-2 border-l-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-3 w-3 scale-75 border-b-2 border-r-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
      </>
    );
  }
  return (
    <>
      <span className="pointer-events-none absolute -left-1.5 -top-1.5 h-2 w-2 scale-75 border-l-2 border-t-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -right-1.5 -top-1.5 h-2 w-2 scale-75 border-r-2 border-t-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-2 w-2 scale-75 border-b-2 border-l-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-2 w-2 scale-75 border-b-2 border-r-2 border-accent opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
    </>
  );
}

/** Static radial mind-map: a curated highlight reel, not the full resume list — see data/skills.ts. */
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Skills</h2>
        <p className="mt-2 text-sm text-ink-muted">
          A snapshot of the toolkit — the resume has the full list.
        </p>
      </Reveal>

      {/* Radial diagram — desktop/tablet */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-8 hidden aspect-square w-full max-w-2xl md:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            {NODES.map(({ branch, x, y, bendSign, leaves }) => (
              <g key={branch.id}>
                <path
                  d={curvedPath(50, 50, x, y, BRANCH_BEND * bendSign)}
                  fill="none"
                  style={{ stroke: "var(--color-line)" }}
                  strokeWidth={0.3}
                />
                {leaves.map((leaf) => (
                  <path
                    key={leaf.tool}
                    d={curvedPath(x, y, leaf.x, leaf.y, LEAF_BEND * bendSign)}
                    fill="none"
                    style={{ stroke: "var(--color-line)" }}
                    strokeWidth={0.3}
                  />
                ))}
              </g>
            ))}
          </svg>

          {/* Center node */}
          <div
            className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface-panel text-accent shadow-[0_0_24px_-4px_var(--color-accent)]"
            style={{ left: "50%", top: "50%" }}
          >
            <GiBrain size={34} />
          </div>

          {NODES.map(({ branch, x, y, leaves }) => {
            const BranchIcon = BRANCH_ICONS[branch.id] ?? FiCode;
            return (
              <div key={branch.id}>
                <div
                  className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="relative">
                    <div
                      title={branch.tools.join(", ")}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/60 bg-surface-panel text-accent transition-shadow duration-200 group-hover:border-accent group-hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
                    >
                      <BranchIcon size={22} />
                    </div>
                    <HudCorners size="lg" />
                  </div>
                  <span className="mt-1.5 w-24 text-center text-xs font-medium leading-tight text-ink transition-colors duration-200 group-hover:text-accent">
                    {branch.shortLabel}
                  </span>
                </div>

                {leaves.map((leaf) => {
                  const ToolIcon = resolveToolIcon(leaf.tool);
                  return (
                    <div
                      key={leaf.tool}
                      className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                      style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
                    >
                      <div className="relative">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-elevated text-ink-muted transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_14px_-4px_var(--color-accent)]">
                          <ToolIcon size={15} />
                        </div>
                        <HudCorners size="sm" />
                      </div>
                      <span className="mt-1 w-20 text-center text-[10px] leading-tight text-ink-muted transition-colors duration-200 group-hover:text-accent">
                        {leaf.tool}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Simple list — mobile */}
      <div className="mt-6 space-y-5 md:hidden">
        {SKILL_BRANCHES.map((branch) => {
          const BranchIcon = BRANCH_ICONS[branch.id] ?? FiCode;
          return (
            <Reveal key={branch.id}>
              <div className="rounded-2xl border border-line bg-surface-panel p-4">
                <div className="flex items-center gap-2 text-ink">
                  <BranchIcon size={18} className="text-accent" />
                  <h3 className="text-sm font-semibold">{branch.label}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {branch.featured.map((tool) => {
                    const ToolIcon = resolveToolIcon(tool);
                    return (
                      <span
                        key={tool}
                        className="flex items-center gap-1.5 rounded-full border border-line bg-surface-elevated px-2.5 py-1 text-xs text-ink-muted"
                      >
                        <ToolIcon size={12} className="text-accent" />
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
