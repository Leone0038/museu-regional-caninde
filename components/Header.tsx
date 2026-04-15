import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="flex sm:flex-row flex-col justify-between gap-5 items-center px-8 py-4 bg-amber-100/90 shadow shadow-neutral-600">
            <Logo />
            <NavBar />
        </header>
    );
}
