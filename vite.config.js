import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            sans: ['DM Sans', 'sans-serif'],
          },
          keyFrames: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            }
          },
          animation: {
            fadeIn: 'fadeIn 0.5 ease-in forwards',
          }
        }
      }
    })
  ],
})
