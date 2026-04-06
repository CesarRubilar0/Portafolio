export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[90vh] pt-20">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-center tracking-tighter">
                César Rubilar
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl font-mono mb-10">
                <span className="text-sky-400">&gt;</span> Analista Programador en proceso...
            </p>

            <div className="p-8 bg-slate-800/40 rounded-3xl border border-sky-500/20 shadow-2xl shadow-sky-500/5 backdrop-blur-sm max-w-lg">
                <p className="text-white text-lg italic text-center leading-relaxed">
                    "El obstáculo es el camino."
                </p>
            </div>

            <div className="mt-12 animate-bounce text-slate-500">
                <span className="text-xs font-mono uppercase tracking-widest">Scroll para ver más</span>
            </div>
        </section>
    );
}