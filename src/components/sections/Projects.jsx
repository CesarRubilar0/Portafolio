import { ExternalLink, Code2, Terminal } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "NakMuay-API",
            description: "API robusta diseñada para la gestión de datos técnicos y deportivos. Enfoque en rendimiento y arquitectura escalable.",
            stack: ["Python", "Django", "REST API"],
            link: "https://github.com/CesarRubilar0/NakMuay-API",
            type: "Back-end"
        },
        {
            title: "Finanzas App",
            description: "Sistema de gestión financiera personal. Control de flujos de caja, presupuestos y visualización de datos económicos.",
            stack: ["Java", "Spring Boot", "SQL"],
            link: "https://github.com/CesarRubilar0/finanzas_app",
            type: "Full-stack"
        },
        {
            title: "Organizador Diario",
            description: "Herramienta de productividad orientada a la disciplina diaria. Gestión de tareas con persistencia de datos.",
            stack: ["Python", "PyQt5", "PostgreSQL"],
            link: "https://github.com/CesarRubilar0/Organizador-diario",
            type: "Escritorio"
        },
        {
            title: "Agenda Barber",
            description: "Sistema de reserva de horas y gestión de clientes para servicios de barbería. Interfaz intuitiva y funcional.",
            stack: ["React", "JavaScript", "Firebase"],
            link: "https://github.com/CesarRubilar0/Agendabarber",
            type: "Web"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Proyectos</h2>
                <div className="h-[1px] flex-1 bg-sky-500/20"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <div key={i} className="group p-8 bg-slate-800/20 rounded-3xl border border-slate-700/50 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-black/20">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                                {p.type}
                            </span>
                            <div className="flex gap-4 text-slate-500">
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                                    <Terminal size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-500 transition-colors tracking-tight">
                            {p.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {p.description}
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            {p.stack.map((s, idx) => (
                                <span key={idx} className="text-[11px] font-mono bg-slate-900/80 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
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