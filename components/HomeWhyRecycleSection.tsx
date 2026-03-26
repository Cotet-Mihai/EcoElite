import React from "react";
import { TreeDeciduous, Leaf, Recycle } from "lucide-react";

export default function HomeWhyRecycleSection() {
    return (
        <section className="relative w-full py-16 px-6 lg:px-12 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

                {/* ================= STÂNGA: De ce să reciclezi? ================= */}
                <div className="flex flex-col lg:pr-12 lg:border-r border-foreground/10">
                    <h2 className="text-secondary-foreground font-serif text-3xl mb-8">
                        De ce să reciclezi?
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-5">
                            <TreeDeciduous
                                className="w-10 h-10 text-primary-foreground shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-foreground text-lg font-semibold tracking-wide">
                                    Protejarea Naturii
                                </h3>
                                <p className="text-muted-foreground text-sm mt-0.5 leading-snug">
                                    Creșterea biodiversității în zonele și ariile protejate.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <Leaf
                                className="w-10 h-10 text-primary-foreground shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-foreground text-lg font-semibold tracking-wide">
                                    Reducerea Poluării
                                </h3>
                                <p className="text-muted-foreground text-sm mt-0.5 leading-snug">
                                    Scăderea în mod dramatic a emisiilor poluante.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <Recycle
                                className="w-10 h-10 text-primary-foreground shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-foreground text-lg font-semibold tracking-wide">
                                    Economie de Resurse
                                </h3>
                                <p className="text-muted-foreground text-sm mt-0.5 leading-snug">
                                    Protejarea resurselor și producția sustenabilă pentru o viață echilibrată.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= DREAPTA: Despre EcoElite ================= */}
                <div className="flex flex-col lg:pl-12">

                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-secondary-foreground font-serif text-3xl whitespace-nowrap">
                            Despre EcoElite
                        </h2>
                        <div className="h-[1px] flex-grow bg-foreground/10 mt-2" />
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-8 items-start">

                        <div className="flex flex-col flex-1 gap-5">
                            <h3 className="text-foreground text-xl leading-snug pr-4">
                                Experiență și profesionalism în reciclare
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Angajamentul nostru pentru un viitor sustenabil se reflectă în fiecare serviciu oferit.
                                Promovăm soluții moderne de colectare și reciclare, contribuind activ la protejarea mediului
                                și la dezvoltarea unei economii circulare responsabile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}