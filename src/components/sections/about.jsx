import { motion } from "framer-motion";
import { 
    Sparkles, 
    GraduationCap, 
    Layers, 
    Cpu, 
    Mail 
} from "lucide-react";
import { personalInfo } from "../../config/data";

export default function About() {
    const highlights = [
        {
            icon: <GraduationCap className="text-sky-400" size={22} />,
            title: "Titulado & Cursando Ingeniería",
            description: "Técnico en Programación y Análisis de Sistemas titulado, actualmente profundizando en Ingeniería en Informática."
        },
        {
            icon: <Cpu className="text-sky-400" size={22} />,
            title: "Software en Producción",
            description: "Experiencia desarrollando soluciones corporativas reales, estables y preparadas para entornos de alta exigencia."
        },
        {
            icon: <Layers className="text-sky-400" size={22} />,
            title: "Stack Moderno & Robusto",
            description: "Especializado en React, TypeScript, Node.js y PostgreSQL con enfoque en optimización de rendimiento y arquitecturas limpias."
        },
        {
            icon: <Sparkles className="text-sky-400" size={22} />,
            title: "Herramientas e IA",
            description: "Adopción de flujos acelerados por Inteligencia Artificial para potenciar la productividad, pruebas y calidad de entrega."
        }
    ];

    return (
        <section id="about" className="py-24 scroll-mt-20">
            {/* Encabezado de Sección */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Sobre mí</h2>
                <div className="h-[1px] flex-1 bg-sky-500/20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Columna Principal: Biografía y Presentación */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-7 p-8 md:p-10 bg-slate-800/20 rounded-3xl border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-black/20"
                >
                    {/* Badge de estado */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span>Desarrollador Full Stack</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-snug">
                        Transformando requerimientos complejos en aplicaciones web <span className="text-sky-400">modernas, rápidas y seguras</span>.
                    </h3>

                    {/* Texto sobre mí */}
                    <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                        <p>
                            Desarrollador Full Stack y Técnico en Programación y Análisis de Sistemas titulado, actualmente cursando Ingeniería en Informática. Me apasiona transformar requerimientos complejos en aplicaciones web modernas, rápidas y seguras.
                        </p>
                        <p className="text-slate-400">
                            En mi trayectoria he desarrollado soluciones de software corporativo en producción con tecnologías como{" "}
                            <span className="text-sky-300 font-medium">React</span>,{" "}
                            <span className="text-sky-300 font-medium">TypeScript</span>,{" "}
                            <span className="text-sky-300 font-medium">Node.js</span> y{" "}
                            <span className="text-sky-300 font-medium">PostgreSQL</span>, integrando optimización de rendimiento, arquitecturas limpias y herramientas aceleradas por IA.
                        </p>
                    </div>

                    {/* Links y redes rápidas */}
                    <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-4">
                        {personalInfo.github && (
                            <a
                                href={`https://github.com/${personalInfo.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 text-xs font-mono transition-all"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                        )}
                        {personalInfo.linkedin && (
                            <a
                                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 text-xs font-mono transition-all"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {personalInfo.email && (
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 text-xs font-mono transition-all"
                            >
                                <Mail size={16} />
                                <span>Contacto</span>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Columna Secundaria: Tarjetas de Enfoque y Destacados */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-5 bg-slate-800/15 rounded-2xl border border-slate-700/40 hover:border-sky-500/30 hover:bg-slate-800/30 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1 tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
