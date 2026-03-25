"use client";

import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";

const carouselImagesPaths = [
    "/images/carousel/carousel-1.webp",
    "/images/carousel/carousel-2.webp",
    "/images/carousel/carousel-3.webp",
    "/images/carousel/carousel-4.webp",
    "/images/carousel/carousel-5.webp",
    "/images/carousel/carousel-6.webp",
    "/images/carousel/carousel-7.webp",
    "/images/carousel/carousel-8.webp",
    "/images/carousel/carousel-9.webp",
    "/images/carousel/carousel-10.webp",
];

export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev + 1 === carouselImagesPaths.length ? 0 : prev + 1,
        );
    };
    const previousImage = () => {
        setCurrentImageIndex((prev) =>
            prev - 1 < 0 ? carouselImagesPaths.length - 1 : prev - 1,
        );
    };

    const openModal = () => {
        setShowModal(true);
    };
    return (
        <section className="flex-1 p-16 grid place-items-center">
            <div className="rounded-lg shadow w-full max-w-200 md:aspect-video aspect-square relative overflow-hidden">
                <div
                    className="flex w-full h-full transition duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}% )`,
                    }}
                >
                    {carouselImagesPaths.map((path, i) => (
                        <div
                            className="w-full h-full shrink-0 relative"
                            key={i}
                        >
                            <Image
                                alt={`Foto do interior do museu ${i + 1}`}
                                src={path}
                                fill
                                priority={i === 0}
                                className="object-cover cursor-zoom-in"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                                onClick={openModal}
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="flex justify-between gap-20 w-full p-1">
                        <button type="button" className="pointer-events-auto transition-transform duration-300 hover:scale-110">
                            <Image
                                alt="Prev"
                                src={leftArrow}
                                width={75}
                                height={75}
                                onClick={previousImage}
                                className="cursor-pointer"
                            />
                        </button>
                        <button type="button" className="pointer-events-auto transition-transform duration-300 hover:scale-110">
                            <Image
                                alt="Next"
                                src={rightArrow}
                                width={75}
                                height={75}
                                onClick={nextImage}
                                className="cursor-pointer"
                            />
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    imageIndex={currentImageIndex}
                    imagePath={carouselImagesPaths[currentImageIndex]}
                    setShowModal={setShowModal}
                />
            )}
        </section>
    );
}
