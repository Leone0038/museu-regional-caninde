"use client";

import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";

const carouselImagesPaths = Array.from(
    { length: 10 },
    (_, i) => `/images/carousel/carousel-${i + 1}.webp`,
);

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
        <>
            <div className="rounded-lg shadow-xl shadow-neutral-900 w-full max-w-200 md:aspect-video aspect-square relative overflow-hidden">
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
                                alt={`Foto no interior do museu #${i + 1}`}
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
                        <button
                            type="button"
                            onClick={previousImage}
                            className="pointer-events-auto transition-transform duration-300 hover:scale-110"
                        >
                            <Image
                                alt="Prev"
                                src={leftArrow}
                                width={75}
                                height={75}
                                className="cursor-pointer"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={nextImage}
                            className="pointer-events-auto transition-transform duration-300 hover:scale-110"
                        >
                            <Image
                                alt="Next"
                                src={rightArrow}
                                width={75}
                                height={75}
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
                    showModal={showModal}
                />
            )}
        </>
    );
}
