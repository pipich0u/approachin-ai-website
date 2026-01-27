import React, { useState } from 'react';

export const useTable = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };




    return {
        isEditMode,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
        setIsEditMode,
    }
}