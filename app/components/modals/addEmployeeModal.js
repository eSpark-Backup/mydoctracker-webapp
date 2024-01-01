"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Modal } from 'antd'
import { DocButton } from '@/app/components'

const AddEmployeeModal = ({ showModal, onCancel, onSuccess }) => {
  const [ type, setType ] = useState('Subsidiary')
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
          <div onClick={() => setType("Subsidiary")} className={`${type === "Subsidiary" ? 'border-[#FCBF4A]' : 'border-[#E4E4E4]'} relative border-[#E4E4E4] border-[1px] rounded-lg w-[100%] flex flex-row items-center justify-between`}>
            <div className='p-4 font-semibold text-md text-primary'>Add Subsidiary</div>
            <div style={type === "Subsidiary" ? {borderTop: "57px solid transparent", borderLeft: "65px solid #fff"} : {}} className='rounded-lg bg-[#FCBF4A]'></div>
            <Image className='absolute top-2 right-2' src='/icons/check.svg' width={15} height={15} alt='check' />
          </div>
          <div onClick={() => setType("Employee")} className={`${type === "Employee" ? 'border-[#FCBF4A]' : 'border-[#E4E4E4]'} relative border-[#E4E4E4] border-[1px] rounded-lg w-[100%] flex flex-row items-center justify-between`}>
            <div className='p-4 font-semibold text-md text-primary'>Add Employee</div>
            <div style={type === "Employee" ? {borderTop: "57px solid transparent", borderLeft: "65px solid #fff"} : {}} className='rounded-lg bg-[#FCBF4A]'></div>
            <Image className='absolute top-2 right-2' src='/icons/check.svg' width={15} height={15} alt='check' />
          </div>
          <div className="gap-4 flex items-center justify-center w-[100%]">
            <DocButton onClick={onCancel} className="border-2 border-secondary text-secondary bg-transparent h-8 w-40 rounded-2xl" text={"Close"} />
            <DocButton onClick={() => onSuccess(type)} className="bg-transparent border-2 border-primary text-primary  h-8 w-40 rounded-2xl" suffix={<Image className="mr-2" src={"/icons/rightArrowOutline.svg"} width={8} height={8} alt="arrow" />} text="Next" />
          </div>
        </div>
      </Modal>
      </>
  )
}

export default AddEmployeeModal