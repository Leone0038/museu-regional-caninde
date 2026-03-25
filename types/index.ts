import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
    imagePath: string;
    imageIndex: number;
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>;
}