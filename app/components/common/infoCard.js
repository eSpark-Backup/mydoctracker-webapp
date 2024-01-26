"use client"
import React, { useState } from 'react'
import DocButton from './docButton'
import Image from 'next/image'
import Link from 'next/link'
import InputModal from './InputModal'
import { useSelector } from 'react-redux'
import CopyUrlForm from '../Forms/copyUrlForm'

const InfoCard = ({ length, icon, title, description, index, buttonTitle, buttonLink }) => {

    const { role }= useSelector((state=>state.auth))
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={`${length > 2 ? "xl:w-4/12" : "xl:w-6/12"}   ${index === 0 ? "md:border-l-0" : "md:border-l-2"} ${index === length - 1 ? "border-b-0" : "border-b-2"} md:border-b-0  w-full flex flex-col items-center xl:px-3  px-0 py-6`}>
            <div className='w-[90%] '>
                <div className='pb-4'>
                    <div className='flex gap-2 items-center h-[60px]'>
                        <div>
                            <Image className='w-[44px]' src={`/icons/${icon}`} width={50} height={50} alt='Icon' />
                        </div>
                        <div>
                            <p className='text-[#0A2431] font-semibold md:text-xl text-sm'>{title}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#666666] py-3 h-[120px]'>{description}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2'>
                    {
                        title === "Document" &&
                        <Link className='no-underline text-primary' href="/dashboard/devices/user/view-doc">
                            <DocButton text={"View Document"} className={"text-sm w-full bg-transparent border-2 border-primary text-primary font-semibold"} />
                        </Link>
                    }

                    <Link className='no-underline text-primary' href={buttonLink ? buttonLink : role === "employee" ? "/dashboard/devices/user/share-location" :  "/dashboard/devices/user"}>
                        <DocButton text={role === "employee" && buttonTitle === "Create Link" ? "Manage Location" : buttonTitle} onClick={role !== "employee" && buttonTitle === "Create Link" ? () => setIsModalOpen(true) : null} className={"text-sm w-full bg-transparent border-2 border-primary text-primary font-semibold"} />
                    </Link>
                </div>
                <InputModal
                    isModalOpen={isModalOpen}
                    handleOk={handleOk}
                    width={360}
                    handleCancel={handleCancel} >
                    <CopyUrlForm handleCancel={handleCancel} />
                </InputModal>
            </div>
        </div>
    )
}

export default InfoCard