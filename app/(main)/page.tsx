export default function HomePage() {
    return (
        <section className="flex-1 grid place-items-center">
            <div className="flex flex-col gap-10 md:w-2/4 w-9/10">
                <video
                    src="/videos/museum-video.webm"
                    playsInline
                    autoPlay
                    loop
                    muted
                    controls
                    className="rounded-lg shadow-xl shadow-neutral-900"
                    preload="metadata"
                    poster="/images/museum-video-poster.webp"
                ></video>
                <div className="p-6 shadow bg-gray-950/80 rounded-2xl leading-normal">
                    <h1 className="xl:text-4xl text-2xl font-bold pb-2">
                        Museu de Canindé:
                    </h1>
                    <h1 className="xl:text-4xl text-2xl font-bold pb-4">
                        A Renascença de um Legado
                    </h1>
                    <h2 className="xl:text-2xl sm:text-xl text-lg">
                        Um plano estratégico para garantir a sustentabilidade e relevância de um patrimônio de fé e memória.
                    </h2>
                </div>
            </div>
        </section>
    );
}
