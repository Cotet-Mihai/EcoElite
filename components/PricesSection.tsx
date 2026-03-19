import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card} from "@/components/ui/card";
import {METALS} from "@/utils/data";
import SimpleCalculator from "@/components/SimpleCalculator";

export default function PricesSection() {
    return (
        <section className={'flex flex-col py-24 px-10 w-full max-w-7xl mx-auto min-h-screen'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row md:items-end items-center w-full gap-6'}>
                <div className={'flex flex-col gap-2 max-w-2xl'}>
                    <h2 className={' text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold'}>
                        Prețuri colectare
                    </h2>
                    <p className={'text-muted-foreground text-sm'}>
                        Valorificăm deșeurile tale metalice la prețuri competitive,
                        asigurând un proces de reciclare transparent și rapid.
                    </p>
                </div>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 min-h-0 mt-10'}>
                <Card className={'rounded-3xl border-none bg-card p-8 flex flex-col justify-between'}>
                    <h3 className={'text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-foreground'}>
                        Cotații actuale
                    </h3>

                    <div className={'flex flex-col gap-3'}>
                        {METALS.map((metal, i) => (
                            <div
                                key={i}
                                className={'flex justify-between items-center px-5 py-2 rounded-2xl border border-border shadow-sm hover:shadow-md duration-200'}
                            >
                                <div className={'flex items-center gap-2 '}>
                                    <div className={`w-2 h-2 rounded-full ${metal.color}`}/>
                                    <span className={'font-semibold text-md uppercase tracking-tight text-foreground'} >{metal.name}</span>
                                </div>
                                <span className={'font-serif text-lg whitespace-nowrap md:text-2xl font-bold text-primary'}>
                                    {metal.price} lei/kg
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 relative z-10">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">
                            * Prețurile sunt informative
                        </p>
                    </div>

                </Card>

                <SimpleCalculator/>
            </div>
        </section>
    )
}