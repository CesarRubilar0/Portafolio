// Importaciones
import { Suspense, lazy } from 'react';
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";

{/*OPTIMIZACIÓN (CODE SPLITTING): 
  Definimos los componentes pesados fuera de la función App.
  Esto permite que el navegador NO cargue Projects y Experience de inmediato,
  ahorrando datos y mejorando el tiempo de carga inicial del portafolio esto 
  se hace para que el portafolio cargue mas rapido .*/}

const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));


function App() {
  return (
    // Estructura visual principal con fondo Slate-900 (estética Developer)
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        {/* El Hero se carga de inmediato para que el usuario vea contenido al instante */}
        <Hero />

        {/* CONTENEDOR DE CARGA (SUSPENSE): 
               Mientras el navegador descarga los componentes pesados (Lazy), 
               mostramos un 'Skeleton' animado para mejorar la experiencia de usuario (UX). */}
        <Suspense fallback={
          <div className="h-40 w-full bg-slate-800/50 animate-pulse rounded-xl my-10" />
        }>
          <Projects />
          <Skills />
          <Experience />
        </Suspense>
      </main>

      <footer className="py-10 text-center text-slate-500 font-mono text-xs">
        © 2026 César Rubilar | Analista Programador
      </footer>
    </div>
  );
}

export default App;