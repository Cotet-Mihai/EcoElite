"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MissionSection() {
    return (
        <section className="py-12 px-6 lg:px-10">
            <div className="max-w-7xl mx-auto bg-foreground rounded-[3rem] overflow-hidden relative">

                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 p-8 lg:p-12 relative z-10">

                    <div className="relative group">
                        <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] rotate-12 scale-95 group-hover:rotate-0 transition-transform duration-700" />

                        <div className="relative h-[300px] lg:h-[550px] w-full overflow-hidden rounded-[2rem] rounded-t-[8rem] shadow-2xl">
                            <Image
                                src="/images/tree-3.jpg"
                                alt="Misiunea noastră"
                                fill
                                className="object-cover object-[45%_60%] group-hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay gradient folosind culoarea de fundal a cardului pentru blending perfect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        </div>

                        {/* Badge plutitor folosind bg-primary */}
                        <div className="absolute -bottom-4 -right-2 bg-primary p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
                            <p className="text-primary-foreground font-serif text-2xl font-bold italic tracking-tighter">100%</p>
                            <p className="text-primary-foreground/80 text-[8px] uppercase font-black tracking-[0.2em]">Circular</p>
                        </div>
                    </div>

                    <div className="text-white space-y-6">
                        <div className="space-y-3">
                            {/* Folosim text-primary pentru coerență cu restul butoanelor/accentelor din site */}
                            <span className="text-secondary uppercase tracking-[0.3em] font-black text-xs">
                                Cine suntem noi
                            </span>
                            <h2 className="font-serif text-4xl lg:text-5xl font-black leading-tight text-primary">
                                Misiunea noastră pentru viitor.
                            </h2>
                        </div>

                        <p className="text-secondary font-bold leading-relaxed max-w-xl text-lg">
                            Nu ne limităm doar la colectarea deșeurilor. Obiectivul nostru este să transformăm
                            fiecare gram de metal într-o resursă nouă, reducând amprenta de carbon.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button
                                variant='outline'
                                className="h-12 rounded-full text-primary hover:bg-secondary-foreground hover:text-secondary border-none font-bold group text-sm hover:scale-102 transition-transform"
                            >
                                <Link href={'/despre-noi'} className={'flex justify-center items-center w-full h-full  px-8'}>
                                    Află Mai Mult
                                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform text-primary" />
                                </Link>
                            </Button>
                        </div>

                        {/* Badge-uri folosind border-white/10 sau border-muted */}
                        <div className="pt-30 flex flex-wrap gap-4 opacity-60">
                            <div className="text-[9px] font-black uppercase tracking-widest border-white/20 border-2 px-2 py-1 rounded ">ISO 14001</div>
                            <div className="text-[9px] font-black uppercase tracking-widest border-white/20 border-2 px-2 py-1 rounded ">Green Certified</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}