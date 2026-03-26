import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/utils/data";

const contact = [
    { icon: Phone, label: "Telefon", val: COMPANY.phone },
    { icon: Mail, label: "Email", val: COMPANY.email },
    { icon: MapPin, label: "Locație", val: COMPANY.address },
]

export default function ContactForm() {
    return (
        <section className="pt-24 px-6 lg:px-10 bg-transparent mb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Coloana 1: Detalii */}
                    <div className="lg:col-span-4 space-y-16 mt-10">
                        <div className="space-y-6">
                            <span className={'text-primary-foreground uppercase tracking-[0.4em] font-black text-[10px]'}>
                                CONTACT DIRECT
                            </span>
                            <h2 className="font-serif text-5xl lg:text-4xl font-bold text-foreground">
                                Spune-ne cu ce <br />
                                <span className="italic text-secondary-foreground">te ajutăm.</span>
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                Suntem aici pentru a transforma procesul de reciclare într-o experiență simplă.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-10">
                            {contact.map((item, i) => (
                                <div key={i} className="flex items-start gap-5 group">
                                    <div className="mt-1 p-3 rounded-xl bg-background/20 text-secondary-foreground group-hover:bg-secondary-foreground group-hover:text-background group-hover:scale-110 transition-all duration-500">
                                        <item.icon size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 italic ">
                                            {item.label}
                                        </p>
                                        <p className=" text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors tracking-tight duration-500">
                                            {item.val}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coloana 2: Formular */}
                    <div className="lg:col-span-8 p-8 lg:p-12 rounded-[2rem] border border-border/5 bg-transparent shadow-2xl">
                        <form className="space-y-12">
                            {/* Grid-ul de input-uri: 3 coloane pe desktop pentru a salva spațiu */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">

                                {/* 01. Nume */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary-foreground/50 group-focus-within:text-primary-foreground transition-all duration-500">01</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 group-focus-within:text-foreground transition-all duration-500">
                                            Nume Complet
                                        </Label>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Popescu Ioan"
                                        className="border-0 border-b border-foreground/10 rounded-none px-0 py-6 text-lg font-medium focus-visible:ring-0 focus-visible:border-primary-foreground transition-all duration-500 bg-transparent shadow-none placeholder:text-foreground/20"
                                    />
                                </div>

                                {/* 02. Telefon - NOU INTRODUS */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary-foreground/50 group-focus-within:text-primary-foreground transition-all duration-500">02</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 group-focus-within:text-foreground transition-all duration-500">
                                            Nr. Telefon
                                        </Label>
                                    </div>
                                    <Input
                                        type="tel"
                                        placeholder="07xx xxx xxx"
                                        className="border-0 border-b border-foreground/10 rounded-none px-0 py-6 text-lg font-medium focus-visible:ring-0 focus-visible:border-primary-foreground transition-all duration-500 bg-transparent shadow-none placeholder:text-foreground/20"
                                    />
                                </div>

                                {/* 03. Email */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary-foreground/50 group-focus-within:text-primary-foreground transition-all duration-500">03</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 group-focus-within:text-foreground transition-all duration-500">
                                            Adresă Email
                                        </Label>
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="contact@email.ro"
                                        className="border-0 border-b border-foreground/10 rounded-none px-0 py-6 text-lg font-medium focus-visible:ring-0 focus-visible:border-primary-foreground transition-all duration-500 bg-transparent shadow-none placeholder:text-foreground/20"
                                    />
                                </div>

                                {/* 04. Mesaj - Colspan Full */}
                                <div className="group space-y-4 md:col-span-2 lg:col-span-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary-foreground/50 group-focus-within:text-primary-foreground transition-all duration-500">04</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 group-focus-within:text-foreground transition-all duration-500">
                                            Mesaj
                                        </Label>
                                    </div>
                                    <Textarea
                                        placeholder="Descrieți pe scurt solicitarea dumneavoastră..."
                                        className="border-0 border-b border-foreground/10 rounded-none px-0 py-4 text-xl font-medium focus-visible:ring-0 focus-visible:border-primary-foreground transition-all duration-500 bg-transparent shadow-none placeholder:text-foreground/20 resize-none min-h-[100px]"
                                    />
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium max-w-[200px] text-center md:text-left">
                                    Prin trimitere, sunteți de acord cu politica noastră de confidențialitate.
                                </p>

                                <div className="flex items-center gap-8 ml-auto">
                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground">
                                            Verificare finală
                                        </span>
                                        <span className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                                            Trimite Acum
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-secondary-foreground transition-all duration-500 hover:bg-primary-foreground active:scale-90"
                                    >
                                        <Send
                                            className="relative z-10 text-primary group-hover:text-background transition-colors"
                                            size={24}
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}