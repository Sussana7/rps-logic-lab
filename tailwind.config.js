/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        winner:
          "0 0 0 40px rgba(255,255,255,0.05), 0 0 0 80px rgba(255,255,255,0.03), 0 0 0 130px rgba(255,255,255,0.02)",
      },
    },
  },
  plugins: [],
};
