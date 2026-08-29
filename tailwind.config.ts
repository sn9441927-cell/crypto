import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '80%': '80%',
        8.5: '8.5rem',
        50: '50rem',
        51: "54.375rem",
        25: '35.625rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        85: '21rem',
        3.75: '3.75rem'
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        primary: "#F9AC20", // Rich Royal Gold
        secondary: "#C5A021", // Deep Metallic Gold
        midnight_text: "#FFFFFF", // Pure White for high contrast
        muted: "#8E8E93", // Neutral Muted
        error: "#FF3B30", // Bright Red
        warning: "#F7931A", // Bitcoin Orange
        light_grey: "#3A3A3C", // Dark Neutral Grey
        grey: "#1C1C1E", // Darker Surface
        dark_grey: "#111111", // Near Black
        border: "#2C2C2E", // Neutral Border
        success: "#FFCC00", // Success is now a bright Golden Amber
        section: "#8E8E93", // Neutral Section Text
        darkmode: "#000000", // Pure Black Background
        darklight: "#1A1A1A", // Neutral Dark Surface
        dark_border: "#333333", // Subtle Dark Border
        tealGreen: "#E6B800", // Replaced Green with Golden Accent
        charcoalGray: "#242424", // Neutral Charcoal
        deepSlate: "#0A0A0A", // Deep Neutral Black
        slateGray: "#151515", // Neutral slate-like black
      },
      fontSize: {
        86: [
          "5.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        76: [
          "4.75rem",
          {
            lineHeight: "1.2",
          }
        ],
        70: [
          "4.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        54: [
          "3.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        44: [
          "2.75rem",
          {
            lineHeight: "1.3",
          }
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        30: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        "start": "url('/images/work/bg-start.png')",
        "perk": "url('/images/perks/perk-bg.png')",
      },
      blur: {
        220: '220px',
        400: '400px',
      }
    },
  },
  plugins: [],
};
export default config;
