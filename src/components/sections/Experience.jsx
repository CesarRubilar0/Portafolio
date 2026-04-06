import { motion } from "framer-motion";
import { experience, education } from "../../config/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 grid md:grid-cols-2 gap-16">

            {/* Columna de Experiencia */}
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <Briefcase className="text-lila-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Experiencia</h2>
                </div>

                <div className="space-y-8 border-l border-slate-800 ml-3">
                    {experience.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-8"
                        >
                            <div className="absolute w-3 h-3 bg-lila-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            <span className="text-xs font-mono text-lila-400 uppercase tracking-wider">{item.period}</span>
                            <h3 className="text-lg font-bold text-slate-200 mt-1">{item.role}</h3>
                            <p className="text-sm text-slate-500 mb-3">{item.company}</p>
                            <p className="text-sm text-slate-400 leading-relaxed italic">"{item.description}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Columna de Formación */}
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <GraduationCap className="text-lila-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Formación</h2>
                </div>

                <div className="space-y-8 border-l border-slate-800 ml-3">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8"
                        >
                            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5" />
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.period}</span>
                            <h3 className="text-lg font-bold text-slate-200 mt-1">{item.degree}</h3>
                            <p className="text-sm text-lila-400/80">{item.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}