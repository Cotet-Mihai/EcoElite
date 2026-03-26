import {COMPANY} from "@/utils/data";

export default function AboutHeroSection() {
    return (
        <div className="pt-32 pb-20 px-6 lg:px-10 mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8 relative z-10">
                    <div className="flex items-center gap-3 text-primary-foreground mb-8 hero-text-reveal">
                        <div className="h-[2px] w-12 bg-primary-foreground" />
                        <span className="uppercase tracking-[0.4em] font-black text-[10px]">
                                Povestea {COMPANY.name}
                            </span>
                    </div>
                    <h1 className="font-serif text-6xl lg:text-[7.5rem] font-bold text-foreground leading-[0.9] tracking-tighter hero-text-reveal [animation-delay:200ms]">
                        Dincolo de <br />
                        <span className="italic text-secondary-foreground">Reciclare.</span>
                    </h1>
                </div>
                <div className="lg:col-span-4 pb-4 hero-text-reveal [animation-delay:400ms]">
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        Redefinim standardele industriei prin inovație, transparență și un angajament neclintit față de un viitor industrial sustenabil.
                    </p>
                </div>
            </div>
        </div>
    )
}