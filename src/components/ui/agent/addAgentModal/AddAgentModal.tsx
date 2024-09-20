import React from 'react';
import {Modal, Typography} from "antd";

import stylesAgent from "../agent.module.scss"
import AddAgentForm from "../addAgentForm/AddAgentForm";


interface AddAgentModalProps {
    isModalOpen: boolean;
    changeIsModalOpen: Function
}

const AddAgentModal: React.FC<AddAgentModalProps> = ({isModalOpen, changeIsModalOpen}) => {

    const handleOk = () => {
        changeIsModalOpen(false);
    };

    const handleCancel = () => {
        changeIsModalOpen(false);
    };

    return (
        <Modal
            open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={1010}
        >
            <div className={stylesAgent.modal}>
                <Typography.Title level={2} className={stylesAgent.title}>აგენტის დამატება</Typography.Title>
                <AddAgentForm closeModal={handleCancel}/>
            </div>
        </Modal>
    );
};

export default AddAgentModal;