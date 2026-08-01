export interface NavItem {
  id: string;
  label: string;
}

export interface SiteInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  googleScholar: string;
}

export interface SkillBranch {
  id: string;
  label: string;
  /** Short label rendered inside the node on the skill diagram. */
  shortLabel: string;
  /** Complete tool list for this branch (matches the resume) — shown as a tooltip on the branch node. */
  tools: string[];
  /** Curated subset actually rendered as connected leaf nodes — the diagram is a highlight reel, not the full resume list. */
  featured: string[];
}

export interface ExperienceEntry {
  arc: string;
  current?: boolean;
  title: string;
  organization: string;
  location: string;
  period: string;
  /** Sortable ISO-ish start date (YYYY-MM), used to merge with education into one timeline. */
  startDate: string;
  highlights: string[];
  /** Optional path to a logo image shown faded in the card background. */
  logo?: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  startDate: string;
  gpa: string;
  logo?: string;
}

export type TimelineEntry =
  | ({ kind: "work" } & ExperienceEntry)
  | ({ kind: "education" } & EducationEntry);

export interface ProjectEntry {
  name: string;
  period?: string;
  description: string;
  flow: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  badge: string;
  verifyUrl?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations?: number;
  url?: string;
}

export interface ScholarStats {
  citationsAll: number;
  citationsSince2021: number;
  hIndexAll: number;
  hIndexSince2021: number;
}

export interface Interest {
  label: string;
}
