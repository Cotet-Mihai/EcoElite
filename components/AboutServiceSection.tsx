import Image from "next/image";
import RecyclingRoadmap from "@/components/RecyclingRoadmap";
import {Factory, Store, User} from "lucide-react";

export default function AboutServiceSection() {
    return (
        // Am adăugat overflow-x-hidden aici pentru a bloca scroll-ul orizontal de la DecorativeText
        <div className="bg-transparent py-24 lg:py-32 px-6 lg:px-10 relative z-10 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 reveal-on-scroll">
                    <div>
                        <span className="text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-black block mb-4">
                            Expertiză Operațională
                        </span>
                        <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]">
                            Serviciile <span className="italic text-secondary-foreground">Noastre.</span>
                        </h2>
                    </div>
                </div>

                {/* 2. Roadmap Area */}
                <div className="reveal-on-scroll">
                    <div className="flex items-center gap-4 mb-8 opacity-40">
                        <span className="text-[7px] md:text-[9px] font-black tracking-[0.5em] uppercase whitespace-nowrap">Procedură Standard de Trasabilitate</span>
                        <div className="h-[1px] w-full bg-gradient-to-r from-primary-foreground/30 to-transparent" />
                    </div>

                    {/* Am schimbat flex-ul: pe mobil sunt unul sub altul (col), pe desktop unul lângă altul (row) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center mb-20">
                        <div className="w-full lg:flex-1 min-h-[300px]">
                            <RecyclingRoadmap />
                        </div>

                        <div className="max-w-sm lg:border-l lg:border-primary-foreground/20 lg:pl-8">
                            <p className="text-muted-foreground font-medium text-sm lg:text-base leading-relaxed">
                                De la colectare la reintroducerea în circuitul economic, gestionăm fiecare etapă cu precizie industrială, asigurând o trasabilitate de 100% a materialelor procesate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Procesul Tehnologic Detaliat - Refăcut pentru contrast cu grid-ul de jos */}
                <div className="py-24 border-t border-white/5 mb-10 reveal-on-scroll">
                    <div className="flex flex-col gap-24 lg:gap-32">
                        {[
                            {
                                num: "01",
                                title: "Logistică & Preluare Securizată",
                                text: "Operațiunea începe cu o evaluare riguroasă a fluxurilor de deșeuri la sursă, utilizând o flotă proprie specializată pentru transportul materialelor sensibile. Fiecare vehicul este dotat cu sisteme de cântărire electronică omologate și monitorizare GPS în timp real, asigurând o transparență totală a tranzitului. Ne ocupăm integral de managementul documentației (anexe, formulare de încărcare-descărcare) pentru a garanta conformitatea juridică deplină a fiecărei ridicări."
                            },
                            {
                                num: "02",
                                title: "Sortare & Procesare Avansată",
                                text: "Odată ajunse în centrul de procesare, echipamentele DEEE sunt supuse unei trieri multicriteriale. Separăm metalele feroase și neferoase prin tehnologii magnetice de înaltă intensitate și sisteme cu inducție (Eddy Current), care izolează fracțiile de aluminiu și cupru cu o precizie chirurgicală. Procesul include dezasamblarea manuală pentru componentele critice și mărunțirea controlată, etapă esențială pentru protejarea purității materialelor și izolarea fracțiilor periculoase (baterii, condensatori)."
                            },
                            {
                                num: "03",
                                title: "Valorificare & Economie Circulară",
                                text: "Rezultatul final al fluxului tehnologic constă în obținerea unor materii prime secundare de înaltă calitate, pregătite pentru reintroducerea directă în circuitele de producție industrială. Prin transformarea deșeurilor în resurse strategice, reducem dependența de mineritul primar și amprenta de carbon a partenerilor noștri. La finalul fiecărui ciclu, emitem rapoarte detaliate de valorificare, confirmând atingerea țintelor de reciclare și închiderea buclei de economie circulară."
                            }
                        ].map((step, idx) => (
                            <div key={step.num} className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 group">
                                {/* Partea stângă: Numărul și Linia de progres */}
                                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <span className="font-serif italic text-6xl lg:text-8xl text-primary-foreground/10 group-hover:text-primary-foreground/30 transition-colors duration-700 leading-none">
                        {step.num}
                    </span>
                                    <div className="h-[1px] lg:h-24 w-full lg:w-[1px] bg-gradient-to-r lg:bg-gradient-to-b from-primary-foreground/50 to-transparent hidden md:block" />
                                </div>

                                {/* Partea dreaptă: Titlu și Text bogat */}
                                <div className="lg:col-span-7 lg:pt-4">
                                    <h4 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                        {step.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-justify lg:text-left">
                                        {step.text}
                                    </p>
                                </div>

                                {/* Element decorativ în dreapta pentru a umple spațiul pe ecrane mari */}
                                <div className="lg:col-span-3 hidden lg:flex justify-end pt-4">
                                    <div className="w-12 h-[1px] bg-primary-foreground/20 self-start mt-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid Carduri Servicii rămâne neschimbat, dar acum are contrast */}

                {/* 4. Grid Servicii (Design Asimetric - Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32 h-auto lg:h-[700px]">
                    {/* Card Mare - Focus pe Reciclare Electronică */}
                    <div className="md:col-span-8 group relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                        <Image src="/images/retro-tv.png" alt="DEEE" fill className="object-cover opacity-50 group-hover:scale-105 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                        <div className="absolute bottom-12 left-12 right-12 z-20">
                            <span className="text-primary-foreground font-mono text-sm mb-4 block tracking-tighter">SERVICE_ID: 03_ELECTRONICS</span>
                            <h3 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-none">Reciclare <br/> <span className="italic text-secondary-foreground">Electronică.</span></h3>
                            <p className="max-w-md text-muted-foreground text-base border-l border-primary-foreground/40 pl-6 italic">
                                Tratarea sigură a echipamentelor IT, electrocasnicelor și componentelor industriale cu recuperare de metale critice.
                            </p>
                        </div>
                    </div>

                    {/* Două Carduri Mici stivuite în dreapta */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-6">
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/5 bg-foreground/[0.02] p-10 flex flex-col justify-end group">
                            <Image src="/images/colectare-selectiva.png" alt="Colectare" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-2">Colectare Selectivă</h3>
                                <p className="text-xs text-muted-foreground">Management integrat pentru deșeuri comerciale.</p>
                            </div>
                        </div>
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/5 bg-foreground/[0.02] p-10 flex flex-col justify-end group">
                            <Image src="/images/metale-feroase.png" alt="Metale" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-2">Reciclare Industrială</h3>
                                <p className="text-xs text-muted-foreground">Procesarea fluxurilor masive de metale feroase.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Cui Ne Adresăm (Layout Tip "Dashboard" Industrial) */}
                <div className="py-24 border-y border-white/5 mb-32 reveal-on-scroll bg-foreground/[0.01] rounded-[4rem] px-8 lg:px-16">
                    <div className="max-w-4xl mb-20">
                        <div className="flex items-center gap-3 text-primary-foreground mb-8">
                            <div className="h-[1px] w-8 bg-primary-foreground" />
                            <span className="uppercase tracking-[0.4em] font-black text-[10px]">Parteneriate Strategice</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-6xl font-light leading-[1.1] text-foreground">
                            De la responsabilitatea producătorului la gospodării. Oferim <span className="font-bold italic text-secondary-foreground underline decoration-primary-foreground/20 underline-offset-8">soluții adaptate</span> pentru întreg lanțul valoric.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {[
                            {
                                icon: <Factory size={24}/>,
                                title: "01. Producători (OIREP)",
                                desc: "Preluăm responsabilitatea legală de mediu pentru producătorii de echipamente electrice. Asigurăm atingerea țintelor de colectare prin fluxuri documentate și raportări lunare impecabile către autorități, garantând conformitatea totală cu normele europene în vigoare."
                            },
                            {
                                icon: <Store size={24}/>,
                                title: "02. Distribuitori & Retail",
                                desc: "Gestionăm infrastructura de colectare pentru lanțurile de magazine și distribuitori de electronice. Implementăm sisteme eficiente pentru campanii de tip buy-back și debarasarea stocurilor defecte, oferind logistică rapidă și certificate de distrugere securizată."
                            },
                            {
                                icon: <User size={24}/>,
                                title: "03. Persoane Fizice",
                                desc: "Oferim cetățenilor soluții simple și legale pentru predarea aparatelor electrocasnice uzate. Prin punctele noastre de colectare, ne asigurăm că bateriile, condensatorii și substanțele periculoase din echipamentele casnice nu ajung în natură, ci sunt procesate ecologic."
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 relative group">
                                {/* Icon Container */}
                                <div className="text-primary-foreground bg-primary-foreground/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-primary-foreground/50 transition-all duration-500 shadow-xl">
                                    {item.icon}
                                </div>

                                {/* Title with decorative line */}
                                <h4 className="text-secondary-foreground uppercase text-[11px] font-black tracking-widest border-b border-white/5 pb-4 group-hover:border-primary-foreground/30 transition-all duration-500 italic">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm lg:text-[15px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.desc}
                                </p>

                                {/* Subtle numbering background on hover */}
                                <span className="absolute -top-4 -right-2 text-6xl font-serif italic text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                                0{i + 1}
                            </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}