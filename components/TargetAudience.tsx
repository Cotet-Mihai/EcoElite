import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TargetAudience() {
    return (
        <section className="py-24 px-6 mx-10 lg:px-8 lg:h-screen flex flex-col overflow-hidden">
            <div className="max-w-7xl mx-auto w-full h-full flex flex-col">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 shrink-0">
                    <div>
                        <h2 className="font-serif text-5xl font-bold tracking-tight">
                            Cui ne adresăm?
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl">
                            Reciclarea nu e aceeași pentru toți. Fiecare are rolul său,
                            iar noi avem soluții personalizate pentru companii,
                            instituții și persoane fizice.
                        </p>
                    </div>

                    <Button  variant={'outline'} className={'h-12 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105'}>
                        Află mai mult
                    </Button>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 min-h-0">

                    {/* Card 1 */}
                    <Card className="relative lg:row-span-2 overflow-hidden rounded-3xl group h-[400px] lg:h-full">
                        <Image
                            src="/images/phone-2.png"
                            alt=""
                            fill
                            className="object-cover object-[50%_60%] group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-400/10" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold uppercase ">
                                    PRODUCĂTORI & IMPORTATORI
                                </h3>
                                <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                                    Introduci echipamente electrice și electronice pe piață?
                                    Ai nevoie de un partener pentru conformare legală.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2 */}
                    <Card className="relative lg:row-span-2 overflow-hidden rounded-3xl group h-[400px] lg:h-full">
                        <Image
                            src="/images/all-2.png"
                            alt=""
                            fill
                            className="object-cover object-[50%_60%] group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-400/10" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold uppercase">
                                    DISTRIBUITORI
                                </h3>
                                <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                                    Vinzi echipamente electrice direct către consumatori?
                                    Îți oferim soluții corecte de colectare DEEE.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3 */}
                    <Card className="relative overflow-hidden rounded-3xl group h-[300px] lg:h-full">
                        <Image
                            src="/images/rock.png"
                            alt=""
                            fill
                            className="object-cover object-[50%_95%] group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-400/10" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold uppercase">
                                    PERSOANE FIZICE
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Ai aparate vechi? Noi venim <br/> să le preluăm pentru reciclare.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 4 */}
                    <Card className="relative overflow-hidden rounded-3xl group h-[200px] lg:h-full">
                        <Image
                            src="/images/plant.jpg"
                            alt=""
                            fill
                            className="object-cover transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-400/10" />
                    </Card>

                </div>
            </div>
        </section>
    );
}