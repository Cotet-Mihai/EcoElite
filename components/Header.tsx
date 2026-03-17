"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Recycle } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
    { name: "Acasă", href: "#" },
    { name: "Despre noi", href: "#" },
    { name: "Servicii", href: "#" },
    { name: "Contact", href: "#" },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Navigarea cu blur și margini rotunjite jos pentru un look modern */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 bg-white/70 backdrop-blur-xl border-x border-b border-border rounded-b-[2rem] shadow-sm">

                {/* Logo - Adaptat stilului EcoElite */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <Recycle className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-180" />
                        <span className="font-serif text-2xl font-bold tracking-tighter italic text-foreground">
                                Eco<span className="text-primary">Elite</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation - Link-uri rafinate */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-200 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button className="rounded-full px-8 font-bold uppercase text-[10px] tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20">
                        Contactează-ne
                    </Button>
                </div>

                {/* Mobile menu trigger */}
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="flex flex-col rounded-b-[3rem] border-none bg-white h-[80vh]">
                            <SheetHeader className="items-center pt-8">
                                <SheetTitle className="flex items-center gap-2">
                                    <Recycle className="h-8 w-8 text-primary" />
                                    <span className="font-serif text-3xl font-bold italic tracking-tighter">
                                        Eco<span className="text-primary">Elite</span>
                                    </span>
                                </SheetTitle>
                                <SheetDescription className="font-medium tracking-wide">
                                    Din deșeuri, construim viitorul.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="flex flex-col items-center justify-center flex-1 gap-8 py-10">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <SheetFooter className="flex-col sm:flex-col gap-4 pb-12 items-center">
                                <Button className="w-full max-w-xs rounded-full h-14 font-bold text-base shadow-xl shadow-primary/20">
                                    Programează o ridicare
                                </Button>
                                <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                                    Suport telefonic: +40 7xx xxx xxx
                                </p>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}