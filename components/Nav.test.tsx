import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "./Nav";
import { ThemeProvider } from "./theme/ThemeProvider";
import { NAV_ITEMS } from "@/lib/sections";

function renderNav() {
  return render(
    <ThemeProvider>
      <Nav />
    </ThemeProvider>,
  );
}

describe("Nav", () => {
  it("renders a link for every section", () => {
    renderNav();
    for (const item of NAV_ITEMS) {
      expect(screen.getAllByRole("link", { name: item.label }).length).toBeGreaterThan(0);
    }
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    renderNav();

    expect(screen.queryByRole("link", { name: "Skills" })).not.toBeNull();
    const openButton = screen.getByRole("button", { name: /open menu/i });

    await user.click(openButton);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("includes a resume download link", () => {
    renderNav();
    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks[0]).toHaveAttribute("href", "/resume.pdf");
  });
});
