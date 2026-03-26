import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import ContactDialog from "@/components/ContactDialog";
import Link from "next/link";

const heroCards = [
    {
        title: "Colectare",
        subtitle: "Selectivă",
        description: "Servicii de colectare și sortare a deșeurilor",
        img: "/images/hero-card.png",
    },
    {
        title: "Reciclare",
        subtitle: "Industrială",
        description: "Soluții eficiente pentru companii",
        img: "/images/hero-card-2.png",
    },
    {
        title: "Reciclare",
        subtitle: "Electronică",
        description: "Reciclarea sigură a echipamentelor electrice",
        img: "/images/hero-card-3.png",
    },
];

export default function HomeHeroSection() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10 overflow-hidden">
            {/* 1. Imaginea Principală cu Reveal - adăugăm hero-image-reveal */}
            <div className="absolute top-0 left-0 w-full h-[85vh] -z-20 shadow-black hero-image-reveal">
                <Image
                    src="/images/valley.png"
                    alt="Valley"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-background" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* 2. Textul Principal cu Staggered Children */}
                <div className="mb-24 space-y-6 max-w-2xl">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight hero-text-reveal">
                        Reciclează pentru <br />
                        un <span className="text-secondary-foreground italic">viitor sustenabil</span>
                    </h1>

                    <p className="text-foreground/70 text-lg font-medium tracking-wide hero-text-reveal [animation-delay:200ms]">
                        Soluții premium de reciclare pentru un mediu curat
                    </p>

                    <div className="w-full flex gap-5 hero-text-reveal [animation-delay:400ms]">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="border border-primary-foreground/40 bg-primary hover:bg-primary hover:border-primary-foreground p-5 md:p-6 text-xs md:text-sm rounded-full font-bold uppercase hover:scale-105 duration-300 shadow-xl">
                                    Solicită o ofertă
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-3xl w-full p-0 bg-background/95 backdrop-blur-3xl border border-border/10 sm:rounded-[2rem] overflow-hidden shadow-2xl">
                                <DialogHeader className="sr-only">
                                    <DialogTitle>Conexiune Directă</DialogTitle>
                                    <DialogDescription>Contactează-ne rapid.</DialogDescription>
                                </DialogHeader>
                                <ContactDialog/>
                            </DialogContent>
                        </Dialog>

                        <Button
                            variant={'outline'}
                            className="rounded-full border-foreground font-bold hover:scale-105 p-5 md:p-6 text-xs md:text-sm duration-400 hover:bg-transparent bg-transparent text-white"
                            asChild
                        >
                            <Link href="/despre-noi">Află mai mult</Link>
                        </Button>
                    </div>
                </div>

                {/* 3. Cardurile cu Staggered Delay */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {heroCards.map((card, idx) => (
                        <div
                            key={idx}
                            style={{ "--delay": `${600 + idx * 150}ms` } as React.CSSProperties}
                            className="hero-card-reveal relative group h-[450px] overflow-hidden rounded-xl border border-foreground/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-border/30"
                        >
                            {/* ... conținutul cardului (rămâne neschimbat) ... */}
                            <div className="absolute inset-0 -z-10">
                                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/20 to-black/40" />
                            </div>
                            <div className="relative h-full p-8 flex flex-col items-center text-center justify-between z-10">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-foreground">{card.title} <br /> <span className="text-secondary-foreground italic font-serif font-medium">{card.subtitle}</span></h3>
                                    <div className="mt-4 mx-auto w-12 h-[1px] bg-border/50" />
                                </div>
                                <div className="flex flex-col items-center gap-6">
                                    <p className="text-foreground/90 text-sm leading-relaxed max-w-sm">{card.description}</p>
                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground hover:text-foreground transition-all group/btn">
                                        <Link href="/despre-noi" className="flex items-center gap-2">
                                            Vezi detalii
                                            <div className="w-8 h-8 rounded-full border border-primary-foreground/30 bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary-foreground group-hover/btn:text-black transition-all">
                                                <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}