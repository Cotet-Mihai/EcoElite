"use client";

import React, { useState } from "react";
import { METALS } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ScannerTransition from "@/components/ScannerTransition";

type OfferItem = {
    id: string;
    metalId: string;
    quantity: number;
};

export default function SolicitareOfertaPage() {
    const [items, setItems] = useState<OfferItem[]>([]);
    const [selectedMetal, setSelectedMetal] = useState<string>(METALS[0].id);
    const [quantity, setQuantity] = useState<string>("");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddItem = () => {
        const qty = parseFloat(quantity);
        if (isNaN(qty) || qty <= 0) return;

        const existingItem = items.find((item) => item.metalId === selectedMetal);

        if (existingItem) {
            setItems(
                items.map((item) =>
                    item.metalId === selectedMetal
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                )
            );
        } else {
            setItems([
                ...items,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    metalId: selectedMetal,
                    quantity: qty,
                },
            ]);
        }
        setQuantity("");
    };

    const handleRemoveItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const estimatedTotal = items.reduce((total, item) => {
        const metal = METALS.find((m) => m.id === item.metalId);
        return total + (metal ? metal.price * item.quantity : 0);
    }, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (items.length === 0) {
            alert("Vă rugăm să adăugați cel puțin un material în listă.");
            return;
        }

        console.log("Date trimise:", { ...formData, materiale: items, total: estimatedTotal });
        alert("Solicitarea a fost trimisă cu succes!");
    };

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16 md:mb-24 text-center md:text-left">
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-black block mb-4">
            Calculator Ofertă
          </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Estimează valoarea <span className="italic text-primary">materialelor.</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
                        Adaugă materialele pe care dorești să le reciclezi pentru o estimare rapidă.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    <div className="lg:col-span-7 space-y-12">

                        {/* 1. DATE DE CONTACT (FORM CLASIC) */}
                        <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                            <h2 className="font-serif text-2xl mb-8">1. Date de contact</h2>
                            <form id="offer-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold opacity-60">Nume / Companie</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Ex: Popescu Ion"
                                        className="border-0 border-b border-zinc-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold opacity-60">Telefon</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        pattern="[0-9]{10,}"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="07xxxxxxxx"
                                        className="border-0 border-b border-zinc-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold opacity-60">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="contact@email.com"
                                        className="border-0 border-b border-zinc-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-xs uppercase tracking-widest font-bold opacity-60">Locație preluare</Label>
                                    <Input
                                        id="location"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="Oraș, Județ"
                                        className="border-0 border-b border-zinc-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* 2. ADĂUGARE MATERIALE */}
                        <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                            <h2 className="font-serif text-2xl mb-8">2. Adaugă materiale</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                                <div className="space-y-2">
                                    <Label className="text-xs uppercase tracking-widest font-bold opacity-60">Tip Material</Label>
                                    <Select onValueChange={setSelectedMetal} defaultValue={selectedMetal}>
                                        <SelectTrigger className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-200 focus:ring-primary">
                                            <SelectValue placeholder="Selectează" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {METALS.map((metal) => (
                                                <SelectItem key={metal.id} value={metal.id}>
                                                    {metal.name} ({metal.price} lei/kg)
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs uppercase tracking-widest font-bold opacity-60">Cantitate (KG)</Label>
                                    <Input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        placeholder="ex: 150"
                                        className="h-12 rounded-xl bg-zinc-50 border-zinc-200 focus-visible:ring-primary"
                                    />
                                </div>
                                <Button
                                    type="button"
                                    onClick={handleAddItem}
                                    className="h-12 bg-foreground text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-all"
                                >
                                    Adaugă în listă
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* COLOANA DREAPTĂ (REZUMAT) */}
                    <div className="lg:col-span-5">
                        <div className="bg-foreground text-white p-8 md:p-10 rounded-[2rem] sticky top-32">
                            <h3 className="font-serif text-2xl mb-8 tracking-tight">Rezumat Ofertă</h3>

                            <div className="min-h-[100px] mb-8">
                                {items.length === 0 ? (
                                    <div className="text-white/20 text-xs italic py-10 text-center border border-white/10 border-dashed rounded-2xl leading-relaxed">
                                        Lista este goală. <br/> Adăugați minim un produs.
                                    </div>
                                ) : (
                                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {items.map((item) => {
                                            const metal = METALS.find(m => m.id === item.metalId);
                                            if (!metal) return null;
                                            const itemTotal = metal.price * item.quantity;
                                            return (
                                                <div key={item.id} className="flex items-center justify-between pb-4 border-b border-white/10">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-2 h-2 rounded-full ${metal.color}`} />
                                                        <div>
                                                            <p className="font-bold text-sm leading-none mb-1">{metal.name}</p>
                                                            <p className="text-white/40 text-[10px] uppercase font-mono">{item.quantity} kg x {metal.price} lei</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="font-mono text-sm">{itemTotal.toFixed(2)} lei</span>
                                                        <button onClick={() => handleRemoveItem(item.id)} className="text-white/20 hover:text-red-400 transition-colors font-bold text-[10px]">X</button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">Total Estimativ</span>
                                    <div className="text-right">
                                        <span className="font-serif text-4xl text-primary block leading-none">{estimatedTotal.toFixed(2)}</span>
                                        <span className="text-[10px] text-primary uppercase font-bold">RON</span>
                                    </div>
                                </div>

                                <p className="text-[9px] text-white/30 leading-relaxed mb-8 uppercase tracking-widest font-mono">
                                    * Oferta finală depinde de calitatea materialelor la recepție.
                                </p>

                                {/* Butonul declanșează formularul prin ID */}
                                <Button
                                    type="submit"
                                    form="offer-form"
                                    disabled={items.length === 0}
                                    className="w-full bg-primary text-background h-16 rounded-xl text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all disabled:opacity-30 disabled:grayscale"
                                >
                                    Trimite Solicitarea
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-40">
                <ScannerTransition />
            </div>
        </main>
    );
}