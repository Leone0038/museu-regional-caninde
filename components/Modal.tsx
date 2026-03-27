import { ModalProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Modal({
    imageIndex,
    imagePath,
    setShowModal,
}: ModalProps) {
    const [isAnimate, setIsAnimate] = useState(false);

    useEffect(() => {
        const anim = () => {
            setIsAnimate(true);
        };
        anim();
    }, []);

    const handleClose = () => {
        setIsAnimate(false);
        setTimeout(() => setShowModal(false), 300);
    };
    
    return (
        <section
            className={`fixed z-50 p-5 inset-0 grid place-items-center backdrop-blur-sm bg-slate-900/40 transition-opacity duration-300 ease-in-out opacity-${isAnimate ? 100 : 0}`}
             onClick={handleClose}
        >
            <div
                className={`relative flex flex-col transition-all duration-300 ease-out transform ${isAnimate ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
            >
                <Image
                    src={imagePath}
                    alt={`Foto do interior do museu ${imageIndex + 1}`}
                    width={1450}
                    height={200}
                    className="object-cover rounded-lg shadow-2xl"
                    
                />
            </div>
        </section>
    );
}
