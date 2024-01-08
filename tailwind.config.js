/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ['"Helvetica Neue LT Std"'],
      sans: ['"Helvetica Neue LT Std"'],
      condensed: ['"Helvetica Neue LT Std Cn"'],
    },
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000000",
        "light-grey": "#F7F7F7",
        white: "#FFFFFF",
        "dark-blue": "#00244A",
        "light-blue": "#E8F3FA",
        orange: "#FF7E21",
        "neon-blue": "#2AE3FC",
        "am-blue": "#0085CA",
        yellow: "#E8F3FA",
        "contact-black": "rgba(0, 0, 0, 0.4)",
      },
      utility: {
        sucess: "#47843B",
        error: "#E1251B",
      },
      aura: {
        "neon-blue": "#2AE3FC",
        orange: "#FF7E21",
      },
      fontSize: {
        'title': ['3rem', {
          fontWeight: 700,
          lineHeight: '130%',
          letterSpacing: '0.03rem',
        }],
        'pillar-heading': ['2rem', {
          fontWeight: 700,
          lineHeight: '140%',
          letterSpacing: '0.04rem',
        }],
        'banner-heading': ['1.5rem', {
          fontWeight: 500,
          lineHeight: '120%',
          letterSpacing: '0.075rem',
        }],
        'industry-heading': ['1.875rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.0375rem',
        }],
        'insights-card-heading': ['1.25rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.025rem',
        }],
        'insights-page-heading': ['2.25rem', {
          fontWeight: 500,
        }],
        'contact-us-heading': ['1rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.03rem',
        }],
        'button-carrot': ['1rem', {
          fontWeight: 700,
          lineHeight: '180%',
          letterSpacing: '0.2rem',
        }],
        'button-blue-underline': ['1rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.08rem',
        }],
        'statistic-number': ['4rem', {
          fontWeight: 300,
          lineHeight: '180%',
          letterSpacing: '0.2rem',
        }],
        'statistic-text': ['1rem', {
          fontWeight: 700,
          lineHeight: '180%',
          letterSpacing: '0.05rem',
        }],
        'paragraph-banner': ['1.5rem', {
          fontWeight: 400,
          lineHeight: '160%',
          letterSpacing: '0.03rem',
        }],
        'paragraph-offering': ['1rem', {
          fontWeight: 400,
          lineHeight: '120%',
          letterSpacing: '0.02rem',
        }],
        'paragraph-banner-blue': ['1.5rem', {
          fontWeight: 400,
          lineHeight: '160%',
          letterSpacing: '0.03rem',
        }],
        'paragraph-offering-bold': ['1rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.02rem',
        }],
        'paragraph-insights': ['1.5rem', {
          fontWeight: 500,
        }],
        'subtitle-text': ['2rem', {
          fontWeight: 500,
          lineHeight: '160%',
          letterSpacing: '0.04rem',
        }],
        'subtitle-date': ['1.75rem', {
          fontWeight: 500,
          lineHeight: '160%',
          letterSpacing: '0.035rem',
        }],
        'misc-label': ['1rem', {
          fontWeight: 700,
          lineHeight: '120%',
          letterSpacing: '0.08rem',
        }],
        'misc-legal': ['0.5625rem', {
          fontWeight: 100,
          lineHeight: '0.75rem',
        }],
        'misc-footer': ['0.8125rem', {
          fontWeight: 400,
          lineHeight: '1.25rem',
        }],
        'quote-insights': ['1.5rem', {
          fontWeight: 300,
        }],
        'quote-main': ['1.5rem', {
          fontWeight: 300,
          lineHeight: '2.8125rem',
        }],
        
        'mobile-title': ['1.5rem', {
          fontWeight: 700,
          lineHeight: '130%',
          letterSpacing: '0.015rem'
        }],
        'mobile-statistic': ['2rem', {
          fontWeight: 300,
          lineHeight: '180%',
          letterSpacing: '0.1rem'
        }],
        'mobile-statistic-text': ['1rem', {
          fontWeight: 700,
          lineHeight: '180%',
          letterSpacing: '0.05rem'
        }],
        'mobile-banner-heading': ['1.125rem', {
          fontWeight: 500,
          lineHeight: '120%',
          letterSpacing: '0.05625rem'
        }],
        'mobile-paragraph': ['1rem', {
          fontWeight: 400,
          lineHeight: '160%',
          letterSpacing: '0.02rem'
        }],
        'mobile-pillar': ['1.5rem', {
          fontWeight: 700,
          lineHeight: '140%',
          letterSpacing: '0.03rem'
        }],
        'mobile-quote': ['1rem', {
          fontWeight: 300,
          lineHeight: '1.6875rem',
        }],
        'mobile-insights-paragraph': ['1.125rem', {
          fontWeight: 500,
        }],
        'mobile-insights-heading': ['1.5rem', {
          fontWeight: 500,
        }],
      },
      boxShadow: {
        'neon-blue': '0px 20px 70px 0px rgba(0, 133, 202, 0.25)',
      },
    },
  },
  plugins: [],
};
