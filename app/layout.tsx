import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Museu Regional de Canindé",
    description:
        "O site tem como fim divulgar e digitalizar o acervo regional.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`h-full antialiased`}>
            <body className="flex flex-col min-h-dvh">
                <Header />
                <main className="flex-1 text-amber-50 lg:p-16 p-8 grid place-items-center">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
