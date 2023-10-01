/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        custom: "620px",
        "516-h": "516px",
      },
      spacing: {
        "40-c": "40rem",
      },
    },
  },
  plugins: [],
}