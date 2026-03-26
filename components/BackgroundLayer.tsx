import React from 'react';

export default function BackgroundLayer() {
    return (
        <div className="fixed inset-0 top-0 left-0 w-[100vw] h-[100vh] -z-50 pointer-events-none overflow-hidden">

            {/* 1. Predominantul: Albastru-Verzui (Petrol) - Baza asimetrică */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `radial-gradient(circle at 30% 40%, #0a2429 0%, #051012 70%)`
                }}
            />

            {/* 2. Detaliile Galbene (Ocru/Amber) - Puse ca niște "pete" de lumină/rugină, nu gradient uniform */}
            <div
                className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[100%] h-[60%] opacity-40 blur-[120px]"
                style={{
                    background: 'radial-gradient(ellipse at center, #7d5a32 0%, #4a341d 40%, transparent 80%)'
                }}
            />

            {/* 3. Textura ta (texture.jpg) - Pusă cu un blend mode care să păstreze mizeria */}
            <div
                className="absolute inset-0 opacity-[0.45] mix-blend-multiply"
                style={{
                    backgroundImage: `url('/texture.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'contrast(1.2) brightness(0.8)'
                }}
            />

            {/* 4. Stratul care "sparge" uniformitatea - Nori de zgomot organic */}
            <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <filter id="grungeFilter">
                        {/* BaseFrequency mic creează pete mari, neregulate, ca în imagine */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves="5"
                            seed="42"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncR type="gamma" exponent="0.5" />
                        </feComponentTransfer>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#grungeFilter)" />
                </svg>
            </div>

            {/* 5. Micro-detalii: Granulația fină (Praf/Zgomot metalic) */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-screen">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <filter id="grainFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.85"
                            numOctaves="2"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#grainFilter)" />
                </svg>
            </div>

            {/* 7. Textura finală de "Asfalt" pentru zgârieturi micro */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-soft-light"
                style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')`,
                    backgroundRepeat: 'repeat'
                }}
            />
        </div>
    );
};