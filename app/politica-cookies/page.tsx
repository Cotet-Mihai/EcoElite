import Link from "next/link";
import { ChevronRight, Cookie, ShieldCheck, Info, Settings } from "lucide-react";
import {COMPANY} from "@/utils/data";

export default function CookiePolicy() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="py-24 px-6 lg:px-10 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">

                <div className="absolute top-0 right-0 -translate-y-5 translate-x-1/4 pointer-events-none select-none z-0">
                    <h1 className="font-serif text-[22vw] font-black text-foreground/[0.02] leading-none uppercase tracking-tighter">
                        cookies.
                    </h1>
                </div>

                {/* Header Pagina */}
                <div className="mb-20 space-y-6 border-b border-foreground/5 pb-12">
                    <div className="flex items-center gap-3 text-primary">
                        <Cookie size={20} />
                        <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                            Transparență Digitală
                        </span>
                    </div>
                    <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-none tracking-tighter">
                        Politica de
                        <span className="italic text-primary"> Cookies.</span>
                    </h1>
                </div>

                {/* Conținut Document */}
                <div className="space-y-16 text-foreground/80 leading-relaxed">

                    {/* 01. Ce sunt cookie-urile */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">01</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Ce sunt fișierele Cookie?</h3>
                        </div>
                        <div className="pl-9 space-y-4">
                            <p>
                                Cookie-urile sunt fișiere text de mici dimensiuni, stocate pe computerul, tableta sau telefonul dumneavoastră atunci când vizitați site-ul <span className="font-bold underline decoration-primary/20">ecoelite.ro</span>.
                            </p>
                            <p>
                                Acestea sunt utilizate pentru a asigura funcționarea corectă a site-ului, pentru a optimiza performanța și pentru a oferi o experiență de navigare personalizată. Cookie-urile nu pot accesa informații de pe hard disk-ul dumneavoastră și nu conțin viruși.
                            </p>
                        </div>
                    </div>

                    {/* 02. Categorii de cookies */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">02</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Categorii de Cookie-uri Utilizate</h3>
                        </div>
                        <div className="pl-9 space-y-6">
                            <p>Website-ul Eco Elite utilizează următoarele tipuri de fișiere:</p>

                            <div className="space-y-6 pt-2">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-primary" />
                                        Cookie-uri Strict Necesare
                                    </h4>
                                    <p className="text-sm">Esențiale pentru navigare și utilizarea funcțiilor site-ului (ex: accesarea secțiunilor securizate sau trimiterea formularelor). Acestea nu pot fi dezactivate din sistemele noastre.</p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Info size={16} className="text-primary" />
                                        Cookie-uri de Statistică și Performanță
                                    </h4>
                                    <p className="text-sm">Ne permit să numărăm vizitele și sursele de trafic (ex: Google Analytics), astfel încât să putem măsura și îmbunătăți performanța site-ului nostru. Toate informațiile sunt colectate anonim.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 03. Controlul Cookie-urilor */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">03</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Gestionarea și Ștergerea Cookie-urilor</h3>
                        </div>
                        <div className="pl-9 space-y-4">
                            <p>
                                Majoritatea browserelor web sunt setate să accepte automat cookie-uri. Totuși, aveți posibilitatea de a schimba setările browserului pentru a bloca aceste fișiere sau pentru a fi notificat atunci când sunt trimise cookie-uri către dispozitivul dumneavoastră.
                            </p>

                            {/* Box de atenționare stilizat - păstrat din layout-ul tău */}
                            <div className="bg-foreground/5 border-l-2 border-primary p-6 my-4">
                                <p className="text-sm font-medium text-foreground italic">
                                    Vă rugăm să rețineți că dezactivarea cookie-urilor poate limita accesul la anumite funcționalități ale site-ului Eco Elite.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 04. Durata de stocare */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-[10px] font-black text-primary">04</span>
                            <h3 className="font-serif text-2xl font-bold text-foreground">Durata de Stocare</h3>
                        </div>
                        <div className="pl-9">
                            <p>
                                Cookie-urile de sesiune sunt șterse automat când închideți browserul. Cookie-urile persistente rămân stocate pe dispozitiv până când expiră sau sunt șterse manual de către utilizator.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Document - Call to action */}
                <div className="mt-24 pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-medium">
                        © 2026 {COMPANY.name} {COMPANY.legalForm} Toate drepturile rezervate.
                    </p>

                    <Link href="/contact">
                        <button className="group flex items-center gap-4 text-right">
                            <div className="flex flex-col items-end">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Ai întrebări despre datele tale?</span>
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