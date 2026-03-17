"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {METALS} from "@/utils/data";

export default function PriceCalculator() {
    const [selectedId, setSelectedId] = useState(METALS[0].id);
    const [amount, setAmount] = useState('');

    const activeMetal = useMemo(() => METALS.find(m => m.id === selectedId), [selectedId]);

    const total = useMemo(() => {
        const qty = parseFloat(amount) || 0;
        const res = activeMetal ? (activeMetal.price * qty) : 0;
        return res.toLocaleString('ro-RO', { minimumFractionDigits: 2 });
    }, [activeMetal, amount]);

    return (
        <div className="rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group">

            <div className="relative z-10">
                <h3 className="text-2xl font-semibold uppercase mb-8 tracking-wider font-serif text-foreground">
                    Calculator profit
                </h3>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">
                            Selectează Materialul
                        </label>
                        <div className="flex items-center px-4 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 w-full">
                                <Select onValueChange={setSelectedId} defaultValue={selectedId}>
                                    <SelectTrigger className="border-none bg-transparent shadow-none p-0 h-auto text-lg font-bold uppercase tracking-tight focus:ring-0">
                                        <SelectValue placeholder="Alege metal" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-gray-100 shadow-2xl">
                                        {METALS.map((m) => (
                                            <SelectItem key={m.id} value={m.id} className="py-3 font-bold uppercase text-xs">
                                                <div className="flex items-center gap-2  p-1">
                                                    <div className={`w-2 h-2 rounded-full ${m.color}`} />
                                                    <span className={'text-foreground'}>
                                                        {m.name}
                                                    </span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">
                            Introdu Cantitatea (KG)
                        </label>
                        <div className="flex items-center px-4 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm group-focus-within:border-[#6F8F6B]/30 transition-all">
                            <Input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="border-none bg-transparent shadow-none p-0 h-auto text-xl font-bold focus-visible:ring-0 text-foreground"
                                placeholder="Ex: 100"
                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 relative z-10 pt-8 border-t border-dashed border-gray-200">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                            Total estimat de primit
                        </p>
                        <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-primary">
                {total}
              </span>
                            <span className="font-bold text-xl uppercase">Lei</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}