import React from 'react'
import Image from 'next/image'
import { Modal } from 'antd'
import { DocButton, DocInput } from '@/app/components'

const AddSubsidiaryModal = ({ showModal, onCancel, onSuccess }) => {
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
          <h3 className="w-2/3 text-2xl text-center font-semibold">Add Subsidiary</h3>
          <div className='w-[100%]'>
                <div className='flex flex-col'>
                    <label className="text-greydark text-sm mb-1 inline-block">Please enter name of your subsidiary:</label>
                    <DocInput type="text" placeholder="Subsidiary name.." className={"h-[40px]"} />
                </div>
            </div>
          <div className="gap-4 flex items-center justify-center gap-10 w-[100%]">
            <DocButton onClick={onCancel} className="bg-transparent border-2 border-grey text-primary  h-8 w-40 rounded-2xl" text={"Close"} />
            <DocButton onClick={onSuccess} className="bg-transparent border-2 border-primary text-primary  h-8 w-40 rounded-2xl" suffix={<Image className="mr-2" src={"/icons/rightArrowOutline.svg"} width={8} height={8} alt="arrow" />} text="Next" />
          </div>
        </div>
      </Modal>
      </>
  )
}

export default AddSubsidiaryModal