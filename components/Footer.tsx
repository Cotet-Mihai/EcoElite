import Link from "next/link";
import {Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Recycle} from "lucide-react";
import Image from "next/image";
import {COMPANY} from "@/utils/data";

export default function Footer() {

    return (
        <footer className="bg-white pt-12">
            {/* Container principal cu fundalul Obsidian pentru a face legătura cu secțiunea Mission */}
            <div className="max-w-7xl mx-auto bg-foreground rounded-t-[3rem] px-8 pt-16 pb-8 text-white relative overflow-hidden">

                {/* Decor subtil de fundal */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

                    {/* Coloana 1: Branding & Slogan */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                                <Recycle className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-180" />
                                <span className="font-serif text-2xl font-bold tracking-tighter italic text-white">
                                    Eco<span className="text-primary">Elite</span>
                                </span>
                            </Link>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Transformăm deșeurile de astăzi în resursele de mâine prin soluții de reciclare inteligente și sustenabile.
                        </p>
                        <div className="flex gap-4">
                            <Link href={COMPANY.instagram} className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href={COMPANY.facebook} className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href={COMPANY.linkedIn} className="p-2 rounded-full border border-white/10 hover:bg-primary hover:text-black transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Coloana 2: Link-uri Rapide */}
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Navigație</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/" className="hover:text-primary transition-colors">Acasă</Link></li>
                            <li><Link href="/despre-noi" className="hover:text-primary transition-colors">Despre Noi</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Coloana 3: Contact */}
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>
                                    {COMPANY.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href={`mailto:${COMPANY.email}`}>
                                    {COMPANY.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <a href="https://www.google.com/maps/place/%C8%98oseaua+Andronache+254,+022529+Bucure%C8%99ti/@44.4809802,26.1593634,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1f85a6480795d:0x394ff62066cd7956!8m2!3d44.4809802!4d26.1619383!16s%2Fg%2F11qnvn_lz5?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target={'_blank'}>
                                    {COMPANY.address}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Coloana 4: ANPC - Direct din public/images/ */}
                    <div className="space-y-4">
                        <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Utile</h4>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="https://anpc.ro/ce-este-sal/"
                                target="_blank"
                                className="transition-opacity hover:opacity-80"
                            >
                                <Image
                                    src="/images/anpc-sal.png"
                                    alt="ANPC SAL"
                                    width={250}
                                    height={70}
                                    className="rounded-lg border border-white/10"
                                />
                            </Link>
                            <Link
                                href="https://consumer-redress.ec.europa.eu/index_en"
                                target="_blank"
                                className="transition-opacity hover:opacity-80"
                            >
                                <Image
                                    src="/images/anpc-sol.png"
                                    alt="ANPC SOL"
                                    width={250}
                                    height={70}
                                    className="rounded-lg border border-white/10"
                                />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest">
                        © 2026 {COMPANY.name} {COMPANY.legalForm} Toate drepturile rezervate.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
                        <Link href="/termeni-si-conditii" className="hover:text-white transition-colors">Termeni și Condiții</Link>
                        <Link href="/politica-cookies" className="hover:text-white transition-colors">Politica Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}