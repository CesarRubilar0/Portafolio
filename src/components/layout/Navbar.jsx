import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Inicio", href: "#" },
        { label: "Proyectos", href: "#projects" },
        { label: "Sobre mí", href: "#about" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-sky-500/20" : "bg-transparent"
            }`}>
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="flex items-center gap-2 font-mono font-bold text-white">
                    <Terminal size={20} className="text-sky-400" />
                    <span>CR.dev</span>
                </div>

                <ul className="hidden md:flex gap-8 font-mono text-sm">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="md:hidden text-sky-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-slate-900 border-b border-sky-500/20 p-6 flex flex-col gap-4 font-mono text-center"
                    >
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300">
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}