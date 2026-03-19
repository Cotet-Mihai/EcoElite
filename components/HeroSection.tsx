import {Briefcase, Recycle, Truck, Zap} from "lucide-react";

import {Button} from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {

    return(
        <section className={'relative h-screen bg-transparent flex flex-col justify-center items-center p-10 overflow-hidden'}>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 space-y-8">

                        {/* Heading */}
                        <div className="space-y-4">
                            {/* Modificat text-foreground in text-[#28402e] */}
                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground text-balance animate-slide-up">
                                Alătură-te în{" "}
                                {/* Modificat text-primary in text-[#5ea500] */}
                                <span className="text-[#5ea500] relative">
                                    Protejarea
                                    {/* Modificat text-primary/30 in text-[#5ea500]/30 */}
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-foreground/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                                        <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                                    </svg>
                                </span>{" "}
                                Planetei
                            </h1>
                            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed animate-slide-up animation-delay-100">
                                Eco Elite oferă servicii profesionale de colectare și reciclare pentru persoane fizice și companii.
                                Deșeuri feroase, neferoase și echipamente electrice și electrocasnice. Noi le transformăm în resurse valoroase.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                            {/* Modificat fundalul butonului in #5ea500 */}
                            <Button className={'h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 uppercase font-bold'}>
                                <Link href={'/solicitare-oferta'}>
                                    Solicită o ofertă
                                </Link>
                            </Button>

                            {/* Modificat border-ul butonului in #28402e */}
                            <Button variant={'outline'} className={'h-12 px-6 rounded-full border-foreground text-foreground hover:bg-secondary-foreground/5 font-medium transition-all duration-300 hover:scale-105'}>
                                <Link href={'/despre-noi'}>
                                    Află mai mult
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image and Cards */}
                    <div className="order-1 lg:order-2 relative hidden md:block ">
                        <div className="relative animate-fade-in animation-delay-100">
                            {/* Main Image */}
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Modificat gradientul pentru a folosi noile culori */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary-primary/10 rounded-3xl rotate-6 scale-115" />
                                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/recycling-hero-4.png"
                                        alt="Reciclare eco-friendly - mână ținând o plantă verde"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className={'absolute max-w-[240px] animate-float animation-delay-2500 top-34 right-20'}>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 z-10 rounded-full bg-card flex items-center justify-center">
                                        <Briefcase className="h-6 w-10 text-primary" />
                                    </div>
                                    <div>
                                        {/* Modificat bg-primary/40 in bg-[#5ea500]/40 */}
                                        <h3 className="absolute left-7 top-5 h-auto text-sm whitespace-nowrap p-3 text-white px-6 font-bold flex justify-center items-center bg-primary/20 backdrop-blur-xl rounded-full shadow-xl border border-primary/20">Profesionalism</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={'absolute max-w-[240px] animate-float bottom-14 left-25'}>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 z-10 rounded-full bg-card flex items-center justify-center">
                                        <Recycle className="h-6 w-10 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="absolute right-10 top-5 h-auto text-sm whitespace-nowrap p-3 text-white px-8 font-bold flex justify-center items-center bg-primary/20 backdrop-blur-xl rounded-full shadow-xl border border-primary/20">Reciclare Responsabilă</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={'absolute max-w-[240px] animate-float animation-delay-1000 top-14 right-85'}>
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 z-10 rounded-full bg-card flex items-center justify-center">
                                        <Truck className="h-6 w-10 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="absolute right-10 -top-5 h-auto text-sm whitespace-nowrap p-3 text-white px-8 font-bold flex justify-center items-center bg-primary/20 backdrop-blur-xl rounded-full shadow-xl border border-primary/20">Transport Gratuit</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Services Badge - Modificat bg-primary in bg-[#28402e] */}
                            <div className="absolute bottom-4 right-4 lg:-bottom-5 lg:right-2 bg-primary text-white rounded-full px-4 py-2 shadow-lg animate-bounce-subtle">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-white" />
                                    <span className="text-sm font-medium">DEEE & Metale</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}