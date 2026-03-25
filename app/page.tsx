export default function HomePage() {
    return (
        <section className="flex-1 flex flex-col justify-center items-center bg-[url(/images/home-page-portrait.webp)] md:bg-[url(/images/home-page-landscape.webp)] bg-center bg-cover bg-fixed text-amber-50 lg:p-16 p-4">
            <div className="p-6 flex flex-col gap-10 md:w-2/4 w-9/10">
                <video
                    src="/museum-video.webm"
                    playsInline
                    autoPlay
                    loop
                    muted
                    controls
                    className="rounded-lg shadow"
                ></video>
                <div className="p-8 shadow bg-gray-950/80 rounded-2xl">
                    <h1 className="xl:text-4xl sm:text-2xl text-xl font-bold">
                        Museu de Canindé:
                    </h1>
                    <h1 className="xl:text-4xl sm:text-2xl text-xl font-bold pb-4">
                        A Renascença de um Legado
                    </h1>
                    <h2 className="xl:text-2xl sm:text-xl text-lg">
                        Um plano estratégico para garantir a sustentabilidade e
                        relevância de um patrimônio de fé e memória.
                    </h2>
                </div>
            </div>
        </section>
    );
}
