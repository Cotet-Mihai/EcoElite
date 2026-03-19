import { Card } from "@/components/ui/card";
import FastCalculator from "@/components/FastCalculator";
import {METALS} from "@/utils/data";
import StatsRibbon from "@/components/StatsRibbon";

export default function CalculatorSection() {

    return (
        <section className="flex flex-col bg-transparent min-h-screen">
            <StatsRibbon />

            <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 flex flex-col">
                {/* Header similar cu TargetAudience */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 shrink-0 bg-[#f9fafb] p-10 rounded-4xl">
                    <div>
                        <h2 className="font-serif text-5xl font-bold tracking-tight text-primary">
                            Prețuri colectare
                        </h2>
                        <p className="text-muted-foreground mt-3">
                            Valorificăm deșeurile tale metalice la prețuri competitive,
                            asigurând un proces de reciclare transparent și rapid.
                        </p>
                    </div>
                </div>

                {/* Grid de conținut principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0">

                    {/* Div STÂNGA: Prețuri stilizate ca Bento Card */}
                    <Card className="rounded-3xl border-none bg-gray-50 p-8 flex flex-col justify-between overflow-hidden relative group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-secondary">
                                Cotații actuale
                            </h3>

                            <div className="space-y-4">
                                {METALS.map((metal, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center px-3 py-1 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-3 h-3 rounded-full ${metal.color}`} />
                                            <span className="font-bold text-lg uppercase tracking-tight text-foreground">{metal.name}</span>
                                        </div>
                                        <span className="font-serif text-2xl font-bold text-primary">
                                          {metal.price} lei/kg
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 relative z-10">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                * Prețurile sunt informative
                            </p>
                        </div>

                        {/* Overlay subtil de design */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6F8F6B]/5 rounded-full blur-3xl" />
                    </Card>

                    <Card className="rounded-3xl border-none bg-gray-50  flex flex-col p-2 group overflow-hidden">
                        <FastCalculator />
                    </Card>

                </div>
            </div>
        </section>
    );
}