import { ExternalLink, Terminal, Wrench } from "lucide-react";
import { projects } from "../../config/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 scroll-mt-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Proyectos</h2>
                <div className="h-[1px] flex-1 bg-sky-500/20"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <div 
                        key={p.id || i} 
                        className="group p-8 bg-slate-800/20 rounded-3xl border border-slate-700/50 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-black/20 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                                    {p.type}
                                </span>
                                <div className="flex items-center gap-3 text-slate-400">
                                    {p.github && (
                                        <a 
                                            href={p.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="hover:text-sky-400 transition-colors p-1"
                                            title="Ver Repositorio en GitHub"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {p.link && p.link !== "#" && (
                                        <a 
                                            href={p.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="hover:text-sky-400 transition-colors p-1"
                                            title="Ver Demo / Sitio Web"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-500 transition-colors tracking-tight">
                                {p.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {p.description}
                            </p>
                        </div>

                        <div className="flex gap-2 flex-wrap pt-2">
                            {p.stack.map((s, idx) => (
                                <span key={idx} className="text-[11px] font-mono bg-slate-900/80 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner Próximamente */}
            <div className="mt-12 p-10 bg-slate-800/30 rounded-3xl border border-slate-700/40 backdrop-blur-sm text-center">
                <Wrench size={36} className="mx-auto mb-4 text-amber-400/80" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Próximamente</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                    Estoy terminando de pulir y retocar mis últimos proyectos para que queden perfectos antes de incluirlos aquí. ¡Vuelve pronto para ver el resultado!
                </p>
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://github.com/CesarRubilar0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 font-mono text-sm transition-all"
                >
                    _ ver más en GitHub
                </a>
            </div>
        </section>
    );
}