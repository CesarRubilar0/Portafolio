/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Aquí añadimos el color lila que te gusta para tu portafolio
                lila: {
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                }
            }
        },
    },
    plugins: [],
}