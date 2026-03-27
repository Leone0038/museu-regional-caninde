import Logo from "./Logo";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-2 bg-mist-100/90 text-center">
            <Logo />
            <p>Museu Regional de Canindé - {currentYear}</p>
        </footer>
    );
}
