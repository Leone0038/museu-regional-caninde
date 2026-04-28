import Image from "next/image";
import museumLogo from "@/assets/museum-logo.webp";
import Link from "next/link";
import { LogoProps } from "@/types";

export default function Logo({height, priority,width}: LogoProps) {
    return (
        <Link href={"/"}>
            <Image
                src={museumLogo}
                alt="Logo do Museu Regional de Canindé"
                priority={priority || false}
                width={width}
                height={height}
                className="cursor-pointer"
            />
        </Link>
    );
}
