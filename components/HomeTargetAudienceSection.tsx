import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import React from "react";
import Link from "next/link";

export default function HomeTargetAudienceSection() {
    return (
        <section className={'flex flex-col py-24 px-10 w-full max-w-7xl mx-auto min-h-screen'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row md:items-end justify-between items-center w-full gap-6'}>
                <div className={'flex flex-col gap-2 max-w-2xl'}>
                    {/* Culoarea aurie pentru titlu */}
                    <h2 className={'text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold text-foreground'}>
                        Cui ne <span className={'italic text-secondary-foreground'}>adresăm </span>?
                    </h2>
                    <p className={'text-muted-foreground text-sm'}>
                        Reciclarea nu e aceeași pentru toți. Fiecare are rolul său,
                        iar noi avem soluții personalizate pentru companii,
                        instituții și persoane fizice.
                    </p>
                </div>

                <Button
                    variant={'outline'}
                    className={'p-6 rounded-full font-bold hover:scale-105 hover:bg-transparent duration-400 bg-transparent text-foreground border-foreground'}
                    asChild
                >
                    <Link href={'/despre-noi'}>
                        Află mai mult
                    </Link>
                </Button>
            </div>

            {/* Cards */}
            <div className={'flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'}>
                {/* Card 1 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group border-none h-[400px] lg:h-full bg-transparent'}>
                    <Image
                        src={'/images/phone.png'}
                        alt={'Secțiune despre producatori'}
                        fill
                        className={'object-cover object-[50%_50%] group-hover:scale-105 transition duration-700 opacity-60 group-hover:opacity-70'}
                    />
                    {/* Overlay pentru text mai lizibil */}
                    <div className="absolute inset-0 " />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-10 font-serif text-secondary-foreground'}>
                            PRODUCATORI
                        </h3>
                        <p className={'text-sm text-foreground mt-3 max-w-[250px]'}>
                            Introduci echipamente electrice și electronice pe piață?
                            Ai nevoie de un partener pentru conformare legală.
                        </p>
                    </div>
                </Card>

                {/* Card 2 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group border-none h-[400px] lg:h-full bg-transparent'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Secțiune despre distribuitori'}
                        fill
                        className={'object-cover object-[50%_60%] group-hover:scale-105 transition duration-700 opacity-60 group-hover:opacity-70'}
                    />
                    <div className="absolute inset-0 " />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-10 font-serif text-secondary-foreground'}>
                            distribuitori
                        </h3>
                        <p className={'text-sm text-foreground mt-3 max-w-[250px]'}>
                            Vinzi echipamente electrice direct către consumatori?
                            Îți oferim soluții corecte de colectare DEEE.
                        </p>
                    </div>
                </Card>

                {/* Card 3 */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group border-none h-[300px] lg:h-full bg-transparent'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Secțiune despre persoane fizice'}
                        fill
                        className={'object-cover object-[90%_80%]  group-hover:scale-105 transition duration-700 opacity-60 group-hover:opacity-70'}
                    />
                    <div className="absolute inset-0 " />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-3xl font-semibold uppercase pt-10 font-serif text-secondary-foreground'}>
                            persoane fizice
                        </h3>
                        <p className={'text-sm text-foreground mt-3'}>
                            Ai aparate vechi? Noi venim <br className="hidden md:block"/> să le preluăm pentru reciclare.
                        </p>
                    </div>
                </Card>

                {/* Card 4 - Imagine decorativă */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group border-none h-[200px] lg:h-full bg-transparent'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Imagine decorativă cu o plantă'}
                        fill
                        className={'object-cover opacity-80 group-hover:scale-110 transition duration-1000'}
                    />
                </Card>
            </div>
        </section>
    )
}