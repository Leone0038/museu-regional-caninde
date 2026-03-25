import Logo from "./Logo";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center shadow p-2 bg-gray-300 text-center">
            <Logo />
            <p>{currentYear} · Museu Regional de Canindé</p>
        </footer>
    );
}
