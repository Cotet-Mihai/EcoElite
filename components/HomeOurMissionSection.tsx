import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeOurMissionSection() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-transparennt">
            {/* Container principal - Acum cu background inchis si border discret */}
            <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative bg-transparent border border-border/5 shadow-2xl">

                {/* Textura carbon subtila */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                {/* Glow de fundal pentru adancime */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#d5b976]/5 blur-[120px] rounded-full" />

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 p-8 lg:p-16 relative z-10">

                    {/* Partea Stanga: Imaginea */}
                    <div className="relative group">
                        {/* Border-ul decorativ rotit - acum pe auriu subtil */}
                        <div className="absolute -inset-4 border border-border/20 rounded-[2.5rem] rotate-6 scale-95 group-hover:rotate-0 transition-transform duration-1000" />

                        <div className="relative h-[350px] lg:h-[600px] w-full overflow-hidden rounded-[2rem] rounded-t-[10rem] shadow-2xl border border-border/10">
                            <Image
                                src="/images/tree-3.jpg"
                                alt="Misiunea noastră"
                                fill
                                className="object-cover object-[43%_50%] group-hover:scale-110 transition-transform duration-2000"
                            />
                            {/* Overlay gradient pentru a integra imaginea in designul dark */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Badge plutitor - Schimbat pe Verdele tau specific */}
                        <div className="absolute -bottom-6 -right-2 bg-primary-foreground p-5 rounded-2xl shadow-[0_10px_30px_rgba(123,184,49,0.3)] hidden md:block">
                            <p className="text-background font-serif text-3xl font-bold italic tracking-tighter leading-none">100%</p>
                            <p className="text-background/80 text-[10px] uppercase font-black tracking-[0.2em] mt-1">Circular</p>
                        </div>
                    </div>

                    {/* Partea Dreapta: Textul */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary-foreground uppercase tracking-[0.4em] font-black text-xs block">
                                Cine suntem noi
                            </span>
                            <h2 className="font-serif text-4xl lg:text-6xl font-bold leading-[1.1] text-secondary-foreground">
                                Misiunea noastră pentru viitor.
                            </h2>
                        </div>

                        <p className="text-muted-foreground font-medium leading-relaxed max-w-xl text-lg lg:text-xl">
                            Nu ne limităm doar la colectarea deșeurilor. Obiectivul nostru este să transformăm
                            fiecare gram de metal într-o <span className="text-foreground">resursă nouă</span>, reducând amprenta de carbon și protejând mediul.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                className="h-14 px-10 rounded-full bg-secondary-foreground text-background hover:!bg-foreground transition-all duration-300 font-bold group shadow-lg shadow-background/10"
                                asChild
                            >
                                <Link href={'/despre-noi'} className="flex items-center gap-3 ">
                                    Află Mai Mult
                                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        {/* Certificatele - stilizate industrial */}
                        <div className="pt-12 flex flex-wrap gap-4">
                            <div className="text-[10px] font-bold uppercase tracking-widest border-foreground/10 border bg-foreground/[0.02] px-4 py-2 rounded-lg text-muted-foreground hover:text-secondary-foreground hover:border-border/30 transition-colors">
                                ISO 14001
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest border-foreground/10 border bg-foreground/[0.02] px-4 py-2 rounded-lg text-muted-foreground hover:text-secondary-foreground hover:border-border/30 transition-colors">
                                Green Certified
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}