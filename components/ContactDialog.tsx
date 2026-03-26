import { Mail, Phone, Recycle, Send } from "lucide-react";
import { COMPANY } from "@/utils/data";

export default function ContactDialog() {
    return (
        <div className="flex flex-col md:flex-row h-full max-h-[550px] overflow-hidden">

            {/* Coloana Stângă: Date de Contact */}
            <div className="md:w-5/12 bg-foreground/[0.02] border-r border-border/5 p-8 flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Recycle size={150} />
                </div>

                <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground mb-4 block">
                        Dispecerat
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-foreground leading-tight mb-8">
                        Conexiune <br/>
                        <span className="italic text-secondary-foreground">Directă.</span>
                    </h3>

                    <div className="space-y-6">
                        {/* Telefon */}
                        <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
                                <Phone className="text-primary-foreground w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Telefon</p>
                                <p className="font-medium text-foreground text-sm">{COMPANY.phone}</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
                                <Mail className="text-primary-foreground w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Email</p>
                                <p className="font-medium text-foreground text-sm">{COMPANY.email}</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Status Indicator subtil jos */}
                <div className="relative z-10 flex items-center gap-2 mt-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    <span className="text-[8px] uppercase tracking-[0.2em] text-foreground/30 font-bold">Răspundem rapid</span>
                </div>
            </div>

            {/* Coloana Dreaptă: Formular Compact */}
            <div className="md:w-7/12 p-8 flex flex-col justify-center bg-transparent">
                <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-1 text-lg">Cu ce te putem ajuta?</h4>
                    <p className="text-xs text-muted-foreground">Te vom contacta în cel mai scurt timp.</p>
                </div>

                <form className="space-y-3">
                    {/* Nume */}
                    <input
                        type="text"
                        placeholder="Numele tău"
                        className="w-full bg-foreground/[0.03] border border-border/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors placeholder:text-muted-foreground/40"
                    />

                    {/* Grid pentru Telefon și Email (pentru a salva înălțime) */}
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="tel"
                            placeholder="Telefon"
                            className="w-full bg-foreground/[0.03] border border-border/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors placeholder:text-muted-foreground/40"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-foreground/[0.03] border border-border/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors placeholder:text-muted-foreground/40"
                        />
                    </div>

                    {/* Mesaj */}
                    <textarea
                        placeholder="Mesajul tău..."
                        rows={3}
                        className="w-full bg-foreground/[0.03] border border-border/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none placeholder:text-muted-foreground/40"
                    />

                    <button
                        type="button"
                        className="group w-full bg-primary/10 text-primary-foreground hover:bg-primary-foreground hover:text-background border border-primary-foreground/20 font-bold uppercase tracking-[0.2em] text-[10px] py-4 rounded-xl transition-all duration-500 flex items-center justify-center gap-2"
                    >
                        Trimite
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>

        </div>
    );
}