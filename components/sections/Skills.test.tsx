import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";
import { SKILL_BRANCHES } from "@/data/skills";

// The diagram (desktop) and the fallback list (mobile) both render in the DOM
// simultaneously in jsdom (no real viewport/media-query evaluation), so a
// label can legitimately appear more than once — use getAllByText throughout.
describe("Skills", () => {
  it("renders every branch label", () => {
    render(<Skills />);
    for (const branch of SKILL_BRANCHES) {
      expect(screen.getAllByText(branch.shortLabel).length).toBeGreaterThan(0);
      expect(screen.getAllByText(branch.label).length).toBeGreaterThan(0);
    }
  });

  it("renders each branch's curated featured tools, not the full tool list", () => {
    render(<Skills />);
    for (const branch of SKILL_BRANCHES) {
      for (const tool of branch.featured) {
        expect(screen.getAllByText(tool).length).toBeGreaterThan(0);
      }
    }
  });
});
