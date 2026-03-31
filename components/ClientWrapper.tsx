"use client";
import { usePathname } from "next/navigation";

export default function ClientWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <body
            className={`min-h-full flex flex-col text-shadow-lg shadow-black ${isHome ? "bg-[url(/images/home-page-portrait.webp)] md:bg-[url(/images/home-page-landscape.webp)] bg-center bg-cover bg-fixed" : "bg-slate-900"}`}
        >
            {children}
        </body>
    );
}
