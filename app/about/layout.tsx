import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre - Museu Regional de Canindé",
};

export default function AboutPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="bg-[url(/images/about-page-portrait.webp)] md:bg-[url(/images/about-page-landscape.webp)] bg-center bg-cover bg-fixed fixed inset-0 -z-10"></div>
            {children}
        </>
    );
}
