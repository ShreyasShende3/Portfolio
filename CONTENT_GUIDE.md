# Content guide

Every piece of real content on the site lives in `data/`, typed against `lib/types.ts`. Components just map over this data — you shouldn't need to touch a component file to change what the site says.

## `data/site.ts`

Name, role, `bio` (the paragraph shown in the Hero), location, email, resume path, and social links (including `googleScholar`).

## `data/experience.ts` + `data/education.ts` + `data/timeline.ts`

The Experience & Education section merges both into one two-column timeline: education renders on the left, work ("arcs") on the right, ordered by `startDate` (format `YYYY-MM`). `data/timeline.ts` does the merge/sort automatically — you only ever need to edit `experience.ts` or `education.ts`, never `timeline.ts` itself.

- `experience.ts`: set `current: true` on the entry that should show the pulsing "Current" badge — move it forward when you start a new role. Each entry has a `highlights` bullet array.
- `education.ts`: `degree`, `school`, `location`, `period`, `startDate`, `gpa`.
- Both support an optional `logo` path, shown faded in the card background and revealed a bit more on hover/focus — see the logo assets note below. Cards show only the title/org/dates by default; the bullets (or GPA) reveal on hover or keyboard focus.

## `data/skills.ts`

Powers the radial skill diagram — a brain-icon hub in the center, your 5 branches connected around it, each branch connected to a small curated set of tool nodes. Each branch has:

- `label` — full name, used in the mobile fallback list and the branch node's hover tooltip.
- `shortLabel` — short name rendered inside the branch node on the diagram (needs to fit two short lines).
- `tools` — the complete list (matches the resume), shown only as a tooltip on hover — not rendered directly.
- `featured` — the 2–4 tools actually drawn as connected leaf nodes. **This is deliberately a curated highlight reel, not the full list** — the diagram is marketing material, the resume (linked via the Resume button) is the exhaustive version. Pick the most recognizable/impressive tools per branch.

Icons come from `lib/toolIcons.ts`, which keyword-matches a tool's display string against known brand/concept icons (falling back to a generic icon). Branch node icons live in `BRANCH_ICONS` inside `components/sections/Skills.tsx` — keep each one visually distinct from the center hub icon and from its own featured tools' icons.

## `data/projects.ts`

The curated project cards. Each entry needs `githubUrl` and a `flow` array — an ordered list of pipeline stage labels (e.g. `["Reddit API", "Airflow + Celery", "Amazon S3", ...]`) rendered as the small architecture diagram on the card, using the same icon resolver as Skills. `liveUrl` is optional (only add it if there's a working live demo). `GITHUB_PROFILE_URL` powers the "View more on GitHub" link at the bottom of the section.

## `data/certificates.ts`

**Requires image assets you need to add.** Drop the badge image for each certification into `public/certificates/` using these exact filenames (referenced by `data/certificates.ts`):

- `public/certificates/aws-clf-c02.png` — AWS Certified Cloud Practitioner
- `public/certificates/azure-dp-900.png` — Azure Data Fundamentals
- `public/certificates/oci-genai-2025.png` — OCI 2025 Generative AI Professional
- `public/certificates/snowpro-associate.png` — SnowPro Associate: Platform Certification

If you'd rather use different filenames, just update the `badge` path in `data/certificates.ts` to match. You can also add a `verifyUrl` (e.g. a Credly link) to any certificate object to show a "Verify" link on the card. Transparent backgrounds aren't required — `object-contain` handles either.

## `data/scholar.ts`

Powers the "Publications" half of the Certificates & Publications section: `SCHOLAR_STATS` (citations / h-index, both all-time and since-2021 — i10-index is intentionally omitted since it's currently 0 and not worth surfacing) and `PUBLICATIONS` (title, authors, venue, year, optional `citations` count, optional `url`). This is a **manually maintained snapshot** of your Google Scholar profile, not a live feed (a live scraper would need real backend infra and could silently go stale — you chose the simple, reliable option). Update it by hand when your citation counts change or you publish something new; there's a `Last updated` comment at the top to keep current.

## `data/interests.ts`

The "Beyond the Code" section — just category labels (Gaming, Anime, Football, Hiking, Swimming). Each label needs a matching icon in the `ICONS` map inside `components/sections/BeyondTheCode.tsx` if you add a new one.

## Logo assets (Experience & Education backgrounds)

Referenced via the `logo` field in `experience.ts` / `education.ts`. These are optional — a card with no `logo` (or a missing file) just renders without the background mark, no error. Drop images into `public/logos/`:

- `public/logos/morgan-stanley.png`
- `public/logos/njit.png` (used by both the NJIT work arc and the NJIT degree)
- `public/logos/vendorpass.png`
- `public/logos/pune.png`

PNG with a transparent background works best since it's rendered faded and grayscaled over the card.

## Other assets you may want to swap

- `public/profile.jpg` — hero photo
- `public/resume.pdf` — **this is currently the old resume PDF, renamed.** Replace it with an export of your current resume, keeping the filename `resume.pdf` (or update `resumeUrl` in `data/site.ts` if you rename it).
