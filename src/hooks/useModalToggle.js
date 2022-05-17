import { useState } from "react";

export const useModalToggle = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return {isModalOpen, toggleModal};
};