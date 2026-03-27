import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notícias - Museu Regional de Canindé",
};

export default function NewsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
