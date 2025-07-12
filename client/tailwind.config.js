/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Cyberpunk Data Citadel colors
        'citadel-bg-primary': '#000815',
        'citadel-bg-secondary': '#001122',
        'citadel-text-primary': '#00ffcc',
        'citadel-text-secondary': '#66ccff',
        'citadel-accent-cyan': '#00ffcc',
        'citadel-accent-blue': '#0088ff',
        'citadel-accent-purple': '#aa44ff',
        'citadel-accent-red': '#ff0066',
        'citadel-glow-cyan': 'rgba(0, 255, 204, 0.3)',
        'citadel-glow-blue': 'rgba(0, 136, 255, 0.3)',
        'citadel-glow-purple': 'rgba(170, 68, 255, 0.3)',
        'citadel-glow-red': 'rgba(255, 0, 102, 0.3)',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
} 