import React from 'react'
import Image from 'next/image'
import { Modal } from 'antd'
import { DocButton, DocInput } from '@/app/components'

const AddFieldModal = ({ showModal, onCancel, onSuccess, form, handleModalForm }) => {
  return (
    <>
    <Modal
        open={showModal}
        onOk={onSuccess}
        onCancel={onCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={false}
    >
        <div className="h-100 p-10 flex justify-center items-center flex-col gap-7">
          <h3 className="w-2/3 text-2xl text-center font-semibold">Add Field</h3>
          <div className='w-[100%]'>
                <div className='flex flex-col'>
                    <label className="text-greydark text-sm mb-1 inline-block">Heading</label>
                    <DocInput value={form.label} onChange={(value) => handleModalForm('label', value)} type="text" placeholder="Type here..." className={"h-[40px]"} />
                </div>
                <div className='flex flex-col mt-5'>
                    <label className="text-greydark text-sm mb-1 inline-block">Input</label>
                    <DocInput value={form.value} onChange={(value) => handleModalForm('value', value)} type="text"  placeholder="Type here..." className={"h-[40px]"} />
                </div>
            </div>
          <div className="gap-4 flex items-center justify-center w-[100%]">
            <DocButton onClick={onCancel} className="border-2 border-secondary text-secondary bg-transparent h-8 w-40 rounded-2xl" text={"Close"} />
            <DocButton onClick={() => onSuccess(showModal)} className="bg-transparent border-2 border-primary text-primary  h-8 w-40 rounded-2xl" suffix={<Image className="mr-2" src={"/icons/rightArrowOutline.svg"} width={8} height={8} alt="arrow" />} text="Next" />
          </div>
        </div>
      </Modal>
      </>
  )
}

export default AddFieldModal