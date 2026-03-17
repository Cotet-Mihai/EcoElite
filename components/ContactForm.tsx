"use client";

import { Mail, Phone, MapPin, ChevronRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

const contact = [
    { icon: Phone, label: "Telefon", val: "+40 7xx xxx xxx" },
    { icon: Mail, label: "Email", val: "office@ecoelite.ro" },
    { icon: MapPin, label: "Locație", val: "București, România" },
]

export default function ContactForm() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-white">
            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Coloana 1: Detalii (Col 4) */}
                    <div className="lg:col-span-4 space-y-16 mt-10">
                        <div className="space-y-6">
                            <h2 className="font-serif text-5xl lg:text-4xl font-bold text-foreground">
                                Spune-ne cu ce <br />
                                <span className="italic text-primary">te ajutăm.</span>
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                Suntem aici pentru a transforma procesul de reciclare într-o experiență simplă.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-10">
                            {contact.map((item, i) => (
                                <div key={i} className="flex items-start gap-5 group">
                                    <div className="mt-1 p-3 rounded-full bg-primary text-secondary group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 italic">
                                            {item.label}
                                        </p>
                                        <p className="font-serif text-xl font-bold text-foreground tracking-tight">
                                            {item.val}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coloana 2: Formular (Col 8) */}
                    <div className="lg:col-span-8 bg-foreground/[0.02] p-8 lg:p-12 rounded-[2rem] border border-foreground/5">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

                                {/* Nume */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary">01</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-foreground/60">
                                            Nume Complet
                                        </Label>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Cum vă numiți?"
                                        className="border-0 border-b border-foreground/10 rounded-none px-0 py-6 text-xl font-medium focus-visible:ring-0 focus-visible:border-primary transition-all bg-transparent shadow-none placeholder:text-foreground/40"
                                    />
                                </div>

                                {/* Email */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary">02</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-[#0D1611]/60">
                                            Adresă Email
                                        </Label>
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="exemplu@mail.ro"
                                        className="border-0 border-b border-[#0D1611]/10 rounded-none px-0 py-6 text-xl font-medium focus-visible:ring-0 focus-visible:border-primary transition-all bg-transparent shadow-none placeholder:text-foreground/40"
                                    />
                                </div>

                                {/* Mesaj */}
                                <div className="group space-y-4 md:col-span-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-primary">03</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-[#0D1611]/60">
                                            Mesaj / Detalii Proiect
                                        </Label>
                                    </div>
                                    <Textarea
                                        placeholder="Descrieți pe scurt solicitarea dumneavoastră..."
                                        className="border-0 border-b border-[#0D1611]/10 rounded-none px-0 py-4 text-xl font-medium focus-visible:ring-0 focus-visible:border-primary transition-all bg-transparent shadow-none min-h-[120px] resize-none placeholder:text-foreground/40"
                                    />
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium max-w-[200px] text-center md:text-left">
                                    Prin trimitere, sunteți de acord cu politica noastră de confidențialitate.
                                </p>

                                {/* Containerul părinte care grupează textul și butonul pentru a menține alinierea */}
                                <div className="flex items-center gap-8 ml-auto">

                                    {/* Textul este acum un simplu div, nu mai poți da click pe el pentru submit */}
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                                            Validare date
                                        </span>
                                        <span className="font-serif text-3xl font-bold text-foreground">
                                            Trimite Acum
                                        </span>
                                    </div>

                                    {/* Butonul Shadcn - zona de click este limitată strict la acest cerc */}
                                    <button
                                        type="submit"
                                        className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-foreground transition-all duration-500 hover:bg-primary active:scale-90"
                                    >
                                        <Send
                                            className="relative z-10 text-primary group-hover:text-foreground transition-colors"
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