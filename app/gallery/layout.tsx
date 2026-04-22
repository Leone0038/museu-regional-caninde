import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acervo - Zoológico de São Francisco - Canindé",
};

export default function GalleryPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="bg-[url(/images/gallery-page-portrait.webp)] md:bg-[url(/images/gallery-page-landscape.webp)] bg-center bg-cover fixed inset-0 -z-10"></div>
            {children}
        </>
    );
}
