import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acervo - Museu Regional de Canindé",
};

export default function GalleryPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="bg-[url(/images/gallery-page-portrait.webp)] md:bg-[url(/images/gallery-page-landscape.webp)] bg-center bg-cover bg-fixed border fixed inset-0 -z-10"></div>
            {children}
        </>
    );
}
