import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Card} from "@/components/ui/card";

export default function TargetAudienceSection() {
    return (
        <section className={'flex flex-col py-24 px-10 w-full max-w-7xl mx-auto h-screen'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row md:items-end justify-between items-center w-full gap-6'}>
                <div className={'flex flex-col gap-2 max-w-2xl'}>
                    <h2 className={' text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold'}>
                        Cui ne adresăm ?
                    </h2>
                    <p className={'text-muted-foreground text-sm'}>
                        Reciclarea nu e aceeași pentru toți. Fiecare are rolul său,
                        iar noi avem soluții personalizate pentru companii,
                        instituții și persoane fizice.
                    </p>
                </div>

                <div>
                    <Button
                        variant={'outline'}
                        className={'p-6 rounded-full font-bold hover:scale-105 duration-300'}
                    >
                        <Link href={'/despre-noi'}>
                            Află mai mult
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Cards */}
            <div className={'flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'}>
                {/* Card 1 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group h-100 lg:h-full'}>
                    <Image
                        src={'/images/phone-2.png'}
                        alt={'Secțiune despre producatori'}
                        fill
                        className={'object-cover object-[50%_60%] group-hover:scale-105 transition duration-500'}
                    />
                    <div className="absolute inset-0 bg-gray-400/10" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-8 font-serif text-foreground'}>
                            PRODUCATORI
                        </h3>
                        <p className={'text-sm text-muted-foreground mt-2'}>
                            Introduci echipamente electrice și electronice pe piață?
                            Ai nevoie de un partener pentru conformare legală.
                        </p>
                    </div>
                </Card>

                {/* Card 2 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group h-100 lg:h-full'}>
                    <Image
                        src={'/images/all-2.png'}
                        alt={'Secțiune despre distribuitori'}
                        fill
                        className={'object-cover object-[50%_60%] group-hover:scale-105 transition duration-500'}
                    />
                    <div className="absolute inset-0 bg-gray-400/10" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-8 font-serif text-foreground'}>
                            distribuitori
                        </h3>
                        <p className={'text-sm text-muted-foreground mt-2'}>
                            Vinzi echipamente electrice direct către consumatori?
                            Îți oferim soluții corecte de colectare DEEE.
                        </p>
                    </div>
                </Card>

                {/* Card 3 */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group h-100 lg:h-full'}>
                    <Image
                        src={'/images/rock.png'}
                        alt={'Secțiune despre persoane fizice'}
                        fill
                        className={'object-cover object-[90%_80%] md:object-[50%_80%] scale-100 group-hover:scale-105 transition duration-500'}
                    />
                    <div className="absolute inset-0 bg-gray-400/10" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8'}>
                        <h3 className={'text-2xl md:text-3xl font-semibold uppercase pt-8 font-serif text-foreground'}>
                            persoane fizice
                        </h3>
                        <p className={'text-sm text-muted-foreground self-start  mt-2'}>
                            Ai aparate vechi? Noi venim <br/> să le preluăm pentru reciclare.
                        </p>
                    </div>
                </Card>

                {/* Card 4 */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group h-50 lg:h-full'}>
                    <Image
                        src={'/images/plant.jpg'}
                        alt={'Imagine decorativă cu o plantă'}
                        fill
                        className={'object-cover'}
                    />
                </Card>
            </div>
        </section>
    )
}