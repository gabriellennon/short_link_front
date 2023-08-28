import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#ECF0F2',
          300: '#E2E7EA',
          500: '#004E87',
  
        },
        grey: {
          300: '#D2D8DE',
          400: '#50555A',
        },
        black: {
          300: '#3D3D3D',
        },
        green: {
          500: '#00875F',
          600: '#04c058',
        }
      },
    },
  },
  plugins: [],
}
export default config
