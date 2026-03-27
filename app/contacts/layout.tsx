import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contate-nos - Museu Regional de Canindé",
};

export default function ContactsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="bg-[url(/images/contacts-page-portrait.webp)] md:bg-[url(/images/contacts-page-landscape.webp)] bg-center bg-cover bg-fixed fixed inset-0 -z-10"></div>
            {children}
        </>
    );
}
