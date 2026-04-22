import InfoCard from "@/components/InfoCard";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 sm:text-xl text-lg leading-normal">
            <InfoCard>
                <p>
                    O Zoológico de Canindé, formalmente conhecido como Zoológico
                    São Francisco, é um importante centro de conservação da
                    fauna e educação ambiental situado no sertão do Ceará.
                    Fundado a partir de uma história singular de fé e devoção a
                    São Francisco de Assis, o espaço evoluiu de um local de
                    acolhimento de animais oferecidos por romeiros para um
                    santuário profissional. Hoje, a instituição prioriza o
                    bem-estar de animais resgatados do tráfico e de maus-tratos,
                    abrigando espécies imponentes como grandes felinos, primatas
                    e diversas aves nativas da Caatinga.
                </p>
            </InfoCard>

            <InfoCard>
                <p>
                    Além de sua função como refúgio, o zoológico é um dos
                    pilares do turismo regional e do engajamento comunitário.
                    Ele oferece aos visitantes a oportunidade de se conectar com
                    a natureza por meio de trilhas educativas e recintos que
                    destacam a importância da biodiversidade e a preservação dos
                    ecossistemas brasileiros. Ao aproximar o público da vida
                    selvagem, o parque fomenta uma cultura de respeito e
                    responsabilidade ambiental tanto entre os romeiros quanto
                    entre os moradores locais, consolidando-se como um dos
                    parques biológicos mais relevantes do Nordeste.
                </p>
            </InfoCard>
            <InfoCard>
                <p>
                    A instituição busca constantemente modernizar suas práticas,
                    focando em pesquisa e no aprimoramento contínuo de seus
                    recintos e serviços veterinários. Como participante ativo de
                    esforços de conservação, o Zoológico de Canindé permanece
                    comprometido com a missão de proteger a vida em todas as
                    suas formas. Seja por meio de seus projetos educativos ou do
                    manejo dedicado da fauna, o zoológico permanece como um
                    símbolo vivo do vínculo duradouro entre a comunidade de
                    Canindé e o patrimônio natural da região.
                </p>
            </InfoCard>
        </div>
    );
}
