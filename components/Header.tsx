import { fredoka } from "@/app/layout";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header
            className={`flex sm:flex-row flex-col justify-between gap-5 items-center px-8 py-2 bg-primary shadow shadow-neutral-600 ${
                fredoka.className
            }`}
        >
            <Logo width={75} height={75} priority={true} />
            <NavBar />
        </header>
    );
}
