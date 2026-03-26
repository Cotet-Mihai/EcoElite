'use client'

import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import {METALS} from "@/utils/data";
import {montserrat} from "@/utils/fonts";
import { cn } from "@/lib/utils";

export default function SimpleCalculator() {
    const [selectedMetal, setSelectedMetal] = useState(METALS[0]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState('0');

    useEffect(() => {
        const res = (amount * (selectedMetal?.price || 0)).toFixed(2);
        setTotal(res);
    }, [amount, selectedMetal]);

    return (
        <Card className={'rounded-3xl border border-white/5 bg-transparent p-8 flex flex-col h-full shadow-2xl relative overflow-hidden'}>
            {/* Glow subtil de fundal */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#d5b976]/5 blur-3xl rounded-full pointer-events-none" />

            <h3 className={'text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-[#d5b976] relative z-10'}>
                Calculator Rapid
            </h3>

            <div className="space-y-6 relative z-10">
                {/* Select Material */}
                <div className="space-y-2">
                    <Label className={'text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1'}>
                        Selectează Materialul
                    </Label>
                    <Select
                        onValueChange={(value) => {
                            const metal = METALS.find(m => m.name === value);
                            if (metal) setSelectedMetal(metal)
                        }}
                        defaultValue={selectedMetal.name}
                    >
                        <SelectTrigger className={'flex items-center px-4 py-7 rounded-2xl bg-black/20 border-white/10 text-gray-200 shadow-inner focus:ring-[#d5b976] focus:border-[#d5b976] transition-all'}>
                            <SelectValue placeholder={'Alege Materialul'} />
                        </SelectTrigger>
                        <SelectContent className={'bg-[#1b2326] border-white/10 rounded-xl shadow-2xl'}>
                            {METALS.map((metal) => (
                                <SelectItem
                                    key={metal.name}
                                    value={metal.name}
                                    className="text-white focus:bg-white/5 focus:text-white hover:text-white cursor-pointer py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-2 h-2 rounded-full", metal.color)}/>
                                        <span className={'font-semibold'}>
                                            {metal.name}
                                        </span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Input Cantitate */}
                <div className="space-y-2">
                    <Label className={'text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1'}>
                        Introdu Cantitatea (KG)
                    </Label>
                    <Input
                        type={"number"}
                        placeholder="0.00"
                        className={'flex items-center px-4 py-7 rounded-2xl bg-black/20 border-white/10 text-[#d5b976] text-xl font-bold shadow-inner focus-visible:ring-[#d5b976] focus-visible:border-[#d5b976] transition-all'}
                        value={amount || ''}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>
            </div>

            {/* Rezultat Final */}
            <div className={'mt-auto pt-12 relative z-10'}>
                <div className="flex flex-col border-t border-white/5 pt-6">
                    <p className={'text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium mb-2'}>
                        Total estimat de primit
                    </p>
                    <div className="flex items-baseline gap-3">
                        <span className={'font-serif text-5xl md:text-6xl font-bold text-[#7bb831] drop-shadow-[0_0_15px_rgba(123,184,49,0.2)]'}>
                            {total}
                        </span>
                        <span className={`${montserrat.className} uppercase text-xl font-black text-[#d5b976] tracking-tighter`}>
                            Lei
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}