import InfoCard from "@/components/InfoCard";

export default function ContactsPage() {
    return (
        <main className="flex-1">
            <section className="flex flex-col gap-8 text-center font-bold">
                <InfoCard>
                    <p>(63) 93633-4186</p>
                </InfoCard>
                <InfoCard>
                    <p>(88) 2586-7765</p>
                </InfoCard>
                <InfoCard>
                    <p>(63) 92283-3244</p>
                </InfoCard>
            </section>
        </main>
    );
}
