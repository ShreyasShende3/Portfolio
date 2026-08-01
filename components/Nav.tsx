"use client";

import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { NAV_ITEMS } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";
import { site } from "@/data/site";
import { ThemeToggle } from "./theme/ThemeToggle";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-ink">
          Shreyas<span className="text-accent">.</span>Shende
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`text-sm transition-colors ${
                  activeId === item.id ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-surface transition-opacity hover:opacity-90"
          >
            <FiDownload size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  activeId === item.id ? "bg-surface-elevated text-accent" : "text-ink-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-surface"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
