"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();
    const redirectToHome = () => {
        router.push("/");
    };
    return (
        <Image
            src={"icon.svg"}
            alt="Logo do museu regional de canindé"
            priority
            width={75}
            height={75}
            onClick={redirectToHome}
            className="cursor-pointer"
        />
    );
}
