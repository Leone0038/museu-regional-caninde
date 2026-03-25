import Link from "next/link";

const links = [
    { href: "/about", label: "Sobre" },
    { href: "/contacts", label: "Contate-nos" },
    { href: "/gallery", label: "Acervo" },
    { href: "/news", label: "Notícias" },
];

export default function NavBar() {
    return (
        <nav className="flex gap-8 flex-wrap justify-center">
            {links.map(({ href, label }, i) => (
                <Link href={href} key={i}>{label}</Link>
            ))}
        </nav>
    );
}
