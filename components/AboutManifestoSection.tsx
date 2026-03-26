import {COMPANY} from "@/utils/data";

export default function AboutManifestoSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-32 text-center md:text-left reveal-on-scroll">
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12 text-foreground">
                Nu suntem doar un colector de deșeuri. Suntem <span className="font-bold italic text-secondary-foreground">arhitecții unui ciclu industrial curat</span>, unde fiecare material își găsește o nouă utilitate.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border/5 pt-12">
                <p>
                    Fondată din dorința de a aduce transparență pe piața de recuperare a materialelor feroase și neferoase, <strong className="text-foreground">{COMPANY.name}</strong> a crescut integrând tehnologii moderne și procese riguroase de triere la scară industrială.
                </p>
                <p>
                    Misiunea noastră este simplă: să transformăm o problemă logistică a partenerilor noștri într-o soluție ecologică, profitabilă și 100% conformă cu normele europene de mediu.
                </p>
            </div>
        </div>
    )
}