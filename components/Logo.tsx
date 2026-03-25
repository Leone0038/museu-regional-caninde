"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import museumLogo from '@/assets/museum-logo.webp'

export default function Logo() {
    const router = useRouter();
    const redirectToHome = () => {
        router.push("/");
    };
    return (
        <Image
            src={museumLogo}
            alt="Logo do museu regional de canindé"
            priority
            width={75}
            height={75}
            onClick={redirectToHome}
            className="cursor-pointer"
        />
    );
}
