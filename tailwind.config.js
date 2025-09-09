/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // gray-50
        ring: "var(--color-ring)", // deep agricultural green
        background: "var(--color-background)", // warm off-white
        foreground: "var(--color-foreground)", // strong readability
        primary: {
          DEFAULT: "var(--color-primary)", // deep agricultural green
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // rich earth brown
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // barn red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // subtle warmth
          foreground: "var(--color-muted-foreground)", // clear hierarchy
        },
        accent: {
          DEFAULT: "var(--color-accent)", // confident tech blue
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // strong readability
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // strong readability
        },
        success: {
          DEFAULT: "var(--color-success)", // fresh growth green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // harvest gold
          foreground: "var(--color-warning-foreground)", // strong readability
        },
        error: {
          DEFAULT: "var(--color-error)", // barn red
          foreground: "var(--color-error-foreground)", // white
        },
        surface: {
          DEFAULT: "var(--color-surface)", // subtle warmth
          foreground: "var(--color-surface-foreground)", // strong readability
        },
        brand: {
          primary: "var(--color-brand-primary)", // deep agricultural green
          secondary: "var(--color-brand-secondary)", // rich earth brown
          accent: "var(--color-brand-accent)", // confident tech blue
          gold: "var(--color-brand-gold)", // verification gold
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", // growth green
          foreground: "var(--color-conversion-foreground)", // white
        },
        text: {
          primary: "var(--color-text-primary)", // strong readability
          secondary: "var(--color-text-secondary)", // clear hierarchy
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        'rhythm': 'var(--spacing-rhythm)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'warm': 'var(--shadow-warm)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': {
            opacity: '0.8',
          },
          '50%': {
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'celebration': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      clipPath: {
        'organic': 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}