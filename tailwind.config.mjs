/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B0D17',
        'cosmic-blue': '#1E4D92',
        'nasa-red': '#FC3D21',
        'chrome': '#D4AF37',  // Metallic gold
        'steel': '#71797E',   // Steel gray
        'neon': '#00ff9f',    // Cyberpunk neon
        'starlight': '#E6E6E6',
        'deep-space': '#0A0F2C',
        'nebula': '#FF00FF',
        'plasma': '#00f6ff',    // Neon blue glow
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'tech': ['Share Tech Mono', 'monospace'],
      },
      fontWeight: {
        'cyber-light': '300',
        'cyber-normal': '400',
        'cyber-medium': '500',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'star-field': 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%), repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 30px)',
      },
    },
  },
  plugins: [],
} 