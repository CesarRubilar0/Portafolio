import { Terminal, Database, Layout, Settings, ShieldCheck } from "lucide-react";
import { skills } from "../../config/data"; // Importamos tus datos de la carpeta config
import { motion } from "framer-motion";

export default function Skills() {
    // Definimos qué icono corresponde a cada categoría del data.js
    const iconMap = {
        "Lenguajes & Frameworks": <Terminal className="text-sky-400" size={24} />,
        "Bases de Datos": <Database className="text-sky-400" size={24} />,
        "Herramientas & Otros": <Settings className="text-sky-400" size={24} />
    };

    return (
        <section id="skills" className="py-24">
            {/* Título */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Habilidades Técnicas</h2>
                <div className="h-[1px] flex-1 bg-sky-500/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Aquí recorremos el array 'skills' del data.js */}
                {skills.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 bg-slate-800/10 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {/* Ponemos el icono según el nombre de la categoría */}
                            {iconMap[cat.category] || <Terminal className="text-sky-400" size={24} />}
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">{cat.category}</h3>
                        </div>

                        <ul className="space-y-3">
                            {cat.items.map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                                    <span className="text-sky-400/50">❯</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Frase texto */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 p-6 border-l-2 border-sky-500/30 bg-sky-500/5 rounded-r-xl"
            >
                <p className="text-slate-400 text-sm italic leading-relaxed">
                    <ShieldCheck size={16} className="inline mr-2 text-sky-400" />
                    Enfoque en seguridad de datos y buenas prácticas de codificación, integrando mi experiencia previa en análisis de riesgos.
                </p>
            </motion.div>
        </section>
    );
}