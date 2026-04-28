import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

export const metadata: Metadata = {
    title: "Museu Regional de Canindé",
    description:
        "O site tem como fim divulgar e digitalizar o acervo local.",
};
import {Fredoka, Nunito} from 'next/font/google'

export const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

export const fredoka = Fredoka({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fredoka",
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className="antialiased scroll-smooth"
            data-scroll-behavior="smooth"
        >
            <body className={`flex flex-col min-h-dvh ${nunito.className}`}>
                <Header />
                <main className="flex-1 text-amber-50 lg:p-16 p-8 grid place-items-center">
                    <>
                        <ScrollToTopBtn />
                        {children}
                    </>
                </main>
                <Footer />
            </body>
        </html>
    );
}
