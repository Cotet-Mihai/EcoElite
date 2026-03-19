'use client'

import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import {METALS} from "@/utils/data";
import {montserrat} from "@/utils/fonts";

export default function SimpleCalculator() {
    const [selectedMetal, setSelectedMetal] = useState(METALS[0]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState('0');

    useEffect(() => {
        setTotal(String((amount * selectedMetal.price).toFixed(2)))
    }, [amount, selectedMetal]);

    return (
        <Card className={'rounded-3xl border-none bg-card p-8 flex flex-col'}>
            <h3 className={'text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-foreground'}>
                Calculator Rapid
            </h3>

            <div>
                <Label className={'text-xs uppercase tracking-widest font-black text-muted-foreground ml-1'}>
                    Selecteaza Materialul
                </Label>
                <Select
                    onValueChange={(value) => {
                        const metal = METALS.find(metal => metal.name === value);
                        if (metal) setSelectedMetal(metal)
                    }}
                    defaultValue={selectedMetal.name}
                >
                    <SelectTrigger className={'flex items-center px-4 py-6 rounded-2xl bg-background border border-border shadow-sm w-full mt-2'}>
                        <SelectValue
                            placeholder={'Alege Materialul'}
                        />
                    </SelectTrigger>
                    <SelectContent className={'rounded-xl shadow-2xl '}>
                        {METALS.map((metal) => (
                            <SelectItem key={metal.name} value={metal.name}>
                                <div className={`w-2 h-2 rounded-full ${metal.color}`}/>
                                <span className={'text-foreground font-semibold'}>
                                    {metal.name}
                                </span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={'text-xs uppercase tracking-widest font-black text-muted-foreground ml-1'}>Introdu Cantitatea (KG)</Label>
                <Input
                    type={"number"}
                    className={'flex items-center px-4 py-6 rounded-2xl bg-background border border-border shadow-sm w-full mt-2'}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>

            <div className={'mt-auto pt-12'}>
                <p className={'text-xs text-muted-foreground uppercase tracking-widest mb-1'}>
                    Total estimat de primit
                </p>
                <div>
                    <span className={'font-serif text-5xl font-bold text-primary'}>
                        {total} <span className={`${montserrat.className} uppercase text-xl text-foreground`}> Lei </span>
                    </span>
                </div>
            </div>
        </Card>
    )
}