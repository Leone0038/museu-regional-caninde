import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notícias - Museu Regional de Canindé",
};

export default function NewsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <div className="bg-[url(/images/home-page-portrait.webp)] md:bg-[url(/images/home-page-landscape.webp)] bg-center bg-cover bg-fixed fixed inset-0 -z-10"></div>
        </>
    );
}
