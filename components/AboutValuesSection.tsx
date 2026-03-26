import { Clock, Factory, ShieldCheck, ArrowUpRight, Truck, BarChart3, FileText } from "lucide-react";

export default function AboutValuesSection() {
    const values = [
        {
            id: "01",
            icon: <Truck size={20} />,
            title: "Logistică Integrată",
            desc: "Gestionăm colectarea DEEE cu flotă proprie și personal specializat, eliminând dependența de subcontractori și întârzierile operaționale.",
        },
        {
            id: "02",
            icon: <FileText size={20} />,
            title: "Trasabilitate Certificată",
            desc: "Fiecare kg de deșeu este documentat riguros, oferind partenerilor toate actele necesare pentru raportările de mediu și audituri.",
        },
        {
            id: "03",
            icon: <Factory size={20} />,
            title: "Capacitate de Sortare",
            desc: "Operăm linii de dezasamblare manuală și mecanică care permit separarea corectă a fracțiilor de plastic, metal și componente periculoase.",
        }
    ];

    return (
        <section className="py-20 lg:py-24 px-6 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Partea Stângă - Header + Vizual Realist */}
                    <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-24">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-primary-foreground/10 bg-primary-foreground/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
                                <span className="text-primary-foreground text-[9px] uppercase tracking-[0.2em] font-black">
                                    Capacitate Operațională
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-foreground">
                                Resurse <br/>
                                <span className="italic text-secondary-foreground font-light">Industriale.</span>
                            </h2>

                            <p className="max-w-md text-muted-foreground text-sm lg:text-base leading-relaxed border-l-2 border-primary-foreground/20 pl-6">
                                Nu promitem soluții magice, ci un proces stabil de colectare și valorificare a deșeurilor electrice, susținut de infrastructură proprie.
                            </p>
                        </div>

                        {/* --- WIDGET DE UMPLERE: DATE OPERAȚIONALE REALE --- */}
                        <div className="hidden lg:block relative group">
                            <div className="absolute -inset-4 bg-primary-foreground/[0.01] rounded-3xl -z-10" />

                            <div className="grid grid-cols-2 gap-4 border border-white/5 bg-foreground/[0.01] p-6 rounded-3xl">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary-foreground/40">
                                        <BarChart3 size={14} />
                                        <span className="text-[9px] uppercase font-black tracking-widest">Flux Lunar</span>
                                    </div>
                                    <div className="text-2xl font-mono font-bold text-foreground">500+ t</div>
                                    <p className="text-[10px] text-muted-foreground">Capacitate medie procesată</p>
                                </div>

                                <div className="space-y-2 border-l border-white/5 pl-4">
                                    <div className="flex items-center gap-2 text-primary-foreground/40">
                                        <Truck size={14} />
                                        <span className="text-[9px] uppercase font-black tracking-widest">Acoperire</span>
                                    </div>
                                    <div className="text-2xl font-mono font-bold text-foreground">Regional</div>
                                    <p className="text-[10px] text-muted-foreground">Logistică proprie activă</p>
                                </div>

                                <div className="col-span-2 pt-4 border-t border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[8px] text-muted-foreground uppercase font-black tracking-[0.2em]">Conformitate Documente (GDPR/Mediu)</span>
                                        <span className="text-[10px] text-primary-foreground font-mono">100% Valid</span>
                                    </div>
                                    {/* Un mic grid care sugerează un calendar sau flux de preluări */}
                                    <div className="flex gap-1 h-3">
                                        {[...Array(20)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`flex-1 rounded-sm ${i % 3 === 0 ? 'bg-primary-foreground/40' : 'bg-white/5'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partea Dreaptă - Lista de Valori */}
                    <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                        {values.map((val) => (
                            <div
                                key={val.id}
                                className="group relative bg-foreground/[0.01] hover:bg-foreground/[0.03] border border-white/5 p-6 lg:p-8 rounded-[2rem] transition-all duration-500 cursor-default overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <ArrowUpRight size={120} strokeWidth={1} />
                                </div>

                                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-none w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center text-primary-foreground group-hover:border-primary-foreground/30 transition-all duration-500">
                                        {val.icon}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-primary-foreground/40 font-mono">
                                                {val.id}
                                            </span>
                                            <h3 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight italic">
                                                {val.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm lg:text-[15px] leading-relaxed max-w-md">
                                            {val.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}