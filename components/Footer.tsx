import Logo from "./Logo";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="flex items-center justify-center shadow px-10 py-5 bg-gray-300 text-center">
            <Logo />
            <p>{currentYear} Museu Regional de Canindé</p>
        </footer>
    );
}
