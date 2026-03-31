export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 sm:text-xl text-lg leading-normal">
            <p className="p-8 shadow bg-gray-950/80 rounded-2xl">
                <strong>Legado de Fé:</strong> Fundado em 1973, abriga mais de
                5.000 peças doadas por romeiros, representando um espaço
                simbólico para o turismo de romaria.
            </p>

            <p className="p-8 shadow bg-gray-950/80 rounded-2xl">
                <strong>Patrimônio Cultural:</strong> Conserva objetos,
                documentos e informações que ilustram a trajetória e a
                identidade do povo da região.
            </p>
            <p className="p-8 shadow bg-gray-950/80 rounded-2xl">
                <strong>Âncora do Turismo:</strong> Concentra informações
                culturais valiosas, sendo um atrativo fundamental para
                visitantes que desejam conhecer a vida da cidade.
            </p>
        </div>
    );
}