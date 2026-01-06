"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");

    // Watch for theme changes in the DOM
    const observer = new MutationObserver(() => {
      setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <ToggleButton
        prefixIcon="dark"
        onClick={() => {}}
        aria-label="Switch theme"
        suppressHydrationWarning
      />
    );
  }

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
