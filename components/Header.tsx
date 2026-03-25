import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="flex md:flex-row flex-col justify-between gap-10 items-center px-10 py-5 bg-amber-100 shadow sticky top-0">
            <Logo />
            <NavBar />
        </header>
    );
}
