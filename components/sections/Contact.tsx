"use client";

import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiCheck, FiCopy } from "react-icons/fi";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link still works.
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="rounded-3xl border border-line bg-surface-panel px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Let&apos;s build something</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
            Open to Data Engineer roles and interesting problems. Reach out any time.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-opacity hover:opacity-90"
            >
              <FiMail size={15} />
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin size={17} />
            </a>
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-center font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </p>
    </section>
  );
}
