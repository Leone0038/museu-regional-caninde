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
            <Logo width={90} height={90}/>
            <p>© {year} - Zoológico de São Francisco - Canindé - CE</p>
            <p>
                Rua do Zoológico, s/n - Centro, Canindé, Ceara, Brazil 62700000
            </p>
        </footer>
    );
}
