import { ModalProps } from "@/types";
import Image from "next/image";

export default function Modal({
    imageIndex,
    imagePath,
    setShowModal,
}: ModalProps) {
    return (
        <section className="fixed z-50 p-10 inset-0 grid place-items-center backdrop-blur-sm bg-slate-300/10">
            <div className="relative flex flex-col">
                <Image
                    src={imagePath}
                    alt={`Foto do interior do museu ${imageIndex + 1}`}
                    width={1300}
                    height={200}
                    className="object-cover rounded-lg shadow-2xl aspect-auto"
                />
                <Image
                    src={"/icons/close.svg"}
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
