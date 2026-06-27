import React from 'react';

export const AureaLogo: React.FC = () => (
  <svg viewBox="0 0 500 500" className="w-64 h-64 md:w-80 md:h-80 mx-auto select-none overflow-visible">
    <defs>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=La+Belle+Aurore&family=Montserrat:wght@400;500;600&display=swap');
        .logo-aurea { font-family: 'Cinzel', serif; font-weight: 700; fill: #5A0C1E; font-size: 76px; letter-spacing: 4px; }
        .logo-eco { font-family: 'Cinzel', serif; font-weight: 500; fill: #182E1E; font-size: 48px; letter-spacing: 12px; }
        .logo-slogan { font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 9.5px; fill: #5A0C1E; letter-spacing: 2px; text-transform: uppercase; }
        .logo-handwritten { font-family: 'La Belle Aurore', cursive; font-size: 26px; fill: #182E1E; }
      `}</style>
      <path id="textArc" d="M 75 285 A 210 160 0 0 0 425 285" fill="none" stroke="none" />
    </defs>

    {/* Doble Óvalo Exterior */}
    <ellipse cx="250" cy="240" rx="220" ry="145" fill="none" stroke="#182E1E" strokeWidth="1.2" />
    <ellipse cx="250" cy="240" rx="214" ry="139" fill="none" stroke="#5A0C1E" strokeWidth="0.8" strokeDasharray="3 3" />

    {/* Destellos de 4 Puntas */}
    <path d="M 30 240 Q 30 240 33 237 Q 30 240 30 240 Q 30 240 27 243 Q 30 240 30 240 M 30 240 Q 30 240 30 230 Q 30 240 30 240 Q 30 240 30 250 Q 30 240 30 240" stroke="#5A0C1E" strokeWidth="1.5" fill="#5A0C1E" />
    <path d="M 470 240 Q 470 240 473 237 Q 470 240 470 240 Q 470 240 467 243 Q 470 240 470 240 M 470 240 Q 470 240 470 230 Q 470 240 470 240 Q 470 240 470 250 Q 470 240 470 240" stroke="#5A0C1E" strokeWidth="1.5" fill="#5A0C1E" />
    <path d="M 250 50 Q 250 50 253 47 Q 250 50 250 50 Q 250 50 247 53 Q 250 50 250 50 M 250 50 Q 250 50 250 40 Q 250 50 250 50 Q 250 50 250 60 Q 250 50 250 50" stroke="#5A0C1E" strokeWidth="1.5" fill="#5A0C1E" />
    <path d="M 250 430 Q 250 430 253 427 Q 250 430 250 430 Q 250 430 247 433 Q 250 430 250 430 M 250 430 Q 250 430 250 420 Q 250 430 250 430 Q 250 430 250 440 Q 250 430 250 430" stroke="#5A0C1E" strokeWidth="1.5" fill="#5A0C1E" />

    {/* Perchero */}
    <path d="M 250 115 C 250 100, 235 90, 238 75 C 242 62, 260 62, 262 78" fill="none" stroke="#182E1E" strokeWidth="4" strokeLinecap="round" />
    <path d="M 250 112 L 175 152 C 170 155, 172 161, 178 159 L 250 125 L 322 159 C 328 161, 330 155, 325 152 Z" fill="#182E1E" />
    <path d="M 250 132 C 248 128, 240 128, 240 134 C 240 139, 250 145, 250 146 C 250 145, 260 139, 260 134 C 260 128, 252 128, 250 132 Z" fill="#5A0C1E" />

    {/* Ramas */}
    <path d="M 195 142 Q 180 125 160 128 Q 175 138 195 142 Z" fill="#182E1E" opacity="0.85" />
    <path d="M 185 147 Q 165 140 150 150 Q 168 152 185 147 Z" fill="#182E1E" opacity="0.85" />
    <path d="M 215 131 Q 205 110 190 112 Q 200 125 215 131 Z" fill="#182E1E" opacity="0.85" />
    <path d="M 305 142 Q 320 125 340 128 Q 325 138 305 142 Z" fill="#182E1E" opacity="0.85" />
    <path d="M 315 147 Q 335 140 350 150 Q 332 152 315 147 Z" fill="#182E1E" opacity="0.85" />
    <path d="M 285 131 Q 295 110 310 112 Q 300 125 285 131 Z" fill="#182E1E" opacity="0.85" />

    {/* Textos */}
    <text x="250" y="222" textAnchor="middle" className="logo-aurea select-none">AUREA</text>
    <text x="254" y="270" textAnchor="middle" className="logo-eco select-none">ECO</text>
    <path d="M 314 252 Q 314 252 315.5 250.5 Q 314 252 314 252 Q 314 252 312.5 253.5 Q 314 252 314 252 M 314 252 Q 314 252 314 247 Q 314 252 314 252 Q 314 252 314 257 Q 314 252 314 252" stroke="#5A0C1E" strokeWidth="1" fill="#5A0C1E" />

    {/* Divisor */}
    <path d="M 210 295 L 235 295 M 265 295 L 290 295" stroke="#182E1E" strokeWidth="1" />
    <path d="M 250 292 C 248.5 289, 243.5 289, 243.5 293 C 243.5 296.5, 250 300, 250 301 C 250 300, 256.5 296.5, 256.5 293 C 256.5 289, 251.5 289, 250 292 Z" fill="#182E1E" />

    {/* Slogan Curvado */}
    <text className="logo-slogan select-none">
      <textPath href="#textArc" startOffset="50%" textAnchor="middle">
        SEGUNDA MANO, PRIMERA ELECCIÓN
      </textPath>
    </text>


    {/* Divisor Inferior */}
    <path d="M 225 390 L 240 390 M 260 390 L 275 390" stroke="#5A0C1E" strokeWidth="0.8" />
    <path d="M 250 390 Q 250 390 252 388 Q 250 390 250 390 Q 250 390 248 392 Q 250 390 250 390 M 250 390 Q 250 390 250 384 Q 250 390 250 390 Q 250 390 250 396 Q 250 390 250 390" stroke="#5A0C1E" strokeWidth="1" fill="#5A0C1E" />
    {/* Slogan Manuscrito */}
    <text x="250" y="415" textAnchor="middle" className="logo-handwritten select-none">Tu estilo, tu historia, tu huella.</text>
  </svg>
);
