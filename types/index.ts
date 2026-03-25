import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
    imagePath: string;
    imageIndex: number;
    
    setShowModal: Dispatch<SetStateAction<boolean>>;
}