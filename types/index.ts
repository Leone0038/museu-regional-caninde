import React, { Dispatch, SetStateAction } from "react";

export interface ModalProps {
    imagePath: string;
    imageIndex: number;
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface LogoProps {
    priority?: boolean;
    width: number
    height: number
}

export interface InfoCardProps {
    children: React.ReactNode
}