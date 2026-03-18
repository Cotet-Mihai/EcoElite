"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {COMPANY} from "@/utils/data";

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

export default function FAQSection() {
    return (
        <section className="pt-24 px-6 lg:px-10 bg-transparent">
            <div className="max-w-4xl mx-auto">

                {/* Header - Rămâne identic */}
                <div className="text-center mb-20 space-y-4">
          <span className="text-primary uppercase tracking-[0.3em] font-black text-[10px]">
            Suport & Info
          </span>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                        Întrebări <span className="italic text-primary">Frecvente</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm lg:text-base">
                        Tot ce trebuie să știi despre procesul de reciclare, prețuri și logistica {COMPANY.name}.
                    </p>
                </div>

                {/* Accordion cu Săgeata Standard Shadcn */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border-b border-[#0D1611]/10 last:border-none"
                        >
                            <AccordionTrigger className="flex py-6 lg:py-8 hover:no-underline group text-left transition-all [&[data-state=open]>svg]:text-primary">
                                <div className="flex items-start gap-4 lg:gap-6 pr-4">
                                    <span className="font-sans text-[10px] font-black text-primary/40 group-data-[state=open]:text-primary transition-colors pt-1">
                                        {faq.index}
                                    </span>
                                    <span className="font-serif text-lg lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-8 pl-8 lg:pl-[64px] pr-6 h-auto overflow-visible">
                                <p className="text-muted-foreground text-sm lg:text-lg leading-relaxed max-w-2xl">
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Buton Contact Final */}
                <div className="mt-20 flex justify-center">
                    <button className="group flex items-center gap-4 py-3 px-8 rounded-full border border-border hover:border-primary transition-all duration-300">
                    <Link href={'/contact'} className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-foreground">
                      Încă ai nelămuriri? Contactează-ne
                    </Link>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-[2] transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}