import { useState } from "react";

const a = 1568451;
const b = 5;
const c = 5847885;
const d = 1520;
const e = 958453;
const f = 458;
const g = 4452;

const colors = ["violet"];

export default function BgFog() {
    const [seed] = useState(Math.floor(Math.random() * 50154845));
    const size = (seed % 150) + 50;
    const duration = ((seed * a) % b) + 3;
    const delay = ((seed * c) % d) / (d * 0.5);
    const posX = ((seed * e) % f) / f * 100;
    const posY = ((seed * e) % g) / g * 100;
    const color = colors[seed % colors.length];
    const shade = Math.min((seed % 3) * 100 + 900, 950);

    const colorVar = `var(--color-${color}-${shade})`;

    return (
        <div
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
                top: `${posY.toFixed(2)}%`,
                right: `${posX.toFixed(2)}%`,
                backgroundColor: colorVar,
                boxShadow: `0px 0px ${size}px ${size}px ${colorVar}`,
                animationName: "float",
                animationDuration: `${duration.toFixed(2)}s`,
                animationDelay: `${delay.toFixed(2)}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",

            }}
        />
    );
}