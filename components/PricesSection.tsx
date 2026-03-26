import { Card } from "@/components/ui/card";
import { METALS } from "@/utils/data";
import SimpleCalculator from "@/components/SimpleCalculator";

export default function PricesSection() {
    return (
        <section className={'flex flex-col py-24 px-10 w-full max-w-7xl mx-auto min-h-screen'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row md:items-end items-center w-full gap-6'}>
                <div className={'flex flex-col gap-2 max-w-2xl'}>
                    {/* Titlu Auriu */}
                    <h2 className={'text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold text-white'}>
                        Prețuri <span className={'italic text-[#d5b976]'}> colectare</span>
                    </h2>
                    <p className={'text-gray-400 text-sm'}>
                        Valorificăm deșeurile tale metalice la prețuri competitive,
                        asigurând un proces de reciclare transparent și rapid.
                    </p>
                </div>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 min-h-0 mt-10'}>
                {/* Card Cotații - Fundal gri închis */}
                <Card className={'rounded-3xl border border-white/5 bg-transparent p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden'}>
                    {/* Glow subtil în colț */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d5b976]/5 blur-3xl rounded-full" />

                    <h3 className={'text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-[#d5b976] relative z-10'}>
                        Cotații actuale
                    </h3>

                    <div className={'flex flex-col gap-3 relative z-10'}>
                        {METALS.map((metal, i) => (
                            <div
                                key={i}
                                className={'flex justify-between items-center px-5 py-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#d5b976]/30 duration-300 transition-all group'}
                            >
                                <div className={'flex items-center gap-3'}>
                                    {/* Punctul colorat cu un mic glow */}
                                    <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] ${metal.color}`}/>
                                    <span className={'font-semibold text-md uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors'}>
                                        {metal.name}
                                    </span>
                                </div>
                                {/* Prețul cu un verde mai "industrial" */}
                                <span className={'font-serif text-lg whitespace-nowrap md:text-2xl font-bold text-[#7bb831]'}>
                                    {metal.price} <span className="text-sm font-sans font-normal text-gray-400">lei/kg</span>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 relative z-10 pt-6 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                            * Prețurile sunt informative și se actualizează zilnic
                        </p>
                    </div>
                </Card>

                {/* Calculatorul va trebui să aibă și el culorile adaptate în interiorul componentei lui */}
                <div className="relative">
                    <SimpleCalculator />
                </div>
            </div>
        </section>
    )
}