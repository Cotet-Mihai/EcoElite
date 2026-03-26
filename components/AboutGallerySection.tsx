import Image from 'next/image';

export default function AboutGallerySection() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                <div className="md:col-span-8 h-[400px] md:h-full rounded-[2rem] overflow-hidden relative group bg-foreground/[0.02] border border-border/5 shadow-2xl">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                        src="/images/plant.png"
                        alt="Facilitate industrială"
                        fill
                        className="object-cover group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-30 group-hover:opacity-100"
                        sizes="(max-w-768px) 100vw, 100vw"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                        <p className="text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-black mb-2">01.</p>
                        <p className="text-secondary-foreground duration-700 group-hover:text-background font-serif text-2xl drop-shadow-md">Management Resource Industrial</p>
                    </div>
                </div>

                <div className="md:col-span-4 h-[400px] md:h-full rounded-[2rem] overflow-hidden relative group mt-12 md:mt-24 bg-foreground/[0.02] border border-border/5 shadow-2xl">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image
                        src="/images/copper-tree.png"
                        alt="Reciclare"
                        fill
                        className="object-cover group-hover:grayscale-0 transition-all duration-700 hover:scale-105 opacity-30 group-hover:opacity-100"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                        <p className="text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-black mb-2">02.</p>
                        <p className="text-secondary-foreground group-hover:text-foreground duration-700 font-serif text-2xl drop-shadow-md">Protejăm Natura</p>
                    </div>
                </div>
            </div>
        </div>
    )
}