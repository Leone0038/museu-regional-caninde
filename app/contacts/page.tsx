import InfoCard from "@/components/InfoCard";

export default function ContactsPage() {
    return (
        <main className="flex-1">
            <section className="flex flex-col gap-8 text-center font-bold">
                <InfoCard>
                    <p>Terça à Domingo das 8h às 16:30h</p>
                </InfoCard>
                <InfoCard>
                    <p>Entrada promocional: R$ 15,00</p>
                </InfoCard>
                <InfoCard>
                    <p>WhatsApp: 85 99294-5426</p>
                </InfoCard>
            </section>
        </main>
    );
}
