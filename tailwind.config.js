// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
      
//     },
//   },

//   backgroundImage: {
//         wrapperBg: "url('assets/background/backgrounds/WaveLinesDesktop1.svg')",
//   },

//   container:{
//     screens: {
//       sm: "640px",
//       md: "767px",
//       lg:"1140px",
//       xl: "1440px",
//      " 2xl" : "1880px"
//       },
//     },
  
//   plugins: [],

// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wrapperBg: "url('/src/assets/background/backgrounds/WaveLinesDesktop4.svg')",
      },
      container: {
        screens: {
          sm: "640px",
          md: "767px",
          lg: "1140px",
          xl: "1440px",
          "2xl": "1880px" // Fixed typo: removed extra space before 2xl
        },
      },
    },
  },
  plugins: [],
};
