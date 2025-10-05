/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // Theme override moved to globals.css
    daisyui: {
        themes: [
            {
                'isd-official': {
                    primary: 'var(--isd-primary)',
                    'primary-content': '#FFFFFF',
                    secondary: 'var(--isd-secondary)',
                    'secondary-content': '#FFFFFF',
                    accent: 'var(--isd-primary-2)',
                    'accent-content': 'var(--isd-primary)',
                    'base-100': '#FFFFFF',
                },
            },
        ],
    },
};
