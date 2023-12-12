"use client"
import React, { useState } from 'react'
import DocButton from './docButton'
import Image from 'next/image'
import Link from 'next/link'
import InputModal from './InputModal'
import { useSelector } from 'react-redux'
import CopyUrlForm from '../Forms/copyUrlForm'

const InfoCard = ({ icon, title, description, mdwidth, leftBorder, buttonTitle, buttonLink }) => {

    const { role }= useSelector((state=>state.auth))
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={`xl:w-4/12 ${mdwidth} ${leftBorder && "xl:border-l-2 border-b-2"} md:border-b-0  w-full flex flex-col items-center xl:px-3  px-0 py-6`}>
            <div className='w-4/6 '>
                <div className='pb-4'>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <Image className='w-[44px]' src={`/icons/${icon}`} width={50} height={50} alt='Icon' />
                        </div>
                        <div>
                            <p className='text-black font-semibold md:text-xl text-sm'>{title}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-grey py-3'>{description}</p>
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
                        <DocButton text={buttonTitle} onClick={role !== "employee" && buttonTitle === "Create Link" ? () => setIsModalOpen(true) : null} className={"text-sm w-full bg-transparent border-2 border-primary text-primary font-semibold"} />
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