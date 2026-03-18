"use client";

import Image from "next/image";
import { ShieldCheck, Factory, Clock } from "lucide-react";
import { COMPANY } from "@/utils/data";
import ContactForm from "@/components/ContactForm";
import MinimalTransition from "@/components/TransformationFlow";
import StructuralTransition from "@/components/StructuralTransition";

export default function AboutPage() {
    return (
        <section className="bg-white min-h-screen text-[#0D1611] overflow-hidden max-w-7xl mx-auto">

            <div className="absolute top-0 right-0 -translate-y-5 translate-x-1/4 pointer-events-none select-none z-0">
                <h1 className="font-serif text-[22vw] font-black text-foreground/[0.02] leading-none uppercase tracking-tighter">
                    despre
                </h1>
            </div>

            {/* 1. HERO SECTION */}
            <div className="pt-32 pb-20 px-6 lg:px-10 mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8 relative z-10">
                        <div className="flex items-center gap-3 text-primary mb-8">
                            <div className="h-[2px] w-12 bg-primary" />
                            <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                                Povestea {COMPANY.name}
                            </span>
                        </div>
                        <h1 className="font-serif text-6xl lg:text-[7.5rem] font-bold text-foreground leading-[0.9] tracking-tighter mix-blend-difference">
                            Dincolo de <br />
                            <span className="italic text-primary">Reciclare.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            Redefinim standardele industriei prin inovație, transparență și un angajament neclintit față de un viitor industrial sustenabil.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. ZONA DE IMAGINI - "The Gallery" */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                    {/* Imagine Principală Mare */}
                    <div className="md:col-span-8 h-[400px] md:h-full rounded-[2rem] overflow-hidden relative group bg-zinc-100">
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                        <Image
                            src="/images/plant-2.png"
                            alt="Facilitate industrială Eco Elite"
                            fill
                            className="object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            sizes="(max-w-768px) 100vw, 66vw"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black mb-2">01.</p>
                            <p className="text-white font-serif text-2xl">Management Resource Industrial</p>
                        </div>
                    </div>
                    {/* Imagine Secundară Înaltă */}
                    <div className="md:col-span-4 h-[400px] md:h-full rounded-[2rem] overflow-hidden relative group mt-12 md:mt-24 bg-zinc-100">
                        <Image
                            src="/images/copper-tree.png"
                            alt="Reciclare echipamente electronice"
                            fill
                            className="object-cover lg:grayscale group-hover:grayscale-0  transition-all duration-700 hover:scale-105"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black mb-2">02.</p>
                            <p className="text-white font-serif text-2xl">Protejăm Natura</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. MANIFESTO */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-32 text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12">
                    Nu suntem doar un colector de deșeuri. Suntem <span className="font-bold italic text-primary">arhitecții unui ciclu industrial curat</span>, unde fiecare material își găsește o nouă utilitate.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-foreground/10 pt-12">
                    <p>
                        Fondată din dorința de a aduce transparență pe piața de recuperare a materialelor feroase și neferoase, <strong className="text-foreground">{COMPANY.name}</strong> a crescut integrând tehnologii moderne și procese riguroase de triere la scară industrială.
                    </p>
                    <p>
                        Misiunea noastră este simplă: să transformăm o problemă logistică a partenerilor noștri într-o soluție ecologică, profitabilă și 100% conformă cu normele europene de mediu.
                    </p>
                </div>
            </div>



            {/* 4. VALORI CENTRALE (Dark Mode) */}
            <div className="bg-[#0D1611] text-white py-32 px-6 lg:px-10 mx-5 rounded-[3rem] lg:rounded-[4rem] relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 relative lg:sticky lg:top-32 space-y-5">
                            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-black block mb-4">Filozofia Noastră</span>
                            <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
                                Pilonii <br/>
                                <span className="italic text-white/40">Brandului.</span>
                            </h2>
                            <p className="max-w-sm text-white/60 text-lg leading-relaxed">
                                Nu credem în promisiuni goale. Credem în eficiență, trasabilitate și capacitatea de a rezolva probleme logistice complexe.
                            </p>
                        </div>

                        <div className="lg:col-span-7 flex flex-col mt-12 lg:mt-0">
                            {/* Valoarea 01 */}
                            <div className="group border-t border-white/10 py-12 lg:py-16 flex flex-col md:flex-row gap-6 hover:border-primary/50 transition-colors duration-500 cursor-default">
                                <div className="flex-none flex items-center gap-4">
                                    <span className="font-serif italic text-primary/80 text-3xl">01</span>
                                    <Clock size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">Eficiență Circulară</h3>
                                    <p className="text-white/50 leading-relaxed text-lg max-w-lg">
                                        Maximizăm volumul de materiale reintroduse în circuitul economic prin procese de triere ultra-rapide și logistică proprie.
                                    </p>
                                </div>
                            </div>
                            {/* Valoarea 02 */}
                            <div className="group border-t border-white/10 py-12 lg:py-16 flex flex-col md:flex-row gap-6 hover:border-primary/50 transition-colors duration-500 cursor-default">
                                <div className="flex-none flex items-center gap-4">
                                    <span className="font-serif italic text-primary/80 text-3xl">02</span>
                                    <ShieldCheck size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">Conformitate Totală</h3>
                                    <p className="text-white/50 leading-relaxed text-lg max-w-lg">
                                        Oferim trasabilitate completă și documentație impecabilă pentru fiecare kilogram de deșeu neferos sau DEEE preluat.
                                    </p>
                                </div>
                            </div>
                            {/* Valoarea 03 */}
                            <div className="group border-t border-b border-white/10 py-12 lg:py-16 flex flex-col md:flex-row gap-6 hover:border-primary/50 transition-colors duration-500 cursor-default">
                                <div className="flex-none flex items-center gap-4">
                                    <span className="font-serif italic text-primary/80 text-3xl">03</span>
                                    <Factory size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">Infrastructură Masivă</h3>
                                    <p className="text-white/50 leading-relaxed text-lg max-w-lg">
                                        Investim constant în utilaje grele și flotă proprie pentru a procesa volume industriale direct de la sursă.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. CE COLECTĂM - Hover Cards cu Placeholders */}
            <div className="bg-white text-[#0D1611] py-32 px-6 lg:px-10 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-black block mb-4">Portofoliu Materiale</span>
                            <h2 className="font-serif text-5xl lg:text-7xl font-bold tracking-tighter">
                                Ce <span className="italic text-primary">Colectăm.</span>
                            </h2>
                        </div>
                        <div className="max-w-sm">
                            <p className="text-muted-foreground font-medium">Operăm la scară industrială, acoperind o gamă largă de materiale feroase, neferoase și electronice.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Categoria 1: Feroase */}
                        <div className="group relative h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden cursor-pointer bg-zinc-100">
                            <Image
                                src="/images/metale-feroase.png"
                                alt="Metale Feroase"
                                fill
                                className="absolute inset-0 w-full h-full object-cover lg:grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1611] via-[#0D1611]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-white flex flex-col justify-end h-full">
                                <span className="text-primary font-serif italic text-xl mb-2">01.</span>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Metale<br/>Feroase</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 text-sm md:text-base font-light pt-2 border-t border-white/20">
                                            Fier vechi, oțel, fontă și deșeuri industriale. Preluare rapidă cu macarale proprii.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categoria 3: DEEE */}
                        <div className="group relative h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden cursor-pointer bg-zinc-100">
                            <Image
                                src="/images/retro-tv.png"
                                alt="Echipamente Electrice"
                                fill
                                className="absolute inset-0 w-full h-full object-cover lg:grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1611] via-[#0D1611]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-white flex flex-col justify-end h-full">
                                <span className="text-primary font-serif italic text-xl mb-2">02.</span>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Echipamente<br/>(DEEE)</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 text-sm md:text-base font-light pt-2 border-t border-white/20">
                                            Recuperare componente IT, servere și electrocasnice conform normelor de mediu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categoria 2: Neferoase */}
                        <div className="group relative h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden cursor-pointer bg-zinc-100">
                            <Image
                                src="/images/metale-neferoase.png"
                                alt="Metale Neferoase"
                                fill
                                className="absolute inset-0 w-full h-full object-cover lg:grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1611] via-[#0D1611]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-white flex flex-col justify-end h-full">
                                <span className="text-primary font-serif italic text-xl mb-2">03.</span>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Metale<br/>Neferoase</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 text-sm md:text-base font-light pt-2 border-t border-white/20">
                                            Cupru, aluminiu, alamă, inox și plumb. Evaluare precisă a purității metalului.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* 6. CUI NE ADRESĂM - Stil Manifesto Adaptat */}
                <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-32 text-center md:text-left pt-32 border-t border-foreground/5">
                    {/* Badge Subtil */}
                    <div className="flex items-center gap-3 text-primary mb-8 justify-center md:justify-start">
                        <div className="h-[1px] w-8 bg-primary" />
                        <span className="uppercase tracking-[0.4em] font-black text-[9px]">Parteneriate Strategice</span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12">
                        De la responsabilitatea extinsă a producătorului la gospodării. Oferim <span className="font-bold italic text-primary">soluții de colectare adaptate</span> pentru întreg lanțul valoric.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-foreground/10 pt-12">
                        <div className="space-y-8">
                            <div>
                                <strong className="text-foreground block mb-2 uppercase tracking-wider text-[10px] font-black">01. Producători & Importatori</strong>
                                <p>
                                    Susținem companiile care introduc produse pe piață în îndeplinirea obligațiilor de mediu. Oferim trasabilitate completă pentru deșeurile generate în procesul de producție și soluții eficiente pentru gestionarea stocurilor neconforme sau a ambalajelor industriale.
                                </p>
                            </div>
                            <div>
                                <strong className="text-foreground block mb-2 uppercase tracking-wider text-[10px] font-black">02. Distribuitori & Retail</strong>
                                <p>
                                    Colaborăm cu rețelele de distribuție pentru colectarea deșeurilor electrice și electronice (DEEE) provenite din retururi sau campanii de tip buy-back, transformând logistica inversă într-un proces simplu, sustenabil și 100% conform legii.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <strong className="text-foreground block mb-2 uppercase tracking-wider text-[10px] font-black">03. Persoane Fizice</strong>
                                <p>
                                    Credem că schimbarea începe de la individ. Oferim cetățenilor un punct de acces sigur și transparent pentru reciclarea responsabilă a aparatelor electrocasnice vechi și a resturilor metalice casnice, asigurându-ne că nicio resursă valoroasă nu ajunge la groapa de gunoi.
                                </p>
                            </div>
                            <div className="pt-4">
                                <p className="italic text-xs border-l-2 border-primary/30 pl-4 py-1">
                                    Indiferent de volum, {COMPANY.name} garantează un proces de colectare riguros, documentat și orientat către economia circulară.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <StructuralTransition/>
                <ContactForm/>
            </div>
        </section>
    );
}