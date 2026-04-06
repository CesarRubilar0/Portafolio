import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";


function App() {
  return (
    // bg-slate-900 es el fondo oscuro profundo que te gustó
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>

      <footer className="py-10 text-center text-slate-500 font-mono text-xs">
        © 2026 César Rubilar | Analista Programador
      </footer>
    </div>
  );
}

export default App;