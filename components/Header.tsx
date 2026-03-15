import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Recycle } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
    { name: "Acasă", href: "#" },
    { name: "Despre noi", href: "#" },
    { name: "Servicii", href: "#" },
    { name: "Contact", href: "#" },
]


export function Header() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Mobile menu */}
                <div className={'flex lg:hidden'}>
                    <Sheet>
                        <SheetTrigger><Menu/></SheetTrigger>
                        <SheetContent className={'flex flex-col'}>
                            <SheetHeader>
                                <SheetTitle>
                                    <span className="sr-only">
                                        Eco Elite
                                    </span>

                                    <Recycle className="h-8 w-8 text-primary" />

                                    <span className="font-serif text-xl font-semibold text-foreground">
                                        Eco<span className="text-primary">Elite</span>
                                    </span>
                                </SheetTitle>
                                <SheetDescription>Din deșeuri, construim viitorul.</SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col p-4 gap-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <SheetFooter>
                                <Button type="submit">Contactează-ne</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <span className="sr-only">
                            Eco Elite
                        </span>

                        <Recycle className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-180" />

                        <span className="font-serif text-xl font-semibold text-foreground">
                            Eco<span className="text-primary">Elite</span>
                        </span>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button className="rounded-full px-6 font-medium transition-all duration-300 hover:scale-105">
                        Contactează-ne
                    </Button>
                </div>
            </nav>
        </header>
    )
}
