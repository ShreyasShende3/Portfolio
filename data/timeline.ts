import type { TimelineEntry } from "@/lib/types";
import { EXPERIENCE } from "./experience";
import { EDUCATION } from "./education";

// Most recent first — matches standard resume ordering.
export const TIMELINE: TimelineEntry[] = [
  ...EXPERIENCE.map((entry): TimelineEntry => ({ kind: "work", ...entry })),
  ...EDUCATION.map((entry): TimelineEntry => ({ kind: "education", ...entry })),
].sort((a, b) => b.startDate.localeCompare(a.startDate));
