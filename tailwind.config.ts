/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'isd': {
          // Primary colors
          'primary': 'var(--isd-primary)',
          'primary-2': 'var(--isd-primary-2)',
          'primary-3': 'var(--isd-primary-3)',
          // Secondary colors
          'secondary': 'var(--isd-secondary)',
          'secondary-1': 'var(--isd-secondary-1)',
          // Font colors
          'font-1': 'var(--isd-font-1)',
          'font-2': 'var(--isd-font-2)',
          'font-3': 'var(--isd-font-3)',
        },
      },
      maxWidth: {
        'container': 'var(--container-max-width)',
      },
      spacing: {
        'section-gap': 'var(--section-gap)',
        'section-title-gap': 'var(--section-title-gap)',
        'component-gap': 'var(--component-gap)',
        'component-gap-sm': 'var(--component-gap-sm)',
        'element-gap': 'var(--element-gap)',
        'footer-gap': 'var(--footer-gap)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        "isd-official": {
          "primary": "var(--isd-primary)",
          "primary-content": "#FFFFFF",
          "secondary": "var(--isd-secondary)",
          "secondary-content": "#FFFFFF",
          "accent": "var(--isd-primary-2)",
          "accent-content": "var(--isd-primary)",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};