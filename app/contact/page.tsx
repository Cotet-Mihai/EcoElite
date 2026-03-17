"use client";

import {Phone, MapPin, Building2, Clock, CircleUser} from "lucide-react";
import CompanyMap from "@/components/CompanyMap";
import ContactForm from "@/components/ContactForm";
import {COMPANY} from "@/utils/data";

export default function ContactPage() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white min-h-screen text-[#0D1611]">
            <div className="max-w-6xl mx-auto">

                {/* Header Pagina */}
                <div className="mb-15 space-y-6 border-b border-foreground/5 pb-12">
                    <div className="flex items-center gap-3 text-primary">
                        <CircleUser size={20} />
                        <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                            Contact
                        </span>
                    </div>
                    <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground leading-none tracking-tighter">
                        Detalii
                        <span className="italic text-primary"> Operaționale.</span>
                    </h1>
                    <p className={'text-muted-foreground text-sm'}>Ai întrebări, sugestii sau dorești să colaborăm? Echipa noastră îți stă la dispoziție.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

                    <div className="space-y-24 relative">
                        {/* 01. Identitate Juridică */}
                        <div className="group relative">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-serif italic text-primary/40 font-bold">01.</span>
                                <div className="flex items-center gap-2">
                                    <Building2 size={13} className="text-primary" strokeWidth={2.5} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/80">Identitate Juridică</span>
                                </div>
                            </div>
                            <div className="pl-7 space-y-2">
                                <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight uppercase">
                                    {COMPANY.name} {COMPANY.legalForm}
                                </h2>
                                <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] uppercase tracking-widest text-muted-foreground/70 font-bold">
                                    <p className="flex items-center gap-2">CUI <span className="text-foreground/40 text-[8px]">•</span> <span className="text-foreground">{COMPANY.cui}</span></p>
                                    <p className="flex items-center gap-2">REG. COM <span className="text-foreground/40 text-[8px]">•</span> <span className="text-foreground">{COMPANY.registrationNumber}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Separator Fin intre 1 si 2 */}
                        <div className="absolute left-0 w-8 h-[1px] bg-primary/20 top-[110px]" />

                        {/* 02. Punct de Lucru */}
                        <div className="group relative pt-4">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-serif italic text-primary/40 font-bold">02.</span>
                                <div className="flex items-center gap-2">
                                    <MapPin size={13} className="text-primary" strokeWidth={2.5} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/80">Punct de Lucru</span>
                                </div>
                            </div>
                            <div className="pl-7 space-y-8">
                                <p className="font-serif text-2xl font-bold text-foreground leading-tight tracking-tighter max-w-sm">
                                    {COMPANY.address}
                                </p>

                                <div className="flex flex-col gap-3 max-w-[260px] p-5 rounded-xl bg-foreground/[0.02] border border-foreground/5 relative overflow-hidden">
                                    {/* Accent subtil in coltul cardului de program */}
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 rounded-bl-full" />

                                    <div className="flex items-center gap-2 mb-1">
                                        <Clock size={11} className="text-primary/60" />
                                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Disponibilitate</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[13px] border-b border-foreground/5 pb-2">
                                        <span className="font-bold text-foreground/80 text-xs">Luni — Vineri</span>
                                        <span className="font-serif italic text-primary font-bold">{COMPANY.programInWeek}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[13px]">
                                        <span className="font-bold text-foreground/80 text-xs">Sâmbătă</span>
                                        <span className="font-serif italic text-primary font-bold">{COMPANY.programSaturday}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 w-8 h-[1px] bg-primary/20 top-[110px]" />

                        {/* 03. Contact Direct */}
                        <div className="group relative pt-4">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-serif italic text-primary/40 font-bold">03.</span>
                                <div className="flex items-center gap-2">
                                    <Phone size={13} className="text-primary" strokeWidth={2.5} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/80">Contact Direct</span>
                                </div>
                            </div>
                            <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-2">
                                    <p className="text-[8px] uppercase font-black tracking-widest text-muted-foreground/40">Telefon</p>
                                    <a href="tel:+407xx" className="text-xl font-bold block hover:text-primary transition-all duration-300 tracking-tighter border-b border-transparent hover:border-primary/10 w-fit">
                                        {COMPANY.phone}
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[8px] uppercase font-black tracking-widest text-muted-foreground/40">E-mail</p>
                                    <a href="mailto:office@ecoelite.ro" className="text-xl font-bold block hover:text-primary transition-all duration-300 tracking-tighter border-b border-transparent hover:border-primary/10 w-fit">
                                        {COMPANY.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hartă */}
                    <div className="sticky top-24 mt-24 sm:mt-0 ">
                        <div className="relative">
                            <div className="h-[640px] w-full rounded-sm overflow-hidden border border-foreground/5 shadow-sm">
                                <CompanyMap />
                            </div>
                            {/* Liniile de design care "imbratiseaza" harta */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-primary/20 -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-primary/20 -z-10" />
                        </div>
                    </div>

                </div>
                <ContactForm/>
            </div>
        </section>
    );
}