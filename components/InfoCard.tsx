import { InfoCardProps } from "@/types";
import React from "react";

export default function InfoCard({ children }: InfoCardProps) {
    return (
        <article className="p-8 shadow bg-secondary rounded-2xl">
            {children}
        </article>
    );
}
