import Image from "next/image";
import museumLogo from "@/assets/museum-logo.webp";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                src={museumLogo}
                alt="Logo do museu regional de canindé"
                priority
                width={75}
                height={75}
                className="cursor-pointer"
            />
        </Link>
    );
}
