import Link from "next/link";
import {Menu, Recycle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {COMPANY} from "@/utils/data";


const navigation = [
    { name: "Acasă", href: "/" },
    { name: "Despre noi", href: "/despre-noi" },
    { name: "Contact", href: "/contact" },
];


export function Header() {
    return (
        <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300'}>
            <nav className={'flex items-center justify-between mx-auto max-w-7xl px-6 py-4 lg:px-10 bg-card/70 text-card-foreground border-b border-x border-border rounded-b-2xl shadow-sm'}>

                {/* Mobile Menu */}
                <div className={'flex md:hidden'}>
                    <Sheet>
                        <SheetTrigger>
                            <Menu size={'20'}/>
                        </SheetTrigger>

                        <SheetContent
                            side={'top'}
                            className={'flex flex-col rounded-b-[3rem] border-none bg-background'}
                        >
                            <SheetHeader className={'items-center pt-8'}>
                                <SheetTitle className={'flex items-center gap-2'}>
                                    <Recycle className={'h-8 w-8 text-primary'}/>
                                    <span className={'font-serif text-3xl font-bold italic tracking-tighter'}>
                                        Eco
                                        <span className={'text-primary'}>
                                            Elite
                                        </span>
                                    </span>
                                </SheetTitle>

                                <SheetDescription className={'font-medium tracking-wide'}>
                                    Din deșeuri, construim viitorul.
                                </SheetDescription>
                            </SheetHeader>

                            {/* Navigation */}
                            <div className={'flex flex-col items-center justify-center flex-1 gap-8 py-10'}>
                                {navigation.map((item) => (
                                    <SheetClose asChild key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={'text-2xl font-serif font-bold text-foreground'}
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                            {/* Footer */}
                            <SheetFooter className={'flex-col gap-4 pb-12 items-center'}>
                                <SheetClose asChild>
                                    <Link href="/solicitare-oferta" className="w-full max-w-xs rounded-full h-14 font-bold text-base shadow-xl shadow-primary/20 uppercase bg-primary flex items-center justify-center text-primary-foreground">
                                        Solicită o ofertă
                                    </Link>
                                </SheetClose>

                                <p className={'text-[10px] uppercase font-black tracking-widest text-muted-foreground mt-8'}>
                                    Suport telefonic: {' '}
                                    <Link
                                        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                                        className={'text-foreground'}
                                    >
                                        {COMPANY.phone}
                                    </Link>
                                </p>

                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <div className={'flex md:flex-1'}>
                    <Link href={'/'} className={'flex items-center gap-2 group'}>
                        <Recycle className={'w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-180'} />
                        <span className={'font-serif text-2xl font-bold tracking-tighter italic text-foreground'}>
                            Eco
                            <span className={'text-primary'}>
                                Elite
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className={'hidden md:flex md:gap-x-12'}>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-200 relative group"
                        >
                            {item.name}
                            <span className={'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full'}/>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className={'hidden lg:flex lg:flex-1 lg:justify-end'}>
                    <Link href={'/solicitare-oferta'} className={'bg-primary text-primary-foreground py-2 rounded-full px-8 font-bold uppercase text-xs tracking-widest transition-all duration-400 shadow-lg  shadow-primary/20 hover:scale-105'}>
                        solicitare oferta
                    </Link>
                </div>
            </nav>
        </header>
    );
}