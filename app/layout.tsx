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
            <body className="min-h-full flex flex-col text-shadow-lg shadow-black bg-[url(/images/home-page-portrait.webp)] md:bg-[url(/images/home-page-landscape.webp)] bg-center bg-cover bg-fixed">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
