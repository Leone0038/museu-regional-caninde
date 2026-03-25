import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/sobre",
                destination: "/about",
            },
            {
                source: "/noticias",
                destination: "/news",
            },
            {
                source: "/contatos",
                destination: "/contacts",
            },
            {
                source: "/acervo",
                destination: "/gallery",
            },
        ];
    },
};

export default nextConfig;
