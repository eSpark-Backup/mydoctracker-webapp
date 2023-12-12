"use client"

import { DocButton, FieldView, NavigatorHeader } from '@/app/components'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import ConfirmModal from '@/app/components/modals/confirmModal'

const ViewDoc = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const { role, roleType } = useSelector(state=>state.auth)

    const handlePermission = () => {
        ///permission api logic
        setIsModalOpen(false)
    }

    return (
        <>
        <NavigatorHeader previousPage={["Dashboard"]} currentPage="Document View" />
        <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 flex-col pb-5">
            <div className='flex justify-between items-center border-greyBorder lg:border-b-0 border-b-2 py-4 lg:px-0 px-4'>
                <div>
                    <h6 className='text-black font-semibold text-lg sm:text-xl'>Document</h6>
                </div>

                <div>
                    <Link href={(role === "employee" && roleType === "default") ? "" : "/dashboard/devices/user/edit-doc"}>
                    <DocButton onClick={(role === "employee" && roleType === "default") ? () => setIsModalOpen(true) : null} prefix={<Image src="/icons/editPencil.svg" width={18} height={18} className='mr-2 edit-doc-btn' alt='edit' />} text={"Edit"} className={"text-sm font-bold bg-secondary border-primary text-primary h-[30px]"} />
                    </Link>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row  gap-5 py-3 lg:px-0 px-3'>

                <div className='lg:w-[35%] mx-2'>
                    <div className='flex flex-col gap-4'>
                        <div className=" flex flex-col">
                            <label className="text-greydark text-sm pb-1">Title:</label>
                            <FieldView text={"My Note Book"} />
                        </div>
                        <div className=" flex flex-col">
                            <label className="text-greydark text-sm pb-1">Location:</label>
                            <FieldView text={"Under the bed"} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-greydark text-sm pb-1">Date:</label>
                            <FieldView text={"3/10/2022"} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-greydark text-sm pb-1">Time Of Creation </label>
                            <FieldView text={"1:30 PM"} />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[65%]'>
                    <div className='flex justify-center'>
                        <Image src="/Images/docImage.svg" className='lg:w-[70%] w-[80%]' alt='Document Image' width={500} height={500} />
                    </div>
                </div>

            </div>
            <ConfirmModal
                isModalOpen={isModalOpen}
                handleOk={handlePermission}
                handleCancel={()=>setIsModalOpen(false)}
                cancelButton="Cancel"
                confirmButton="Send"
                description="To edit the document you will required the permission from the admin"
                icon={"locationReqModal.svg"}
                width={450}
                acceptButtonColor={"bg-primary"}
            />


        </div>
        </>
    )
}

export default ViewDoc