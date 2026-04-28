import InfoCard from "@/components/InfoCard";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 sm:text-xl text-lg leading-normal">
            <InfoCard>
                <p>
                    <strong>Legado de Fé</strong>: Fundado em 1973, abriga mais de 5.000 peças doadas por romeiros.
                </p>
            </InfoCard>

            <InfoCard>
                <p>
                    <strong>Patrimônio Cultural</strong>: Conserva objetos e documentos que ilustram a identidade do povo da região.
                </p>
            </InfoCard>
            <InfoCard>
                <p>
                 <strong>Âncora do Turismo</strong>: Atua como um atrativo fundamental para visitantes.
                </p>
            </InfoCard>
        </div>
    );
}
