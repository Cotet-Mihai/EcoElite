"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Truck, Recycle, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Recycle,
    title: "Reciclare Responsabilă",
    description: "Procesăm deșeurile în mod ecologic, contribuind la un mediu mai curat.",
  },
  {
    icon: Truck,
    title: "Transport Gratuit",
    description: "Venim la tine pentru colectare, fără costuri suplimentare.",
  },
]

const stats = [
  { value: "500+", label: "Clienți mulțumiți" },
  { value: "1000t", label: "Materiale reciclate" },
  { value: "100%", label: "Eco-friendly" },
]

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail("")
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in"
            >
              <Recycle className="h-4 w-4 text-primary" />
              <span>Protejăm mediul împreună</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance animate-slide-up">
                Alătură-te în{" "}
                <span className="text-primary relative">
                  Protejarea
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>{" "}
                Planetei
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-slide-up animation-delay-100">
                Eco Elite oferă servicii profesionale de colectare și reciclare pentru persoane fizice și companii. 
                Deșeuri feroase, neferoase și echipamente electrice - noi le transformăm în resurse valoroase.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="animate-slide-up animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Adresa ta de email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-4 pr-4 rounded-full border-border bg-card shadow-sm focus:shadow-md transition-shadow"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className={cn(
                    "h-12 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    isSubmitted && "bg-green-600 hover:bg-green-600"
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Trimis!
                    </>
                  ) : (
                    <>
                      Solicită ofertă
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-slide-up animation-delay-300">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image and Cards */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative animate-fade-in animation-delay-100">
              {/* Main Image */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl rotate-6 scale-95" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/recycling-hero.jpg"
                    alt="Reciclare eco-friendly - mână ținând o plantă verde"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50 max-w-[240px] animate-float",
                    index === 0 
                      ? "top-4 -right-4 lg:top-8 lg:-right-8" 
                      : "bottom-8 -left-4 lg:bottom-12 lg:-left-8",
                    index === 1 && "animation-delay-500"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Services Badge */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-bounce-subtle">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">DEEE & Metale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Icons Row */}
        <div className="mt-16 lg:mt-24 animate-slide-up animation-delay-400">
          <p className="text-center text-sm text-muted-foreground mb-6">Ce colectăm și reciclăm</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {[
              { icon: "🔩", label: "Metale Feroase" },
              { icon: "🥫", label: "Metale Neferoase" },
              { icon: "💻", label: "Echipamente IT" },
              { icon: "🔌", label: "Electrocasnice" },
              { icon: "📱", label: "Electronice" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <span className="text-xl" role="img" aria-label={item.label}>{item.icon}</span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
