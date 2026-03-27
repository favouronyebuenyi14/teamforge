import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#a33500",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "secondary": "#006c47",
        "primary-fixed-dim": "#b2c5ff",
        "on-secondary-fixed-variant": "#005235",
        "on-secondary": "#ffffff",
        "primary": "#003d9b",
        "background": "#f8f9fb",
        "error": "#ba1a1a",
        "inverse-primary": "#b2c5ff",
        "secondary-fixed": "#82f9be",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#ffc6b2",
        "surface-dim": "#d9dadc",
        "secondary-container": "#82f9be",
        "on-surface": "#191c1e",
        "on-error": "#ffffff",
        "surface-container-highest": "#e1e2e4",
        "primary-container": "#0052cc",
        "on-primary-fixed": "#001848",
        "on-primary-container": "#c4d2ff",
        "tertiary-fixed": "#ffdbcf",
        "surface": "#f8f9fb",
        "primary-fixed": "#dae2ff",
        "outline-variant": "#c3c6d6",
        "surface-bright": "#f8f9fb",
        "surface-container": "#edeef0",
        "on-tertiary": "#ffffff",
        "tertiary": "#7b2600",
        "outline": "#737685",
        "on-tertiary-fixed-variant": "#812800",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#434654",
        "surface-tint": "#0c56d0",
        "secondary-fixed-dim": "#65dca4",
        "on-secondary-fixed": "#002113",
        "inverse-on-surface": "#f0f1f3",
        "surface-variant": "#e1e2e4",
        "on-tertiary-fixed": "#380d00",
        "on-secondary-container": "#00734c",
        "surface-container-high": "#e7e8ea",
        "on-background": "#191c1e",
        "tertiary-fixed-dim": "#ffb59b",
        "on-primary-fixed-variant": "#0040a2",
        "surface-container-low": "#f3f4f6",
        "inverse-surface": "#2e3132"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-inter)", "sans-serif"],
        "label": ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
