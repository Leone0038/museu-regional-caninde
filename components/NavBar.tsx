import Link from "next/link";

const links = [
    { href: "/sobre", label: "Sobre" },
    { href: "/contatos", label: "Contate-nos" },
    { href: "/acervo", label: "Acervo" },
];

export default function NavBar() {
    return (
        <nav className="flex gap-8 flex-wrap justify-center">
            {links.map(({ href, label }, i) => (
                <Link
                    className="text-shadow-lg shadow-black"
                    href={href}
                    key={i}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}
