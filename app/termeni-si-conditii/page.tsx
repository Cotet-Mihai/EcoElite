import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, FileText, AlertCircle } from "lucide-react";

export default function TermsAndConditions() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="py-24 px-6 lg:px-10 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">

                {/* Header Pagina */}
                <div className="mb-20 space-y-6 border-b border-foreground/5 pb-12">
                    <div className="flex items-center gap-3 text-primary">
                        <Scale size={20} />
                        <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                            Document Legal
                        </span>
                    </div>
                    <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-none tracking-tighter">
                        Termeni și
                        <span className="italic text-primary"> Condiții.</span>
                    </h1>
                </div>

                {/* Conținut Document */}
                <div className="space-y-16 text-foreground/80 leading-relaxed">

                    {/* 01. Identificarea Firmei */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">01</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Identificarea Operatorului</h3>
                        </div>
                        <div className="pl-9 space-y-4">
                            <p>
                                Site-ul <span className="font-bold">www.ecoelite.ro</span> este proprietatea exclusivă a societății <span className="text-[#0D1611] font-bold">ECO ELITE SRL</span>, cu sediul social în București, înregistrată la Registrul Comerțului sub nr. Jxx/xxxx/xxxx, CUI ROxxxxxxx.
                            </p>
                            <p>
                                Suntem o unitate autorizată pentru colectarea și valorificarea deșeurilor reciclabile (feroase, neferoase, DEEE), operând în conformitate cu legislația de mediu în vigoare în România.
                            </p>
                        </div>
                    </div>

                    {/* 02. Acceptarea și Modificarea Termenilor */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">02</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Acceptarea și Modificarea Termenilor</h3>
                        </div>
                        <div className="pl-9 space-y-4">
                            <p>
                                Utilizarea site-ului <span className="italic">www.ecoelite.ro</span> (incluzând vizitarea, navigarea, completarea formularelor de contact sau solicitarea de cotații) constituie un acord implicit de respectare a prezentelor condiții, cu toate consecințele juridice care decurg din acestea.
                            </p>

                            {/* Box de atenționare stilizat */}
                            <div className="bg-foreground/5 border-l-2 border-primary p-6 my-4">
                                <p className="text-sm font-medium text-foreground">
                                    Dacă nu sunteți de acord cu oricare dintre prevederile prezentului document, aveți obligația de a înceta imediat utilizarea site-ului.
                                </p>
                            </div>

                            <p>
                                <span className="font-bold text-foreground">Eco Elite SRL</span> își rezervă dreptul de a modifica, actualiza sau șterge orice secțiune a Termenilor și Condițiilor, precum și conținutul site-ului, în orice moment, fără o notificare prealabilă a utilizatorilor.
                            </p>
                            <p className="text-sm italic border-t border-foreground/5 pt-4">
                                Continuarea utilizării site-ului după orice modificare reprezintă acceptul dumneavoastră tacit față de noile condiții. Vă recomandăm să consultați periodic această pagină pentru a fi la curent cu ultima versiune aplicabilă.
                            </p>
                        </div>
                    </div>

                    {/* 03. Condiții de Utilizare și Obligațiile Utilizatorului */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">03</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Condiții de Utilizare și Obligațiile Utilizatorului</h3>
                        </div>
                        <div className="pl-9 space-y-4">
                            <p>Prin utilizarea acestui site, vă obligați să respectați următoarele reguli:</p>
                            <ul className="list-none space-y-3">
                                {[
                                    "Să nu utilizați site-ul pentru a transmite materiale cu caracter ilegal, defăimător sau licențios.",
                                    "Să nu introduceți viruși, troieni sau orice alt software malițios care ar putea afecta infrastructura serverelor noastre.",
                                    "Să furnizați informații reale și corecte în formularele de contact sau cererile de ofertă.",
                                    "Să nu utilizați sisteme automate (roboți/scrapers) pentru a extrage date sau cotații de preț fără acordul nostru scris."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                        <span className="text-sm">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 04. Servicii și Cotații */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">04</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Servicii și Cotații de Preț</h3>
                        </div>
                        <div className="pl-9 space-y-4 text-sm lg:text-base">
                            <p>
                                Informațiile și prețurile/cotațiile afișate pe site au caracter informativ. Prețul final pentru deșeurile colectate se stabilește la punctul de lucru, după cântărire și evaluarea purității materialului de către personalul nostru calificat.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                <li>Cotațiile se bazează pe bursa metalelor (LME) și pot varia zilnic.</li>
                                <li>Eco Elite SRL își rezervă dreptul de a refuza deșeuri care nu respectă normele de siguranță sau mediu (ex: materiale explozive, recipiente sub presiune necurățate).</li>
                            </ul>
                        </div>
                    </div>

                    {/* 05. Proprietate Intelectuală */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">05</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Proprietate Intelectuală</h3>
                        </div>
                        <div className="pl-9">
                            <p>
                                Întreg conținutul (texte, imagini, logo-uri, grafică) este proprietatea Eco Elite SRL. Copierea, reproducerea sau distribuirea acestuia în scopuri comerciale fără acordul nostru scris este strict interzisă și se pedepsește conform Legii 8/1996.
                            </p>
                        </div>
                    </div>

                    {/* 06. Limitarea Răspunderii */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">06</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Limitarea Răspunderii</h3>
                        </div>
                        <div className="pl-9">
                            <p>
                                Eco Elite SRL nu garantează că site-ul va funcționa neîntrerupt sau fără erori. Nu suntem responsabili pentru eventuale prejudicii cauzate de utilizarea informațiilor de pe site sau de imposibilitatea accesării acestuia.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Document - Call to action */}
                <div className="mt-24 pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-medium">
                        © {currentYear} Eco Elite SRL. Toate drepturile rezervate.
                    </p>

                    <Link href="/contact">
                        <button className="group flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Ai nelămuriri juridice?</span>
                                <span className="font-serif text-xl font-bold text-foreground">Contactează-ne</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                                <ChevronRight className="text-primary group-hover:text-foreground transition-colors" size={20} />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}