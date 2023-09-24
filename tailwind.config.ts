const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontSize: {
        // You can use the golden ratio to calculate font sizes. Start with a base size and multiply by 1.618
        base: '1rem', // 16px
        h1: 'calc(1rem * 1.618 * 1.618 * 1.618)', // 42.18px
        h2: 'calc(1rem * 1.618 * 1.618)', // 26.03px
        h3: 'calc(1rem * 1.618)', // 16.08px
        h4: '12px', // 9.92px
        p: '1rem',
        span: 'calc(1rem * 1.618 / 2)', // 13.04px for highlights,
        code: '0.875rem', // 14px for code blocks
        quote: '1.25rem' // 20px for blockquotes
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        title: ['var(--font-title)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans]
      },
      lineHeight: {
        h1: '24px', // ~ 68.38px
        h2: '24px', // ~ 42.11px
        h3: 'calc((1rem * 1.618) * 1.618/ 2)', // ~ 26px
        h4: 'calc((1rem * 1.618) / 2)', // ~ 16.08px
        h5: 'calc((1rem * 1.618) * 1.618)', // ~ 9.92px
        h6: 'calc((1rem * 1.618) * 1.618)', // ~ 6.13px
        p: '1rem', // ~ 25.88px
        span: 'calc((1rem * 1.618 / 2) * 1.618)', // ~ 21.07px for highlights
        code: 'calc(0.875rem * 1.618)', // 14px * golden ratio
        quote: 'calc(1.25rem * 1.618)' // 20px * golden ratio
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
