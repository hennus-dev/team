/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'biloba-flower': {
          '50': '#f5f5fd',
          '100': '#edecfb',
          '200': '#dddcf8',
          '300': '#c4c0f2',
          '400': '#aba2eb',
          '500': '#8673df',
          '600': '#7354d3',
          '700': '#6342bf',
          '800': '#5237a0',
          '900': '#452f83',
          '950': '#2a1d58',
      },
      },
    },
  },
  plugins: [],
};
