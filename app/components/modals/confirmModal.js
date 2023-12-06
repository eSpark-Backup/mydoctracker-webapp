"use Client";

import { Modal } from "antd";
import Image from "next/image";
import React from "react";

const ConfirmModal = ({
  showModal,
  handleOk,
  handleCancel,
  isModalOpen,
  cancelButton,
  confirmButton,
  description,
  icon,
  acceptButtonColor,
  width
}) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={false}
        width={width}
      >
        <div className="h-48 flex justify-center items-center flex-col gap-7">
          <Image src={`/icons/${icon}`} alt="Cancel" width={40} height={40} />
          <h3 className="w-2/3 text-center">{description}</h3>
          <div className="gap-4 flex">
            <button onClick={handleCancel} className="border-2 border-primary text-primary  h-8 w-24 rounded-2xl">{cancelButton}</button>
            <button className={`${acceptButtonColor} h-8 text-white rounded-2xl w-24`}>{confirmButton}</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
