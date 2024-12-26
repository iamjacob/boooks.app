import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        text: 'var(--text-color)',
        
        /* extra */
        subtext: 'var(--subtext-color)',
        border: 'var(--border-color)',
        code: 'var(--code-color)',
        link: 'var(--link-color)',
        linkHover: 'var(--link-hover-color)',
        selection: 'var(--selection-color)',
        selectionText: 'var(--selection-text-color)',
      },
    },
  },
  
  plugins: [],
} satisfies Config;
