import { ModalProps } from "@/types";
import Image from "next/image";
import closeSvg from '@/assets/close.svg'

export default function Modal({
    imageIndex,
    imagePath,
    setShowModal,
}: ModalProps) {
    return (
        <section className="fixed z-50 p-5 inset-0 grid place-items-center backdrop-blur-sm bg-slate-300/10">
            <div className="relative flex flex-col transition-transform duration-500 ease-in-out">
                <Image
                    src={imagePath}
                    alt={`Foto do interior do museu ${imageIndex + 1}`}
                    width={1450}
                    height={200}
                    className="object-cover rounded-lg shadow-2xl aspect-auto"
                />
                <Image
                    src={closeSvg}
                    alt="Close modal button"
                    width={50}
                    height={50}
                    className="absolute self-end cursor-pointer"
                    onClick={() => setShowModal(false)}
                />
            </div>
        </section>
    );
}
