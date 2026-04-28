"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Footer() {
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const updateYear = () => {
            setYear(new Date().getFullYear());
        };
        updateYear();
    }, []);
    return (
        <footer className="flex tracking-wide flex-col items-center justify-center p-2 bg-primary text-center text-xs font-semibold uppercase">
            <Logo width={75} height={75}/>
            <p>© {year} - Museu Regional de Canindé</p>
            <p>
                Centro, Canindé - Ceará, 62700-000
            </p>
        </footer>
    );
}
