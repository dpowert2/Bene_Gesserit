import type { Config } from "tailwindcss";

/**
 * BG color palette — defined as CSS variables in globals.css so theming
 * is one-file (and forks can re-skin without touching component code).
 */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        sand: "var(--sand)",
        canvas: "var(--canvas)",
        "canvas-hover": "var(--canvas-hover)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        ink: "var(--ink)",
        "ink-heading": "var(--ink-heading)",
        "ink-muted": "var(--ink-muted)",
        "ink-light": "var(--ink-light)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        brown: {
          DEFAULT: "var(--brown)",
          light: "var(--brown-light)",
          dark: "var(--brown-dark)",
        },
        coral: {
          DEFAULT: "var(--coral)",
          light: "var(--coral-light)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          light: "var(--blue-light)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          light: "var(--amber-light)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
