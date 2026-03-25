import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="flex md:flex-row flex-col justify-between gap-5 items-center px-8 py-4 bg-amber-100 shadow sticky top-0">
            <Logo />
            <NavBar />
        </header>
    );
}
