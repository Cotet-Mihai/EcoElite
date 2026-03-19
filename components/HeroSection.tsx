import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FlaotingBadge from "@/components/FlaotingBadge";
import {Briefcase, Truck, Zap} from "lucide-react";

export default function HeroSection() {
    return (
        <section className={'flex flex-col md:flex-row justify-center items-center h-screen p-10 gap-6 max-w-2xl md:max-w-7xl mx-auto'}>
            {/* Left Content */}
            <div className={'w-full p-0 md:p-10'}>
                <h1 className={'text-4xl md:text-5xl font-serif text-foreground font-bold mb-6'}>
                    Alătură-te în {' '}
                    <span className={'relative text-primary'}>
                        Protejarea
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-foreground/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                            <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </span>

                    {' '} Planetei
                </h1>
                <p className={'text-muted-foreground mb-10 text-sm'}>
                    Eco Elite oferă servicii profesionale de colectare și reciclare pentru persoane fizice și companii.
                    Deșeuri feroase, neferoase și echipamente electrice și electrocasnice. Noi le transformăm în
                    resurse valoroase.
                </p>
                <div className={'flex flex-col md:flex-row gap-2 md:gap-4'}>
                    <Button
                        className={'p-6 rounded-full font-bold uppercase hover:scale-105 duration-300'}
                    >
                        Solicită o ofertă
                    </Button>
                    <Button
                        variant={'outline'}
                        className={'p-6 rounded-full font-bold hover:scale-105 duration-300'}
                    >
                        Află mai mult
                    </Button>
                </div>
            </div>

            {/* Right Content */}
            <div className={'relative hidden lg:flex w-full max-w-xl aspect-square'}>
                {/* Shadow Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-secondary-primary/10 rounded-3xl rotate-6 scale-105" />
                {/* Image */}
                <div className="relative h-full w-full shadow-2xl rounded-4xl scale-95 overflow-hidden">
                    <Image
                        src="/images/home-hero.png"
                        alt="Reciclare eco-friendly - mână ținând o plantă verde"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />
                </div>

                {/* Floating Badge */}
                <FlaotingBadge text={'Transport Gratuit'} positionX={'top-20'} positionY={'left-40'} bubbleX={'top'} bubbleY={'left'} icon={Truck} animationDelay={'animation-delay-1000'}/>
                <FlaotingBadge text={'Profesionalism'} positionX={'top-40'} positionY={'right-25'} bubbleX={'bottom'} bubbleY={'right'} icon={Briefcase} animationDelay={'animation-delay-2000'}/>
                <FlaotingBadge text={'Reciclare Responsabilă'} positionX={'bottom-20'} positionY={'left-25'} bubbleX={'bottom'} bubbleY={'left'} icon={Truck} animationDelay={'animation-delay-2500'}/>

                {/* Static Badge */}
                <div className={'absolute -bottom-1 right-0 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg flex items-center justify-center gap-2'}>
                    <Zap className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium">DEEE & Metale</span>
                </div>
            </div>
        </section>
    )
}