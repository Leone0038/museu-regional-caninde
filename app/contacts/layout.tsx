import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contate-nos - Museu Regional de Canindé",
};

export default function ContactsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
