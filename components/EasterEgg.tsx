"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/** Konami-code easter egg: type the sequence anywhere on the page to unlock a small toast. */
export function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let progress = 0;

    function handleKeyDown(event: KeyboardEvent) {
      const expected = KONAMI_CODE[progress];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        progress += 1;
        if (progress === KONAMI_CODE.length) {
          setUnlocked(true);
          progress = 0;
          window.setTimeout(() => setUnlocked(false), 4000);
        }
      } else {
        progress = key === KONAMI_CODE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-accent bg-surface-panel px-5 py-2.5 font-mono text-xs text-ink shadow-lg"
        >
          Achievement unlocked: you found the code.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
