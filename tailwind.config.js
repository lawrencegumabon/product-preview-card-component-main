/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        375: "23.438rem",
      },
      colors: {
        //Primary
        "Dark-cyan": "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        //Neutral
        "Very-dark-blue": "hsl(212, 21%, 14%)",
        "Dark-grayish-blue": "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        396: "416px",
      },
    },
  },
  plugins: [],
};
