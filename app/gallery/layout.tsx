import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acervo - Museu Regional de Canindé",
};

export default function GalleryPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
