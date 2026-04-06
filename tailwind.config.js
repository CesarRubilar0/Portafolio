/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Aquí podrías añadir otros colores personalizados si los necesitas en el futuro
            }
        },
    },
    plugins: [],
}