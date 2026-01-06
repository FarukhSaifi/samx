"use client";

import { useEffect } from "react";

/**
 * Client-side theme synchronization component.
 * Only handles localStorage overrides and user preferences.
 * Default theme attributes are set server-side to prevent FOUC.
 */
export function ThemeSync() {
  useEffect(() => {
    try {
      const root = document.documentElement;

      // Resolve theme from localStorage or system preference
      const resolveTheme = (themeValue: string | null): string => {
        if (!themeValue || themeValue === "system") {
          return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return themeValue;
      };

      // Apply saved theme preference
      const savedTheme = localStorage.getItem("data-theme");
      if (savedTheme) {
        const resolvedTheme = resolveTheme(savedTheme);
        root.setAttribute("data-theme", resolvedTheme);
      } else {
        // If no saved theme, apply system preference
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.setAttribute("data-theme", systemTheme);
      }

      // Apply any saved style overrides from localStorage
      const styleKeys = [
        "brand",
        "accent",
        "neutral",
        "solid",
        "solid-style",
        "border",
        "surface",
        "transition",
        "scaling",
        "viz-style",
      ];

      for (const key of styleKeys) {
        const value = localStorage.getItem(`data-${key}`);
        if (value) {
          root.setAttribute(`data-${key}`, value);
        }
      }

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e: MediaQueryListEvent) => {
        const savedTheme = localStorage.getItem("data-theme");
        if (!savedTheme || savedTheme === "system") {
          root.setAttribute("data-theme", e.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", handleThemeChange);

      return () => {
        mediaQuery.removeEventListener("change", handleThemeChange);
      };
    } catch (error) {
      console.error("Failed to sync theme:", error);
    }
  }, []);

  return null;
}
