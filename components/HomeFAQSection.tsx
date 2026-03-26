import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { COMPANY } from "@/utils/data";
import { Separator } from "@/components/ui/separator";

const faqs = [
    {
        id: "item-1",
        index: "01",
        question: "Ce tipuri de metale acceptați pentru reciclare?",
        answer:
            "Acceptăm o gamă largă de metale feroase și neferoase, inclusiv cupru, aluminiu, inox, alamă, plumb, precum și fier vechi sau caroserii auto. Toate materialele sunt cântărite electronic pentru o precizie maximă.",
    },
    {
        id: "item-2",
        index: "02",
        question: "Cum se calculează prețul pentru deșeurile metalice?",
        answer:
            "Prețurile sunt stabilite zilnic în funcție de cotațiile bursiere internaționale (LME). Factorii care influențează prețul final includ puritatea metalului, cantitatea totală și necesitatea procesării suplimentare.",
    },
    {
        id: "item-3",
        index: "03",
        question: "Oferiți servicii de transport pentru cantități mari?",
        answer:
            `Da, ${COMPANY.name} pune la dispoziție o flotă modernă de camioane dotate cu macara și containere de diverse capacități pentru colectarea deșeurilor direct de la sediul dumneavoastră sau de pe șantier.`,
    },
    {
        id: "item-4",
        index: "04",
        question: "Sunteți autorizați pentru eliberarea certificatelor?",
        answer:
            "Absolut. Suntem o unitate autorizată de colectare și tratare (RVA), eliberând toate documentele necesare pentru radierea autovehiculelor din circulație și rapoartele de mediu obligatorii.",
    },
];

export default function HomeFAQSection() {
    return (
        <section className="py-24 px-6 lg:px-10 ">
            {/* Container principal Dark cu textura carbon */}
            <div className="max-w-4xl mx-auto relative p-8 lg:p-16 rounded-[3rem] overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" />

                {/* Header */}
                <div className="text-center space-y-4 mb-16 relative z-10">
                    <span className="text-primary-foreground uppercase tracking-[0.4em] font-black text-[10px]">
                        Suport & Info
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Întrebări <span className="italic text-secondary-foreground">Frecvente</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm lg:text-base">
                        Tot ce trebuie să știi despre procesul de reciclare, prețuri și logistica {COMPANY.name}.
                    </p>
                </div>

                <Separator className="bg-border/5 mb-10 relative z-10" />

                {/* Accordion adaptat la tema Dark */}
                <Accordion type="single" collapsible className="w-full relative z-10">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border-b border-border/5 last:border-none"
                        >
                            <AccordionTrigger className="flex py-6 lg:py-8 hover:no-underline group text-left transition-all">
                                <div className="flex items-start gap-4 lg:gap-8 pr-4">
                                    {/* Indexul Numeric - Auriu */}
                                    <span className="font-sans text-[10px] font-black text-primary-foreground/40 group-data-[state=open]:text-secondary-foreground transition-colors pt-2">
                                        {faq.index}
                                    </span>
                                    {/* Întrebarea */}
                                    <span className="font-serif text-lg lg:text-2xl font-bold text-foreground group-hover:text-secondary-foreground group-data-[state=open]:text-secondary-foreground transition-colors leading-tight">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-8 pl-10 lg:pl-[76px] pr-6">
                                <p className="text-muted-foreground text-sm lg:text-lg leading-relaxed max-w-2xl border-l-2 border-primary-foreground/30 pl-6 py-2">
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Buton Contact Final - Stil Industrial */}
                <div className="mt-16 flex justify-center relative z-10">
                    <Link href="/contact">
                        <button className="group flex items-center gap-6 py-4 px-8 rounded-full border border-border/10 hover:border-secondary-foreground/50 bg-foreground/[0.02] transition-all duration-500">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/70 group-hover:text-foreground transition-colors">
                                Încă ai nelămuriri? Contactează-ne
                            </span>
                            {/* Punctul Verde cu Glow */}
                            <div className="w-2 h-2 rounded-full bg-primary-foreground shadow-[0_0_10px_#7bb831] group-hover:scale-150 transition-transform duration-500" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}