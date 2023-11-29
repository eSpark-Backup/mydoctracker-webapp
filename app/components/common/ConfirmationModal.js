import { Button, Modal } from "antd";
import Image from "next/image";
import React from "react";

const ConfirmationModal = ({
  showModal,
  handleOk,
  handleCancel,
  isModalOpen,
  cancelButton,
  confirmButton,
  description,
  icon,
  acceptButtonColor
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
      >
        <div className="h-48 flex justify-center items-center flex-col gap-7">
            <Image src={`/icons/${icon}`} alt="Cancel" width={40} height={40}/>
            <h3>{description}</h3>
            <div className="gap-4 flex">
                <button onClick={handleCancel} className="border-2 border-primary text-primary  h-8 w-24 rounded-2xl">{cancelButton}</button>
                <button className={`bg-[${acceptButtonColor}] h-8 text-white rounded-2xl w-24`}>{confirmButton}</button>
                {/* <button className="bg-[#F00] h-8 text-white rounded-2xl w-24">{confirmButton}</button> */}
            </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
