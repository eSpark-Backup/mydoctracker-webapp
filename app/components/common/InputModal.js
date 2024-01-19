"use client"
import { Modal } from 'antd'
import React from 'react'
import DocInput from './docInput'
import DocButton from './docButton'
import Image from 'next/image'

const InputModal = ({
    showModal,
    handleOk,
    handleCancel,
    isModalOpen,
    inputs,
    children, 
    width
}) => {
    return (
        <div>
            <>
                <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okButtonProps={{ style: { display: "none" } }}
                    cancelButtonProps={{ style: { display: "none" } }}
                    closable={false}
                    width={width}
                    centered={true}     
                >
                    {children}
                </Modal>
            </>
        </div>
    )
}

export default InputModal
