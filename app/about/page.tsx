export default function AboutPage() {
    return (
        <section className="flex-1 flex justify-center items-center bg-[url(/images/about-page-portrait.webp)] md:bg-[url(/images/about-page-landscape.webp)] bg-center bg-cover bg-fixed text-amber-50">
            <div className="flex flex-col gap-16 p-10">
                <p className="p-8 text-xl shadow bg-gray-950/80 rounded-2xl">
                    <strong>Legado de Fé:</strong> Fundado em 1973, abriga mais
                    de 5.000 peças doadas por romeiros, representando um espaço
                    simbólico para o turismo de romaria.
                </p>

                <p className="p-8 text-xl shadow bg-gray-950/80 rounded-2xl">
                    <strong>Patrimônio Cultural:</strong> Conserva objetos,
                    documentos e informações que ilustram a trajetória e a
                    identidade do povo da região.
                </p>
                <p className="p-8 text-xl shadow bg-gray-950/80 rounded-2xl">
                    <strong>Âncora do Turismo:</strong> Concentra informações
                    culturais valiosas, sendo um atrativo fundamental para
                    visitantes que desejam conhecer a vida da cidade.
                </p>
            </div>
        </section>
    );
}
