type props = {
    text: string
}

export default function DecorativeText({text}: props) {
    return (
        <div className="relative top-0 right-0 -translate-y-5 translate-x-1/4 pointer-events-none select-none z-0 hidden lg:block hero-image-reveal overflow-hidden">
            <h1 className="font-serif text-[22vw] font-black text-foreground/[0.01] leading-none uppercase tracking-tighter">
                {text}
            </h1>
        </div>
    )
}