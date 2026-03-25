import Carousel from "@/components/Carousel";

export default function GalleryPage() {
    return (
        <>
            <Carousel />
            <div className="fixed inset-0 -z-10 bg-[url(/images/home-page-portrait.webp)] md:bg-[url(/images/home-page-landscape.webp)] bg-center bg-cover bg-fixed"></div>
        </>
    );
}
