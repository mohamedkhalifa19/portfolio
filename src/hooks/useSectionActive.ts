"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["hero", "skills", "projects", "timeline", "contact"];

/**
 * Returns the id of whichever section is currently in the viewport.
 * Used by Navbar to highlight the active link.
 */
export function useSectionActive(): string {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
