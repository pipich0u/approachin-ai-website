import React, { useState } from 'react';
import { Button, Modal } from 'antd';


interface ModalComponentProps {
    isModalOpen: boolean;
    showModal: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    isEditMode: boolean;
}


const ModalComponent = ({isModalOpen, showModal, handleOk, handleCancel, isEditMode}:ModalComponentProps) => {

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                title={isEditMode ? '编辑备注' : '详细信息'}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {isEditMode ? (
                    <div>
                        {/* 编辑模式内容 */}
                        <p>这里是编辑备注的内容...</p>
                    </div>
                ) : (
                    <div>
                        {/* 查看模式内容 */}
                        <p>这里是详细信息的内容...</p>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default ModalComponent;