import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        abstractPattern: "url('/bg-image.png')"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        step1: {
          DEFAULT: "hsl(var(--color-step-1))",
          foreground: "hsl(var(--color-step-1-foreground))",
        },
        step2: {
          DEFAULT: "hsl(var(--color-step-2))",
          foreground: "hsl(var(--color-step-2-foreground))",
        },
        step3: {
          DEFAULT: "hsl(var(--color-step-3))",
          foreground: "hsl(var(--color-step-3-foreground))",
        },
        step4: {
          DEFAULT: "hsl(var(--color-step-4))",
          foreground: "hsl(var(--color-step-4-foreground))",
        },
        step5: {
          DEFAULT: "hsl(var(--color-step-5))",
          foreground: "hsl(var(--color-step-5-foreground))",
        },
        step6: {
          DEFAULT: "hsl(var(--color-step-6))",
          foreground: "hsl(var(--color-step-6-foreground))",
        },
        step7: {
          DEFAULT: "hsl(var(--color-step-7))",
          foreground: "hsl(var(--color-step-7-foreground))",
        },
        step8: {
          DEFAULT: "hsl(var(--color-step-8))",
          foreground: "hsl(var(--color-step-8-foreground))",
        },
        step9: {
          DEFAULT: "hsl(var(--color-step-9))",
          foreground: "hsl(var(--color-step-9-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "nav-slide": {
          from: {left: "-250px"},
          to: {left: "8px"}
        },
        "nav-slide-rev": {
          from: {left: "8px"},
          to: {left: "-250px"}
        },
        "chat-slide": {
          from: {right: "-1000px"},
          to: {right: "16px"}
        },
        "popup": {
          from: {scale: "0"},
          to: {scale: "1"}
        },
        "popdown": {
          from: {scale: "1"},
          to: {scale: "0"}
        },
        "chat-slide-rev": {
          from: {right: "16px"},
          to: {right: "-1000px"}
        },
        "opacity-up": {
          from: {opacity: "0%", display: "hidden"},
          to: {opacity: "100%"}
        },
        "opacity-down": {
          from: {opacity: "100%"},
          to: {opacity: "0%", display: "hidden"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "nav-slide-right": "nav-slide 0.3s ease-out",
        "nav-slide-left": "nav-slide-rev 0.3s ease-out",
        "chat-slide-left": "chat-slide 0.3s ease-out",
        "chat-slide-right": "chat-slide-rev 0.3s ease-out",
        "popup": "popup 0.3s ease-out",
        "popdown": "popdown 0.3s ease-out",
        "opacity-up": "opacity-up 0.3s ease-out",
        "opacity-down": "opacity-down 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config