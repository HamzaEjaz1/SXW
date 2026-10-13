"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type LeadContextValue = {
  project: string;
  setProject: (project: string) => void;
  enquire: (project: string) => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState("Development construction");

  const enquire = useCallback((next: string) => {
    setProject(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    window.setTimeout(() => {
      document.getElementById("name")?.focus();
    }, reduce ? 0 : 450);
  }, []);

  const value = useMemo(() => ({ project, setProject, enquire }), [project, enquire]);

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLead() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLead must be used within LeadProvider");
  }
  return context;
}
