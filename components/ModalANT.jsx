import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({dataAPI}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mira un usuario
      </Button>
      <Modal title="Usuario" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{dataAPI?.name.first}</p>
        <p>{dataAPI?.name.last}</p>
      </Modal>
    </>
  );
};
export default ModalANT;