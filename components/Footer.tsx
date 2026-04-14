'use client'

import { useEffect, useState } from "react";
import Logo from "./Logo";


export default function Footer() {
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const updateYear = () => {
            setYear(new Date().getFullYear())
        }
        updateYear()
    }, []);
    return (
        <footer className="flex flex-col items-center justify-center p-2 bg-mist-100/90 text-center">
            <Logo />
            <p>Museu Regional de Canindé - {year}</p>
        </footer>
    );
}
