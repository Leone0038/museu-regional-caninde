import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre - Museu Regional de Canindé",
};

export default function AboutPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
