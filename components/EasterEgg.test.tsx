import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EasterEgg, KONAMI_CODE } from "./EasterEgg";

describe("EasterEgg", () => {
  it("shows the toast after the full konami sequence", async () => {
    const user = userEvent.setup();
    render(<EasterEgg />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    for (const key of KONAMI_CODE) {
      // Arrow keys use user-event's {KeyName} DSL; plain letters are typed literally.
      await user.keyboard(key.startsWith("Arrow") ? `{${key}}` : key);
    }

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/achievement unlocked/i);
    });
  });

  it("does not show the toast for an incomplete or wrong sequence", async () => {
    const user = userEvent.setup();
    render(<EasterEgg />);

    await user.keyboard("{ArrowUp}{ArrowUp}{ArrowUp}");

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
