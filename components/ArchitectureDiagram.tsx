import { FiArrowRight } from "react-icons/fi";
import { resolveToolIcon } from "@/lib/toolIcons";

interface ArchitectureDiagramProps {
  flow: string[];
}

/** Small pipeline-stage diagram derived from a project's real data flow. */
export function ArchitectureDiagram({ flow }: ArchitectureDiagramProps) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {flow.map((stage, i) => {
        const Icon = resolveToolIcon(stage);
        return (
          <li key={stage} className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-lg border border-line bg-surface-elevated px-2.5 py-1.5 text-xs text-ink-muted">
              <Icon size={13} className="text-accent" />
              {stage}
            </span>
            {i < flow.length - 1 && (
              <FiArrowRight size={12} className="shrink-0 text-ink-muted/50" aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );
}
