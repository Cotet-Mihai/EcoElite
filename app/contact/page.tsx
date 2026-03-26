import { Phone, MapPin, Building2, Clock, CircleUser } from "lucide-react";
import ContactCompanyMap from "@/components/ContactCompanyMap";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/utils/data";
import IndustrialFlux from "@/components/IndustrialFlux";

export default function ContactPage() {
    return (
        <section className="relative py-24 min-h-screen text-secondary-foreground overflow-hidden">

            {/* Fundal text gigant - Animație subtilă de fade-in la load */}
            <div className="absolute top-0 right-0 -translate-y-5 translate-x-1/4 pointer-events-none select-none z-0 hero-image-reveal">
                <h1 className="font-serif text-[22vw] font-black text-foreground/[0.01] leading-none uppercase tracking-tighter">
                    Contact
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

                {/* Header Pagina - Animație secvențială pentru text */}
                <div className="mb-20 max-w-2xl">
                    <div className="flex items-center gap-3 text-primary-foreground mb-6 hero-text-reveal">
                        <CircleUser size={20} />
                        <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                            Inițiază o discuție
                        </span>
                    </div>
                    <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tighter mb-6 hero-text-reveal [animation-delay:200ms]">
                        Contact
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed hero-text-reveal [animation-delay:400ms]">
                        Ai întrebări, sugestii sau dorești să colaborăm? <br className="hidden md:block"/>
                        Echipa noastră îți stă la dispoziție pentru soluții rapide.
                    </p>
                </div>

                {/* Rândul 1: Cele 3 carduri - Folosim hero-card-reveal pentru efectul de intrare pe rând (Staggered) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">

                    {/* 01. Identitate Juridică */}
                    <div className="hero-card-reveal p-8 lg:p-10 rounded-[2rem] shadow-2xl border border-border/5 flex flex-col justify-between bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors duration-500">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Building2 size={16} className="text-primary-foreground" strokeWidth={2.5} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Identitate</span>
                            </div>
                            <h2 className="font-serif text-xl font-bold text-secondary-foreground tracking-tight uppercase mb-8">
                                {COMPANY.name} <br/> {COMPANY.legalForm}
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 text-[11px] uppercase tracking-widest text-muted-foreground font-bold border-t border-foreground/5 pt-6">
                            <p className="flex justify-between items-center"><span>CUI:</span> <span className="text-foreground">{COMPANY.cui}</span></p>
                            <p className="flex justify-between items-center"><span>Reg. Com:</span> <span className="text-foreground">{COMPANY.registrationNumber}</span></p>
                        </div>
                    </div>

                    {/* 02. Punct de Lucru */}
                    <div className="hero-card-reveal p-8 lg:p-10 rounded-[2rem] shadow-2xl bg-foreground/[0.02] border border-foreground/5 flex flex-col justify-between hover:bg-foreground/[0.04] transition-colors duration-500">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <MapPin size={16} className="text-primary-foreground" strokeWidth={2.5} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Locație</span>
                            </div>
                            <a
                                href="https://maps.google.com"
                                target={'_blank'}
                                className="font-serif text-xl font-bold text-secondary-foreground leading-snug mb-8 hover:text-primary-foreground transition-colors"
                            >
                                {COMPANY.address}
                            </a>
                        </div>
                        <div className="border-t border-foreground/5 pt-6 space-y-3">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock size={12} className="text-primary-foreground" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">Program</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="font-medium text-foreground/80">Luni — Vineri</span>
                                <span className="font-serif italic text-primary-foreground font-bold">{COMPANY.programInWeek}</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="font-medium text-foreground/80">Sâmbătă</span>
                                <span className="font-serif italic text-primary-foreground font-bold">{COMPANY.programSaturday}</span>
                            </div>
                        </div>
                    </div>

                    {/* 03. Contact Direct */}
                    <div className="hero-card-reveal p-8 lg:p-10 rounded-[2rem] bg-secondary/60 text-foreground shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                        {/* Accent vizual la hover */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-foreground rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <Phone size={16} className="text-primary-foreground" strokeWidth={2.5} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60">Contact Rapid</span>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-[9px] uppercase font-black tracking-widest text-primary-foreground mb-2">Telefon</p>
                                    <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-3xl font-serif font-bold block hover:text-secondary-foreground transition-colors duration-300">
                                        {COMPANY.phone}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[9px] uppercase font-black tracking-widest text-primary-foreground mb-2">E-mail</p>
                                    <a href={`mailto:${COMPANY.email}`} className="text-lg font-medium block hover:text-secondary-foreground transition-colors duration-300">
                                        {COMPANY.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Harta - Apare la scroll */}
                <div className="relative group max-w-6xl mx-auto reveal-on-scroll">
                    <div className="h-[500px] lg:h-[300px] w-full rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl relative">
                        <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] z-10" />
                        <ContactCompanyMap />
                    </div>
                </div>

                {/* Flux Industrial - Apare la scroll */}
                <div className="mt-24 reveal-on-scroll">
                    <IndustrialFlux/>
                </div>

                {/* Formular Contact - Apare la scroll */}
                <div className="reveal-on-scroll">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}